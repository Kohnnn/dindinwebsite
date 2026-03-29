import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { DATA } from "@/data/resume";

import { ScrollReveal } from "./ui/scroll-reveal";

export default function Awards() {
    return (
        <section id="recognition" className="section py-16 md:py-24 px-6 md:px-16 max-w-[1100px] mx-auto">
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

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {DATA.awards.map((award, index) => (
                    <ScrollReveal key={award.slug} delay={0.08 * index} className="group h-full">
                        <Link
                            href={award.href}
                            className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-border/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.02))] shadow-[0_6px_28px_rgba(0,0,0,0.14)] transition-all duration-500 hover:-translate-y-1 hover:border-purple/25 hover:shadow-[0_14px_42px_rgba(101,101,253,0.14)]"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden bg-bg3 p-4">
                                {award.image ? (
                                    <div className="relative h-full w-full overflow-hidden rounded-[12px] bg-[rgba(255,255,255,0.03)]">
                                        <Image
                                            src={award.image}
                                            alt={award.title}
                                            fill
                                            className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
                                            loading="lazy"
                                        />
                                    </div>
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center rounded-[12px] bg-[rgba(255,255,255,0.03)] text-[36px]">
                                        {award.icon}
                                    </div>
                                )}
                            </div>

                            <div className="flex h-full flex-col p-6">
                                <h3 className="text-[18px] font-bold text-white tracking-tight leading-[1.2] mb-3">
                                    {award.title}
                                </h3>
                                <p className="text-[13px] text-slate leading-[1.7]">
                                    {award.desc}
                                </p>

                                <div className="mt-auto pt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-purple-lt group-hover:text-white transition-colors duration-300">
                                    View details
                                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </div>
                            </div>
                        </Link>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
