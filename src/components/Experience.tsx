"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { DATA, type Job } from "@/data/resume";
import { cn } from "@/lib/utils";

import { ScrollReveal } from "./ui/scroll-reveal";

type ExperienceSidebarItem =
    | {
        type: "job";
        job: Job;
    }
    | {
        type: "group";
        id: string;
        label: string;
        note?: string;
        jobs: Job[];
    };

const buildSidebarItems = (jobs: Job[]): ExperienceSidebarItem[] => {
    return jobs.reduce<ExperienceSidebarItem[]>((items, job) => {
        if (!job.groupId) {
            items.push({ type: "job", job });
            return items;
        }

        const previousItem = items[items.length - 1];

        if (previousItem?.type === "group" && previousItem.id === job.groupId) {
            previousItem.jobs.push(job);
            previousItem.note = previousItem.note ?? job.groupNote;
            return items;
        }

        items.push({
            type: "group",
            id: job.groupId,
            label: job.groupLabel ?? job.company,
            note: job.groupNote,
            jobs: [job],
        });

        return items;
    }, []);
};

export default function Experience() {
    const [activeJobId, setActiveJobId] = useState(DATA.experience[0].id);
    const activeJob = DATA.experience.find((job) => job.id === activeJobId) || DATA.experience[0];
    const sidebarItems = buildSidebarItems(DATA.experience);

    const renderJobButton = (job: Job, variant: "default" | "grouped" = "default") => {
        const isActive = activeJobId === job.id;

        if (variant === "grouped") {
            return (
                <button
                    key={job.id}
                    onClick={() => setActiveJobId(job.id)}
                    data-telemetry-event="experience_role_selected"
                    data-telemetry-label={job.title}
                    data-telemetry-context={job.id}
                    data-telemetry-section="experience"
                    className={cn(
                        "relative rounded-xl border pl-8 pr-3 py-3 text-left transition-colors duration-300",
                        isActive
                            ? "border-purple/30 bg-purple/12"
                            : "border-transparent bg-white/[0.02] hover:bg-purple/5"
                    )}
                >
                    <span
                        className={cn(
                            "absolute left-3 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border",
                            isActive ? "border-purple bg-purple shadow-[0_0_0_4px_rgba(150,110,161,0.14)]" : "border-purple/50 bg-bg3"
                        )}
                    />
                    <div className="text-[10px] font-semibold uppercase tracking-[0.8px] text-purple">{job.date}</div>
                    <div className={cn("mt-1 text-[13px] font-bold transition-colors", isActive ? "text-white" : "text-muted")}>
                        {job.title}
                    </div>
                </button>
            );
        }

        return (
                <button
                    key={job.id}
                    onClick={() => setActiveJobId(job.id)}
                    data-telemetry-event="experience_role_selected"
                    data-telemetry-label={job.title}
                    data-telemetry-context={job.id}
                    data-telemetry-section="experience"
                    className={cn(
                        "w-full text-left p-4 md:p-5 rounded-2xl transition-colors duration-300 flex flex-col justify-center",
                        isActive ? "bg-purple/10" : "hover:bg-purple/5"
                    )}
                >
                <div className="text-[11px] font-semibold text-purple uppercase tracking-[0.8px] mb-1">{job.date}</div>
                <div className={cn("text-[14px] font-bold mb-0.5 transition-colors", isActive ? "text-white" : "text-muted")}>
                    {job.title}
                </div>
                <div className="text-[12px] text-slate">{job.company}</div>
            </button>
        );
    };

    return (
        <section id="work" data-telemetry-section-view="experience" className="section py-12 md:py-24 px-6 md:px-16 max-w-[1100px] mx-auto">
            <ScrollReveal>
                <div className="inline-flex items-center gap-2.5 text-[11px] font-bold text-purple-lt tracking-[2px] uppercase mb-4 before:content-[''] before:block before:w-6 before:h-0.5 before:bg-purple before:rounded-sm">
                    Experience
                </div>
                <h2 className="text-[48px] font-extrabold text-white tracking-tight leading-[1.1] mb-12">
                    Work <em className="italic font-light text-purple-lt">Experience.</em>
                </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="grid grid-cols-1 md:grid-cols-[300px_1fr] border border-border rounded-[20px] overflow-hidden bg-bg3">
                {/* Sidebar */}
                <div className="border-b md:border-b-0 md:border-r border-border p-4 bg-bg3 flex flex-col gap-2 md:gap-2 relative z-10 w-full">
                    {sidebarItems.map((item) => {
                        if (item.type === "job") {
                            return renderJobButton(item.job);
                        }

                        const isGroupActive = item.jobs.some((job) => job.id === activeJobId);

                        return (
                            <div
                                key={item.id}
                                className={cn(
                                    "w-full md:min-w-0 rounded-2xl border p-2.5 md:p-3",
                                    isGroupActive
                                        ? "border-purple/25 bg-[linear-gradient(180deg,rgba(150,110,161,0.12),rgba(150,110,161,0.04))]"
                                        : "border-border bg-white/[0.02]"
                                )}
                            >
                                <div className="px-2 pb-2">
                                    <div className="text-[10px] font-medium uppercase tracking-[1.1px] text-purple-lt">Career Path</div>
                                    <div className="mt-1 text-[13px] font-bold text-white">{item.label}</div>
                                    {item.note && <div className="mt-1 text-[11px] leading-relaxed text-slate">{item.note}</div>}
                                </div>

                                <div className="relative flex flex-col gap-1.5 before:absolute before:bottom-4 before:left-4 before:top-4 before:w-px before:bg-border/80 before:content-['']">
                                    {item.jobs.map((job) => renderJobButton(job, "grouped"))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 relative overflow-visible min-h-[420px]">
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
                                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border mt-10 pb-2">
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
