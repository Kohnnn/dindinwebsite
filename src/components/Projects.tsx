import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FolderKanban } from "lucide-react";

import { PROJECTS } from "@/data/projects";

import { ScrollReveal } from "./ui/scroll-reveal";

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
                            Selected <em className="italic font-light text-gradient">Projects.</em>
                        </h2>
                        <p className="text-[15px] text-slate leading-[1.8] mt-4 max-w-xl">
                            A project-led view of the work: commerce growth, culture-shaping brand strategy, and conversion diagnostics tied back to real business outcomes.
                        </p>
                    </div>
                    <div className="inline-flex items-center gap-3 rounded-full bg-[rgba(255,255,255,0.03)] border border-border/60 px-4 py-2.5 text-[12px] text-muted backdrop-blur-xl w-fit">
                        <FolderKanban className="w-4 h-4 text-purple-lt" />
                        Built around business problems, not just titles.
                    </div>
                </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                {PROJECTS.map((project, index) => {
                    const preview = project.gallery?.[0];

                    return (
                        <ScrollReveal
                            key={project.slug}
                            delay={0.08 * index}
                            className={project.spotlight ? "lg:col-span-7" : "lg:col-span-5"}
                        >
                            <Link
                                href={`/projects/${project.slug}`}
                                className={`group relative flex h-full min-h-[340px] flex-col overflow-hidden rounded-[28px] border border-border/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.02))] shadow-[0_4px_24px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-1 hover:border-purple/25 hover:shadow-[0_12px_40px_rgba(101,101,253,0.16)] ${project.spotlight ? "lg:min-h-[520px]" : "lg:min-h-[250px]"}`}
                            >
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(146,147,250,0.16),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(150,110,161,0.14),transparent_36%)] opacity-80" />

                                {preview ? (
                                    <div className={`absolute right-0 top-0 h-full w-full ${project.spotlight ? "lg:w-[56%]" : "lg:w-[48%]"}`}>
                                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#090507]/24 to-[#090507] z-10" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#090507]/65 via-transparent to-transparent z-10" />
                                        <div className="relative h-full w-full">
                                            <Image
                                                src={preview.src}
                                                alt={preview.alt}
                                                fill
                                                className={preview.fit === "contain"
                                                    ? "object-contain p-10 opacity-85 transition-transform duration-700 group-hover:scale-105"
                                                    : "object-cover transition-transform duration-700 group-hover:scale-105"
                                                }
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="absolute right-6 top-6 flex h-20 w-20 items-center justify-center rounded-[22px] border border-purple/20 bg-purple/10 text-[38px] shadow-[0_8px_24px_rgba(101,101,253,0.12)]">
                                        {project.icon}
                                    </div>
                                )}

                                <div className={`relative z-20 flex h-full flex-col p-7 md:p-8 ${project.spotlight ? "lg:max-w-[52%]" : "lg:max-w-[58%]"}`}>
                                    <div className="text-[11px] font-semibold text-purple-lt uppercase tracking-[2px] mb-4">
                                        {project.cardEyebrow}
                                    </div>

                                    <h3 className={`text-white tracking-tight leading-[1.08] ${project.spotlight ? "text-[30px] md:text-[34px] font-extrabold" : "text-[24px] font-bold"}`}>
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

                                    <div className={`mt-auto grid gap-3 pt-8 ${project.spotlight ? "sm:grid-cols-3" : "sm:grid-cols-3 lg:grid-cols-1"}`}>
                                        {project.highlights.map((highlight) => (
                                            <div
                                                key={highlight.label}
                                                className="rounded-[22px] border border-border/50 bg-[rgba(9,5,7,0.58)] px-4 py-4 backdrop-blur-xl"
                                            >
                                                <div className="text-[24px] font-extrabold text-gradient leading-none mb-1.5">
                                                    {highlight.value}
                                                </div>
                                                <div className="text-[11px] uppercase tracking-[1.2px] text-slate">
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
