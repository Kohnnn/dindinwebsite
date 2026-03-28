"use client";

import { DATA } from "@/data/resume";

export default function Marquee() {
    const logos = DATA.brands;

    return (
        <div className="relative overflow-hidden w-full bg-white/[0.03] border-b border-white/5" aria-hidden="true">
            {/* Edge fades */}
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#090507] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#090507] to-transparent z-10 pointer-events-none" />

            <div
                className="flex items-center gap-10 py-3 w-max"
                style={{
                    animation: "marquee-scroll 30s linear infinite",
                }}
            >
                {[logos, logos].map((group, groupIndex) => (
                    <div key={groupIndex} className="flex items-center gap-10" aria-hidden={groupIndex === 1}>
                        {group.map((brand) => (
                            <div
                                key={`${groupIndex}-${brand}`}
                                className="flex items-center justify-center shrink-0 h-6 px-2"
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={brand}
                                    alt=""
                                    className="h-5 w-auto max-w-[80px] object-contain select-none"
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
