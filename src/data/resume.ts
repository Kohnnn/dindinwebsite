export interface Job {
    id: string;
    date: string;
    title: string;
    company: string;
    client: string;
    bullets: string[];
    badges?: string[];
}

export const DATA = {
    name: "Duyen Ho",
    fullName: "Hồ Hao Duyên (Ms.)",
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
        { value: 287, unit: "%", label: "GMV Growth", desc: "For Huggies on TikTok Shop, reaching #1 best-selling status." },
        { value: 130, unit: "%", label: "Over Target", desc: "For Lancôme & Kiehl's D2C campaign on brand websites." },
        { value: 125, unit: "%", label: "ROAS vs KPI", desc: "During L'Oréal Mega Sale events (10.10)." },
        { value: 15, unit: "%", label: "Traffic Inc.", desc: "Increased qualified traffic to Masterise Homes projects." },
        { value: 7, unit: "", label: "Brands Managed", desc: "Led branding campaigns across the Shiseido portfolio." },
        { value: 100, unit: "%", label: "Omnichannel", desc: "Integration across TV, OOH, and advanced digital." }
    ],
    skills: [
        { icon: "📊", title: "Media Planning & Buying", desc: "End-to-end strategic proposals and execution" },
        { icon: "🛍️", title: "Performance & Commerce", desc: "TikTok Shop, D2C conversions, Mega Sales" },
        { icon: "📈", title: "Data Analysis & BI", desc: "Looker Studio, Power BI, Advanced Excel" },
        { icon: "🤖", title: "AI & Automation", desc: "WPP Open AI, workflow streamlining" }
    ],
    awards: [
        { icon: "🏆", title: "Gold Winner, APAC MMA Smarties 2024", desc: "Brand Purpose Category" },
        { icon: "⭐", title: "Employee of the Month", desc: "September 2024 @ WPP Media" },
        { icon: "🎯", title: "WPP Media Master Training 2023", desc: "Selected exclusive participant" }
    ],
    education: {
        school: "University of Economics Ho Chi Minh City (UEH-ISB)",
        degree: "Bachelor of Business Administration",
        desc: "Active participant in elite academic programs and high-stakes national marketing competitions.",
        achievements: [
            { text: "Top 30% of Students - ISB Leadership Program (2023)", icon: "🎓" },
            { text: "2nd Runner Up - Company Insider Business Case (2021)", icon: "🥈" },
            { text: "Top 4 Finalist - The Colorful Mind by UEH-ISB (2021)", icon: "💡" },
            { text: "Top 8/742 teams - Marketing on Air by NEU (2021)", icon: "🚀" }
        ]
    }
};
