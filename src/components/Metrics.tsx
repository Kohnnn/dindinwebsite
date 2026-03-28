"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { DATA } from "@/data/resume";

import { ScrollReveal } from "./ui/scroll-reveal";

export default function Metrics() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section id="impact" className="bg-bg2 py-16 md:py-24">
            <ScrollReveal>
                <div className="max-w-[1200px] mx-auto px-6 md:px-16 mb-12">
                    <div className="inline-flex items-center gap-2.5 text-[11px] font-bold text-purple-lt tracking-[2px] uppercase mb-4 before:content-[''] before:block before:w-6 before:h-0.5 before:bg-purple before:rounded-sm">
                        Impact
                    </div>
                    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <div>
                            <h2 className="text-[42px] md:text-[48px] font-extrabold text-white tracking-tight leading-[1.08]">
                                Results That <em className="italic font-light text-gradient">Speak.</em>
                            </h2>
                            <p className="text-[15px] text-slate leading-[1.8] mt-4 max-w-2xl">
                                Hover or tap to expand each result and reveal the business context behind the metric.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="max-w-[1200px] mx-auto px-6 md:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-5">
                        {DATA.metrics.map((metric, index) => {
                            const isActive = activeIndex === index;

                            return (
                                <button
                                    key={metric.label}
                                    type="button"
                                    aria-expanded={isActive}
                                    onClick={() => setActiveIndex(isActive ? null : index)}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    onMouseLeave={() => setActiveIndex(null)}
                                    className={`group relative overflow-hidden rounded-[28px] border border-border/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.02))] p-7 text-left shadow-[0_8px_30px_rgba(0,0,0,0.14)] transition-all duration-500 hover:-translate-y-1 hover:border-purple/25 hover:shadow-[0_12px_40px_rgba(101,101,253,0.14)] ${index === 0 ? "min-h-[360px]" : "min-h-[320px]"}`}
                                >
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(146,147,250,0.16),transparent_48%),radial-gradient(circle_at_bottom_right,rgba(150,110,161,0.12),transparent_38%)] opacity-80" />
                                    <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#090507]/65 to-transparent" />

                                    <div className="relative z-10 flex h-full flex-col">
                                        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-purple/15 bg-purple/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[1.6px] text-purple-lt">
                                            Highlight {index + 1}
                                        </div>

                                        <div className="mt-8 text-[60px] md:text-[72px] font-black text-white tracking-[-3px] leading-none">
                                            <span className="text-gradient">
                                                {metric.value}
                                            </span>
                                            {metric.unit ? <span className="ml-1 text-[34px] text-purple-lt">{metric.unit}</span> : null}
                                        </div>

                                        <div className="mt-4 text-[18px] font-bold text-white tracking-tight">
                                            {metric.label}
                                        </div>
                                        <p className="mt-3 text-[14px] text-muted/85 leading-[1.85] max-w-xl">
                                            {metric.desc}
                                        </p>

                                        <div className="mt-auto pt-8">
                                            <div className="flex items-center justify-between gap-4 text-[12px] font-medium text-purple-lt/90">
                                                <span>{isActive ? "Collapse detail" : "Expand detail"}</span>
                                                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isActive ? "rotate-180" : "rotate-0"}`} />
                                            </div>

                                            <div className={`grid transition-all duration-500 ease-out ${isActive ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-70 mt-2"}`}>
                                                <div className="overflow-hidden">
                                                    <div className="rounded-[22px] border border-border/40 bg-[rgba(9,5,7,0.5)] px-5 py-5 backdrop-blur-xl">
                                                        <ul className="space-y-3">
                                                            {metric.details.map((detail) => (
                                                                <li key={detail} className="flex items-start gap-3 text-[13px] text-slate leading-[1.75]">
                                                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-lt/70" />
                                                                    <span>{detail}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
