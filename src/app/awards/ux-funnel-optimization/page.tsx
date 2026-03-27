"use client";

import React from "react";
import { motion } from "framer-motion";

const funnelMetrics = [
    { value: "90.83%", label: "Product View → A2C Drop-off", severity: "high" },
    { value: "85.6%", label: "A2C → Purchase Drop-off", severity: "high" },
    { value: "66.03%", label: "Identification Step Drop-off", severity: "critical" },
];

const problems = [
    {
        icon: "🚫",
        title: "Dead-End UI",
        desc: "Promotional banners lacked direct product hyperlinks. Clicking primary campaign imagery resulted in no action, instantly killing momentum.",
    },
    {
        icon: "🧱",
        title: "Hard Friction — The Wall",
        desc: "Forced login and account creation acted as a massive barrier, driving the 66.03% drop. No guest checkout option available.",
    },
    {
        icon: "🔄",
        title: "Broken Social Login",
        desc: "Missing Facebook Graph API trapped users in an authentication loop, exhausting motivation. Social autofill resulted in browser loops.",
    },
];

const comparison = [
    { metric: "Steps", before: "12", after: "6" },
    { metric: "Authentication", before: "Forced Login", after: "Optional / Guest" },
    { metric: "Promotions", before: "Dead UI", after: "Clickable Routing" },
];

const phases = [
    {
        phase: "Phase 1: Quick Wins",
        timeline: "Weeks 1–2",
        tag: "High Impact / Low Effort",
        actions: [
            "Attach dynamic hyperlinks to all active promotional banners",
            "Increase size, contrast, and hit-area of ATC and Purchase CTAs",
        ],
    },
    {
        phase: "Phase 2: Mid-Term",
        timeline: "Weeks 3–4",
        tag: "Structural Improvements",
        actions: [
            "Simplify the cart review flow",
            "Consolidate Shipping Info + Payment Methods onto a single screen",
        ],
    },
    {
        phase: "Phase 3: Advanced",
        timeline: "Weeks 5–6",
        tag: "Architectural Change",
        actions: [
            "Implement true Guest Checkout architecture",
            "Repair Facebook/Social API automated logins",
            "Establish continuous A/B testing on the streamlined flow",
        ],
    },
];

const currentSteps = [
    { label: "Home Page", type: "normal" },
    { label: "Category Page", type: "normal" },
    { label: "Product Page", type: "warning" },
    { label: "Add to Cart", type: "normal" },
    { label: "Cart View", type: "normal" },
    { label: "Identification", type: "critical" },
    { label: "Shipping Info", type: "warning" },
    { label: "Shipping Method", type: "normal" },
    { label: "Payment Method", type: "warning" },
    { label: "Review Order", type: "normal" },
    { label: "Confirm Order", type: "normal" },
    { label: "Order Placed", type: "normal" },
];

const streamlinedSteps = [
    "Promotion Page", "Add to Cart", "Cart Review",
    "Guest Checkout", "Payment", "Complete",
];

export default function UXFunnelPage() {
    return (
        <article>
            {/* ── Hero ── */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <div className="flex items-center gap-2 text-[11px] font-medium text-purple-lt uppercase tracking-widest mb-4">
                    <span className="w-6 h-[1px] bg-purple-lt/40" />
                    UX / Conversion Optimization
                </div>
                <h1 className="text-[32px] md:text-[44px] font-extrabold text-white leading-[1.1] tracking-tight mb-4">
                    Mobile UX Funnel Optimization
                </h1>
                <p className="text-[16px] text-muted/80 leading-relaxed max-w-2xl mb-2">
                    <strong className="text-white">Massive Conversion Leakage</strong> across the mobile purchase journey
                </p>
                <p className="text-[15px] text-slate leading-relaxed max-w-2xl">
                    Brand.com was experiencing critical user drop-off on mobile devices. The purchase journey required up to 12 steps, severely degrading completion rates. Through systematic UX analysis, we identified and addressed the key friction points.
                </p>
            </motion.div>

            {/* ── Drop-off Metrics ── */}
            <div className="mt-14">
                <h2 className="text-[14px] font-semibold text-slate uppercase tracking-wider mb-6">
                    Critical Drop-off Points
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {funnelMetrics.map((m, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease: "easeOut" }}
                            className={`bg-card border rounded-2xl p-5 text-center transition-colors duration-300 ${m.severity === "critical"
                                    ? "border-red-500/30 hover:border-red-500/50"
                                    : "border-border hover:border-purple/25"
                                }`}
                        >
                            <div className={`text-[28px] md:text-[32px] font-extrabold leading-none mb-2 ${m.severity === "critical"
                                    ? "text-red-400"
                                    : "text-gradient"
                                }`}>
                                {m.value}
                            </div>
                            <div className="text-[12px] text-slate font-medium">
                                {m.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ── Root Cause Analysis ── */}
            <div className="mt-14">
                <h2 className="text-[14px] font-semibold text-slate uppercase tracking-wider mb-6">
                    Root Cause Analysis
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {problems.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + i * 0.1, duration: 0.6, ease: "easeOut" }}
                            className="bg-card border border-border rounded-2xl p-5 hover:border-purple/20 transition-all duration-300"
                        >
                            <div className="text-[24px] mb-3">{p.icon}</div>
                            <h3 className="text-[14px] font-bold text-white mb-2">
                                {p.title}
                            </h3>
                            <p className="text-[13px] text-slate leading-relaxed">
                                {p.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ── Flow Visualization ── */}
            <div className="mt-14">
                <h2 className="text-[14px] font-semibold text-slate uppercase tracking-wider mb-6">
                    Journey Simplification: 12 Steps → 6 Steps
                </h2>

                {/* Before */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                    className="mb-4"
                >
                    <div className="text-[11px] font-semibold text-red-400 uppercase tracking-wider mb-3">
                        ✕ Current State — 12 Steps (Friction)
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                        {currentSteps.map((step, si) => (
                            <React.Fragment key={si}>
                                <span className={`text-[11px] px-2.5 py-1.5 rounded-lg font-medium ${step.type === "critical"
                                        ? "bg-red-500/15 text-red-400 border border-red-500/30"
                                        : step.type === "warning"
                                            ? "bg-yellow-500/10 text-yellow-400/80 border border-yellow-500/20"
                                            : "bg-bg2 text-slate border border-border"
                                    }`}>
                                    {step.label} {step.type === "critical" ? "⛔" : step.type === "warning" ? "⚠️" : ""}
                                </span>
                                {si < currentSteps.length - 1 && (
                                    <span className="text-border text-[11px] flex items-center">→</span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </motion.div>

                {/* After */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
                >
                    <div className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider mb-3">
                        ✓ Streamlined Flow — 6 Steps
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                        {streamlinedSteps.map((step, si) => (
                            <React.Fragment key={si}>
                                <span className={`text-[12px] px-3 py-1.5 rounded-lg font-semibold ${step === "Complete"
                                        ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                                        : "bg-purple/10 text-purple-lt border border-purple/20"
                                    }`}>
                                    {step} {step === "Complete" ? "✓" : ""}
                                </span>
                                {si < streamlinedSteps.length - 1 && (
                                    <span className="text-purple-lt/40 text-[12px] flex items-center">→</span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* ── Comparison Table ── */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6, ease: "easeOut" }}
                className="mt-10"
            >
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                    <table className="w-full text-[13px]">
                        <thead>
                            <tr className="border-b border-border/50">
                                <th className="text-left p-4 text-slate font-semibold">Metric</th>
                                <th className="text-center p-4 text-red-400/80 font-semibold">Before</th>
                                <th className="text-center p-4 text-emerald-400/80 font-semibold">After</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparison.map((c, i) => (
                                <tr key={i} className="border-b border-border/20 last:border-0">
                                    <td className="p-4 text-white font-medium">{c.metric}</td>
                                    <td className="p-4 text-center text-slate">{c.before}</td>
                                    <td className="p-4 text-center text-gradient font-semibold">{c.after}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* ── Execution Roadmap ── */}
            <div className="mt-14">
                <h2 className="text-[14px] font-semibold text-slate uppercase tracking-wider mb-6">
                    Execution Roadmap
                </h2>
                <div className="space-y-4">
                    {phases.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1 + i * 0.1, duration: 0.6, ease: "easeOut" }}
                            className="bg-card border border-border rounded-2xl p-6 hover:border-purple/20 transition-all duration-300"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                                <h3 className="text-[14px] font-bold text-white">
                                    {p.phase}
                                </h3>
                                <div className="flex items-center gap-2">
                                    <span className="text-[11px] text-slate bg-bg2 px-2.5 py-1 rounded-full">
                                        {p.timeline}
                                    </span>
                                    <span className="text-[10px] font-medium text-purple-lt bg-purple/10 px-2 py-1 rounded-full">
                                        {p.tag}
                                    </span>
                                </div>
                            </div>
                            <ul className="space-y-2">
                                {p.actions.map((a, ai) => (
                                    <li
                                        key={ai}
                                        className="flex items-start gap-2.5 text-[13px] text-slate leading-relaxed"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-purple-lt/50 mt-2 shrink-0" />
                                        {a}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ── Key Takeaway ── */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
                className="mt-14 bg-purple/5 border border-purple/15 rounded-2xl p-6 md:p-8"
            >
                <p className="text-[15px] text-muted/80 leading-relaxed italic text-center">
                    &ldquo;We are asking for marriage before the first date. Data collection must follow, not precede, the transaction.&rdquo;
                </p>
                <p className="text-[12px] text-purple-lt font-medium mt-3 text-center">
                    — Key Insight from the Analysis
                </p>
            </motion.div>
        </article>
    );
}
