"use client";

import { cn } from "@/lib/utils";

interface OrbProps {
    className?: string;
    color?: string;
    size?: number;
    blur?: number;
}

export function OrbBackground({ className, color = "rgba(101,101,253,0.15)", size = 400, blur = 100 }: OrbProps) {
    return (
        <div
            className={cn("absolute rounded-full pointer-events-none", className)}
            style={{
                width: size,
                height: size,
                background: `radial-gradient(circle, ${color}, transparent 70%)`,
                filter: `blur(${blur}px)`,
            }}
        />
    );
}
