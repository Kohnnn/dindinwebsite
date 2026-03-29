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
    scopeLabel: string;
    executiveSummary: string[];
    achievements: string[];
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
        eyebrow: "Featured Project / Launch Campaign",
        cardEyebrow: "Huggies Launch Campaign",
        title: "Huggies Skin Perfect - Growth in a Declining Market",
        summary: "A launch campaign built to help Huggies Skin Perfect outperform category pressure, accelerate premium growth, and turn commercial results into award-winning recognition.",
        intro: "Hazel helped shape the digital channel planning, budget prioritization, and commerce-led rollout for the Huggies Skin Perfect launch, making this a launch case rather than the always-on growth story that ran across the full year.",
        scopeLabel: "This page covers the Skin Perfect launch campaign and its recognition footprint, not the full-year always-on ecommerce program.",
        executiveSummary: [
            "Huggies needed to launch Skin Perfect in a market where category growth existed, but the brand itself was not keeping pace strongly enough and premium momentum needed sharper commercial support.",
            "The response was to build a more digital-first launch structure: prioritizing commerce channels, strengthening conversion-led platform planning, and using cross-digital media to move audiences from discovery into purchase more efficiently.",
            "The result was a launch that helped turn Skin Perfect into a stronger premium growth driver, strengthened Huggies' commercial position, and earned both local and regional MMA Smarties recognition.",
        ],
        achievements: [
            "Gold Winner - MMA Smarties Award Vietnam 2024 - Cross Digital Marketing Category",
            "Bronze Winner - MMA Smarties Award APAC 2024",
            "Campaign of the Month - June 2024 - Mindshare",
        ],
        icon: "🏆",
        logoSrc: "/brands/huggies.svg",
        logoSurface: "light",
        badges: ["Huggies Skin Perfect", "Launch Strategy", "Cross Digital"],
        highlights: [
            { value: "Gold", label: "MMA Vietnam 2024" },
            { value: "Jun 2024", label: "Campaign of month" },
            { value: "+135%", label: "Paid GMV vs 2023" },
        ],
        results: [
            { value: "VND 608bn", label: "Paid GMV achieved", note: "+135% versus 2023" },
            { value: "No.1", label: "E-commerce rank", note: "Across Shopee, Lazada, and Tiki" },
            { value: "+58%", label: "Pure e-com ROAS", note: "Year-on-year improvement" },
            { value: "30%", label: "Premium contribution", note: "Up from 14% in 2023" },
        ],
        sections: [
            {
                title: "Business Challenge",
                intro: "The launch needed to prove growth in a market that was not automatically working in Huggies' favor.",
                bullets: [
                    "Huggies entered the period with slower momentum than the broader category despite already holding meaningful market share.",
                    "Skin Perfect needed to launch as a premium growth driver, not just as another SKU inside the portfolio.",
                    "Competitors had already built earlier traction in social commerce, so Huggies could not rely on traditional launch habits alone.",
                ],
            },
            {
                title: "How the Problem Was Solved",
                bullets: [
                    "Rebalance the launch around digital commerce and conversion-ready media instead of treating awareness and sell-out as separate tracks.",
                    "Use platform prioritization to sharpen where budget, visibility, and audience targeting worked hardest for launch impact.",
                    "Position Skin Perfect more clearly as the hero product inside the premiumization story.",
                ],
            },
            {
                title: "Execution",
                bullets: [
                    "Cross-digital planning supported the launch from visibility into commerce action across key channels and retailers.",
                    "Audience and budget decisions were tied closely to purchase behavior rather than broad reach alone.",
                    "The campaign created enough business impact to become the basis for both Vietnam and APAC MMA Smarties recognition.",
                ],
            },
            {
                title: "Why This Case Matters",
                bullets: [
                    "It shows Hazel can support launch planning with a business lens, not just a media-delivery lens.",
                    "It also anchors the portfolio with a clear case where strategy, execution, and recognition all connect on one page.",
                ],
            },
        ],
        gallery: [
            {
                src: "/Huggies_Cam_skinPerfect_cover.jpeg",
                alt: "Huggies Skin Perfect campaign cover",
                caption: "The launch campaign cover gives the case a cleaner visual anchor than the older award-page screenshot treatment.",
                fit: "cover",
            },
            {
                src: "/Huggies_Cam_skinPerfect_result.jpeg",
                alt: "Huggies Skin Perfect campaign result board",
                caption: "A result-focused support visual tied to the Skin Perfect launch campaign outcome and recognition footprint.",
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
        eyebrow: "Featured Project / Always-On Growth",
        cardEyebrow: "Year-Long Growth Engine",
        title: "Huggies Ecommerce & Social Commerce Acceleration in 2024",
        summary: "A year-long commerce program that scaled Huggies across ecommerce and TikTok Shop through sustained optimization, platform ownership, and monthly performance discipline.",
        intro: "This is the always-on Huggies growth engine in 2024, separate from the Skin Perfect launch case. It covers sustained ecommerce and social commerce acceleration across the year, including rank leadership, team recognition, and operating rhythm.",
        scopeLabel: "This page covers the always-on 2024 growth program across ecommerce and social commerce, not the specific Skin Perfect launch campaign.",
        executiveSummary: [
            "The brief for 2024 was to make Huggies grow faster than category growth while preserving stronger ROAS, and at the same time build a top-tier TikTok Shop presence from the ground up.",
            "The response was a year-long ecommerce and social commerce acceleration program: prioritize digital commerce investment, create more sale occasions, scale TikTok Shop with a growth-hacking mindset, and build a tighter traffic-to-conversion pipeline across stores, livestreams, affiliates, and paid media.",
            "That operating system helped Huggies deliver VND 608bn paid GMV, maintain leadership across pure-player ecommerce, turn TikTok Shop from a latecomer channel into a front-runner story within eight months, and earn team-level recognition in September 2024.",
        ],
        achievements: [
            "VND 608bn paid GMV in 2024, up 135% versus 2023",
            "Top 1 Brand across pure players: Shopee, Lazada, and Tiki",
            "Top 1 highest-grossing baby diaper brand on TikTok Shop in August 2024",
            "+58% eCommerce ROAS YoY and +28% total eCommerce / social commerce ROAS uplift",
            "$36,000 bonus achieved for hitting the highest GMV milestone",
            "Team of the Month - Sep 2024",
        ],
        icon: "📈",
        logoSrc: "/brands/huggies.svg",
        logoSurface: "light",
        badges: ["Always-On Commerce", "TikTok Shop", "2024 Growth Program"],
        highlights: [
            { value: "608B", label: "Paid GMV" },
            { value: "No.1", label: "Pure-player rank" },
            { value: "+231%", label: "TikTok H2 vs H1" },
        ],
        results: [
            { value: "VND 608bn", label: "Paid GMV achieved", note: "+135% versus 2023" },
            { value: "+58%", label: "eCommerce ROAS", note: "YoY uplift on pure ecommerce" },
            { value: "+231%", label: "TikTok Shop H2 vs H1", note: "Social commerce acceleration" },
            { value: "184B", label: "Premium GMV", note: "30% of paid GMV vs 14% in 2023" },
        ],
        sections: [
            {
                title: "Commercial Challenge",
                intro: "The year needed a repeatable growth engine, not isolated wins.",
                bullets: [
                    "Huggies grew slower than the category in 2023, even as the category itself was still expanding.",
                    "The brand needed to beat category growth on ecommerce while also building TikTok Shop from zero into a serious growth driver.",
                    "Mindshare had to deliver 464B paid GMV with higher ROAS on ecommerce and then build a 52B paid GMV TikTok Shop business with required ROAS at 8.5.",
                ],
            },
            {
                title: "How the Problem Was Solved",
                bullets: [
                    "Shift more investment from branding-heavy activity into digital commerce so market-share growth could be driven closer to transaction.",
                    "Keep strengthening Huggies leadership across Shopee, Lazada, and Tiki while creating more sale occasions and visibility through Super Huggies Day.",
                    "Accelerate TikTok Shop by winning first-time moms, using shoppertainment, affiliate expansion, audience signal targeting, and a more structured H1-to-H2 traffic pipeline.",
                ],
            },
            {
                title: "Execution",
                bullets: [
                    "Delivered 23 campaigns and 78 livestream sessions across 7 stores and major commerce platforms.",
                    "Built marketplace dominance through stronger SKU visibility, portfolio management, sale-occasion planning, and offsite traffic from CPAS, Criteo, Google Ads, and affiliate creators.",
                    "Scaled TikTok Shop from latecomer to front-runner within eight months through growth hacking, livestream theme usage, stronger video cadence, and clearer budget allocation across LSA, VSA, and PSA.",
                ],
            },
            {
                title: "Why This Case Matters",
                bullets: [
                    "It proves Hazel can support sustained commercial systems, not just launch moments.",
                    "It also explains how the Huggies business scaled across both ecommerce and social commerce in 2024 without collapsing everything into one vague growth claim.",
                ],
            },
        ],
        gallery: [
            {
                src: "/WPP_Employeeofthemonth_Result.jpeg",
                alt: "Huggies ecommerce recognition result board",
                caption: "A support visual highlighting the business outcome behind the year-long Huggies commerce acceleration work.",
                fit: "cover",
            },
            {
                src: "/GroupM_COTM_Huggies_Cert.jpeg",
                alt: "Huggies recognition certificate",
                caption: "Supporting recognition tied to the Huggies ecommerce and TikTok Shop business result.",
                fit: "contain",
                surface: "light",
            },
        ],
        assets: [
            {
                title: "Little Wonders, Big Impact - WOW Award Deck",
                href: "/MSExNEXUS_Huggies WOW Award 2025.pdf",
                kind: "PDF",
                note: "The source deck used to shape the always-on Huggies ecommerce and social commerce case in 2024.",
            },
        ],
    },
    {
        slug: "blood-is-our-mark",
        eyebrow: "Featured Project / Brand Campaign",
        cardEyebrow: "Culture-Led Campaign",
        title: "Kotex - Blood is our Mark",
        summary: "A culture-led Kotex campaign that reframed period blood from stigma into strength and translated bold social conversation into measurable community and brand response.",
        intro: "Hazel supported a Kotex campaign built around social context as much as media execution. The work shows how a brand can challenge a taboo in Vietnam without losing strategic clarity or measurable impact.",
        scopeLabel: "This page covers the Blood is our Mark campaign and its recognition, not the separate Kotex TikTok Shop acceleration work that will be added later.",
        executiveSummary: [
            "The campaign started from a social tension: menstruation in Vietnam is still surrounded by silence, stigma, and outdated gender assumptions, which makes even basic conversation difficult.",
            "Kotex responded by reframing blood from something hidden or shameful into a symbol of resilience and identity, using social-first storytelling, artists, and emotionally resonant content to open the conversation in a culturally relevant way.",
            "That approach helped the campaign generate broad engagement, stronger discussion volume, and enough momentum to earn Campaign of the Month recognition in April 2024.",
        ],
        achievements: [
            "Campaign of the Month - Apr 2024 - Mindshare",
            "+17% brand value with Gen Z versus pre-campaign",
        ],
        icon: "🩸",
        logoSrc: "/brands/kotex.png",
        logoSurface: "brand-red",
        badges: ["Kotex", "Culture-Led Strategy", "Mindshare"],
        highlights: [
            { value: "+17%", label: "Brand value with Gen Z" },
            { value: "57.4M", label: "Organic interactions" },
            { value: "42.8M", label: "Campaign views" },
        ],
        results: [
            { value: "235K+", label: "Discussion volume", note: "+30% versus normal" },
            { value: "4,534", label: "UGC videos", note: "Organic community response" },
            { value: "1,000+", label: "Fund submissions", note: "For the Kotex support fund" },
            { value: "#3", label: "Daily ranking", note: "On iTunes and YouTube" },
        ],
        sections: [
            {
                title: "Business & Cultural Problem",
                intro: "The challenge was bigger than a product message.",
                bullets: [
                    "Menstruation is still burdened by shame, silence, and gendered bias in Vietnamese social behavior.",
                    "The stigma makes education harder and limits how openly women can speak about their own experiences.",
                    "For Kotex, the campaign needed to build cultural relevance while still driving measurable brand response.",
                ],
            },
            {
                title: "How the Problem Was Solved",
                bullets: [
                    "Reclaim blood as a symbol of strength instead of embarrassment.",
                    "Use a social-first campaign structure across Facebook and TikTok so the idea can live through conversation, not just one-way messaging.",
                    "Bring in talent and storytelling that make the message feel emotionally real rather than instructional or forced.",
                ],
            },
            {
                title: "Execution",
                bullets: [
                    "A social experiment captured real public reactions and created immediate tension around the taboo.",
                    "A music-led content push extended the idea into culture and participation.",
                    "The campaign then moved from awareness into action through a support fund for girls pursuing their ambitions.",
                ],
            },
            {
                title: "Why This Case Matters",
                bullets: [
                    "It shows Hazel can contribute to work where strategic impact comes from culture, not only commerce.",
                    "It also broadens the portfolio beyond ecommerce into brand-building with real social meaning.",
                ],
            },
        ],
        gallery: [
            {
                src: "/Kotex_Camp_Cover.jpg",
                alt: "Kotex campaign cover",
                caption: "The campaign cover gives the Kotex case a stronger visual entry point and better reflects the tone of the work.",
                fit: "cover",
            },
            {
                src: "/Kotex_BloodCam_result.jpg",
                alt: "Kotex campaign result visual",
                caption: "A supporting result visual showing the performance and recognition context behind the campaign.",
                fit: "cover",
            },
        ],
        assets: [
            {
                title: "Vietnam Young Lions Campaign Feature",
                href: "https://www.facebook.com/aim.vietnamyounglions/posts/tuy%C3%AAn-ng%C3%B4n-m%E1%BB%9Bi-cho-c%C3%B4-g%C3%A1i-hi%E1%BB%87n-%C4%91%E1%BA%A1i-t%E1%BB%AB-kotex-vi%E1%BB%87t-nam-th%C6%B0%C6%A1ng-hi%E1%BB%87u-m%C3%A1u-chi%E1%BA%BFn-tham-/444924988434705/",
                kind: "External",
                note: "Supporting source covering the campaign background, idea, strategy, execution, and results.",
            },
        ],
    },
    {
        slug: "kiehls-eboutique-mobile-funnel-optimization",
        eyebrow: "Featured Project / Conversion Improvement",
        cardEyebrow: "Kiehl's eBoutique Case",
        title: "Mobile UI/UX Improvement",
        summary: "A Kiehl's brand.com optimization case that improved the mobile checkout journey and supported stronger digital performance during the first three months of the 2022 eBoutique campaign launch.",
        intro: "Hazel used customer-journey analysis to identify mobile checkout friction on the Kiehl's eBoutique website and turn that into clearer improvement priorities for conversion performance.",
        scopeLabel: "This page covers the Kiehl's brand.com mobile UI/UX improvement case tied to the 2022 eBoutique launch period.",
        executiveSummary: [
            "The Kiehl's eBoutique campaign needed stronger conversion performance shortly after launch, but the mobile purchase journey was carrying too much friction for high-intent users.",
            "Hazel analyzed the checkout flow, identified key leakage points, and translated the findings into clearer UX and routing improvements that simplified the path to purchase.",
            "Those improvements helped enhance digital performance on the brand.com website and supported target achievement within the first three months of the 2022 launch period.",
        ],
        achievements: [
            "Improved checkout flow and enhanced digital performance on Kiehl's brand.com website",
            "Supported the eBoutique campaign in reaching target after the first 3 months of launch in 2022",
            "Customer-journey analysis identified the highest-friction mobile steps before payment completion",
        ],
        icon: "📱",
        logoSrc: "/brands/kiehls.svg",
        logoSurface: "light",
        badges: ["Kiehl's", "Brand.com", "UI/UX Improvement"],
        highlights: [
            { value: "12 to 6", label: "Checkout steps" },
            { value: "-66%", label: "Login-stage leakage" },
            { value: "3 mo.", label: "Target support window" },
        ],
        results: [
            { value: "85.6%", label: "Intent at risk", note: "Between cart and purchase stages" },
            { value: "66.03%", label: "Critical drop-off", note: "At identification / login" },
            { value: "12 to 6", label: "Proposed journey cut", note: "Simplified mobile path" },
            { value: "Brand.com", label: "Digital performance", note: "Enhanced during launch period" },
        ],
        sections: [
            {
                title: "Business Problem",
                intro: "The issue was not traffic alone - it was friction inside the mobile buying path.",
                bullets: [
                    "The Kiehl's eBoutique website asked too much of mobile users before they could complete a purchase.",
                    "Key conversion leakage appeared before payment, especially around identification and checkout complexity.",
                    "For a newly launched eBoutique push, that friction put campaign targets at risk.",
                ],
            },
            {
                title: "How the Problem Was Solved",
                bullets: [
                    "Map the mobile flow in detail and isolate the points where user intent was being lost.",
                    "Recommend a shorter checkout journey, stronger CTA routing, and less forced friction inside the purchase path.",
                    "Treat the UX issue as a business-performance issue, not only a design issue.",
                ],
            },
            {
                title: "Execution",
                bullets: [
                    "The analysis highlighted weak promotional routing, a long purchase sequence, and heavy dependence on forced identification.",
                    "Recommendations focused on simplifying the mobile experience and reducing the barriers between product interest and payment completion.",
                    "Those changes supported stronger digital performance during the early campaign period.",
                ],
            },
            {
                title: "Why This Case Matters",
                bullets: [
                    "It shows Hazel can translate analytics into clear UX priorities with commercial logic behind them.",
                    "It also gives the portfolio a stronger example of website-performance thinking, not just media-channel thinking.",
                ],
            },
        ],
        gallery: [
            {
                src: "/brands/kiehls.svg",
                alt: "Kiehl's logo",
                caption: "The Kiehl's eBoutique mark anchors the case without overpowering the page with a giant logo treatment.",
                fit: "contain",
                surface: "light",
            },
        ],
        assets: [
            {
                title: "Mobile Funnel Optimization Deck",
                href: "/Mobile_Funnel_Optimization.pdf",
                kind: "PDF",
                note: "Support deck documenting the mobile funnel leakage and the improvement logic applied to the Kiehl's eBoutique journey.",
            },
        ],
    },
];

export const PROJECTS_BY_SLUG = PROJECTS.reduce<Record<string, Project>>((acc, project) => {
    acc[project.slug] = project;
    return acc;
}, {});
