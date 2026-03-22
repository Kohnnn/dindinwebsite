"use client";

import { DATA } from "@/data/resume";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "./ui/scroll-reveal";

export default function Experience() {
    const [activeJobId, setActiveJobId] = useState(DATA.experience[0].id);
    const activeJob = DATA.experience.find(j => j.id === activeJobId) || DATA.experience[0];

    return (
        <section id="work" className="section py-16 md:py-24 px-6 md:px-16 max-w-[1200px] mx-auto">
            <ScrollReveal>
                <div className="inline-flex items-center gap-2.5 text-[11px] font-bold text-purple-lt tracking-[2px] uppercase mb-4 before:content-[''] before:block before:w-6 before:h-0.5 before:bg-purple before:rounded-sm">
                    Experience
                </div>
                <h2 className="text-[48px] font-extrabold text-white tracking-tight leading-[1.1] mb-12">
                    Career <em className="italic font-light text-purple-lt">Journey.</em>
                </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="grid grid-cols-1 md:grid-cols-[280px_1fr] border border-border rounded-3xl overflow-hidden bg-bg3">
                {/* Sidebar */}
                <div className="border-r border-border p-2 bg-bg3 flex flex-col gap-0.5">
                    {DATA.experience.map((job) => (
                        <button
                            key={job.id}
                            onClick={() => setActiveJobId(job.id)}
                            className={cn(
                                "text-left p-4 md:p-5 rounded-2xl transition-colors duration-300",
                                activeJobId === job.id ? "bg-purple/10" : "hover:bg-purple/5"
                            )}
                        >
                            <div className="text-[11px] font-semibold text-purple uppercase tracking-[0.8px] mb-1">{job.date}</div>
                            <div className={cn("text-[14px] font-bold mb-0.5 transition-colors", activeJobId === job.id ? "text-white" : "text-muted")}>
                                {job.title}
                            </div>
                            <div className="text-[12px] text-slate">{job.company}</div>
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 relative overflow-hidden min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeJob.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="h-full flex flex-col"
                        >
                            <h3 className="text-[24px] font-extrabold text-white tracking-tight mb-2">
                                {activeJob.title} <span className="text-purple">@ {activeJob.company}</span>
                            </h3>

                            <div className="inline-flex items-center gap-1.5 bg-[rgba(150,110,161,0.12)] border border-[rgba(150,110,161,0.2)] text-mauve px-3.5 py-1.5 rounded-full text-xs font-semibold w-fit mb-7">
                                Client: {activeJob.client}
                            </div>

                            <ul className="flex flex-col gap-3.5 list-none">
                                {activeJob.bullets.map((bullet, i) => (
                                    <li key={i} className="flex gap-3.5 text-[14px] text-muted leading-[1.7]">
                                        <span className="w-1.5 h-1.5 rounded-full bg-purple shrink-0 mt-2" />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>

                            {activeJob.badges && (
                                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border mt-8">
                                    {activeJob.badges.map((badge, i) => (
                                        <span key={i} className="inline-flex items-center gap-1.5 bg-purple/10 border border-purple/20 text-purple-lt px-3.5 py-1.5 rounded-full text-[12px] font-semibold">
                                            {badge}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </ScrollReveal>
        </section>
    );
}
