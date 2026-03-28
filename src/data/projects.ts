export interface ProjectHighlight {
    value: string;
    label: string;
}

export interface ProjectResult {
    value: string;
    label: string;
    note: string;
}

export interface ProjectSection {
    title: string;
    intro?: string;
    bullets?: string[];
}

export interface ProjectGalleryItem {
    src: string;
    alt: string;
    caption: string;
    fit?: "cover" | "contain";
}

export interface ProjectAsset {
    title: string;
    href: string;
    kind: string;
    note: string;
}

export interface Project {
    slug: string;
    eyebrow: string;
    cardEyebrow: string;
    title: string;
    summary: string;
    intro: string;
    icon: string;
    spotlight?: boolean;
    badges: string[];
    highlights: ProjectHighlight[];
    results: ProjectResult[];
    sections: ProjectSection[];
    gallery?: ProjectGalleryItem[];
    assets?: ProjectAsset[];
}

export const PROJECTS: Project[] = [
    {
        slug: "huggies-growth-engine",
        eyebrow: "Commerce Growth Case",
        cardEyebrow: "Featured Growth Case",
        title: "Huggies Skin Perfect: Growth in a Declining Market",
        summary: "A project-led commerce strategy that pushed Huggies from category pressure into platform leadership across pure e-commerce and TikTok Shop.",
        intro: "I helped shape the commerce approach behind Huggies Skin Perfect across Shopee, Lazada, Tiki, and TikTok Shop, turning digital investment into stronger GMV, healthier ROAS, and a much sharper social commerce position.",
        icon: "🏆",
        spotlight: true,
        badges: ["Commerce", "TikTok Shop", "FMCG"],
        highlights: [
            { value: "+135%", label: "Paid GMV vs 2023" },
            { value: "No.1", label: "E-commerce brand" },
            { value: "+58%", label: "Pure e-com ROAS" },
        ],
        results: [
            { value: "VND 608bn", label: "Paid GMV achieved", note: "+135% vs 2023" },
            { value: "No.1", label: "E-commerce rank", note: "Shopee, Lazada, Tiki" },
            { value: "+231%", label: "TikTok Shop growth", note: "H2 vs H1" },
            { value: "30%", label: "Premium contribution", note: "Up from 14% in 2023" },
        ],
        sections: [
            {
                title: "Challenge",
                intro: "Huggies entered 2024 under pressure despite strong category movement.",
                bullets: [
                    "Growth lagged a category that had already expanded by 18% in 2023.",
                    "The brand held 28% market share but still trailed Bobby and faced pressure from hand-carried products.",
                    "Competitors had already explored TikTok Shop while Huggies had no official-store momentum there.",
                    "The Mom and Baby category was surging on social commerce, so delaying action meant losing relevance with younger mothers.",
                ],
            },
            {
                title: "Strategic Response",
                intro: "The plan focused on protecting the core while scaling new growth surfaces fast.",
                bullets: [
                    "Reinforce dominance across Shopee, Lazada, and Tiki through sharper storefront, traffic, and campaign planning.",
                    "Prioritize TikTok Shop as the social-commerce growth engine for first-time Gen Z moms.",
                    "Create new business-as-usual selling moments such as Super Huggies Day between mega campaigns.",
                    "Use Meta CPAS, Criteo, Google Ads, and marketplace signals to push high-intent traffic more efficiently.",
                ],
            },
            {
                title: "Execution",
                bullets: [
                    "H1 focused on traffic building through broad and data-informed audience pools.",
                    "H2 shifted harder into retargeting and lookalike scaling once conversion signals were stronger.",
                    "Huggies Skin Perfect became the hero SKU and a major growth driver on TikTok Shop.",
                    "Budget timing was tuned to real buying behavior, especially late-night mega-sale peaks and late-evening conversion windows.",
                ],
            },
            {
                title: "Why It Matters",
                bullets: [
                    "The work demonstrates how channel planning, commerce operations, and platform-native execution can move business results together.",
                    "It also provides stronger proof than a trophy alone, which is why this project anchors the portfolio's project-led story.",
                ],
            },
        ],
        gallery: [
            {
                src: "/GroupM_MMA_awards.jpeg",
                alt: "MMA Smarties awards ceremony",
                caption: "Recognition from Vietnam MMA Smarties 2024 reinforced the business impact behind the work.",
                fit: "cover",
            },
            {
                src: "/GroupM_GroupPhoto.jpeg",
                alt: "GroupM team photo",
                caption: "A supporting team photo that adds human proof behind the growth story.",
                fit: "cover",
            },
        ],
        assets: [
            {
                title: "Huggies WOW Award 2025",
                href: "/MSExNEXUS_Huggies WOW Award 2025.pdf",
                kind: "PDF",
                note: "Supporting recognition document tied to the Huggies business impact journey.",
            },
            {
                title: "MMA Smarties Winners Page",
                href: "https://www.mmaglobal.com/smarties-2024/finalists/winners/region:10",
                kind: "External",
                note: "Public proof of the MMA Smarties 2024 win.",
            },
        ],
    },
    {
        slug: "blood-is-our-mark",
        eyebrow: "Culture-Led Brand Case",
        cardEyebrow: "Culture-Led Brand Case",
        title: "Kotex Vietnam: Blood Is Our Mark",
        summary: "A socially charged brand platform that reframed period blood from stigma into strength, helping Kotex open more honest conversations with Gen Z and beyond.",
        intro: "This project deserves space in the portfolio because it shows a different kind of impact: using media and culture to challenge a deep-rooted stigma while still driving measurable brand and community outcomes.",
        icon: "🩸",
        badges: ["Brand Strategy", "Community", "Kotex"],
        highlights: [
            { value: "57.4M", label: "Organic interactions" },
            { value: "42.8M", label: "Campaign views" },
            { value: "#3", label: "iTunes and YouTube daily rank" },
        ],
        results: [
            { value: "+17%", label: "Brand value with Gen Z", note: "vs pre-campaign" },
            { value: "235K+", label: "Discussion volume", note: "+30% vs normal" },
            { value: "4,534", label: "UGC videos", note: "Community response" },
            { value: "1,000+", label: "Fund submissions", note: "Kotex support fund" },
        ],
        sections: [
            {
                title: "Context",
                intro: "The campaign responded to a cultural tension that still shapes everyday life in Vietnam.",
                bullets: [
                    "Gender inequality and stigma around menstruation still limit how openly women can speak about their experiences.",
                    "Menstrual blood is often framed negatively, while blood connected to men is celebrated as heroic or brave.",
                    "Even platform language restrictions make education and open conversation harder.",
                ],
            },
            {
                title: "Creative Idea",
                bullets: [
                    "Blood was redefined from a symbol of shame into a mark of resilience and identity.",
                    "The campaign line 'Blood Is Our Mark' reclaimed period blood as something natural and powerful rather than hidden.",
                    "Gen Z artists and emotionally grounded storytelling made the message feel culturally alive rather than preachy.",
                ],
            },
            {
                title: "Strategy",
                bullets: [
                    "Build a social-first movement across Facebook and TikTok, where scale and conversation can happen together.",
                    "Design for three audiences at once: older women shaped by stigma, modern young women pushing for change, and men who can become allies.",
                    "Create a safer online space where menstruation can be discussed without embarrassment.",
                ],
            },
            {
                title: "Execution",
                bullets: [
                    "A social experiment exposed real public reactions to a girl with visible menstrual blood on her clothing.",
                    "A music-led content push with high-profile KOLs reframed blood as motivation, grit, and forward movement.",
                    "The Kotex 'Bloody Awesome' fund turned the campaign from awareness into active support for more than 1,000 girls pursuing their ambitions.",
                ],
            },
            {
                title: "Results",
                bullets: [
                    "Kotex increased brand value with Gen Z by 17% versus pre-campaign.",
                    "The campaign generated 57,423,588 organic interactions and 42,883,924 views in one month.",
                    "It reached 235,150 discussions, 4,534 UGC videos, more than 1,000 fund applications, and top-chart momentum on YouTube and iTunes.",
                ],
            },
        ],
        gallery: [
            {
                src: "/brands/kotex.png",
                alt: "Kotex brand mark",
                caption: "A logo-led visual while the case focuses on strategy, social context, and measurable response.",
                fit: "contain",
            },
        ],
    },
    {
        slug: "mobile-ux-funnel-optimization",
        eyebrow: "Conversion Optimization Case",
        cardEyebrow: "Conversion Recovery",
        title: "Mobile UX Funnel Optimization",
        summary: "A conversion-diagnostic project that showed where mobile purchase intent was breaking and how a simpler checkout path could recover it.",
        intro: "This belongs in the portfolio as a project, not an award, because its value comes from identifying friction clearly, simplifying the flow, and translating UX issues into commercial opportunity.",
        icon: "📱",
        badges: ["UX Audit", "Conversion", "Analytics"],
        highlights: [
            { value: "12 to 6", label: "Checkout steps" },
            { value: "-66%", label: "Login-stage drop-off" },
            { value: "85.6%", label: "Intent at risk" },
        ],
        results: [
            { value: "90.83%", label: "Product view to A2C drop", note: "Signals dead-end UI and weak routing" },
            { value: "66.03%", label: "Login-stage leakage", note: "The hardest friction point" },
            { value: "12 to 6", label: "Proposed journey cut", note: "Simplified purchase path" },
            { value: "Guest", label: "Checkout model", note: "Optional vs forced account creation" },
        ],
        sections: [
            {
                title: "Problem Framing",
                bullets: [
                    "Mobile users were dropping aggressively across the purchase journey, especially before payment.",
                    "The existing funnel stretched across 12 steps, making intent fade before conversion could happen.",
                    "The biggest failure point was the identification and forced-login step.",
                ],
            },
            {
                title: "Root Causes",
                bullets: [
                    "Promotional banners were visually strong but functionally dead because they lacked direct routing.",
                    "Forced login and account creation introduced a heavy cognitive wall right before purchase.",
                    "Broken social-login behavior created loops instead of convenience.",
                ],
            },
            {
                title: "Recommended Fix",
                bullets: [
                    "Move to a six-step flow with guest checkout and fewer interruptions.",
                    "Attach direct tracking links to all promotion surfaces so discovery can turn into cart action quickly.",
                    "Consolidate shipping and payment steps, then validate improvements through continued A/B testing.",
                ],
            },
            {
                title: "Commercial Lens",
                bullets: [
                    "The audit reframed UX friction as lost revenue, not just design inconvenience.",
                    "It is a strong proof point for solving business problems through customer-journey analysis.",
                ],
            },
        ],
        assets: [
            {
                title: "Mobile Funnel Optimization Deck",
                href: "/Mobile_Funnel_Optimization.pdf",
                kind: "PDF",
                note: "Original support deck documenting the funnel leakage and proposed fixes.",
            },
        ],
    },
];

export const PROJECTS_BY_SLUG = PROJECTS.reduce<Record<string, Project>>((acc, project) => {
    acc[project.slug] = project;
    return acc;
}, {});
