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
                return;
            }

            const destination = getDestination(target);
            const label = getTextLabel(target);
            const routeKey = search ? `${pathname}?${search}` : pathname;

            posthog.capture(getDefaultEventName(target, destination), {
                ...getPageProperties(),
                ...getPathContext(pathname),
                interaction_context: target.dataset.telemetryContext ?? null,
                interaction_destination: destination,
                interaction_label: label,
                interaction_section: target.dataset.telemetrySection ?? null,
                interaction_tag: target.tagName.toLowerCase(),
                is_external: isExternalDestination(target),
            });

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
                        return;
                    }

                    seenSections.add(sectionName);

                    posthog.capture("section_viewed", {
                        ...getPageProperties(),
                        ...getPathContext(pathname),
                        section_name: sectionName,
                    });

                    observer.unobserve(section);
                });
            },
            { threshold: 0.35 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            observer.disconnect();
        };
    }, [pathname, search]);

    return null;
}
