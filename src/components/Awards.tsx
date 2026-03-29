"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
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
            className="section py-16 md:py-24 px-6 md:px-16 max-w-[1100px] mx-auto"
        >
            {/* ── Section Header ── */}
            <ScrollReveal>
                <div className="mb-10 text-center">
                    <div className="inline-flex items-center gap-2.5 text-[11px] font-bold text-purple-lt tracking-[2px] uppercase mb-4 before:content-[''] before:block before:w-6 before:h-0.5 before:bg-purple before:rounded-sm">
                        Recognition
                    </div>
                    <h2 className="text-[42px] md:text-[48px] font-extrabold text-white tracking-tight leading-[1.08]">
                        Recognition & <em className="italic font-light text-gradient">Professional Development.</em>
                    </h2>
                </div>
            </ScrollReveal>

            {/* ── Award Cards Grid ── */}
            <div className="grid grid-cols-1 max-w-[560px] gap-5 mx-auto">
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
                            {award.image ? (
                                <button
                                    onClick={() => setLightboxImg(award.image)}
                                    className="relative block w-full aspect-[16/9] overflow-hidden"
                                >
                                    <Image
                                        src={award.image}
                                        alt={award.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#090507]/60 via-transparent to-transparent" />
                                </button>
                            ) : null}

                            {/* ── Card Main Content ── */}
                            <div className="p-6">
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-[18px] font-bold text-white mb-1.5 leading-tight">
                                        {award.title}
                                    </h4>
                                    <p className="text-[13px] text-slate leading-[1.6] mb-4">
                                        {award.desc}
                                    </p>

                                    <div className="grid grid-cols-3 gap-3 mb-4">
                                        {award.metrics.map((m, mi) => (
                                            <div key={mi} className="rounded-[16px] border border-purple/15 bg-purple/8 px-3 py-3 text-center">
                                                <div className="text-[22px] font-extrabold text-gradient leading-none mb-1.5">
                                                    {m.value}
                                                </div>
                                                <div className="text-[11px] text-slate font-medium uppercase tracking-[1.1px] leading-[1.4]">
                                                    {m.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

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
                        className="fixed inset-0 z-[10000] flex items-center justify-center bg-[rgba(9,5,7,0.74)] backdrop-blur-md cursor-pointer p-6"
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
