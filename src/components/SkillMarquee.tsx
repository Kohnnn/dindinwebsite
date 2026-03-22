"use client";

import { DATA } from "@/data/resume";

export default function SkillMarquee() {
    const tags = DATA.marquee;
    // Duplicate 4x for seamless loop
    const allTags = [...tags, ...tags, ...tags, ...tags];

    return (
        <div className="relative overflow-hidden w-full bg-[#0c0910] border-y border-border">
            {/* Edge fades */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0c0910] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0c0910] to-transparent z-10 pointer-events-none" />

            <div
                className="flex items-center gap-0 py-4 w-max"
                style={{ animation: "marquee-scroll 30s linear infinite" }}
                onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused";
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.animationPlayState = "running";
                }}
            >
                {allTags.map((tag, idx) => (
                    <div key={idx} className="flex items-center shrink-0">
                        <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-muted hover:text-white transition-colors duration-200 cursor-default whitespace-nowrap px-5">
                            {tag}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-purple shrink-0" />
                    </div>
                ))}
            </div>
        </div>
    );
}
