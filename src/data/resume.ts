export interface Job {
    id: string;
    date: string;
    title: string;
    company: string;
    client: string;
    bullets: string[];
    badges?: string[];
    groupId?: string;
    groupLabel?: string;
    groupNote?: string;
}

export interface Award {
    icon: string;
    slug: string;
    title: string;
    desc: string;
    href: string;
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
    role: "Digital Marketing Enthusiast",
    contact: {
        email: "duyenhoforwork@gmail.com",
        phone: "(+84) 947 892 845",
    },
    summary: "Project-led media planner turning commerce, brand, and conversion challenges into measurable growth across FMCG, beauty, and real estate.",
    marquee: [
        'TikTok Commerce', 'Integrated Media Planning',
        'Omnichannel Campaigns', 'Performance Marketing',
        'FMCG · Beauty · Real Estate', 'Project-Led Case Studies',
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
                "Developed strategic proposals for social commerce AOP, project launchings and business reviews (quarterly and half-yearly), through competitor analysis, market landscape analysis, and tailored media recommendations across Real Estate and FMCG sectors.",
                "Conducted in-depth post-buy evaluation & actionable recommendations for delivering campaign effectively and efficiently with tangible results.",
                "Collaborated with client's brand teams, media teams, and WPP regional buying team (India) to deliver holistic media-led campaigns across traditional (TV, OOH) and digital channels for Kotex new product launching campaigns in 2024.",
                "Built data collection and reporting processes by developing interactive Google reports for daily client updates and Excel/BI dashboards for in-depth campaign optimization."
            ],
            badges: ["Omnichannel", "BI Dashboards", "Cross-functional"]
        },
        {
            id: "publicis-exec",
            date: "Nov '2022 - Apr '2023",
            title: "Performance Executive",
            company: "Publicis Media Vietnam",
            client: "L'oreal Groupe Vietnam (Lancôme, Kiehl's, Shu Uemura, YSL)",
            groupId: "publicis-growth",
            groupLabel: "Publicis Media Vietnam",
            groupNote: "Promoted from intern to executive on the same luxury beauty account.",
            bullets: [
                "Surpassed GMV targets during Mega Sale events (10.10) with 115% target achieved & ROAS 125% vs KPI.",
                "Launched Lancôme & Kiehl's D2C campaign on brand-owned websites, exceeding business targets by 130% within 5 months.",
                "Conducted user journey analysis to improve UX and conversion rate of brand-owned websites, delivered insights that helped optimize checkout flow and enhanced digital performance."
            ],
            badges: ["Performance Marketing", "D2C", "UX/UI Analysis"]
        },
        {
            id: "publicis-intern",
            date: "Jun '2022 - Nov '2022",
            title: "Performance Intern",
            company: "Publicis Media Vietnam",
            client: "L'oreal Groupe Vietnam (Lancôme, Kiehl's, Shu Uemura, YSL)",
            groupId: "publicis-growth",
            groupLabel: "Publicis Media Vietnam",
            groupNote: "Promoted from intern to executive on the same luxury beauty account.",
            bullets: [
                "Joined the Publicis performance team on the L'oreal luxury portfolio and transitioned into the Performance Executive role on the same business."
            ]
        }
    ],
    skills: [
        { icon: "📊", title: "Media Planning & Buying", desc: "End-to-end strategic proposals and execution" },
        { icon: "🛍️", title: "Performance & Commerce", desc: "TikTok Shop, D2C conversions, Mega Sales" },
        { icon: "📈", title: "Data Analysis & BI", desc: "Looker Studio, Power BI, Advanced Excel" },
        { icon: "🤖", title: "AI & Automation", desc: "WPP Open AI, workflow streamlining" }
    ],
    awards: [
        {
            icon: "🏅",
            slug: "huggies-campaign-of-the-month",
            title: "Huggies Skin Perfect Campaign",
            desc: "Campaign of the Month - Jun 2024 - Mindshare. Recognition tied to the Growth in a Declining Market launch campaign.",
            href: "/projects/accelerating-growth-in-a-declining-market",
            image: "/GroupM_COTM_Huggies_Cert.jpeg",
        },
        {
            icon: "🌸",
            slug: "kotex-campaign-of-the-month",
            title: "Kotex - Blood is our Mark",
            desc: "Campaign of the Month - Apr 2024 - Mindshare. Recognition linked to the culture-led Kotex campaign.",
            href: "/projects/blood-is-our-mark",
            image: "/GroupM_COTM_KC_Cert.jpeg",
        },
        {
            icon: "🎯",
            slug: "media-master-2023",
            title: "WPP Media Master Training 2023",
            desc: "Selected exclusive participant in GroupM's 13-week fast-track program on cross-channel media planning, programmatic trading, and data-led budget allocation.",
            href: "/awards/media-master-2023",
            image: "/GroupM_MediaMaster_cert.jpeg",
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
            { text: "Top 8/742 teams - Marketing Arena by NEU (2021)", icon: "🚀" }
        ]
    }
};
