"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link for the section currently in view
  useEffect(() => {
    // Include the hero ("#top") so no link is highlighted while it is in view
    const sections = ["#top", ...navLinks.map((l) => l.href)]
      .map((href) => document.querySelector<HTMLElement>(href))
      .filter((s): s is HTMLElement => s !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a href="#top" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 font-mono text-sm font-bold text-zinc-950 transition-transform group-hover:scale-105">
            {site.initials}
          </span>
          <span className="hidden font-medium text-white sm:inline">{site.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href ? "true" : undefined}
                className={`relative rounded-md px-3 py-2 text-sm transition-colors ${
                  active === link.href
                    ? "text-white after:absolute after:inset-x-3 after:-bottom-0.5 after:h-px after:bg-gradient-to-r after:from-indigo-400 after:to-cyan-400"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200 sm:inline-block"
          >
            Hire me
          </a>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-md text-zinc-300 hover:bg-white/5 hover:text-white md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute top-1.5 left-0 h-0.5 w-5 rounded bg-current transition-opacity duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <ul className="min-h-0 px-4 sm:px-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className="block border-b border-white/5 py-3.5 text-base text-zinc-300 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="py-4">
            <a
              href="#contact"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className="block rounded-full bg-white py-3 text-center text-sm font-medium text-zinc-950"
            >
              Hire me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
