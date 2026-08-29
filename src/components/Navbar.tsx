"use client";

import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { business } from "@/lib/business";
import type { Dictionary } from "@/lib/i18n";

export default function Navbar({ t }: { t: Dictionary }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur-xl backdrop-saturate-150 border-b transition-all duration-300 ${
        scrolled
          ? "bg-white/55 border-white/40 shadow-[0_8px_30px_-8px_rgba(42,30,26,0.25),inset_0_1px_0_0_rgba(255,255,255,0.6)]"
          : "bg-white/15 border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35)]"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-5 sm:px-8 flex items-center justify-between h-18 py-3">
        <a href="#top" className="flex items-center gap-2 font-serif text-lg sm:text-xl font-semibold text-charcoal">
          <Sparkles className="size-5 text-rose" strokeWidth={1.75} />
          {business.name}
        </a>

        <div className="hidden md:flex items-center gap-8">
          {t.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-charcoal/80 hover:text-rose transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-rose px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-rose/90 transition-colors"
          >
            {t.nav.cta}
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-full p-2 text-charcoal hover:bg-rose-soft/60 transition-colors"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white/55 backdrop-blur-xl backdrop-saturate-150 border-t border-white/40 px-5 pb-6 pt-2 flex flex-col gap-1 shadow-[0_8px_30px_-8px_rgba(42,30,26,0.25)]">
          {t.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base font-medium text-charcoal/85 hover:text-rose transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-rose px-5 py-3 text-center text-sm font-medium text-white"
          >
            {t.nav.cta}
          </a>
        </div>
      )}
    </header>
  );
}
