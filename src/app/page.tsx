import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Experience from "@/components/Experience";
import Metrics from "@/components/Metrics";
import Skills from "@/components/Skills";
import Awards from "@/components/Awards";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Experience />
      <Metrics />
      <Awards />
      <Skills />
      <Marquee />
      <Education />
      <Contact />

      <footer className="py-8 text-center border-t border-border mt-10">
        <p className="text-[12px] text-slate font-medium">
          © {new Date().getFullYear()} Hồ Hào Duyên. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
