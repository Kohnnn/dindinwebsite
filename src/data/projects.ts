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
    surface?: "default" | "light" | "brand-red";
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
    logoSrc?: string;
    logoSurface?: "dark" | "light" | "brand-red";
    badges: string[];
    highlights: ProjectHighlight[];
    results: ProjectResult[];
    sections: ProjectSection[];
    gallery?: ProjectGalleryItem[];
    assets?: ProjectAsset[];
}

export const PROJECTS: Project[] = [
    {
        slug: "accelerating-growth-in-a-declining-market",
        eyebrow: "Launch Campaign Case",
        cardEyebrow: "Launch Campaign",
        title: "Accelerating Growth in a Declining Market",
        summary: "The launch campaign for Huggies Skin Perfect, built to unlock growth in a softening category and later recognized with MMA Smarties Gold.",
        intro: "This project centers on the Huggies Skin Perfect launch: using a sharper digital-first launch structure to turn category pressure into standout business momentum and award-level recognition.",
        icon: "🏆",
        logoSrc: "/brands/huggies.svg",
        logoSurface: "light",
        badges: ["Huggies Skin Perfect", "Launch Campaign", "MMA Smarties"],
        highlights: [
            { value: "Gold", label: "MMA Smarties 2024" },
            { value: "+135%", label: "Paid GMV vs 2023" },
            { value: "+58%", label: "Pure e-com ROAS" },
        ],
        results: [
            { value: "VND 608bn", label: "Paid GMV achieved", note: "Built from a strong launch and acceleration plan" },
            { value: "No.1", label: "E-commerce rank", note: "Across Shopee, Lazada, and Tiki" },
            { value: "30%", label: "Premium contribution", note: "Up from 14% in 2023" },
            { value: "USD 36K", label: "Bonus achieved", note: "For the highest GMV milestone" },
        ],
        sections: [
            {
                title: "Business Context",
                intro: "The launch had to work against a category headwind rather than ride pure momentum.",
                bullets: [
                    "Huggies entered 2024 with growth lagging behind the overall diaper category.",
                    "The brand still faced pressure from established competitors and hand-carried alternatives.",
                    "Skin Perfect needed to launch with stronger distinction and more efficient digital conversion support.",
                ],
            },
            {
                title: "Launch Strategy",
                bullets: [
                    "Position Skin Perfect as a hero product with a clearer role in premium growth.",
                    "Reallocate attention and spend toward digital commerce channels with stronger purchase intent.",
                    "Design the launch to build both visibility and sell-out rather than treating them as separate workstreams.",
                ],
            },
            {
                title: "Execution",
                bullets: [
                    "Cross-digital media supported launch visibility, category relevance, and stronger commerce conversion moments.",
                    "Platform planning sharpened how audiences were moved from discovery to purchase across the e-commerce funnel.",
                    "The work ultimately became the basis for Vietnam MMA Smarties Gold in Cross Digital Media Marketing.",
                ],
            },
            {
                title: "Why This Case Matters",
                bullets: [
                    "It proves launch planning can be business-led, not just awareness-led.",
                    "It also shows how project storytelling should anchor the portfolio more clearly than the award alone.",
                ],
            },
        ],
        gallery: [
            {
                src: "/GroupM_MMA_awards.jpeg",
                alt: "MMA Smarties awards ceremony",
                caption: "Award-stage proof for the Skin Perfect launch campaign after the business results landed.",
                fit: "cover",
            },
            {
                src: "/MMA_Smarties.jpg",
                alt: "MMA Smarties award visual",
                caption: "The official award visual tied to the Huggies Skin Perfect campaign win.",
                fit: "cover",
            },
        ],
        assets: [
            {
                title: "MMA Smarties Winners Page",
                href: "https://www.mmaglobal.com/smarties-2024/finalists/winners/region:10",
                kind: "External",
                note: "Public-facing proof of the Vietnam MMA Smarties 2024 result for this campaign.",
            },
        ],
    },
    {
        slug: "huggies-ecommerce-social-commerce-acceleration",
        eyebrow: "Always-On Growth Engine",
        cardEyebrow: "Year-Long Growth Case",
        title: "Huggies E-commerce & Social Commerce Acceleration",
        summary: "A year-long growth program that strengthened Huggies across ecommerce and TikTok Shop, sustaining rank, scale, and daily commerce momentum over time.",
        intro: "Separate from the Skin Perfect launch, this case captures the always-on growth engine behind Huggies: sustaining leadership, scaling TikTok Shop, and turning monthly optimization into compounding business impact.",
        icon: "📈",
        logoSrc: "/brands/huggies.svg",
        logoSurface: "light",
        badges: ["Always-On Commerce", "TikTok Shop", "Year-Long Optimization"],
        highlights: [
            { value: "287%", label: "TikTok Shop GMV" },
            { value: "8 mo.", label: "No.1 GMV streak" },
            { value: "23", label: "Campaigns delivered" },
        ],
        results: [
            { value: "287%", label: "GMV growth", note: "Apr-Dec 2024 on TikTok Shop" },
            { value: "No.1", label: "Best-selling brand", note: "Official store across multiple peak months" },
            { value: "78", label: "Livestream sessions", note: "Across 7 stores and key platforms" },
            { value: "+29%", label: "TikTok Shop GMV", note: "Versus the last 3 months" },
        ],
        sections: [
            {
                title: "Commercial Challenge",
                intro: "The challenge here was endurance, not just launch-day excitement.",
                bullets: [
                    "Huggies needed sustained growth across Shopee, Lazada, Tiki, and TikTok Shop over an extended period.",
                    "The work had to balance everyday trade pressure with peak-commerce moments and livestream-driven demand.",
                    "Scaling social commerce also required stronger local ownership and execution trust.",
                ],
            },
            {
                title: "Growth Approach",
                bullets: [
                    "Use commerce planning, reporting discipline, and platform-native optimization to keep momentum compounding month by month.",
                    "Expand TikTok Shop aggressively while protecting performance on core ecommerce platforms.",
                    "Keep testing the pipeline through campaigns, livestreams, and audience refinements rather than relying on one-off wins.",
                ],
            },
            {
                title: "Execution",
                bullets: [
                    "Delivered 23 campaigns and 78 livestream sessions across 7 stores.",
                    "Helped bring the TikTok Shop scope to the local team and translated that into stronger growth traction.",
                    "Maintained Huggies as the No.1 GMV brand on ecommerce for eight consecutive months.",
                ],
            },
            {
                title: "Why This Case Matters",
                bullets: [
                    "It shows Hazel can build long-term commerce systems, not just short-term launch spikes.",
                    "It also connects cleanly to performance tracking, stakeholder trust, and local market execution depth.",
                ],
            },
        ],
        gallery: [
            {
                src: "/GroupM_COTM_Groupphoto.jpeg",
                alt: "Huggies team group photo",
                caption: "A supporting team image behind the year-long Huggies commerce acceleration effort.",
                fit: "cover",
            },
            {
                src: "/GroupM_COTM_Huggies_Cert.jpeg",
                alt: "Huggies certificate",
                caption: "Recognition tied to sustained ecommerce and TikTok Shop impact.",
                fit: "contain",
                surface: "light",
            },
        ],
        assets: [
            {
                title: "Huggies WOW Award 2025",
                href: "/MSExNEXUS_Huggies WOW Award 2025.pdf",
                kind: "PDF",
                note: "Supporting proof that extends the Huggies business story beyond a single campaign cycle.",
            },
        ],
    },
    {
        slug: "blood-is-our-mark",
        eyebrow: "Culture-Led Brand Case",
        cardEyebrow: "Brand & Culture Case",
        title: "Kotex Vietnam: Blood Is Our Mark",
        summary: "A socially charged Kotex campaign that reframed period blood from stigma into strength while building conversation, community response, and brand meaning.",
        intro: "This project deserves a stronger place in the portfolio because it shows a different kind of marketing skill: using media and culture to challenge a deep-rooted stigma while still delivering measurable brand and community response.",
        icon: "🩸",
        logoSrc: "/brands/kotex.png",
        logoSurface: "brand-red",
        badges: ["Kotex", "Cultural Strategy", "Campaign of the Month"],
        highlights: [
            { value: "+17%", label: "Brand value with Gen Z" },
            { value: "57.4M", label: "Organic interactions" },
            { value: "Apr 2024", label: "Campaign of the Month" },
        ],
        results: [
            { value: "42.8M", label: "Campaign views", note: "In the first month" },
            { value: "235K+", label: "Discussion volume", note: "+30% versus normal" },
            { value: "4,534", label: "UGC videos", note: "Organic community response" },
            { value: "1,000+", label: "Fund submissions", note: "To the Kotex support fund" },
        ],
        sections: [
            {
                title: "Context",
                intro: "The work started from a real cultural tension in Vietnam rather than a simple product message.",
                bullets: [
                    "Menstruation still carries stigma, silence, and gendered bias in everyday life.",
                    "Menstrual blood is often framed negatively while blood tied to men is associated with bravery and heroism.",
                    "Social platform restrictions and social shame make open education harder.",
                ],
            },
            {
                title: "Creative Idea",
                bullets: [
                    "Reclaim blood as a mark of resilience rather than embarrassment.",
                    "Use a bold but emotionally grounded cultural expression so the message feels progressive, not forced.",
                    "Turn Kotex into a brand willing to confront the taboo instead of circling around it.",
                ],
            },
            {
                title: "Strategy",
                bullets: [
                    "Build a social-first conversation across Facebook and TikTok where culture, debate, and scale can all happen together.",
                    "Speak to three groups at once: older women shaped by stigma, young women pushing for change, and men who can act as allies.",
                    "Create a safer environment for open discussion rather than only pushing a single broadcast message.",
                ],
            },
            {
                title: "Execution",
                bullets: [
                    "A social experiment captured public reactions to visible menstrual blood and sparked discussion immediately.",
                    "Music-led storytelling with Gen Z artists reframed blood as momentum, power, and identity.",
                    "The Kotex support fund transformed the campaign from talk into action for girls pursuing their ambitions.",
                ],
            },
            {
                title: "Recognition & Results",
                bullets: [
                    "Kotex increased brand value with Gen Z by 17% versus pre-campaign.",
                    "The campaign produced 57,423,588 organic interactions and 42,883,924 views in one month.",
                    "It also earned Campaign of the Month in April 2024, strengthening the proof behind the work.",
                ],
            },
        ],
        gallery: [
            {
                src: "/kotex-blood-is-our-mark.svg",
                alt: "Kotex Blood Is Our Mark campaign visual",
                caption: "A branded project visual that restores contrast and makes the campaign feel intentional instead of invisible on the dark page.",
                fit: "contain",
                surface: "brand-red",
            },
        ],
        assets: [
            {
                title: "Vietnam Young Lions Campaign Feature",
                href: "https://www.facebook.com/aim.vietnamyounglions/posts/tuy%C3%AAn-ng%C3%B4n-m%E1%BB%9Bi-cho-c%C3%B4-g%C3%A1i-hi%E1%BB%87n-%C4%91%E1%BA%A1i-t%E1%BB%AB-kotex-vi%E1%BB%87t-nam-th%C6%B0%C6%A1ng-hi%E1%BB%87u-m%C3%A1u-chi%E1%BA%BFn-tham-/444924988434705/",
                kind: "External",
                note: "Supporting post covering the campaign background, strategy, execution, and results.",
            },
            {
                title: "Campaign of the Month - April 2024",
                href: "https://www.facebook.com/aim.vietnamyounglions/posts/tuy%C3%AAn-ng%C3%B4n-m%E1%BB%9Bi-cho-c%C3%B4-g%C3%A1i-hi%E1%BB%87n-%C4%91%E1%BA%A1i-t%E1%BB%AB-kotex-vi%E1%BB%87t-nam-th%C6%B0%C6%A1ng-hi%E1%BB%87u-m%C3%A1u-chi%E1%BA%BFn-tham-/444924988434705/",
                kind: "External",
                note: "Recognition note for the campaign's Campaign of the Month result in April 2024.",
            },
        ],
    },
    {
        slug: "kiehls-eboutique-mobile-funnel-optimization",
        eyebrow: "Conversion Optimization Case",
        cardEyebrow: "Kiehl's eBoutique Case",
        title: "Kiehl's eBoutique Mobile UX Funnel Optimization",
        summary: "A conversion-diagnostic project for Kiehl's that identified where mobile purchase intent was breaking and mapped a cleaner six-step checkout path.",
        intro: "This is a Kiehl's eBoutique case, not a generic UX story. It shows how Hazel translated mobile journey friction into commercial insight and a clearer path to conversion.",
        icon: "📱",
        logoSrc: "/brands/kiehls.svg",
        logoSurface: "light",
        badges: ["Kiehl's", "UX Audit", "Conversion Optimization"],
        highlights: [
            { value: "12 to 6", label: "Checkout steps" },
            { value: "-66%", label: "Login-stage drop-off" },
            { value: "85.6%", label: "Intent at risk" },
        ],
        results: [
            { value: "90.83%", label: "Product view to A2C drop", note: "Shows dead-end UX and weak routing" },
            { value: "66.03%", label: "Identification drop-off", note: "The hardest friction point in the flow" },
            { value: "12 to 6", label: "Proposed journey cut", note: "Recommended simplification path" },
            { value: "Guest", label: "Checkout approach", note: "Shift from forced login to optional access" },
        ],
        sections: [
            {
                title: "Problem Framing",
                bullets: [
                    "Kiehl's eBoutique mobile users were leaking heavily before purchase completion.",
                    "The checkout journey stretched across 12 steps, creating too much friction for mobile behavior.",
                    "The identification step became the biggest barrier in the funnel.",
                ],
            },
            {
                title: "Root Causes",
                bullets: [
                    "Promotional surfaces looked attractive but failed as conversion routes because key banners were not clickable enough.",
                    "Forced login and account creation interrupted high-intent users too early.",
                    "Social-login issues added frustration instead of reducing effort.",
                ],
            },
            {
                title: "Recommended Fix",
                bullets: [
                    "Reduce the journey to six steps with guest checkout and fewer interruptions.",
                    "Attach direct product routing to promo surfaces so discovery can become cart action faster.",
                    "Consolidate shipping and payment moments, then validate through structured testing.",
                ],
            },
            {
                title: "Why This Case Matters",
                bullets: [
                    "It shows Hazel can diagnose digital friction using a commercial lens, not just a design lens.",
                    "It also proves project-based storytelling can explain analytical work clearly without forcing a fake narrative.",
                ],
            },
        ],
        gallery: [
            {
                src: "/brands/kiehls.svg",
                alt: "Kiehl's brand mark",
                caption: "The Kiehl's eBoutique logo anchors the case so the diagnostic work is clearly tied to the brand, not a generic mobile audit.",
                fit: "contain",
                surface: "light",
            },
        ],
        assets: [
            {
                title: "Mobile Funnel Optimization Deck",
                href: "/Mobile_Funnel_Optimization.pdf",
                kind: "PDF",
                note: "The original support deck documenting the mobile funnel leakage and proposed fixes for Kiehl's eBoutique.",
            },
        ],
    },
];

export const PROJECTS_BY_SLUG = PROJECTS.reduce<Record<string, Project>>((acc, project) => {
    acc[project.slug] = project;
    return acc;
}, {});
