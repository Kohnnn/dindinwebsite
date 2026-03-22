"use client";

import { DATA } from "@/data/resume";
import { OrbBackground } from "./ui/orb-background";
import { motion, Variants } from "framer-motion";
import { ScrollReveal } from "./ui/scroll-reveal";
import Image from "next/image";

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.12 }
    }
};

const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center px-6 md:px-16 pt-36 pb-24 relative overflow-hidden">
            {/* Background Orbs */}
            <OrbBackground size={500} color="rgba(101,101,253,0.18)" className="-top-24 -right-10 md:right-24" />
            <OrbBackground size={400} color="rgba(150,110,161,0.14)" className="-bottom-10 -left-24" />
            <OrbBackground size={300} color="rgba(89,88,154,0.1)" className="top-1/2 left-[40%]" />

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-20 items-center max-w-[1100px] mx-auto relative z-10 w-full">

                {/* Left Content */}
                <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col">
                    <motion.div variants={item} className="inline-flex items-center gap-2 bg-purple/10 border border-purple/25 text-purple-lt px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-7 w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple animate-pulse-dot" />
                        Media Planning Expert
                    </motion.div>

                    <motion.h1 variants={item} className="text-[44px] md:text-[68px] font-extrabold text-white leading-[1.05] tracking-tight mb-5">
                        Media <br className="hidden md:block" /> That Moves <em className="italic font-light text-gradient">Markets.</em>
                    </motion.h1>

                    <motion.p variants={item} className="text-[17px] text-slate max-w-[480px] mb-10 font-normal leading-[1.8]">
                        {DATA.summary}
                    </motion.p>

                    <motion.div variants={item} className="flex items-center gap-5 mb-14">
                        <a href="#contact" className="btn-glow bg-purple text-white px-9 py-4 rounded-full text-[15px] font-bold inline-block">
                            Get in Touch
                        </a>
                        <a href="#work" className="text-muted text-[15px] font-medium flex items-center gap-2 hover:text-white transition-colors group">
                            View Work <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </motion.div>

                    {/* Stats Row */}
                    <motion.div variants={item} className="flex gap-10 pt-9 border-t border-border">
                        <div className="stat-item">
                            <h3 className="text-[38px] font-extrabold text-white tracking-tight leading-none mb-1">
                                287<sup className="text-[20px] text-purple align-super">%</sup>
                            </h3>
                            <p className="text-xs text-slate uppercase tracking-wider">GMV Growth</p>
                        </div>
                        <div className="stat-item">
                            <h3 className="text-[38px] font-extrabold text-white tracking-tight leading-none mb-1">
                                130<sup className="text-[20px] text-purple align-super">%</sup>
                            </h3>
                            <p className="text-xs text-slate uppercase tracking-wider">Over Target</p>
                        </div>
                        <div className="stat-item">
                            <h3 className="text-[38px] font-extrabold text-white tracking-tight leading-none mb-1">
                                1<sup className="text-[20px] text-purple align-super">st</sup>
                            </h3>
                            <p className="text-xs text-slate uppercase tracking-wider">MMA Gold Award</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Image Card */}
                <ScrollReveal yOffset={40} delay={0.4} className="hidden lg:block relative">
                    <div className="rounded-[24px] overflow-hidden relative aspect-[4/5] bg-bg3 border border-border">
                        <Image
                            src="/HoHaoDuyen_Portrait.jpeg"
                            alt="Hồ Hao Duyên"
                            fill
                            className="object-cover block"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(9,5,7,0.7)] to-[transparent_60%]" />

                        {/* Floating Bottom Badge */}
                        <div className="absolute bottom-6 left-6 right-6 bg-[#090507]/85 backdrop-blur-md border border-border rounded-2xl p-4 flex items-center gap-3.5">
                            <div className="w-[42px] h-[42px] rounded-xl bg-gradient-to-br from-purple to-dark-pur flex items-center justify-center text-xl shrink-0">
                                👩‍💻
                            </div>
                            <div>
                                <h4 className="text-[13px] font-bold text-white leading-tight mb-0.5">{DATA.role || "Associate Manager"}</h4>
                                <p className="text-[11px] text-slate">WPP Media Vietnam</p>
                            </div>
                        </div>

                        {/* Floating Top-Right Badge */}
                        <div className="absolute -top-4 -right-4 bg-purple-mauve rounded-xl p-3 px-4 text-center shadow-[0_8px_32px_rgba(101,101,253,0.4)] rotate-3 hover:rotate-0 transition-transform cursor-default">
                            <div className="text-[22px] leading-none mb-1">🏆</div>
                            <p className="text-[10px] font-bold text-white/90 uppercase tracking-[0.5px]">MMA Gold</p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
