"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Award } from "lucide-react";
import { DATA } from "@/data/resume";
import { ScrollReveal } from "./ui/scroll-reveal";

export default function Awards() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const [lightboxImg, setLightboxImg] = useState<string | null>(null);

    const toggleExpand = (i: number) => {
        setExpandedIndex(expandedIndex === i ? null : i);
    };

    return (
        <section
            id="recognition"
            className="section py-16 md:py-24 px-6 md:px-16 max-w-[1200px] mx-auto"
        >
            {/* ── Section Header ── */}
            <ScrollReveal>
                <div className="flex items-center gap-3 mb-10">
                    <div className="w-10 h-10 rounded-xl bg-purple/10 flex items-center justify-center">
                        <Award className="w-5 h-5 text-purple-lt" />
                    </div>
                    <h3 className="text-[20px] font-extrabold text-white">
                        Honors & Recognition
                    </h3>
                </div>
            </ScrollReveal>

            {/* ── Award Cards Grid ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {DATA.awards.map((award, i) => (
                    <ScrollReveal key={i} delay={0.08 * i} className="group">
                        <div
                            className={`
                                relative bg-card border rounded-[20px] overflow-hidden
                                transition-all duration-500 ease-out
                                ${expandedIndex === i
                                    ? "border-purple/30 bg-[rgba(101,101,253,0.06)] shadow-[0_8px_40px_rgba(101,101,253,0.12)]"
                                    : "border-border hover:border-[rgba(101,101,253,0.2)] hover:bg-[rgba(101,101,253,0.03)]"
                                }
                            `}
                        >
                            {/* ── Card Main Content ── */}
                            <div className="p-6">
                                <div className="flex items-start gap-4">
                                    {/* Thumbnail Image or Icon */}
                                    {award.image ? (
                                        <button
                                            onClick={() => setLightboxImg(award.image)}
                                            className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden shrink-0 group/thumb cursor-pointer"
                                        >
                                            <Image
                                                src={award.image}
                                                alt={award.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover/thumb:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300" />
                                        </button>
                                    ) : (
                                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-bg2 flex items-center justify-center text-[28px] shrink-0 shadow-inner">
                                            {award.icon}
                                        </div>
                                    )}

                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-[15px] font-bold text-white mb-1.5 leading-tight">
                                            {award.title}
                                        </h4>
                                        <p className="text-[13px] text-slate leading-[1.6] mb-3">
                                            {award.desc}
                                        </p>

                                        {/* ── Metric Pills ── */}
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {award.metrics.map((m, mi) => (
                                                <div
                                                    key={mi}
                                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple/8 border border-purple/15"
                                                >
                                                    <span className="text-[14px] font-bold text-gradient">
                                                        {m.value}
                                                    </span>
                                                    <span className="text-[11px] text-slate font-medium uppercase tracking-wider">
                                                        {m.label}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* ── Badge Tags ── */}
                                        <div className="flex flex-wrap gap-1.5">
                                            {award.badges.map((badge, bi) => (
                                                <span
                                                    key={bi}
                                                    className="text-[11px] font-medium text-purple-lt bg-purple/10 px-2.5 py-1 rounded-full"
                                                >
                                                    {badge}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* ── Action Row ── */}
                                <div className="flex items-center justify-between mt-5 pt-4 border-t border-border/30">
                                    <button
                                        onClick={() => toggleExpand(i)}
                                        className="flex items-center gap-1.5 text-[12px] font-medium text-slate hover:text-purple-lt transition-colors duration-300 cursor-pointer"
                                    >
                                        <motion.span
                                            animate={{ rotate: expandedIndex === i ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown className="w-4 h-4" />
                                        </motion.span>
                                        {expandedIndex === i ? "Less Details" : "See Details"}
                                    </button>

                                    <Link
                                        href={`/awards/${award.slug}`}
                                        className="flex items-center gap-1.5 text-[12px] font-semibold text-purple-lt hover:text-white transition-colors duration-300 group/link"
                                    >
                                        View Recognition
                                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                                    </Link>
                                </div>
                            </div>

                            {/* ── Expandable Details ── */}
                            <AnimatePresence>
                                {expandedIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6">
                                            <div className="bg-bg2/60 rounded-2xl p-5 backdrop-blur-sm">
                                                {/* Expanded Metrics in a bigger format */}
                                                <div className="grid grid-cols-3 gap-4 mb-4">
                                                    {award.metrics.map((m, mi) => (
                                                        <div key={mi} className="text-center">
                                                            <div className="text-[22px] md:text-[26px] font-extrabold text-gradient leading-none mb-1">
                                                                {m.value}
                                                            </div>
                                                            <div className="text-[10px] text-slate uppercase tracking-widest font-medium">
                                                                {m.label}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <p className="text-[13px] text-muted/70 leading-relaxed text-center">
                                                    Open the full page for context, supporting proof, and the business impact behind this recognition.
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </ScrollReveal>
                ))}
            </div>

            {/* ── Lightbox Modal ── */}
            <AnimatePresence>
                {lightboxImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/80 backdrop-blur-md cursor-pointer p-6"
                        onClick={() => setLightboxImg(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="relative max-w-[90vw] max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={lightboxImg}
                                alt="Certificate"
                                width={1200}
                                height={800}
                                className="object-contain max-h-[85vh] w-auto rounded-2xl"
                            />
                            <button
                                onClick={() => setLightboxImg(null)}
                                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-black/80 transition-all duration-300 cursor-pointer"
                            >
                                ✕
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
