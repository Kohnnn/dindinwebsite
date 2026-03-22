"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 px-6 md:px-16 py-5 flex justify-between items-center transition-all duration-400 border-b",
                scrolled
                    ? "bg-[#090507]/85 backdrop-blur-[20px] border-border/100"
                    : "bg-[#090507]/40 backdrop-blur-md border-transparent"
            )}
        >
            <div className="text-[20px] font-extrabold text-white tracking-tight">
                Duyên<span className="text-gradient">.</span>
            </div>

            <ul className="hidden md:flex gap-9 list-none font-medium text-[13px] tracking-wide text-muted">
                <li><a href="#work" className="hover:text-white transition-colors duration-300">Work</a></li>
                <li><a href="#impact" className="hover:text-white transition-colors duration-300">Impact</a></li>
                <li><a href="#skills" className="hover:text-white transition-colors duration-300">Skills</a></li>
                <li><a href="#education" className="hover:text-white transition-colors duration-300">Education</a></li>
            </ul>

            <a
                href="#contact"
                className="bg-purple hover:bg-purple-lt hover:-translate-y-[1px] text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-none hover:shadow-[0_8px_30px_rgba(101,101,253,0.35)] text-sm"
            >
                Contact
            </a>
        </nav>
    );
}
