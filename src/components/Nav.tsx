"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Marquee from "./Marquee";

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu when clicking a link
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 flex flex-col transition-all duration-400 border-b",
                scrolled
                    ? "bg-[#090507]/85 backdrop-blur-[20px] border-border/100"
                    : "bg-[#090507]/40 backdrop-blur-md border-transparent"
            )}
        >
            <Marquee />
            <div className="px-6 md:px-16 py-4 flex justify-between items-center w-full">
                <div className="text-[20px] font-extrabold text-white tracking-tight z-50">
                    Hazel<span className="text-gradient">.</span>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-9 list-none font-medium text-[13px] tracking-wide text-muted">
                    <li><a href="#work" className="hover:text-white transition-colors duration-300">Work</a></li>
                    <li><a href="#impact" className="hover:text-white transition-colors duration-300">Impact</a></li>
                    <li><a href="#skills" className="hover:text-white transition-colors duration-300">Skills</a></li>
                    <li><a href="#education" className="hover:text-white transition-colors duration-300">Education</a></li>
                </ul>

                <a
                    href="#contact"
                    className="hidden md:inline-flex bg-purple hover:bg-purple-lt hover:-translate-y-[1px] text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-none hover:shadow-[0_8px_30px_rgba(101,101,253,0.35)] text-sm"
                >
                    Contact
                </a>

                {/* Mobile Hamburger Toggle */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-50 relative"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Navigation"
                >
                    <span className={cn("block w-6 h-[2px] bg-white transition-transform duration-300", isMobileMenuOpen ? "rotate-45 translate-y-[6px]" : "mb-1.5")} />
                    <span className={cn("block w-6 h-[2px] bg-white transition-opacity duration-300", isMobileMenuOpen ? "opacity-0" : "mb-1.5")} />
                    <span className={cn("block w-6 h-[2px] bg-white transition-transform duration-300", isMobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : "")} />
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={cn(
                    "md:hidden fixed inset-0 top-[100px] w-full bg-[#090507] border-t border-border transition-transform tracking-wider duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] z-40 flex flex-col px-6 pt-10",
                    isMobileMenuOpen ? "translate-y-0" : "-translate-y-[150%]"
                )}
            >
                <ul className="flex flex-col gap-8 list-none font-bold text-2xl text-muted text-center">
                    <li><a href="#work" onClick={closeMobileMenu} className="hover:text-white transition-colors block">Work</a></li>
                    <li><a href="#impact" onClick={closeMobileMenu} className="hover:text-white transition-colors block">Impact</a></li>
                    <li><a href="#skills" onClick={closeMobileMenu} className="hover:text-white transition-colors block">Skills</a></li>
                    <li><a href="#education" onClick={closeMobileMenu} className="hover:text-white transition-colors block">Education</a></li>
                </ul>
                <div className="mt-12 flex justify-center">
                    <a
                        href="#contact"
                        onClick={closeMobileMenu}
                        className="bg-purple text-white px-8 py-4 rounded-full font-bold transition-all text-lg w-full text-center"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </header>
    );
}
