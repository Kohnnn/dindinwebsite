import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, FileText } from "lucide-react";
import { notFound } from "next/navigation";

import { PROJECTS, PROJECTS_BY_SLUG } from "@/data/projects";

const getSurfaceClass = (surface?: "default" | "light" | "brand-red") => {
    switch (surface) {
        case "light":
            return "bg-[linear-gradient(180deg,#f8f1e6,#ebe0cd)]";
        case "brand-red":
            return "bg-[linear-gradient(180deg,#77172a,#460c18)]";
        default:
            return "bg-[radial-gradient(circle_at_top,rgba(146,147,250,0.15),transparent_60%)]";
    }
};

const getLogoSurfaceClass = (surface?: "dark" | "light" | "brand-red") => {
    switch (surface) {
        case "light":
            return "bg-white/90 border-white/70";
        case "brand-red":
            return "bg-[#8f1f36] border-[#d56a84]/40";
        default:
            return "bg-bg3/90 border-border/60";
    }
};

interface ProjectPageProps {
    params: {
        slug: string;
    };
}

export function generateStaticParams() {
    return PROJECTS.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
    const project = PROJECTS_BY_SLUG[params.slug];

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: `${project.title} - Hazel Ho`,
        description: project.summary,
        openGraph: {
            title: `${project.title} - Hazel Ho`,
            description: project.summary,
            images: project.gallery?.length ? [project.gallery[0].src] : ["/HoHaoDuyen_Portrait.jpeg"],
        },
        twitter: {
            card: "summary_large_image",
            title: `${project.title} - Hazel Ho`,
            description: project.summary,
            images: project.gallery?.length ? [project.gallery[0].src] : ["/HoHaoDuyen_Portrait.jpeg"],
        },
    };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
    const project = PROJECTS_BY_SLUG[params.slug];

    if (!project) {
        notFound();
    }

    return (
        <article>
            <div className="flex items-center gap-3 mb-4">
                {project.logoSrc ? (
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[18px] border p-2.5 ${getLogoSurfaceClass(project.logoSurface)}`}>
                        <Image
                            src={project.logoSrc}
                            alt={`${project.title} brand logo`}
                            width={76}
                            height={30}
                            className="h-auto w-full object-contain"
                        />
                    </div>
                ) : null}
                <div className="text-[11px] font-semibold text-purple-lt uppercase tracking-[2px]">
                    {project.eyebrow}
                </div>
            </div>

            <div className="max-w-3xl">
                <h1 className="text-[34px] md:text-[52px] font-extrabold text-white tracking-tight leading-[1.04]">
                    {project.title}
                </h1>
                <p className="mt-5 text-[18px] text-muted/85 leading-[1.8]">
                    {project.summary}
                </p>
                <p className="mt-4 text-[15px] text-slate leading-[1.85] max-w-2xl">
                    {project.intro}
                </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
                {project.badges.map((badge) => (
                    <span
                        key={badge}
                        className="rounded-full border border-purple/20 bg-purple/10 px-3.5 py-1.5 text-[12px] font-medium text-purple-lt"
                    >
                        {badge}
                    </span>
                ))}
            </div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-5">
                <div className="rounded-[24px] border border-border/50 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.02))] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)]">
                    <div className="text-[12px] font-semibold text-purple-lt uppercase tracking-[1.8px] mb-4">
                        Executive Summary
                    </div>
                    <div className="space-y-4">
                        {project.executiveSummary.map((paragraph) => (
                            <p key={paragraph} className="text-[14px] text-muted/85 leading-[1.85]">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                <div className="rounded-[24px] border border-border/50 bg-card p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)]">
                    <div className="text-[12px] font-semibold text-purple-lt uppercase tracking-[1.8px] mb-4">
                        Scope & Achievements
                    </div>
                    <p className="text-[13px] text-slate leading-[1.8] mb-5">
                        {project.scopeLabel}
                    </p>
                    <ul className="space-y-3">
                        {project.achievements.map((achievement) => (
                            <li key={achievement} className="flex items-start gap-3 text-[13px] text-muted/85 leading-[1.75]">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-lt/70" />
                                <span>{achievement}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {project.gallery?.length ? (
                <div className={`mt-12 grid gap-5 ${project.gallery.length > 1 ? "md:grid-cols-2" : "grid-cols-1"}`}>
                    {project.gallery.map((item) => (
                        <div key={item.src} className="overflow-hidden rounded-[28px] border border-border/50 bg-card shadow-[0_8px_30px_rgba(0,0,0,0.14)]">
                            <div className={`relative ${item.fit === "contain" ? "aspect-[16/7] max-h-[320px]" : "aspect-[16/10]"} ${getSurfaceClass(item.surface)}`}>
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    className={item.fit === "contain" ? "object-contain p-10" : "object-cover"}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#090507]/58 via-transparent to-transparent" />
                            </div>
                            <div className="p-5 text-[13px] text-slate leading-[1.7]">
                                {item.caption}
                            </div>
                        </div>
                    ))}
                </div>
            ) : null}

            <div className="mt-14">
                <h2 className="text-[14px] font-semibold text-slate uppercase tracking-[1.6px] mb-6">
                    Key Outcomes
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                    {project.results.map((result) => (
                        <div
                            key={result.label}
                            className="rounded-[24px] border border-border/50 bg-card p-5 shadow-[0_4px_24px_rgba(0,0,0,0.1)]"
                        >
                            <div className="text-[28px] font-extrabold text-gradient leading-none mb-2">
                                {result.value}
                            </div>
                            <div className="text-[13px] font-semibold text-white mb-1.5">
                                {result.label}
                            </div>
                            <div className="text-[12px] text-slate leading-[1.6]">
                                {result.note}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-14">
                <h2 className="text-[14px] font-semibold text-slate uppercase tracking-[1.6px] mb-6">
                    How It Was Solved
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {project.sections.map((section) => (
                        <div
                            key={section.title}
                            className="rounded-[24px] border border-border/50 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.02))] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
                        >
                            <h3 className="text-[18px] font-bold text-white tracking-tight mb-3">
                                {section.title}
                            </h3>
                            {section.intro ? (
                                <p className="text-[14px] text-muted/80 leading-[1.8] mb-4">
                                    {section.intro}
                                </p>
                            ) : null}
                            {section.bullets ? (
                                <ul className="space-y-3">
                                    {section.bullets.map((bullet) => (
                                        <li key={bullet} className="flex items-start gap-3 text-[13px] text-slate leading-[1.75]">
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-lt/70" />
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>

            {project.assets?.length ? (
                <div className="mt-14">
                    <h2 className="text-[14px] font-semibold text-slate uppercase tracking-[1.6px] mb-6">
                        Recognition & Supporting Proof
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.assets.map((asset) => {
                            const isExternal = asset.href.startsWith("http");

                            return (
                                <Link
                                    key={asset.href}
                                    href={asset.href}
                                    target={isExternal ? "_blank" : undefined}
                                    rel={isExternal ? "noreferrer" : undefined}
                                    className="group rounded-[24px] border border-border/50 bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple/25 hover:shadow-[0_10px_34px_rgba(101,101,253,0.12)]"
                                >
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-purple/10 text-purple-lt">
                                                {isExternal ? <ExternalLink className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                                            </div>
                                            <div>
                                                <div className="text-[14px] font-bold text-white">
                                                    {asset.title}
                                                </div>
                                                <div className="text-[11px] uppercase tracking-[1.3px] text-purple-lt mt-1">
                                                    {asset.kind}
                                                </div>
                                            </div>
                                        </div>
                                        <ExternalLink className="w-4 h-4 text-slate transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </div>
                                    <p className="mt-4 text-[13px] text-slate leading-[1.7]">
                                        {asset.note}
                                    </p>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            ) : null}
        </article>
    );
}
