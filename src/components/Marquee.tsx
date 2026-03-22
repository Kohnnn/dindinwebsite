import { DATA } from "@/data/resume";

export default function Marquee() {
    return (
        <div className="py-2.5 border-b border-white/5 bg-bg/80 relative overflow-hidden flex items-center w-full">
            <div className="flex gap-16 w-max animate-marquee-scroll hover:[animation-play-state:paused] transition-all" aria-hidden="true">
                {[...DATA.brands, ...DATA.brands, ...DATA.brands].map((brand, idx) => (
                    <div key={idx} className="flex items-center justify-center opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={brand} alt="Brand Logo" className="h-5 md:h-6 w-auto object-contain select-none" />
                    </div>
                ))}
            </div>
        </div>
    );
}
