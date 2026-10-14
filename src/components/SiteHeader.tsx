"use client";

import { useEffect, useState } from "react";
import { links, profile } from "@/data/content";
import { ThemeToggle } from "./ThemeToggle";

export type NavItem = { id: string; label: string };

export function SiteHeader({ items }: { items: NavItem[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    // A thin band ~30% down the viewport: whichever section crosses it is active.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -65% 0px" },
    );
    sections.forEach((section) => observer.observe(section));

    // Clear above the first section; the short last section may never reach the band.
    const onScroll = () => {
      const doc = document.documentElement;
      if (window.innerHeight + window.scrollY >= doc.scrollHeight - 4 && sections.length) {
        setActive(sections[sections.length - 1].id);
      } else if (sections[0] && sections[0].getBoundingClientRect().top > window.innerHeight * 0.3) {
        setActive(null);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [items]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-6 sm:px-8">
        <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight text-ink">
          <span
            aria-hidden="true"
            className="grid size-8 place-items-center rounded-lg bg-accent text-xs font-bold text-on-accent"
          >
            {profile.initials}
          </span>
          {profile.name}
        </a>

        <nav aria-label="Sections" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {items.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={`relative block rounded-md px-3 py-2 text-sm transition-colors motion-reduce:transition-none ${
                      isActive ? "text-ink" : "text-muted hover:text-ink"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-3 bottom-0.5 h-0.5 rounded-full bg-accent transition-opacity motion-reduce:transition-none ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={links.email}
            className="rounded-lg bg-ink px-3.5 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-85 motion-reduce:transition-none"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
