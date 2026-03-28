"use client";

import { FormEvent, useState } from "react";
import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";

import { DATA } from "@/data/resume";

import { OrbBackground } from "./ui/orb-background";
import { ScrollReveal } from "./ui/scroll-reveal";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<string>("");

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const trimmedMessage = form.message.trim();
        const trimmedName = form.name.trim();
        const trimmedEmail = form.email.trim();

        if (!trimmedName || !trimmedEmail || !trimmedMessage) {
            setStatus("Please complete all three fields before sending.");
            return;
        }

        const subject = encodeURIComponent(`Portfolio enquiry from ${trimmedName}`);
        const bodyText = `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\nMessage:\n${trimmedMessage}`;
        const body = encodeURIComponent(bodyText);

        try {
            if (navigator.clipboard?.writeText) {
                await navigator.clipboard.writeText(bodyText);
            }
        } catch {
            // Ignore clipboard errors and continue with the mailto fallback.
        }

        setStatus("Your message draft is ready. If your email app does not open, paste the copied message into an email to duyenhoforwork@gmail.com.");
        window.location.href = `mailto:${DATA.contact.email}?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contact" className="section py-16 md:py-24 px-6 md:px-16 max-w-[1200px] mx-auto relative overflow-hidden">
            <OrbBackground size={800} color="rgba(101,101,253,0.12)" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            <ScrollReveal className="relative z-10">
                <div className="text-center max-w-[760px] mx-auto mb-12">
                    <h2 className="text-[52px] md:text-[64px] font-black text-white tracking-[-2px] leading-[1.05] mb-6">
                        Let&apos;s Build <em className="italic font-light text-gradient">Something Great.</em>
                    </h2>
                    <p className="text-[16px] text-slate max-w-[560px] mx-auto leading-[1.8]">
                        Use the form below to start a conversation. I also keep direct email, phone, and location details visible for fast follow-up.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-6 items-stretch">
                    <div className="bg-[rgba(255,255,255,0.03)] border border-border rounded-[28px] p-8 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                        <div className="w-14 h-14 rounded-2xl bg-purple/15 border border-purple/20 flex items-center justify-center mb-6 mx-auto lg:mx-0">
                            <Mail className="w-6 h-6 text-purple-lt" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 text-center lg:text-left">Start a Conversation</h3>
                        <p className="text-slate mb-8 text-center lg:text-left leading-[1.8]">
                            I currently use an email-first workflow, so this form prepares a clean message draft and copies your note as backup.
                        </p>

                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Your name"
                                value={form.name}
                                onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                                className="w-full rounded-2xl border border-border/40 bg-bg3/80 px-4 py-3.5 text-[15px] text-white placeholder:text-slate/70 outline-none transition-colors focus:border-purple/40"
                            />
                            <input
                                type="email"
                                placeholder="Your email"
                                value={form.email}
                                onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                                className="w-full rounded-2xl border border-border/40 bg-bg3/80 px-4 py-3.5 text-[15px] text-white placeholder:text-slate/70 outline-none transition-colors focus:border-purple/40"
                            />
                            <textarea
                                placeholder="Tell me about the role, project, or challenge"
                                value={form.message}
                                onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                                rows={6}
                                className="w-full resize-none rounded-2xl border border-border/40 bg-bg3/80 px-4 py-3.5 text-[15px] text-white placeholder:text-slate/70 outline-none transition-colors focus:border-purple/40"
                            />

                            <button
                                type="submit"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-[15px] font-extrabold text-bg transition-all duration-300 hover:bg-slate hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)]"
                            >
                                <Send className="w-4 h-4" />
                                Draft Email Message
                            </button>
                        </form>

                        <p className="mt-4 text-[12px] text-slate leading-[1.7]" aria-live="polite">
                            {status || "The form opens your email app and also copies the message as a fallback if mail handling is unavailable."}
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="bg-[rgba(255,255,255,0.03)] border border-border rounded-[28px] p-7 shadow-[0_8px_32px_rgba(0,0,0,0.18)]">
                            <div className="text-[12px] uppercase tracking-[2px] text-purple-lt font-semibold mb-4">
                                Direct Contact
                            </div>
                            <div className="space-y-3">
                                <a href={`mailto:${DATA.contact.email}`} className="flex items-center gap-3 rounded-2xl border border-border/40 bg-bg3/70 px-4 py-4 text-[14px] text-white transition-colors hover:border-purple/30">
                                    <Mail className="w-4 h-4 text-purple-lt" />
                                    {DATA.contact.email}
                                </a>
                                <a href={`tel:${DATA.contact.phone.replace(/[^\d+]/g, "")}`} className="flex items-center gap-3 rounded-2xl border border-border/40 bg-bg3/70 px-4 py-4 text-[14px] text-white transition-colors hover:border-purple/30">
                                    <Phone className="w-4 h-4 text-purple-lt" />
                                    {DATA.contact.phone}
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/duyen-ho-0640b11a1/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-3 rounded-2xl border border-border/40 bg-bg3/70 px-4 py-4 text-[14px] text-white transition-colors hover:border-purple/30"
                                >
                                    <Linkedin className="w-4 h-4 text-purple-lt" />
                                    LinkedIn Profile
                                </a>
                                <div className="flex items-center gap-3 rounded-2xl border border-border/40 bg-bg3/70 px-4 py-4 text-[14px] text-white">
                                    <MapPin className="w-4 h-4 text-purple-lt" />
                                    Ho Chi Minh City, Vietnam
                                </div>
                            </div>
                        </div>

                        <div className="bg-[rgba(255,255,255,0.03)] border border-border rounded-[28px] p-7 shadow-[0_8px_32px_rgba(0,0,0,0.18)]">
                            <div className="text-[12px] uppercase tracking-[2px] text-purple-lt font-semibold mb-4">
                                Quick Note
                            </div>
                            <p className="text-[14px] text-slate leading-[1.8]">
                                If you are hiring for media planning, commerce growth, brand strategy, or cross-channel optimization, this form gives the fastest way to reach me without leaving the portfolio context. LinkedIn is also available for quick profile validation.
                            </p>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
