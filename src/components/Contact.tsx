import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { DATA } from "@/data/resume";

import { OrbBackground } from "./ui/orb-background";
import { ScrollReveal } from "./ui/scroll-reveal";

export default function Contact() {
    return (
        <section id="contact" className="section py-12 md:py-24 px-6 md:px-16 max-w-[1100px] mx-auto relative overflow-hidden">
            <OrbBackground size={700} color="rgba(101,101,253,0.12)" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            <ScrollReveal className="relative z-10">
                <div className="text-center max-w-[760px] mx-auto mb-12">
                    <div className="inline-flex items-center gap-2.5 text-[11px] font-bold text-purple-lt tracking-[2px] uppercase mb-4 before:content-[''] before:block before:w-6 before:h-0.5 before:bg-purple before:rounded-sm">
                        Contact
                    </div>
                    <h2 className="text-[42px] md:text-[56px] font-black text-white tracking-[-2px] leading-[1.05]">
                        Direct <em className="italic font-light text-gradient">Contact.</em>
                    </h2>
                </div>

                <div className="max-w-[640px] mx-auto bg-[rgba(255,255,255,0.03)] border border-border rounded-[20px] p-6 md:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.18)]">
                    <div className="space-y-3">
                        <a
                            href={`mailto:${DATA.contact.email}`}
                            className="flex items-center gap-3 rounded-[16px] border border-border/40 bg-bg3/70 px-4 py-4 text-[14px] text-white transition-colors hover:border-purple/30"
                        >
                            <Mail className="w-4 h-4 text-purple-lt" />
                            {DATA.contact.email}
                        </a>
                        <a
                            href={`tel:${DATA.contact.phone.replace(/[^\d+]/g, "")}`}
                            className="flex items-center gap-3 rounded-[16px] border border-border/40 bg-bg3/70 px-4 py-4 text-[14px] text-white transition-colors hover:border-purple/30"
                        >
                            <Phone className="w-4 h-4 text-purple-lt" />
                            {DATA.contact.phone}
                        </a>
                        <a
                            href="https://www.linkedin.com/in/duyen-ho-0640b11a1/"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-3 rounded-[16px] border border-border/40 bg-bg3/70 px-4 py-4 text-[14px] text-white transition-colors hover:border-purple/30"
                        >
                            <Linkedin className="w-4 h-4 text-purple-lt" />
                            LinkedIn Profile
                        </a>
                        <div className="flex items-center gap-3 rounded-[16px] border border-border/40 bg-bg3/70 px-4 py-4 text-[14px] text-white">
                            <MapPin className="w-4 h-4 text-purple-lt" />
                            Ho Chi Minh City, Vietnam
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
