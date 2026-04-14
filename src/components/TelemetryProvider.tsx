"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";
const POSTHOG_ENABLED = Boolean(POSTHOG_KEY);

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
    }, []);

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
            route_path: pathname,
        });
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

            posthog.capture(getDefaultEventName(target, destination), {
                ...getPageProperties(),
                interaction_context: target.dataset.telemetryContext ?? null,
                interaction_destination: destination,
                interaction_label: getTextLabel(target),
                interaction_section: target.dataset.telemetrySection ?? null,
                interaction_tag: target.tagName.toLowerCase(),
                is_external: isExternalDestination(target),
            });
        };

        document.addEventListener("click", handleClick, true);

        return () => {
            document.removeEventListener("click", handleClick, true);
        };
    }, []);

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
