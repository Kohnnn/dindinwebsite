"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";

const results = [
    { value: "VND 608bn", label: "Paid GMV Achieved", sub: "+135% vs 2023" },
    { value: "No.1", label: "E-Commerce Brand", sub: "Shopee, Lazada, Tiki" },
    { value: "+58%", label: "ROAS Growth", sub: "Pure e-commerce YoY" },
    { value: "+231%", label: "TikTok Shop H2 vs H1", sub: "Social commerce growth" },
    { value: "30%", label: "Premium Contribution", sub: "Up from 14% in 2023" },
    { value: "USD 36K", label: "Bonus Achieved", sub: "Highest GMV milestone" },
];

const strategy = [
    {
        phase: "Challenge",
        icon: "⚡",
        points: [
            "Huggies experienced slower growth vs 18% category growth in 2023",
            "28% market share, trailing behind main competitor Bobby",
            "Late entrant to social commerce — no TikTok Shop presence while competitors scaled",
            "Mom & Baby category saw 48% GMV growth on TikTok Shop",
        ],
    },
    {
        phase: "Strategy",
        icon: "🎯",
        points: [
            "Enhance E-Commerce Dominance — maintain leadership on Shopee, Lazada, Tiki",
            "Accelerate on TikTok Shop — capture Gen Z first-time mom demographic",
            "Created 'Super Huggies Day' to drive GMV between Mega campaigns",
            "Leveraged Meta CPAS, Criteo, Google Ads for offsite traffic funneling",
        ],
    },
    {
        phase: "TikTok Execution",
        icon: "🚀",
        points: [
            "H1 2024: Build phase — broad audience targeting using 3rd party data",
            "H2 2024: Scale phase — retargeting + lookalike audiences",
            "Positioned Skin Perfect as best-selling SKU (43% of monthly GMV)",
            "Transformed from latecomer to front-runner within 8 months",
        ],
    },
];

export default function MMAGoldPage() {
    return (
        <article>
            {/* ── Hero ── */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <div className="flex items-center gap-2 text-[11px] font-medium text-purple-lt uppercase tracking-widest mb-4">
                    <span className="w-6 h-[1px] bg-purple-lt/40" />
                    MMA Smarties Awards 2024
                </div>
                <h1 className="text-[32px] md:text-[44px] font-extrabold text-white leading-[1.1] tracking-tight mb-4">
                    Gold Winner
                </h1>
                <p className="text-[18px] text-muted/80 font-medium mb-2">
                    Huggies Skin Perfect: Growth in a Declining Market
                </p>
                <p className="text-[15px] text-slate leading-relaxed max-w-2xl">
                    Kimberly Clark and Mindshare Vietnam — Cross Digital Media Marketing. E-commerce category domination through strategic platform prioritization and data-driven budget allocation.
                </p>
            </motion.div>

            {/* ── Award Photo ── */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.7 }}
                className="mt-10 relative aspect-[16/9] rounded-2xl overflow-hidden"
            >
                <Image
                    src="/GroupM_MMA_awards.jpeg"
                    alt="MMA Smarties Awards 2024 Ceremony"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090507]/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block text-[11px] font-semibold text-white bg-purple/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        🏆 Gold Winner — Vietnam MMA Smarties 2024
                    </span>
                </div>
            </motion.div>

            {/* ── Results Grid ── */}
            <div className="mt-14">
                <h2 className="text-[14px] font-semibold text-slate uppercase tracking-wider mb-6">
                    Campaign Results
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {results.map((r, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.08, duration: 0.6, ease: "easeOut" }}
                            className="bg-card border border-border rounded-2xl p-5 text-center hover:border-purple/25 transition-colors duration-300"
                        >
                            <div className="text-[22px] md:text-[26px] font-extrabold text-gradient leading-none mb-1.5">
                                {r.value}
                            </div>
                            <div className="text-[12px] text-white font-semibold mb-1">
                                {r.label}
                            </div>
                            <div className="text-[11px] text-slate">
                                {r.sub}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ── Strategic Breakdown ── */}
            <div className="mt-14">
                <h2 className="text-[14px] font-semibold text-slate uppercase tracking-wider mb-6">
                    Strategic Breakdown
                </h2>
                <div className="space-y-5">
                    {strategy.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 + i * 0.1, duration: 0.6, ease: "easeOut" }}
                            className="bg-card border border-border rounded-2xl p-6 hover:border-purple/20 transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-[22px]">{s.icon}</span>
                                <h3 className="text-[15px] font-bold text-white">
                                    {s.phase}
                                </h3>
                            </div>
                            <ul className="space-y-2.5">
                                {s.points.map((p, pi) => (
                                    <li
                                        key={pi}
                                        className="flex items-start gap-2.5 text-[13px] text-slate leading-relaxed"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-purple-lt/50 mt-2 shrink-0" />
                                        {p}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ── Key Insights ── */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
                className="mt-14 bg-purple/5 border border-purple/15 rounded-2xl p-6 md:p-8"
            >
                <h2 className="text-[14px] font-semibold text-white mb-4">
                    Consumer Insights That Drove the Strategy
                </h2>
                <div className="space-y-3">
                    <div className="flex items-start gap-3">
                        <span className="text-[14px]">📱</span>
                        <p className="text-[13px] text-muted/70 leading-relaxed">
                            <strong className="text-muted">Channel Shifts:</strong> E-commerce and Mom & Baby stores are the only growing retail channels — online shopping behavior shift is accelerating.
                        </p>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="text-[14px]">🎬</span>
                        <p className="text-[13px] text-muted/70 leading-relaxed">
                            <strong className="text-muted">Shoppertainment:</strong> The explosive rise of &ldquo;shoppertainment&rdquo; via TikTok Shop and Shopee Live created new conversion opportunities.
                        </p>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="text-[14px]">👶</span>
                        <p className="text-[13px] text-muted/70 leading-relaxed">
                            <strong className="text-muted">Gen Z First-Time Moms:</strong> Highest demographic match rate (&gt;87%) with first-time mothers — once they choose a brand, they rarely switch.
                        </p>
                    </div>
                </div>
            </motion.div>

            <div className="mt-14">
                <h2 className="text-[14px] font-semibold text-slate uppercase tracking-wider mb-6">
                    Supporting Assets
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a
                        href="/MSExNEXUS_Huggies WOW Award 2025.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="group bg-card border border-border rounded-2xl p-5 hover:border-purple/20 transition-all duration-300"
                    >
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 rounded-2xl bg-purple/10 text-purple-lt flex items-center justify-center">
                                    <FileText className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-[14px] font-bold text-white">Huggies WOW Award 2025</div>
                                    <div className="text-[11px] uppercase tracking-[1.2px] text-purple-lt mt-1">PDF</div>
                                </div>
                            </div>
                            <ExternalLink className="w-4 h-4 text-slate transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>
                        <p className="text-[13px] text-slate leading-relaxed mt-4">
                            Added as supporting proof for the extended Huggies impact story beyond the award itself.
                        </p>
                    </a>
                    <a
                        href="https://www.mmaglobal.com/smarties-2024/finalists/winners/region:10"
                        target="_blank"
                        rel="noreferrer"
                        className="group bg-card border border-border rounded-2xl p-5 hover:border-purple/20 transition-all duration-300"
                    >
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 rounded-2xl bg-purple/10 text-purple-lt flex items-center justify-center">
                                    <ExternalLink className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-[14px] font-bold text-white">MMA Smarties Winners Page</div>
                                    <div className="text-[11px] uppercase tracking-[1.2px] text-purple-lt mt-1">External</div>
                                </div>
                            </div>
                            <ExternalLink className="w-4 h-4 text-slate transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>
                        <p className="text-[13px] text-slate leading-relaxed mt-4">
                            Public-facing confirmation of the Vietnam MMA Smarties 2024 result.
                        </p>
                    </a>
                </div>
            </div>
        </article>
    );
}
