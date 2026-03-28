import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "Recognition - Hazel Ho",
    description: "Recognition, credentials, and supporting proof across media and commerce work by Ho Hao Duyen.",
};

export default function AwardsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen">
            {/* ── Top Nav ── */}
            <nav className="sticky top-0 z-50 backdrop-blur-xl bg-bg/70 border-b border-border/30">
                <div className="max-w-[1000px] mx-auto px-6 py-4 flex items-center justify-between">
                    <Link
                        href="/#recognition"
                        className="flex items-center gap-2 text-[13px] font-medium text-slate hover:text-purple-lt transition-colors duration-300 group"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                        Back to Portfolio
                    </Link>
                    <span className="text-[13px] font-semibold text-white/60">
                        Hazel Ho
                    </span>
                </div>
            </nav>

            {/* ── Page Content ── */}
            <main className="max-w-[1000px] mx-auto px-6 py-12 md:py-20">
                {children}
            </main>

            {/* ── Footer ── */}
            <footer className="border-t border-border/30 py-8">
                <div className="max-w-[1000px] mx-auto px-6 flex items-center justify-between">
                    <p className="text-[12px] text-slate font-medium">
                        © {new Date().getFullYear()} Hồ Hào Duyên. All Rights Reserved.
                    </p>
                    <Link
                        href="/#recognition"
                        className="text-[12px] text-slate hover:text-purple-lt transition-colors duration-300"
                    >
                        ← Back to Portfolio
                    </Link>
                </div>
            </footer>
        </div>
    );
}
