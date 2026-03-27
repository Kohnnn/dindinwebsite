export interface Job {
    id: string;
    date: string;
    title: string;
    company: string;
    client: string;
    bullets: string[];
    badges?: string[];
}

export interface AwardMetric {
    value: string;
    label: string;
}

export interface Award {
    icon: string;
    slug: string;
    title: string;
    desc: string;
    metrics: AwardMetric[];
    badges: string[];
    image: string | null;
}

export interface Certification {
    title: string;
    event: string;
    year: string;
    image: string;
}

export const DATA = {
    name: "Duyen Ho",
    fullName: "Hồ Hào Duyên (Ms.)",
    role: "Media Planner & Strategist",
    contact: {
        email: "duyenhoforwork@gmail.com",
        phone: "(+84) 947 892 845",
    },
    summary: "Results-driven marketer with a strong track record in developing and executing omnichannel campaigns; seeking a dynamic role to elevate brand presence and contribute to business growth as part of a high-performing marketing team.",
    marquee: [
        'TikTok Commerce', 'Integrated Media Planning',
        'Omnichannel Campaigns', 'Performance Marketing',
        'FMCG · Beauty · Real Estate', 'MMA Gold Award',
        'Data & BI Reporting', 'WPP Open AI Tools'
    ],
    brands: [
        "/brands/kiehls.svg",
        "/brands/kimberly.svg",
        "/brands/kotex.png",
        "/brands/loreal.svg",
        "/brands/lancome.svg",
        "/brands/masterise.png",
        "/brands/shiseido.svg",
        "/brands/anessa.webp",
        "/brands/cledepeau.svg",
        "/brands/dprogram.png",
        "/brands/elixir.webp",
        "/brands/huggies.svg",
        "/brands/nars.svg",
        "/brands/shuuemura.svg"
    ],
    experience: [
        {
            id: "wpp-manager",
            date: "Jan '2026 - Now",
            title: "Associate Manager, Media Planning",
            company: "WPP Media",
            client: "Shiseido Vietnam",
            bullets: [
                "Led media branding campaigns & proposals across 7 brands.",
                "Managed overall budget & KPI phasing aligned with marketing and media objectives.",
                "Adapted WPPOpen - an AI tool of WPP to streamline operational & daily tasks to work more effectively."
            ],
            badges: ["Strategy", "Budget Management", "AI Tools"]
        },
        {
            id: "wpp-planner",
            date: "Jun '2023 - Dec '2025",
            title: "Integrated Media Planner",
            company: "WPP Media",
            client: "Masterise Homes, Kimberly Clark Vietnam (Kotex, Huggies)",
            bullets: [
                "Developed strategic proposals for So-commerce AOP, project launchings and business reviews (quarterly and half-yearly), through competitor analysis, market landscape analysis, and tailored media recommendations across Real Estate and FMCG sectors.",
                "Conducted in-depth post-buy evaluation & actionable recommendations for delivering campaign effectively and efficiently with tangible results.",
                "Collaborated with client's brand teams, media teams, and WPP regional buying team (India) to deliver holistic media-led campaigns across traditional (TV, OOH) and digital channels for Kotex new product launching campaigns in 2024.",
                "Built data collection and reporting processes by developing interactive Google reports for daily client updates and Excel/BI dashboards for in-depth campaign optimization."
            ],
            badges: ["Omnichannel", "BI Dashboards", "Cross-functional"]
        },
        {
            id: "publicis-exec",
            date: "Sep '2022 - Apr '2023",
            title: "Performance Executive",
            company: "Publicis Media Vietnam",
            client: "L'oreal Groupe Vietnam (Lancôme, Kiehl's, Shu Uemura, YSL)",
            bullets: [
                "Surpassed GMV targets during Mega Sale events (10.10) with 115% target achieved & ROAS 125% vs KPI.",
                "Launched Lancôme & Kiehl's D2C campaign on brand-owned websites, exceeding business targets by 130% within 5 months.",
                "Conducted user journey analysis to improve UX and conversion rate of brand-owned websites, delivered insights that helped optimize checkout flow and enhanced digital performance."
            ],
            badges: ["Performance Marketing", "D2C", "UX/UI Analysis"]
        }
    ],
    metrics: [
        { value: 287, unit: "%", label: "GMV Growth", desc: "REACHING #1 BEST-SELLING BRAND (official store)" },
        { value: 130, unit: "%", label: "Over Target", desc: "For Lancôme & Kiehl's D2C campaign on brand websites." },
        { value: 125, unit: "%", label: "ROAS vs KPI", desc: "During L'Oréal Mega Sale events (10.10)." },
        { value: 15, unit: "%", label: "Traffic Inc.", desc: "Increased qualified traffic to Masterise Homes projects." },
        { value: "Gold Winner", unit: "", label: "Vietnam MMA Smarties Awards 2024", desc: "Huggies Skin Perfect – Cross Digital Media Marketing" },
        { value: 30, unit: "%", label: "Exceeded Target", desc: "Trial rate for Kotex new product in 2024." }
    ],
    skills: [
        { icon: "📊", title: "Media Planning & Buying", desc: "End-to-end strategic proposals and execution" },
        { icon: "🛍️", title: "Performance & Commerce", desc: "TikTok Shop, D2C conversions, Mega Sales" },
        { icon: "📈", title: "Data Analysis & BI", desc: "Looker Studio, Power BI, Advanced Excel" },
        { icon: "🤖", title: "AI & Automation", desc: "WPP Open AI, workflow streamlining" }
    ],
    awards: [
        {
            icon: "🏆",
            slug: "mma-gold-2024",
            title: "Gold Winner — MMA Smarties Awards 2024",
            desc: "Huggies Skin Perfect – Growth in a Declining Market. Cross Digital Media Marketing category.",
            metrics: [
                { value: "+135%", label: "GMV Growth" },
                { value: "No.1", label: "E-Commerce Brand" },
                { value: "+58%", label: "ROAS YoY" },
            ],
            badges: ["E-Commerce", "TikTok Shop", "FMCG"],
            image: "/GroupM_MMA_awards.jpeg",
        },
        {
            icon: "⭐",
            slug: "employee-of-the-month",
            title: "Employee of the Month — Sept 2024",
            desc: "WPP Media — Kimberly-Clark / Mindshare. Recognized for maintaining Huggies' #1 GMV on e-commerce for 8 consecutive months.",
            metrics: [
                { value: "No.1", label: "GMV since Jan'24" },
                { value: "+29%", label: "GMV TikTokShop" },
                { value: "23", label: "Campaigns Ran" },
            ],
            badges: ["Leadership", "E-Commerce", "Performance"],
            image: "/GroupM_COTM_KC_Cert.jpeg",
        },
        {
            icon: "🎯",
            slug: "media-master-2023",
            title: "WPP Media Master Training 2023",
            desc: "Selected exclusive participant for the intensive 13-week fast-track program on cross-channel media planning.",
            metrics: [
                { value: "13", label: "Weeks Intensive" },
                { value: "3", label: "Showcase Projects" },
                { value: "+25%", label: "ROAS Increase" },
            ],
            badges: ["Programmatic", "Media Planning", "Analytics"],
            image: "/GroupM_MediaMaster_cert.jpeg",
        },
        {
            icon: "📱",
            slug: "ux-funnel-optimization",
            title: "Mobile UX Funnel Optimization",
            desc: "Identified massive conversion leakage on brand.com — reduced 12-step checkout to 6 steps, eliminating 66% login drop-off.",
            metrics: [
                { value: "12→6", label: "Steps Reduced" },
                { value: "-66%", label: "Drop-off Fixed" },
                { value: "+85.6%", label: "Intent Recaptured" },
            ],
            badges: ["UX/UI", "Conversion", "Data Analytics"],
            image: null,
        },
    ] as Award[],
    certifications: [
        {
            title: "2nd Runner Up",
            event: "Company Insider Business Case",
            year: "2021",
            image: "/Case_CIBizcase2021_Cert.jpeg",
        },
        {
            title: "Top 4 Finalist",
            event: "The Colorful Minds by UEH-ISB",
            year: "2021",
            image: "/Case_colourfulminds2021_Cert.jpeg",
        },
        {
            title: "Top 8 / 742 Teams",
            event: "Marketing Arena by NEU",
            year: "2021",
            image: "/Case_marketingarena2021_Cert.jpeg",
        },
    ] as Certification[],
    education: {
        school: "University of Economics Ho Chi Minh City (UEH-ISB)",
        degree: "Bachelor of Business Administration",
        desc: "Active participant in elite academic programs and high-stakes national marketing competitions.",
        achievements: [
            { text: "Top 10% of Students - ISB Leadership Program (2023)", icon: "🎓" },
            { text: "2nd Runner Up - Company Insider Business Case (2021)", icon: "🥈" },
            { text: "Top 4 Finalist - The Colorful Mind by UEH-ISB (2021)", icon: "💡" },
            { text: "Top 8/742 teams - Marketing on Air by NEU (2021)", icon: "🚀" }
        ]
    }
};
