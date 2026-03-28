import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FolderKanban } from "lucide-react";

import { PROJECTS, ProjectGalleryItem } from "@/data/projects";

import { ScrollReveal } from "./ui/scroll-reveal";

const getSurfaceClass = (item?: ProjectGalleryItem): string => {
    switch (item?.surface) {
        case "light":
            return "bg-[linear-gradient(180deg,#f8f1e6,#ebe0cd)]";
        case "brand-red":
            return "bg-[linear-gradient(180deg,#77172a,#460c18)]";
        default:
            return "bg-[radial-gradient(circle_at_top,rgba(146,147,250,0.16),transparent_62%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]";
    }
};

const getLogoSurfaceClass = (surface?: "dark" | "light" | "brand-red"): string => {
    switch (surface) {
        case "light":
            return "bg-white/90 border-white/70";
        case "brand-red":
            return "bg-[#8f1f36] border-[#d56a84]/40";
        default:
            return "bg-bg3/90 border-border/60";
    }
};

export default function Projects() {
    return (
        <section id="projects" className="section py-16 md:py-24 px-6 md:px-16 max-w-[1200px] mx-auto">
            <ScrollReveal>
                <div className="inline-flex items-center gap-2.5 text-[11px] font-bold text-purple-lt tracking-[2px] uppercase mb-4 before:content-[''] before:block before:w-6 before:h-0.5 before:bg-purple before:rounded-sm">
                    Projects
                </div>
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-[42px] md:text-[48px] font-extrabold text-white tracking-tight leading-[1.08]">
                            Featured <em className="italic font-light text-gradient">Projects & Campaigns.</em>
                        </h2>
                        <p className="text-[15px] text-slate leading-[1.8] mt-4 max-w-xl">
                            Launch work, year-long commerce acceleration, culture-led brand campaigns, and website-performance improvement - all documented as business cases instead of generic job bullets.
                        </p>
                    </div>
                    <div className="inline-flex items-center gap-3 rounded-full bg-[rgba(255,255,255,0.03)] border border-border/60 px-4 py-2.5 text-[12px] text-muted backdrop-blur-xl w-fit">
                        <FolderKanban className="w-4 h-4 text-purple-lt" />
                        Four proof-driven case studies, each with its own role.
                    </div>
                </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PROJECTS.map((project, index) => {
                    const preview = project.gallery?.[0];

                    return (
                        <ScrollReveal key={project.slug} delay={0.07 * index}>
                            <Link
                                href={`/projects/${project.slug}`}
                                className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-border/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.02))] shadow-[0_6px_28px_rgba(0,0,0,0.14)] transition-all duration-500 hover:-translate-y-1 hover:border-purple/25 hover:shadow-[0_14px_42px_rgba(101,101,253,0.14)]"
                            >
                                {preview ? (
                                    <div className={`relative aspect-[16/10] overflow-hidden ${getSurfaceClass(preview)}`}>
                                        <Image
                                            src={preview.src}
                                            alt={preview.alt}
                                            fill
                                            className={preview.fit === "contain"
                                                ? "object-contain p-8 transition-transform duration-700 group-hover:scale-[1.03]"
                                                : "object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                            }
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#090507]/50 via-transparent to-transparent" />
                                    </div>
                                ) : null}

                                <div className="flex h-full flex-col p-7 md:p-8">
                                    <div className="flex items-center gap-3 mb-5">
                                        {project.logoSrc ? (
                                            <div className={`flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[18px] border p-2.5 shadow-[0_6px_22px_rgba(0,0,0,0.08)] ${getLogoSurfaceClass(project.logoSurface)}`}>
                                                <Image
                                                    src={project.logoSrc}
                                                    alt={`${project.title} brand logo`}
                                                    width={76}
                                                    height={30}
                                                    className="h-auto w-full object-contain"
                                                />
                                            </div>
                                        ) : (
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] border border-border/60 bg-bg3/90 text-[22px]">
                                                {project.icon}
                                            </div>
                                        )}

                                        <div>
                                            <div className="text-[11px] font-semibold text-purple-lt uppercase tracking-[2px]">
                                                {project.cardEyebrow}
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="text-[28px] font-extrabold text-white tracking-tight leading-[1.08]">
                                        {project.title}
                                    </h3>

                                    <p className="mt-4 text-[14px] text-muted/80 leading-[1.8]">
                                        {project.summary}
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {project.badges.map((badge) => (
                                            <span
                                                key={badge}
                                                className="rounded-full border border-purple/20 bg-purple/10 px-3 py-1.5 text-[11px] font-medium text-purple-lt"
                                            >
                                                {badge}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-auto grid grid-cols-3 gap-3 pt-8">
                                        {project.highlights.map((highlight) => (
                                            <div
                                                key={highlight.label}
                                                className="rounded-[20px] border border-border/50 bg-[rgba(9,5,7,0.52)] px-4 py-4 backdrop-blur-xl"
                                            >
                                                <div className="text-[22px] font-extrabold text-gradient leading-none mb-1.5">
                                                    {highlight.value}
                                                </div>
                                                <div className="text-[11px] uppercase tracking-[1.2px] text-slate leading-[1.4]">
                                                    {highlight.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-white">
                                        View project
                                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Link>
                        </ScrollReveal>
                    );
                })}
            </div>
        </section>
    );
}
