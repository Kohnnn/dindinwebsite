import { DATA } from "@/data/resume";
import { ScrollReveal } from "./ui/scroll-reveal";

export default function Education() {
    const { education } = DATA;

    return (
        <section id="education" className="section py-[100px] px-6 md:px-16 max-w-[1200px] mx-auto">
            <ScrollReveal>
                <div className="inline-flex items-center gap-2.5 text-[11px] font-bold text-purple-lt tracking-[2px] uppercase mb-4 before:content-[''] before:block before:w-6 before:h-0.5 before:bg-purple before:rounded-sm">
                    Education
                </div>
                <h2 className="text-[48px] font-extrabold text-white tracking-tight leading-[1.1] mb-12">
                    Academic <em className="italic font-light text-purple-lt">Excellence.</em>
                </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
                <div className="bg-card border border-border rounded-[24px] p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none blur-[120px] bg-[radial-gradient(circle,rgba(89,88,154,0.1)_0%,transparent_60%)] -mr-20 -mt-20" />

                    <div className="relative z-10">
                        <h3 className="text-[26px] font-extrabold text-white tracking-tight mb-2">
                            {education.degree}
                        </h3>
                        <div className="text-[14px] text-purple-lt font-semibold mb-6">
                            {education.school}
                        </div>
                        <p className="text-[14px] text-slate leading-[1.8] max-w-sm">
                            {education.desc}
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 relative z-10">
                        {education.achievements.map((ach, i) => (
                            <div key={i} className="flex items-center gap-4 py-3.5 px-5 bg-[rgba(255,255,255,0.03)] border border-border rounded-2xl text-[13px] text-muted hover:bg-[rgba(255,255,255,0.06)] transition-colors">
                                <span className="text-[18px] mb-0.5" aria-hidden="true">{ach.icon}</span>
                                <span className="leading-snug">{ach.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
