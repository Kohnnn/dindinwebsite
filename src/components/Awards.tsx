import { DATA } from "@/data/resume";
import { ScrollReveal } from "./ui/scroll-reveal";

export default function Awards() {
    return (
        <section className="section py-16 md:py-24 px-6 md:px-16 max-w-[1200px] mx-auto border-t border-border/50">
            <ScrollReveal>
                <h3 className="text-[20px] font-extrabold text-white mb-8">Honors & Awards</h3>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {DATA.awards.map((award, i) => (
                    <ScrollReveal key={i} delay={0.1 * i} className="group">
                        <div className="bg-card border border-border rounded-[20px] p-6 flex flex-col md:flex-row items-start gap-5 transition-all duration-300 group-hover:border-[rgba(101,101,253,0.3)] group-hover:bg-[rgba(101,101,253,0.04)] group-hover:translate-x-1 h-full">
                            <div className="w-14 h-14 rounded-2xl bg-bg2 flex items-center justify-center text-[26px] shrink-0 shadow-inner">
                                {award.icon}
                            </div>
                            <div className="pt-1">
                                <h4 className="text-[15px] font-bold text-white mb-1 leading-tight">{award.title}</h4>
                                <p className="text-[13px] text-slate leading-[1.5]">{award.desc}</p>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
