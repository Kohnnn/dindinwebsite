"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const modules = [
    {
        icon: "📊",
        title: "Media Planning & Strategy",
        desc: "Formulated comprehensive media flowcharts and forecasted reach, frequency, and CPA. Modeled optimal budget allocations across traditional (TV, OOH) and digital ecosystems.",
    },
    {
        icon: "⚡",
        title: "Programmatic & Performance Trading",
        desc: "Executed real-time bidding (RTB) strategies via DSPs. Continuously monitored and optimized bid prices to reduce CPC and CPM.",
    },
    {
        icon: "📈",
        title: "Data Analytics & Market Intelligence",
        desc: "Extracted raw campaign data to build performance dashboards. Analyzed audience behavior and conversion metrics to provide actionable, data-backed recommendations.",
    },
];

const showcases = [
    {
        title: "Portfolio Reallocation & ROAS Enhancement",
        quote: "Analyzed daily performance metrics for a major FMCG client to identify underperforming ad placements. Strategically reallocated a VND 15bn quarterly budget away from static display toward high-yield programmatic video and retail media.",
        result: "+25% ROAS",
        budget: "VND 15bn",
    },
    {
        title: "Data-Driven Performance Optimization",
        quote: "Designed and executed an A/B testing framework across Meta and TikTok for a localized product launch. Managed a VND 5bn digital-only budget, successfully reducing the average CPC.",
        result: "-18% CPC, +15% CVR",
        budget: "VND 5bn",
    },
    {
        title: "Cross-Channel Integration & Execution",
        quote: "Constructed a synchronized media flowchart combining traditional OOH advertising with digital programmatic retargeting. Monitored delivery across a combined campaign.",
        result: "+30% Brand Awareness",
        budget: "USD 1mn",
    },
];

const tools = [
    {
        category: "Analytics & Visualization",
        items: ["WPP Open", "Google Analytics", "Looker Studio", "Excel (Advanced Modeling)"],
    },
    {
        category: "Media Buying Platforms",
        items: ["Google Ads", "Meta Ads Manager", "TikTok Ads", "The Trade Desk", "Xaxis"],
    },
];

export default function MediaMasterPage() {
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
                    Professional Development
                </div>
                <h1 className="text-[32px] md:text-[44px] font-extrabold text-white leading-[1.1] tracking-tight mb-4">
                    WPP Media Master Training 2023
                </h1>
                <p className="text-[16px] text-muted/80 leading-relaxed max-w-2xl mb-2">
                    <strong className="text-white">Selected exclusive participant</strong> for GroupM&apos;s intensive 13-week fast-track program.
                </p>
                <p className="text-[15px] text-slate leading-relaxed max-w-2xl">
                    Focused on cross-channel media planning, programmatic trading, and data-driven budget allocation for managing and optimizing large-scale media investments for enterprise clients.
                </p>
            </motion.div>

            {/* ── Photos ── */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.7 }}
                className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                        src="/GroupM_MediaMaster_cert.jpeg"
                        alt="Media Master Certificate"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                        src="/GroupM_MediaMaster_Groupphoto.jpeg"
                        alt="Media Master Group Photo"
                        fill
                        className="object-cover"
                    />
                </div>
            </motion.div>

            {/* ── Core Modules ── */}
            <div className="mt-14">
                <h2 className="text-[14px] font-semibold text-slate uppercase tracking-wider mb-6">
                    Core Modules
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {modules.map((m, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: "easeOut" }}
                            className="bg-card border border-border rounded-2xl p-5 hover:border-purple/20 transition-all duration-300"
                        >
                            <div className="text-[24px] mb-3">{m.icon}</div>
                            <h3 className="text-[14px] font-bold text-white mb-2">
                                {m.title}
                            </h3>
                            <p className="text-[13px] text-slate leading-relaxed">
                                {m.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ── Project Showcases ── */}
            <div className="mt-14">
                <h2 className="text-[14px] font-semibold text-slate uppercase tracking-wider mb-6">
                    Quantified Project Showcases
                </h2>
                <div className="space-y-4">
                    {showcases.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 + i * 0.1, duration: 0.6, ease: "easeOut" }}
                            className="bg-card border border-border rounded-2xl p-6 hover:border-purple/20 transition-all duration-300"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                                <h3 className="text-[14px] font-bold text-white">
                                    {s.title}
                                </h3>
                                <div className="flex items-center gap-2">
                                    <span className="text-[11px] font-medium text-purple-lt bg-purple/10 px-2.5 py-1 rounded-full">
                                        {s.budget}
                                    </span>
                                    <span className="text-[11px] font-bold text-gradient bg-purple/8 px-2.5 py-1 rounded-full border border-purple/20">
                                        {s.result}
                                    </span>
                                </div>
                            </div>
                            <p className="text-[13px] text-slate leading-relaxed italic">
                                &ldquo;{s.quote}&rdquo;
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ── Technical Toolkit ── */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6, ease: "easeOut" }}
                className="mt-14 bg-purple/5 border border-purple/15 rounded-2xl p-6 md:p-8"
            >
                <h2 className="text-[14px] font-semibold text-white mb-5">
                    Technical Toolkit
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tools.map((t, i) => (
                        <div key={i}>
                            <h3 className="text-[12px] text-purple-lt font-semibold uppercase tracking-wider mb-3">
                                {t.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {t.items.map((item, ii) => (
                                    <span
                                        key={ii}
                                        className="text-[12px] text-muted/70 bg-bg2/80 px-3 py-1.5 rounded-full border border-border/50"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </article>
    );
}
