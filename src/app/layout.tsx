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
  metadataBase: new URL("https://hazelportfolio.vercel.app"),
  title: "Hazel Ho's Portfolio",
  description: "Project-led media planner portfolio focused on commerce growth, brand strategy, and conversion improvement across FMCG, beauty, and real estate.",
  icons: {
    icon: "/HoHaoDuyen_Portrait.jpeg",
  },
  openGraph: {
    title: "Hazel Ho's Portfolio",
    description: "Project-led media planner portfolio with case studies across commerce, brand, and UX performance.",
    url: "https://hazelportfolio.vercel.app",
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
