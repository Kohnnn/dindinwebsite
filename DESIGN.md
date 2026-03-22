Duyen Ho — Advanced Portfolio: Developer Build Guide

🛠️ Duyen Ho — Portfolio: Advanced Developer Build Guide
Purpose: This document provides a complete specification for another AI (or developer) to rebuild and extend this personal portfolio to production-grade quality using modern web technologies.

📐 Tech Stack Recommendation
Layer	Recommended	Alternative
Framework	Next.js 14 (App Router)	React 18 (Vite)
Styling	Tailwind CSS v3	Vanilla CSS (custom props)
Animations	Framer Motion	GSAP + ScrollTrigger
Font	Be Vietnam Pro (Google Fonts)	—
Icons	Lucide React	Heroicons
Deployment	Vercel	Netlify
Form	Resend API	EmailJS
🎨 Design System
Color Palette (Lane-Inspired)
css
:root {
--bg:        #090507;   /* Deep near-black */
--bg-2:      #100d12;   /* Card surfaces */
--bg-3:      #16101a;   /* Elevated elements */
--purple:    #6565FD;   /* Primary accent */
--purple-lt: #9293FA;   /* Light accent / italic text */
--mauve:     #966EA1;   /* Warm secondary */
--dark-pur:  #453049;   /* Deep purple */
--muted:     #CCC8D3;   /* Body text */
--slate:     #738AB3;   /* Subdued text */
--mid-pur:   #59589A;   /* Mid tone */
--border:    rgba(255,255,255,0.07);
--card:      rgba(255,255,255,0.04);
}
Typography
css
/* Google Fonts Import */
@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400&display=swap');

/* Font Scale */
--text-xs:   11px / letter-spacing: 2px / uppercase (eyebrows)
--text-sm:   13–14px (body small, chips)
--text-base: 16–17px (body)
--text-xl:   24px (card titles)
--text-2xl:  48px (section headings, weight 800, ls: -1.5px)
--text-3xl:  64–68px (hero H1, weight 800, ls: -2px)
Gradient Utility
css
/* Text gradient (purple → mauve) */
background: linear-gradient(135deg, #9293FA, #966EA1);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

/* Button glow effect */
box-shadow: 0 8px 40px rgba(101,101,253,0.45);
📁 Project Structure (Next.js)
/app
layout.tsx          ← Font import, metadata, global styles
page.tsx            ← Home (all sections)
/components
  Nav.tsx
  Hero.tsx
  Marquee.tsx
  Experience.tsx
  Metrics.tsx
  Skills.tsx
  Awards.tsx
  Education.tsx
  Contact.tsx
  Footer.tsx
/ui
  Button.tsx
  Chip.tsx
  OrbBackground.tsx
  ScrollReveal.tsx
  AnimatedCounter.tsx
/styles
globals.css         ← Tailwind directives + CSS variables
/data
resume.ts           ← All content as typed data
/public
/images
  duyen-hero.jpg
  og-image.jpg
🧩 Section-by-Section Build Spec

1. `<Nav />` — Sticky Glassmorphism Navbar
   Behavior:

Fixed top, backdrop-filter: blur(20px), background transitions from transparent → semi-opaque on scroll
Logo: "Duyên." with gradient accent on the period
Links: Work · Impact · Skills · Education · Contact
CTA button: pill-shaped, solid purple, hover glow effect
JavaScript:

js
window.addEventListener('scroll', () => {
nav.style.background = window.scrollY > 50
  ? 'rgba(9,5,7,0.85)'
  : 'rgba(9,5,7,0.4)';
});
2. `<Hero />` — Full-Viewport Landing
Layout: 2-column grid (text left, image card right)

Left Column elements:

Eyebrow pill with animated pulsing green/purple dot
H1: "Media That Moves Markets." — "Markets" in italic gradient
Subheading: role + company context
Two CTA buttons: primary pill (glow on hover) + ghost arrow link
Stats row: 3 metrics separated by border-top
Right Column — Image Card:

Aspect ratio 4:5, border-radius 24px, dark border
Portrait photo with gradient overlay (bottom fade to black)
Floating badge (bottom): glassmorphism pill with role + location
Floating award (top-right): rotated card with MMA Gold badge
Framer Motion Animations:

tsx
// Hero text stagger
const container = {
hidden: { opacity: 0 },
show: {
  opacity: 1,
  transition: { staggerChildren: 0.12 }
}
}
const item = {
hidden: { opacity: 0, y: 24 },
show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}
Background Orbs (CSS):

3 radial gradient orbs, positioned absolutely with blur(100px)
Subtle float animation using @keyframes translate
3. `<Marquee />` — Infinite Skill Ticker
Technique: Duplicate content array → CSS animation: marquee 18s linear infinite

tsx
const items = [
'TikTok Commerce', 'Integrated Media Planning',
'Omnichannel Campaigns', 'Performance Marketing',
'FMCG · Beauty · Real Estate', 'MMA Gold Award',
'Data & BI Reporting', 'WPP Open AI Tools'
];
// Render items twice for seamless loop
Accessibility: aria-hidden="true" on duplicate set

4. `<Experience />` — Tab-Based Job Switcher
   Layout: 2-column (sidebar tabs + content panel)

Sidebar: Vertical list of role cards with date, title, company

Interaction (Framer Motion):

tsx
`<AnimatePresence mode="wait">`
<motion.div
  key={activeJob}
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: -20 }}
  transition={{ duration: 0.3 }}

  {/* Job content */}
</motion.div>
`</AnimatePresence>`
Data shape:

ts
interface Job {
id: string;
date: string;
title: string;
company: string;
client: string;
bullets: string[];
badges?: string[];
}
5. `<Metrics />` — Animated Counter Grid
Layout: 3×2 grid on dark bg-2, separated by 1px border lines

Key effect — Animated Counter:

tsx
function useCountUp(target: number, duration = 2000) {
const [count, setCount] = useState(0);
useEffect(() => {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) { setCount(target); clearInterval(timer); }
    else setCount(Math.floor(start));
  }, 16);
  return () => clearInterval(timer);
}, [target]);
return count;
}
Trigger on scroll using IntersectionObserver
Each card: emoji icon + large number + label + description
Hover: slight background shift + gradient shimmer
6. `<Skills />` — 4-Column Card Grid
Hover effect:

Border color: transparent → purple (35% opacity)
translateY(-4px)
Pseudo-element gradient overlay fades in
Cards: icon (emoji) + title + subtitle

7. `<Awards />` — 2-Column Recognition Cards
   Layout: Horizontal card with icon wrap + text Hover: translateX(4px) + border highlight
8. `<Education />` — Split Card
   Layout: 2-column inside a bordered card

Left: University name, degree, school, description text
Right: Stacked badge rows (emoji + achievement text)
9. `<Contact />` — CTA with Orb Background
Background: Large radial gradient orb centered, filter: blur(60px)

Elements:

Large italic heading: "Let's Build Something Great"
Primary CTA → opens mailto
3 contact pills: phone, email, location
Bonus: Add a minimal contact form using Resend API

tsx
// /app/api/contact/route.ts
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
const { name, email, message } = await req.json();
await resend.emails.send({
  from: 'portfolio@yourdomain.com',
  to: 'duyenhoforwork@gmail.com',
  subject: Portfolio contact from ${name},
  html: `<p>`${message}`</p>`
});
return Response.json({ success: true });
}
✨ Advanced JavaScript Features
Scroll Progress Bar
js
window.addEventListener('scroll', () => {
const progress = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
progressBar.style.width = progress + '%';
});
Custom Cursor (Desktop Only)
js
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
cursor.style.transform = translate(${e.clientX - 8}px, ${e.clientY - 8}px);
});
document.querySelectorAll('a, button').forEach(el => {
el.addEventListener('mouseenter', () => cursor.classList.add('cursor--hover'));
el.addEventListener('mouseleave', () => cursor.classList.remove('cursor--hover'));
});
Scroll-Triggered Section Reveal (vanilla)
js
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('visible');
  }
});
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
📱 Responsive Breakpoints
Breakpoint	Layout Changes
< 1024px	Hero: stack vertically; hide image card
< 768px	Nav: hamburger menu; skills: 2-col; metrics: 2-col
< 480px	Hero H1: 44px; marquee speed ×1.5; contact pills: stacked
🚀 Performance Checklist
 Use next/image with priority on hero photo
 Import Be Vietnam Pro only needed weights (300, 400, 600, 700, 800)
 Lazy load below-fold sections
 Add loading="lazy" to non-critical images
 Use will-change: transform only on animating elements
 Add prefers-reduced-motion media query to disable animations
 SEO: og:image, twitter:card, structured JSON-LD
🌐 SEO & Metadata (Next.js)
tsx
// app/layout.tsx
export const metadata: Metadata = {
title: 'Hồ Hao Duyên — Media Planner & Strategist',
description: 'Award-winning media strategist at WPP Media Vietnam. MMA Gold 2024. Specializing in FMCG, Beauty & Real Estate.',
openGraph: {
  title: 'Hồ Hao Duyên Portfolio',
  description: 'Associate Manager, Media Planning @ WPP Media',
  url: 'https://duyenho.com',
  images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
},
twitter: { card: 'summary_large_image' },
};
✅ Final Delivery Checklist
 - [x] Be Vietnam Pro font loaded correctly across all weights
 - [x] Lane color palette applied (dark bg, purple accents, gradient text)
 - [x] Animated counters trigger on scroll
 - [x] Experience tab switcher with animated transitions
 - [x] Marquee ticker loops infinitely and smoothly
 - [x] Hero orb backgrounds render with no performance hit
 - [x] Glassmorphism navbar transitions on scroll
 - [x] Floating badges on hero image card
 - [x] All sections have scroll reveal animations
 - [x] Mobile responsive (tested at 375px, 768px, 1024px)
 - [x] Contact form functional via Resend
 - [ ] Deployed on Vercel with custom domain
 - [x] SEO metadata + OG image configured

---

## 🚀 Implementation Complete (2026-03-22)
The portfolio has been completely built using Next.js 14 App Router, Tailwind CSS, and Framer Motion. 
Content from the latest CV has been incorporated into `src/data/resume.ts`.
To run locally: `npm run dev`
