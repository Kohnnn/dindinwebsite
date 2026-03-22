"use client";

import { OrbBackground } from "./ui/orb-background";
import { ScrollReveal } from "./ui/scroll-reveal";

export default function Contact() {
    return (
        <section id="contact" className="section py-[120px] px-6 md:px-16 max-w-[1200px] mx-auto text-center relative overflow-hidden flex flex-col items-center">
            <OrbBackground size={800} color="rgba(101,101,253,0.12)" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            <ScrollReveal className="relative z-10 w-full max-w-[600px]">
                <h2 className="text-[52px] md:text-[64px] font-black text-white tracking-[-2px] leading-[1.05] mb-6">
                    Let&apos;s Build <em className="italic font-light text-gradient">Something Great.</em>
                </h2>
                <p className="text-[16px] text-slate mb-10 max-w-[480px] mx-auto leading-[1.8]">
                    Ready to elevate your brand presence? Send me a message and let&apos;s discuss how we can work together.
                </p>

                <div className="bg-[rgba(255,255,255,0.03)] border border-border rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                    <div className="w-16 h-16 rounded-full bg-purple/20 flex items-center justify-center mx-auto mb-6 text-2xl">
                        ✉️
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Get in Touch</h3>
                    <p className="text-slate mb-8">Click the button below to send me an email directly.</p>

                    <a href="mailto:duyenhoforwork@gmail.com" className="bg-white text-bg font-extrabold rounded-xl px-10 py-5 text-lg hover:bg-slate transition-all duration-300 hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] inline-block w-full">
                        Drop me an Email
                    </a>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mt-12">
                    <span className="inline-flex items-center gap-2 bg-card border border-border text-slate px-5 py-3 rounded-full text-[13px] font-semibold">
                        📱 (+84) 947 892 845
                    </span>
                    <span className="inline-flex items-center gap-2 bg-card border border-border text-slate px-5 py-3 rounded-full text-[13px] font-semibold">
                        📍 Ho Chi Minh City, Vietnam
                    </span>
                </div>
            </ScrollReveal>
        </section>
    );
}
