"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";
const POSTHOG_ENABLED = Boolean(POSTHOG_KEY);
const SCROLL_DEPTH_MILESTONES = [25, 50, 75, 90] as const;
const TIME_ON_PAGE_MILESTONES = [30, 60, 120] as const;
const RETURN_VISITOR_WINDOW_MS = 30 * 60 * 1000;
const RAGE_CLICK_WINDOW_MS = 1500;
const RAGE_CLICK_DISTANCE_PX = 24;
const RAGE_CLICK_THRESHOLD = 3;
const SESSION_PATHS_STORAGE_KEY = "telemetry_session_paths";
const PROJECT_SLUGS_STORAGE_KEY = "telemetry_project_slugs";

type TelemetryElement = HTMLElement & {
    dataset: DOMStringMap & {
        telemetryContext?: string;
        telemetryDestination?: string;
        telemetryEvent?: string;
        telemetryIgnore?: string;
        telemetryLabel?: string;
        telemetrySection?: string;
        telemetrySectionView?: string;
    };
};

interface ClickSample {
    label: string | null;
    timestamp: number;
    x: number;
    y: number;
}

interface RouteSessionState {
    clickedContact: boolean;
    clickedProject: boolean;
    downloadedResume: boolean;
    maxScrollDepth: number;
    sectionViews: Set<string>;
    startedAt: number;
    timeMilestones: Set<number>;
    comparedProjects: string[];
}

const getPageProperties = () => {
    const params = new URLSearchParams(window.location.search);

    return {
        page_path: window.location.pathname,
        page_search: window.location.search,
        page_url: window.location.href,
        page_referrer: document.referrer || null,
        utm_source: params.get("utm_source"),
        utm_medium: params.get("utm_medium"),
        utm_campaign: params.get("utm_campaign"),
        utm_content: params.get("utm_content"),
        utm_term: params.get("utm_term"),
    };
};

const getAcquisitionSource = (): string => {
    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get("utm_source");

    if (utmSource) {
        return utmSource;
    }

    if (!document.referrer) {
        return "direct";
    }

    try {
        const referrerUrl = new URL(document.referrer);
        return referrerUrl.hostname;
    } catch {
        return "referrer_unknown";
    }
};

const getPageCategory = (pathname: string): string => {
    if (pathname === "/") {
        return "homepage";
    }

    if (pathname.startsWith("/projects/")) {
        return "project_detail";
    }

    if (pathname.startsWith("/awards/")) {
        return "recognition_detail";
    }

    return "content";
};

const getElementDescriptor = (element: Element): string | null => {
    const id = element.id ? `#${element.id}` : "";
    const className = typeof element.className === "string"
        ? element.className.trim().split(/\s+/).slice(0, 3).map((token) => `.${token}`).join("")
        : "";

    const descriptor = `${element.tagName.toLowerCase()}${id}${className}`;
    return descriptor || null;
};

const isDeadClickCandidate = (eventTarget: EventTarget | null): eventTarget is Element => {
    if (!(eventTarget instanceof Element)) {
        return false;
    }

    if (eventTarget.closest("[data-telemetry-ignore='true']")) {
        return false;
    }

    if (eventTarget.closest("a[href], button, [role='button'], input, textarea, select, label, summary, video, audio, iframe")) {
        return false;
    }

    const tagName = eventTarget.tagName.toLowerCase();

    if (["html", "body", "main", "section"].includes(tagName)) {
        return false;
    }

    return true;
};

const getPathContext = (pathname: string) => {
    if (pathname.startsWith("/projects/")) {
        return {
            page_category: "project_detail",
            page_slug: pathname.replace("/projects/", ""),
        };
    }

    if (pathname.startsWith("/awards/")) {
        return {
            page_category: "recognition_detail",
            page_slug: pathname.replace("/awards/", ""),
        };
    }

    return {
        page_category: getPageCategory(pathname),
        page_slug: null,
    };
};

const isSameRoute = (pathname: string, search: string): boolean => {
    const currentSearch = window.location.search.startsWith("?")
        ? window.location.search.slice(1)
        : window.location.search;

    return window.location.pathname === pathname && currentSearch === search;
};

const getTextLabel = (element: TelemetryElement): string | null => {
    const text = element.dataset.telemetryLabel
        ?? element.getAttribute("aria-label")
        ?? element.getAttribute("title")
        ?? element.textContent;

    if (!text) {
        return null;
    }

    const normalized = text.replace(/\s+/g, " ").trim();
    return normalized ? normalized.slice(0, 120) : null;
};

const getDestination = (element: TelemetryElement): string | null => {
    if (element.dataset.telemetryDestination) {
        return element.dataset.telemetryDestination;
    }

    const rawHref = element.getAttribute("href");

    if (!rawHref) {
        return null;
    }

    if (rawHref.startsWith("mailto:")) {
        return "mailto";
    }

    if (rawHref.startsWith("tel:")) {
        return "tel";
    }

    if (rawHref.startsWith("#")) {
        return rawHref;
    }

    try {
        const url = new URL(rawHref, window.location.origin);

        if (url.origin === window.location.origin) {
            return `${url.pathname}${url.search}`;
        }

        return `${url.origin}${url.pathname}`;
    } catch {
        return rawHref;
    }
};

const isExternalDestination = (element: TelemetryElement): boolean => {
    const rawHref = element.getAttribute("href");

    if (!rawHref || rawHref.startsWith("#") || rawHref.startsWith("mailto:") || rawHref.startsWith("tel:")) {
        return false;
    }

    try {
        return new URL(rawHref, window.location.origin).origin !== window.location.origin;
    } catch {
        return false;
    }
};

const getDefaultEventName = (element: TelemetryElement, destination: string | null): string => {
    if (element.dataset.telemetryEvent) {
        return element.dataset.telemetryEvent;
    }

    if (destination === "mailto" || destination === "tel") {
        return "contact_click";
    }

    if (destination?.startsWith("#")) {
        return "anchor_click";
    }

    if (element.tagName === "BUTTON") {
        return "button_click";
    }

    return isExternalDestination(element) ? "outbound_link_click" : "link_click";
};

const getInteractionTarget = (eventTarget: EventTarget | null): TelemetryElement | null => {
    if (!(eventTarget instanceof Element)) {
        return null;
    }

    if (eventTarget.closest("[data-telemetry-ignore='true']")) {
        return null;
    }

    const target = eventTarget.closest<HTMLElement>("[data-telemetry-event], a[href], button, [role='button']");

    if (!target) {
        return null;
    }

    return target as TelemetryElement;
};

export default function TelemetryProvider() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const search = searchParams.toString();
    const initializedRef = useRef(false);
    const lastPageviewRef = useRef<string | null>(null);
    const rageClicksRef = useRef<ClickSample[]>([]);
    const lastRageClickRouteRef = useRef<string | null>(null);
    const routeSessionRef = useRef<RouteSessionState>({
        clickedContact: false,
        clickedProject: false,
        downloadedResume: false,
        maxScrollDepth: 0,
        sectionViews: new Set<string>(),
        startedAt: Date.now(),
        timeMilestones: new Set<number>(),
        comparedProjects: [],
    });
    const lastVisibleSectionRef = useRef<string | null>(null);
    const visibleSectionRatiosRef = useRef<Map<string, number>>(new Map());
    const exitTrackedRouteRef = useRef<string | null>(null);

    useEffect(() => {
        if (!POSTHOG_ENABLED || initializedRef.current) {
            return;
        }

        posthog.init(POSTHOG_KEY!, {
            api_host: POSTHOG_HOST,
            autocapture: false,
            capture_pageview: false,
            capture_pageleave: true,
            disable_surveys: true,
        });

        initializedRef.current = true;
    }, [pathname, search]);

    useEffect(() => {
        if (!POSTHOG_ENABLED) {
            return;
        }

        const currentRoute = search ? `${pathname}?${search}` : pathname;

        if (lastPageviewRef.current === currentRoute) {
            return;
        }

        lastPageviewRef.current = currentRoute;
        rageClicksRef.current = [];
        lastRageClickRouteRef.current = null;
        exitTrackedRouteRef.current = null;
        lastVisibleSectionRef.current = null;
        visibleSectionRatiosRef.current = new Map();
        routeSessionRef.current = {
            clickedContact: false,
            clickedProject: false,
            downloadedResume: false,
            maxScrollDepth: 0,
            sectionViews: new Set<string>(),
            startedAt: Date.now(),
            timeMilestones: new Set<number>(),
            comparedProjects: [],
        };

        posthog.capture("$pageview", {
            ...getPageProperties(),
            ...getPathContext(pathname),
            route_path: pathname,
        });

        if (pathname.startsWith("/projects/")) {
            posthog.capture("project_detail_viewed", {
                ...getPageProperties(),
                ...getPathContext(pathname),
            });
        }

        if (pathname.startsWith("/awards/")) {
            posthog.capture("recognition_detail_viewed", {
                ...getPageProperties(),
                ...getPathContext(pathname),
            });
        }

        try {
            const lastSeenAt = window.localStorage.getItem("telemetry_last_seen_at");
            const now = Date.now();

            if (lastSeenAt) {
                const lastSeenMs = Number(lastSeenAt);

                if (Number.isFinite(lastSeenMs) && now - lastSeenMs > RETURN_VISITOR_WINDOW_MS) {
                    posthog.capture("return_visit", {
                        ...getPageProperties(),
                        ...getPathContext(pathname),
                        seconds_since_last_visit: Math.round((now - lastSeenMs) / 1000),
                    });
                }
            }

            window.localStorage.setItem("telemetry_last_seen_at", String(now));
        } catch {
            // Ignore storage access issues in restricted browsing contexts.
        }

        try {
            const storedPaths = window.sessionStorage.getItem(SESSION_PATHS_STORAGE_KEY);
            const parsedPaths = storedPaths ? JSON.parse(storedPaths) : [];
            const routeHistory = Array.isArray(parsedPaths) ? parsedPaths.filter((value): value is string => typeof value === "string") : [];

            if (routeHistory[routeHistory.length - 1] !== currentRoute) {
                routeHistory.push(currentRoute);
            }

            const trimmedHistory = routeHistory.slice(-10);
            window.sessionStorage.setItem(SESSION_PATHS_STORAGE_KEY, JSON.stringify(trimmedHistory));

            posthog.capture("session_path_summary", {
                ...getPageProperties(),
                ...getPathContext(pathname),
                path_history: trimmedHistory,
                path_depth: trimmedHistory.length,
                previous_path: trimmedHistory.at(-2) ?? null,
                unique_paths: Array.from(new Set(trimmedHistory)).length,
            });
        } catch {
            // Ignore storage access issues in restricted browsing contexts.
        }

        if (pathname.startsWith("/projects/")) {
            try {
                const currentSlug = pathname.replace("/projects/", "");
                const storedSlugs = window.sessionStorage.getItem(PROJECT_SLUGS_STORAGE_KEY);
                const parsedSlugs = storedSlugs ? JSON.parse(storedSlugs) : [];
                const projectSlugs = Array.isArray(parsedSlugs) ? parsedSlugs.filter((value): value is string => typeof value === "string") : [];
                const nextProjectSlugs = Array.from(new Set([...projectSlugs, currentSlug])).slice(-6);

                window.sessionStorage.setItem(PROJECT_SLUGS_STORAGE_KEY, JSON.stringify(nextProjectSlugs));
                routeSessionRef.current.comparedProjects = nextProjectSlugs;

                if (nextProjectSlugs.length >= 2) {
                    posthog.capture("project_comparison_detected", {
                        ...getPageProperties(),
                        ...getPathContext(pathname),
                        compared_project_slugs: nextProjectSlugs,
                        compared_project_count: nextProjectSlugs.length,
                    });
                }
            } catch {
                routeSessionRef.current.comparedProjects = [];
            }
        }
    }, [pathname, search]);

    useEffect(() => {
        if (!POSTHOG_ENABLED) {
            return;
        }

        const completedMilestones = new Set<number>();

        const handleScrollDepth = () => {
            const scrollTop = window.scrollY;
            const viewportHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollableHeight = Math.max(documentHeight - viewportHeight, 1);
            const depthPercent = Math.min(100, Math.round(((scrollTop + viewportHeight) / Math.max(documentHeight, 1)) * 100));
            const relativeDepthPercent = Math.min(100, Math.round((scrollTop / scrollableHeight) * 100));

            routeSessionRef.current.maxScrollDepth = Math.max(routeSessionRef.current.maxScrollDepth, relativeDepthPercent);

            SCROLL_DEPTH_MILESTONES.forEach((milestone) => {
                if (completedMilestones.has(milestone) || relativeDepthPercent < milestone) {
                    return;
                }

                completedMilestones.add(milestone);

                posthog.capture("scroll_depth_reached", {
                    ...getPageProperties(),
                    ...getPathContext(pathname),
                    scroll_depth_percent: milestone,
                    viewport_depth_percent: depthPercent,
                });
            });
        };

        handleScrollDepth();
        window.addEventListener("scroll", handleScrollDepth, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScrollDepth);
        };
    }, [pathname, search]);

    useEffect(() => {
        if (!POSTHOG_ENABLED) {
            return;
        }

        const timers = TIME_ON_PAGE_MILESTONES.map((seconds) => window.setTimeout(() => {
            if (!isSameRoute(pathname, search)) {
                return;
            }

            posthog.capture("time_on_page_reached", {
                ...getPageProperties(),
                ...getPathContext(pathname),
                seconds_on_page: seconds,
            });

            routeSessionRef.current.timeMilestones.add(seconds);
        }, seconds * 1000));

        return () => {
            timers.forEach((timer) => window.clearTimeout(timer));
        };
    }, [pathname, search]);

    useEffect(() => {
        if (!POSTHOG_ENABLED) {
            return;
        }

        const handleClick = (event: MouseEvent) => {
            const target = getInteractionTarget(event.target);

            if (!target) {
                if (isDeadClickCandidate(event.target)) {
                    const deadClickTarget = event.target;

                    posthog.capture("dead_click_detected", {
                        ...getPageProperties(),
                        ...getPathContext(pathname),
                        interaction_label: getTextLabel(deadClickTarget as TelemetryElement),
                        interaction_tag: deadClickTarget.tagName.toLowerCase(),
                        interaction_target: getElementDescriptor(deadClickTarget),
                        click_x: event.clientX,
                        click_y: event.clientY,
                    });
                }

                return;
            }

            const destination = getDestination(target);
            const label = getTextLabel(target);
            const routeKey = search ? `${pathname}?${search}` : pathname;
            const eventName = getDefaultEventName(target, destination);

            posthog.capture(eventName, {
                ...getPageProperties(),
                ...getPathContext(pathname),
                interaction_context: target.dataset.telemetryContext ?? null,
                interaction_destination: destination,
                interaction_label: label,
                interaction_section: target.dataset.telemetrySection ?? null,
                interaction_tag: target.tagName.toLowerCase(),
                is_external: isExternalDestination(target),
            });

            if (eventName === "contact_click" || eventName === "nav_cta_click") {
                routeSessionRef.current.clickedContact = true;
            }

            if (eventName === "project_card_click" || pathname.startsWith("/projects/")) {
                routeSessionRef.current.clickedProject = true;
            }

            if (eventName === "resume_download") {
                routeSessionRef.current.downloadedResume = true;
            }

            const now = Date.now();
            const clickSample: ClickSample = {
                label,
                timestamp: now,
                x: event.clientX,
                y: event.clientY,
            };

            rageClicksRef.current = [...rageClicksRef.current, clickSample].filter((sample) => {
                const withinWindow = now - sample.timestamp <= RAGE_CLICK_WINDOW_MS;
                const sameArea = Math.abs(sample.x - clickSample.x) <= RAGE_CLICK_DISTANCE_PX
                    && Math.abs(sample.y - clickSample.y) <= RAGE_CLICK_DISTANCE_PX;
                const sameLabel = sample.label === clickSample.label;

                return withinWindow && sameArea && sameLabel;
            });

            if (rageClicksRef.current.length >= RAGE_CLICK_THRESHOLD && lastRageClickRouteRef.current !== routeKey) {
                lastRageClickRouteRef.current = routeKey;

                posthog.capture("rage_click_detected", {
                    ...getPageProperties(),
                    ...getPathContext(pathname),
                    interaction_destination: destination,
                    interaction_label: label,
                    interaction_section: target.dataset.telemetrySection ?? null,
                    clicks_in_burst: rageClicksRef.current.length,
                    burst_window_ms: RAGE_CLICK_WINDOW_MS,
                });
            }
        };

        document.addEventListener("click", handleClick, true);

        return () => {
            document.removeEventListener("click", handleClick, true);
        };
    }, [pathname, search]);

    useEffect(() => {
        if (!POSTHOG_ENABLED) {
            return;
        }

        const seenSections = new Set<string>();
        const sections = document.querySelectorAll<HTMLElement>("[data-telemetry-section-view]");

        if (!sections.length) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    const section = entry.target as TelemetryElement;
                    const sectionName = section.dataset.telemetrySectionView;

                    if (!sectionName || seenSections.has(sectionName)) {
                        if (sectionName && entry.intersectionRatio > 0) {
                            visibleSectionRatiosRef.current.set(sectionName, entry.intersectionRatio);
                            lastVisibleSectionRef.current = Array.from(visibleSectionRatiosRef.current.entries())
                                .sort((left, right) => right[1] - left[1])[0]?.[0] ?? lastVisibleSectionRef.current;
                        }

                        return;
                    }

                    seenSections.add(sectionName);
                    routeSessionRef.current.sectionViews.add(sectionName);
                    visibleSectionRatiosRef.current.set(sectionName, entry.intersectionRatio);
                    lastVisibleSectionRef.current = Array.from(visibleSectionRatiosRef.current.entries())
                        .sort((left, right) => right[1] - left[1])[0]?.[0] ?? sectionName;

                    posthog.capture("section_viewed", {
                        ...getPageProperties(),
                        ...getPathContext(pathname),
                        section_name: sectionName,
                    });

                    observer.unobserve(section);
                });

                entries.forEach((entry) => {
                    const sectionName = (entry.target as TelemetryElement).dataset.telemetrySectionView;

                    if (!sectionName) {
                        return;
                    }

                    if (entry.isIntersecting && entry.intersectionRatio > 0) {
                        visibleSectionRatiosRef.current.set(sectionName, entry.intersectionRatio);
                    } else {
                        visibleSectionRatiosRef.current.delete(sectionName);
                    }

                    lastVisibleSectionRef.current = Array.from(visibleSectionRatiosRef.current.entries())
                        .sort((left, right) => right[1] - left[1])[0]?.[0] ?? lastVisibleSectionRef.current;
                });
            },
            { threshold: 0.35 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            observer.disconnect();
        };
    }, [pathname, search]);

    useEffect(() => {
        if (!POSTHOG_ENABLED) {
            return;
        }

        const routeKey = search ? `${pathname}?${search}` : pathname;

        const captureExitSummary = () => {
            if (!isSameRoute(pathname, search) || exitTrackedRouteRef.current === routeKey) {
                return;
            }

            exitTrackedRouteRef.current = routeKey;

            const secondsOnPage = Math.round((Date.now() - routeSessionRef.current.startedAt) / 1000);
            const flags: string[] = [];
            const sourceFlags: string[] = [];
            const acquisitionSource = getAcquisitionSource();

            if (routeSessionRef.current.maxScrollDepth >= 75 || routeSessionRef.current.timeMilestones.has(60)) {
                flags.push("deep_reader");
            }

            if (routeSessionRef.current.clickedProject) {
                flags.push("project_explorer");
            }

            if (routeSessionRef.current.clickedContact) {
                flags.push("contact_intent");
            }

            if (routeSessionRef.current.downloadedResume) {
                flags.push("resume_intent");
            }

            if (secondsOnPage < 20 && routeSessionRef.current.maxScrollDepth < 25 && !routeSessionRef.current.clickedContact && !routeSessionRef.current.clickedProject) {
                flags.push("quick_bounce");
            }

            if (flags.includes("deep_reader") || flags.includes("contact_intent") || flags.includes("resume_intent")) {
                sourceFlags.push("high_quality_source");
            }

            if (flags.includes("quick_bounce")) {
                sourceFlags.push("low_quality_source");
            }

            if (routeSessionRef.current.comparedProjects.length >= 2) {
                sourceFlags.push("comparison_intent");
            }

            if (lastVisibleSectionRef.current) {
                posthog.capture("exit_section", {
                    ...getPageProperties(),
                    ...getPathContext(pathname),
                    section_name: lastVisibleSectionRef.current,
                    seconds_on_page: secondsOnPage,
                    max_scroll_depth: routeSessionRef.current.maxScrollDepth,
                });
            }

            posthog.capture("session_quality_summary", {
                ...getPageProperties(),
                ...getPathContext(pathname),
                session_flags: flags,
                sections_viewed: Array.from(routeSessionRef.current.sectionViews),
                sections_viewed_count: routeSessionRef.current.sectionViews.size,
                seconds_on_page: secondsOnPage,
                max_scroll_depth: routeSessionRef.current.maxScrollDepth,
                time_milestones_reached: Array.from(routeSessionRef.current.timeMilestones),
                clicked_contact: routeSessionRef.current.clickedContact,
                clicked_project: routeSessionRef.current.clickedProject,
                downloaded_resume: routeSessionRef.current.downloadedResume,
                last_visible_section: lastVisibleSectionRef.current,
                compared_project_slugs: routeSessionRef.current.comparedProjects,
                path_history: (() => {
                    try {
                        const storedPaths = window.sessionStorage.getItem(SESSION_PATHS_STORAGE_KEY);
                        const parsedPaths = storedPaths ? JSON.parse(storedPaths) : [];
                        return Array.isArray(parsedPaths) ? parsedPaths.filter((value): value is string => typeof value === "string") : [];
                    } catch {
                        return [];
                    }
                })(),
            });

            posthog.capture("source_quality_summary", {
                ...getPageProperties(),
                ...getPathContext(pathname),
                acquisition_source: acquisitionSource,
                source_quality_flags: sourceFlags,
                session_flags: flags,
                seconds_on_page: secondsOnPage,
                max_scroll_depth: routeSessionRef.current.maxScrollDepth,
                clicked_contact: routeSessionRef.current.clickedContact,
                clicked_project: routeSessionRef.current.clickedProject,
                downloaded_resume: routeSessionRef.current.downloadedResume,
                compared_project_count: routeSessionRef.current.comparedProjects.length,
            });
        };

        const handleVisibilityChange = () => {
            if (document.visibilityState === "hidden") {
                captureExitSummary();
            }
        };

        window.addEventListener("pagehide", captureExitSummary);
        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            captureExitSummary();
            window.removeEventListener("pagehide", captureExitSummary);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, [pathname, search]);

    return null;
}
