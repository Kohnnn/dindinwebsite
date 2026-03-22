import { DATA } from "@/data/resume";

export default function Marquee() {
    const items = DATA.marquee;

    return (
        <section className="py-6 border-y border-border overflow-hidden bg-bg2 relative flex items-center">
            <div className="flex gap-12 w-max animate-marquee-scroll hover:[animation-play-state:paused] transition-all" aria-hidden="true">
                {[...items, ...items, ...items].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-[13px] font-semibold text-slate whitespace-nowrap tracking-wide uppercase">
                        {item}
                        <span className="w-1.5 h-1.5 rounded-full bg-purple" />
                    </div>
                ))}
            </div>
        </section>
    );
}
