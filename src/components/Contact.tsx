"use client";

import { useState } from "react";
import { OrbBackground } from "./ui/orb-background";
import { ScrollReveal } from "./ui/scroll-reveal";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (res.ok) setStatus("success");
            else setStatus("error");
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    };

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

                {status === "success" ? (
                    <div className="bg-purple/10 border border-purple/20 text-purple-lt p-6 rounded-2xl font-semibold">
                        Thanks for reaching out! I&apos;ll get back to you soon.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input required name="name" type="text" placeholder="Your Name" className="bg-[rgba(255,255,255,0.03)] border border-border rounded-xl px-4 py-3.5 text-[14px] text-white placeholder-muted focus:outline-none focus:border-[rgba(101,101,253,0.5)] transition-colors" />
                            <input required name="email" type="email" placeholder="Your Email" className="bg-[rgba(255,255,255,0.03)] border border-border rounded-xl px-4 py-3.5 text-[14px] text-white placeholder-muted focus:outline-none focus:border-[rgba(101,101,253,0.5)] transition-colors" />
                        </div>
                        <textarea required name="message" placeholder="Your Message" rows={4} className="bg-[rgba(255,255,255,0.03)] border border-border rounded-xl px-4 py-3.5 text-[14px] text-white placeholder-muted focus:outline-none focus:border-[rgba(101,101,253,0.5)] transition-colors resize-none mb-2" />

                        <button disabled={status === "loading"} type="submit" className="bg-white text-bg font-extrabold rounded-xl py-4 hover:bg-slate transition-all duration-300 hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)]">
                            {status === "loading" ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                )}

                <div className="flex flex-wrap justify-center gap-4 mt-12">
                    <a href="mailto:duyenhoforwork@gmail.com" className="inline-flex items-center gap-2 bg-card border border-border text-slate px-5 py-3 rounded-full text-[13px] font-semibold hover:text-white hover:border-slate transition-all">
                        ✉️ duyenhoforwork@gmail.com
                    </a>
                    <span className="inline-flex items-center gap-2 bg-card border border-border text-slate px-5 py-3 rounded-full text-[13px] font-semibold hover:text-white hover:border-slate transition-all cursor-default">
                        📱 (+84) 947 892 845
                    </span>
                    <span className="inline-flex items-center gap-2 bg-card border border-border text-slate px-5 py-3 rounded-full text-[13px] font-semibold hover:text-white hover:border-slate transition-all cursor-default">
                        📍 Ho Chi Minh City, Vietnam
                    </span>
                </div>
            </ScrollReveal>
        </section>
    );
}
