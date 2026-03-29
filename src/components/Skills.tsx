import { DATA } from "@/data/resume";
import { ScrollReveal } from "./ui/scroll-reveal";

export default function Skills() {
    return (
        <section id="skills" className="section py-16 md:py-24 px-6 md:px-16 max-w-[1100px] mx-auto">
            <ScrollReveal>
                <div className="inline-flex items-center gap-2.5 text-[11px] font-bold text-purple-lt tracking-[2px] uppercase mb-4 before:content-[''] before:block before:w-6 before:h-0.5 before:bg-purple before:rounded-sm">
                    Expertise
                </div>
                <h2 className="text-[48px] font-extrabold text-white tracking-tight leading-[1.1] mb-12">
                    Core <em className="italic font-light text-purple-lt">Competencies.</em>
                </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {DATA.skills.map((skill, i) => (
                    <ScrollReveal key={i} delay={0.1 * i} className="group h-full">
                        <div className="bg-card border border-border rounded-[20px] p-7 transition-all duration-300 relative overflow-hidden h-full group-hover:border-[rgba(101,101,253,0.35)] group-hover:-translate-y-1 group-hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)]">
                            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(101,101,253,0.06)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            <div className="text-[28px] mb-4 relative z-10">{skill.icon}</div>
                            <h4 className="text-[14px] font-bold text-white mb-2 relative z-10">{skill.title}</h4>
                            <p className="text-[12px] text-slate leading-[1.6] relative z-10">{skill.desc}</p>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
