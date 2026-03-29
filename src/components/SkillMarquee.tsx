"use client";

import { DATA } from "@/data/resume";

export default function SkillMarquee() {
    const tags = DATA.marquee;

    return (
        <div className="ticker-mask relative overflow-hidden w-full bg-[#0c0910] border-y border-border" aria-hidden="true">
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
                {[tags, tags].map((group, groupIndex) => (
                    <div key={groupIndex} className="flex items-center" aria-hidden={groupIndex === 1}>
                        {group.map((tag) => (
                            <div key={`${groupIndex}-${tag}`} className="flex items-center shrink-0">
                                <span className="text-[10px] font-bold tracking-[2px] uppercase text-muted hover:text-white transition-colors duration-200 cursor-default whitespace-nowrap px-5">
                                    {tag}
                                </span>
                                <span className="w-1.5 h-1.5 rounded-full bg-purple shrink-0" />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
