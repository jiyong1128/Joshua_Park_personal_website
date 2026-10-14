"use client";

import { MoonIcon, SunIcon } from "./icons";

/** Flips the `dark` class on <html> and remembers the choice. */
export function ThemeToggle() {
  const toggle = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      // Storage unavailable (private mode etc.): the toggle still works for this visit.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className="grid size-9 place-items-center rounded-lg text-muted transition-colors hover:bg-subtle hover:text-ink motion-reduce:transition-none"
    >
      <MoonIcon className="size-[18px] dark:hidden" />
      <SunIcon className="hidden size-[18px] dark:block" />
    </button>
  );
}
