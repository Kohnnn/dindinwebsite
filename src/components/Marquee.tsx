"use client";

import { DATA } from "@/data/resume";

const BRAND_NAMES: Record<string, string> = {
    "/brands/kiehls.svg": "Kiehl's",
    "/brands/kimberly.svg": "Kimberly-Clark",
    "/brands/kotex.png": "Kotex",
    "/brands/loreal.svg": "L'Oréal",
    "/brands/lancome.svg": "Lancôme",
    "/brands/masterise.png": "Masterise",
    "/brands/shiseido.svg": "Shiseido",
    "/brands/anessa.webp": "ANESSA",
    "/brands/cledepeau.svg": "Clé de Peau",
    "/brands/dprogram.png": "d program",
    "/brands/elixir.webp": "ELIXIR",
    "/brands/huggies.svg": "Huggies",
    "/brands/nars.svg": "NARS",
    "/brands/shuuemura.svg": "shu uemura",
};

export default function Marquee() {
    const logos = DATA.brands;
    // Duplicate 4x for seamless loop
    const allLogos = [...logos, ...logos, ...logos, ...logos];

    return (
        <div className="relative overflow-hidden w-full bg-white/[0.03] border-b border-white/5">
            {/* Edge fades */}
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#090507] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#090507] to-transparent z-10 pointer-events-none" />

            <div
                className="flex items-center gap-10 py-3 w-max"
                style={{
                    animation: "marquee-scroll 30s linear infinite",
                }}
            >
                {allLogos.map((brand, idx) => (
                    <div
                        key={idx}
                        className="flex items-center justify-center shrink-0 h-6 px-2"
                        title={BRAND_NAMES[brand] || "Brand"}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={brand}
                            alt={BRAND_NAMES[brand] || "Brand Logo"}
                            className="h-5 w-auto max-w-[80px] object-contain select-none"
                            style={{
                                filter: "brightness(0) invert(1)",
                                opacity: 0.5,
                            }}
                            onError={(e) => {
                                // Hide broken images gracefully
                                (e.target as HTMLImageElement).style.display = "none";
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
