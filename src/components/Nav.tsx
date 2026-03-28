"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navBarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isMobileMenuOpen]);

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <>
            <header
                ref={navBarRef}
                className={cn(
                    "fixed top-0 w-full z-50 flex flex-col transition-all duration-400 border-b",
                    scrolled
                        ? "bg-[#090507]/95 backdrop-blur-[20px] border-border/100"
                        : "bg-[#090507]/60 backdrop-blur-md border-transparent"
                )}
            >
                <div className="px-6 md:px-16 py-4 flex justify-between items-center w-full">
                    <div className="text-[20px] font-extrabold text-white tracking-tight z-50">
                        Hazel<span className="text-gradient">.</span>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-6 lg:gap-8 list-none font-medium text-[13px] tracking-wide text-muted">
                        <li><a href="#work" className="hover:text-white transition-colors duration-300">Experience</a></li>
                        <li><a href="#projects" className="hover:text-white transition-colors duration-300">Projects</a></li>
                        <li><a href="#impact" className="hover:text-white transition-colors duration-300">Results</a></li>
                        <li><a href="#recognition" className="hover:text-white transition-colors duration-300">Recognition</a></li>
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
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-[60] relative"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Navigation"
                    >
                        <span className={cn("block w-6 h-[2px] bg-white transition-all duration-300 origin-center", isMobileMenuOpen ? "rotate-45 translate-y-[4px]" : "mb-1.5")} />
                        <span className={cn("block w-6 h-[2px] bg-white transition-all duration-300", isMobileMenuOpen ? "opacity-0 scale-x-0" : "mb-1.5")} />
                        <span className={cn("block w-6 h-[2px] bg-white transition-all duration-300 origin-center", isMobileMenuOpen ? "-rotate-45 -translate-y-[4px]" : "")} />
                    </button>
                </div>
            </header>

            {/* Mobile Menu — full-screen overlay, below the header */}
            <div
                className={cn(
                    "md:hidden fixed inset-0 bg-[#090507] z-40 flex flex-col justify-center items-center gap-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
            >
                <ul className="flex flex-col gap-6 list-none font-extrabold text-[32px] text-center">
                        {[
                            { href: "#work", label: "Experience" },
                            { href: "#projects", label: "Projects" },
                            { href: "#impact", label: "Results" },
                            { href: "#recognition", label: "Recognition" },
                            { href: "#education", label: "Education" },
                        ].map(({ href, label }, i) => (
                        <li
                            key={href}
                            className={cn(
                                "transition-all duration-500",
                                isMobileMenuOpen
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-4"
                            )}
                            style={{ transitionDelay: isMobileMenuOpen ? `${i * 60 + 100}ms` : "0ms" }}
                        >
                            <a
                                href={href}
                                onClick={closeMobileMenu}
                                className="text-muted hover:text-white transition-colors block py-1"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div
                    className={cn(
                        "mt-12 transition-all duration-500",
                        isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    )}
                    style={{ transitionDelay: isMobileMenuOpen ? "340ms" : "0ms" }}
                >
                    <a
                        href="#contact"
                        onClick={closeMobileMenu}
                        className="bg-purple text-white px-10 py-4 rounded-full font-bold text-lg block"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </>
    );
}
