"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { DATA } from "@/data/resume";

import { ScrollReveal } from "./ui/scroll-reveal";

export default function Education() {
    const { education, certifications } = DATA;
    const [lightboxImg, setLightboxImg] = useState<string | null>(null);

    return (
        <section id="education" data-telemetry-section-view="education" className="section py-12 md:py-24 px-6 md:px-16 max-w-[1100px] mx-auto">
            <ScrollReveal>
                <div className="inline-flex items-center gap-2.5 text-[11px] font-bold text-purple-lt tracking-[2px] uppercase mb-4 before:content-[''] before:block before:w-6 before:h-0.5 before:bg-purple before:rounded-sm">
                    Education
                </div>
                <h2 className="text-[48px] font-extrabold text-white tracking-tight leading-[1.1] mb-12">
                    Academic <em className="italic font-light text-purple-lt">Excellence.</em>
                </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
                <div className="relative overflow-hidden rounded-[20px] border border-border/50 bg-card p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.14)]">
                    <div className="absolute top-0 right-0 w-[420px] h-[420px] pointer-events-none blur-[120px] bg-[radial-gradient(circle,rgba(89,88,154,0.1)_0%,transparent_60%)] -mr-20 -mt-20" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
                        <div>
                            <h3 className="text-[26px] md:text-[30px] font-extrabold text-white tracking-tight mb-2">
                                {education.degree}
                            </h3>
                            <div className="text-[14px] text-purple-lt font-semibold mb-6">
                                {education.school}
                            </div>
                            <p className="text-[15px] text-slate leading-[1.9] max-w-md">
                                {education.desc}
                            </p>
                        </div>

                        <div className="flex flex-col gap-3">
                            {education.achievements.map((achievement, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 rounded-[22px] border border-border/50 bg-[rgba(255,255,255,0.03)] px-5 py-4 text-[13px] text-muted transition-colors hover:bg-[rgba(255,255,255,0.05)]"
                                >
                                    <span className="text-[18px]" aria-hidden="true">{achievement.icon}</span>
                                    <span className="leading-snug">{achievement.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative z-10 mt-12">
                        <div className="flex flex-col gap-2 mb-6">
                            <h3 className="text-[16px] font-bold text-white tracking-tight">
                                Supporting Competition Proof
                            </h3>
                            <p className="text-[13px] text-slate leading-[1.7] max-w-2xl">
                                Competition certificates sit here as evidence for academic excellence and national marketing competition performance, not as a separate showcase.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
                            {certifications.map((certification, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => setLightboxImg(certification.image)}
                                    data-telemetry-event="certification_opened"
                                    data-telemetry-label={certification.event}
                                    data-telemetry-context={certification.year}
                                    data-telemetry-section="education"
                                    className="group h-full overflow-hidden rounded-[20px] border border-border/50 bg-[rgba(255,255,255,0.025)] text-left shadow-[0_4px_24px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-purple/25 hover:shadow-[0_10px_32px_rgba(101,101,253,0.12)]"
                                >
                                    <div className="relative aspect-[4/3] bg-[radial-gradient(circle_at_top,rgba(146,147,250,0.14),transparent_62%)] p-4">
                                        <div className="relative h-full w-full overflow-hidden rounded-[18px] bg-bg3">
                                            <Image
                                                src={certification.image}
                                                alt={certification.event}
                                                fill
                                                className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
                                            />
                                        </div>
                                    </div>
                                    <div className="px-4 pb-5 pt-1 min-h-[104px] flex flex-col justify-start">
                                        <div className="text-[18px] font-extrabold text-white mb-1.5 leading-tight">
                                            {certification.title}
                                        </div>
                                        <div className="text-[12px] text-slate leading-[1.6] font-medium">
                                            {certification.event} · {certification.year}
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            <AnimatePresence>
                {lightboxImg ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-[10000] flex items-center justify-center bg-[rgba(9,5,7,0.74)] backdrop-blur-md p-6"
                        onClick={() => setLightboxImg(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.94, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.94, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="relative max-w-[92vw] max-h-[88vh] overflow-hidden rounded-[24px] border border-border/60 bg-bg3"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <Image
                                src={lightboxImg}
                                alt="Certificate"
                                width={1400}
                                height={1000}
                                className="max-h-[88vh] w-auto object-contain"
                            />
                            <button
                                type="button"
                                onClick={() => setLightboxImg(null)}
                                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white/80 transition-colors hover:text-white"
                            >
                                X
                            </button>
                        </motion.div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </section>
    );
}
