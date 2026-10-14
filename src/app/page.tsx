import { posts } from "@/data/content";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { SiteHeader, type NavItem } from "@/components/SiteHeader";
import { Writing } from "@/components/Writing";

const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  ...(posts.length > 0 ? [{ id: "writing", label: "Writing" }] : []),
  { id: "contact", label: "Contact" },
];

export default function Home() {
  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-on-accent"
      >
        Skip to content
      </a>
      <SiteHeader items={navItems} />
      <main id="content" tabIndex={-1} className="mx-auto max-w-5xl px-6 outline-none sm:px-8">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
