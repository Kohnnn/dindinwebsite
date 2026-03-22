import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hồ Hao Duyên — Media Planner & Strategist",
  description: "Award-winning media strategist at WPP Media Vietnam. MMA Gold 2024. Specializing in FMCG, Beauty & Real Estate.",
  openGraph: {
    title: "Hồ Hao Duyên Portfolio",
    description: "Associate Manager, Media Planning @ WPP Media",
    url: "https://duyenho.com",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${beVietnamPro.variable} font-sans antialiased text-muted bg-bg selection:bg-purple/30`}>
        {children}
      </body>
    </html>
  );
}
