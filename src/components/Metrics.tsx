"use client";

import { useEffect, useState, useRef } from "react";
import { DATA } from "@/data/resume";
import { useInView } from "framer-motion";
import { ScrollReveal } from "./ui/scroll-reveal";

function AnimatedCounter({ target, duration = 2000 }: { target: number, duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [target, duration, isInView]);

    return <span ref={ref}>{count}</span>;
}

export default function Metrics() {
    return (
        <section id="impact" className="bg-bg2 py-16 md:py-24 border-y border-border">
            <ScrollReveal>
                <div className="max-w-[1200px] mx-auto px-6 md:px-16 mb-12">
                    <div className="inline-flex items-center gap-2.5 text-[11px] font-bold text-purple-lt tracking-[2px] uppercase mb-4 before:content-[''] before:block before:w-6 before:h-0.5 before:bg-purple before:rounded-sm">
                        Impact
                    </div>
                    <h2 className="text-[48px] font-extrabold text-white tracking-tight leading-[1.1]">
                        Results That <em className="italic font-light text-gradient">Speak.</em>
                    </h2>
                </div>
                <div className="max-w-[1200px] mx-auto px-6 md:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-[20px] overflow-hidden">
                        {DATA.metrics.map((metric, i) => (
                            <div key={i} className="bg-bg2 p-10 relative overflow-hidden hover:bg-bg3 transition-colors group">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,rgba(101,101,253,0.06),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="text-[52px] font-black text-white tracking-[-2px] leading-none mb-2 relative z-10">
                                    <span className="text-gradient">
                                        {typeof metric.value === 'number' ? (
                                            <AnimatedCounter target={metric.value} />
                                        ) : (
                                            <span className="text-[44px] leading-tight">{metric.value}</span>
                                        )}
                                    </span>
                                    {metric.unit && <span className="text-purple-lt text-[32px] align-baseline ml-1">{metric.unit}</span>}
                                </div>

                                <div className="text-[14px] font-semibold text-muted mb-1.5 relative z-10">{metric.label}</div>
                                <p className="text-[13px] text-slate leading-[1.6] relative z-10">{metric.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
