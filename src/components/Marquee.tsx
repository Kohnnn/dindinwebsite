"use client";

import { DATA } from "@/data/resume";

export default function Marquee() {
    const logos = DATA.brands;

    return (
        <div className="ticker-mask relative overflow-hidden w-full bg-white/[0.03] border-b border-white/5" aria-hidden="true">
            <div
                className="flex items-center gap-12 py-4 w-max"
                style={{
                    animation: "marquee-scroll 30s linear infinite",
                }}
            >
                {[logos, logos].map((group, groupIndex) => (
                    <div key={groupIndex} className="flex items-center gap-12" aria-hidden={groupIndex === 1}>
                        {group.map((brand) => (
                            <div
                                key={`${groupIndex}-${brand}`}
                                className="flex items-center justify-center shrink-0 h-7 px-2"
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={brand}
                                    alt=""
                                    className="h-7 w-auto max-w-[96px] object-contain select-none"
                                    style={{
                                        filter: "brightness(0) invert(1)",
                                        opacity: 0.5,
                                    }}
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = "none";
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
