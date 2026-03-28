"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const metrics = [
    { value: "No.1", label: "GMV since Jan'24", sub: "Across Shopee, Lazada, Tiki" },
    { value: "+9 pts", label: "ROAS Improvement", sub: "From 30 to 39 vs L3M" },
    { value: "No.1", label: "TikTok Shop since Aug'24", sub: "From 5th to 1st in 1 month" },
    { value: "+29%", label: "GMV on TikTokShop", sub: "vs. Last 3 Months" },
];

const highlights = [
    {
        icon: "🛒",
        title: "23 Campaigns & 78 Livestream Sessions",
        desc: "Managed across 7 stores on Shopee, Lazada, TikTok Shop & Tiki.",
    },
    {
        icon: "🚀",
        title: "5th → No.1 on TikTok Shop",
        desc: "Within just 1 month of local VN team taking charge, rose from 5th position to become the top seller.",
    },
    {
        icon: "📈",
        title: "8 Consecutive Months as #1",
        desc: "Maintained Huggies' top position in GMV on e-commerce platforms for 8 months straight.",
    },
    {
        icon: "🤝",
        title: "Won TikTok Shop Scope for Local Team",
        desc: "Successfully brought the TikTok Shop scope to the local Mindshare team, building client trust.",
    },
];

export default function EmployeeOfTheMonthPage() {
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
                    IMPACT Recognition
                </div>
                <h1 className="text-[32px] md:text-[44px] font-extrabold text-white leading-[1.1] tracking-tight mb-4">
                    Employee of the Month
                </h1>
                <p className="text-[16px] text-muted/80 leading-relaxed max-w-2xl mb-2">
                    <strong className="text-white">Kimberly-Clark | Mindshare</strong> — September 2024
                </p>
                <p className="text-[15px] text-slate leading-relaxed max-w-2xl">
                    Recognized for exceptional contributions and proactive work as part of the e-Commerce team (Cam Tu, Hai Anh & Hao Duyen), helping achieve outstanding results across all e-commerce platforms.
                </p>
            </motion.div>

            {/* ── Certificate Gallery ── */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.7 }}
                className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4"
            >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-bg3">
                    <Image
                        src="/GroupM_COTM_KC_Cert.jpeg"
                        alt="Kimberly-Clark COTM Certificate"
                        fill
                        className="object-contain p-3"
                    />
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-bg3">
                    <Image
                        src="/GroupM_COTM_Huggies_Cert.jpeg"
                        alt="Huggies COTM Certificate"
                        fill
                        className="object-contain p-3"
                    />
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                        src="/GroupM_COTM_Groupphoto.jpeg"
                        alt="Employee of the month group photo"
                        fill
                        className="object-cover"
                    />
                </div>
            </motion.div>

            {/* ── Metrics Grid ── */}
            <div className="mt-14">
                <h2 className="text-[14px] font-semibold text-slate uppercase tracking-wider mb-6">
                    Key Metrics
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {metrics.map((m, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.08, duration: 0.6, ease: "easeOut" }}
                            className="bg-card border border-border rounded-2xl p-5 text-center hover:border-purple/25 transition-colors duration-300"
                        >
                            <div className="text-[24px] md:text-[28px] font-extrabold text-gradient leading-none mb-1.5">
                                {m.value}
                            </div>
                            <div className="text-[12px] text-white font-semibold mb-1">
                                {m.label}
                            </div>
                            <div className="text-[11px] text-slate">
                                {m.sub}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ── Highlight Achievements ── */}
            <div className="mt-14">
                <h2 className="text-[14px] font-semibold text-slate uppercase tracking-wider mb-6">
                    Key Achievements
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {highlights.map((h, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 + i * 0.08, duration: 0.6, ease: "easeOut" }}
                            className="bg-card border border-border rounded-2xl p-5 hover:border-purple/20 transition-all duration-300"
                        >
                            <div className="text-[24px] mb-3">{h.icon}</div>
                            <h3 className="text-[14px] font-bold text-white mb-1.5">
                                {h.title}
                            </h3>
                            <p className="text-[13px] text-slate leading-relaxed">
                                {h.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ── Nomination Note ── */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6, ease: "easeOut" }}
                className="mt-14 bg-purple/5 border border-purple/15 rounded-2xl p-6 md:p-8"
            >
                <p className="text-[14px] text-muted/80 leading-relaxed italic">
                    &ldquo;I firmly believe that E-com Team&apos;s ongoing contributions and working qualities make an outstanding candidate for Employee of the Month. Their dedication and excellent results not only benefit KC team but also enhance client relationships.&rdquo;
                </p>
                <p className="text-[12px] text-purple-lt font-medium mt-3">
                    — Nomination Statement, WPP Media
                </p>
            </motion.div>
        </article>
    );
}
