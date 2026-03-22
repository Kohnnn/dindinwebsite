"use client";

import { DATA } from "@/data/resume";

export default function SkillMarquee() {
    const tags = DATA.marquee;
    // Duplicate 4x for seamless loop
    const allTags = [...tags, ...tags, ...tags, ...tags];

    return (
        <div className="relative overflow-hidden w-full border-y border-border/50 bg-bg2">
            {/* Edge fades */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#100d12] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#100d12] to-transparent z-10 pointer-events-none" />

            <div
                className="flex items-center gap-4 py-4 w-max group"
                style={{ animation: "marquee-scroll 25s linear infinite" }}
                onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused";
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.animationPlayState = "running";
                }}
            >
                {allTags.map((tag, idx) => (
                    <div
                        key={idx}
                        className="flex items-center gap-3 shrink-0 cursor-default"
                    >
                        <span className="px-4 py-1.5 rounded-full border border-border bg-[rgba(101,101,253,0.06)] text-[12px] font-semibold text-muted hover:text-white hover:border-[rgba(101,101,253,0.4)] hover:bg-[rgba(101,101,253,0.12)] transition-all duration-200 tracking-wide whitespace-nowrap">
                            {tag}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-border shrink-0" />
                    </div>
                ))}
            </div>
        </div>
    );
}
