import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "Projects - Hazel Ho",
    description: "Project-led marketing and media case studies by Ho Hao Duyen.",
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-bg">
            <nav className="sticky top-0 z-50 border-b border-border/30 bg-bg/70 backdrop-blur-xl">
                <div className="max-w-[1100px] mx-auto px-6 py-4 flex items-center justify-between">
                    <Link
                        href="/"
                        className="group flex items-center gap-2 text-[13px] font-medium text-slate transition-colors duration-300 hover:text-purple-lt"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                        Back to Portfolio
                    </Link>
                    <span className="text-[13px] font-semibold text-white/60">Hazel Ho</span>
                </div>
            </nav>

            <main className="max-w-[1100px] mx-auto px-6 py-12 md:py-20">
                {children}
            </main>
        </div>
    );
}
