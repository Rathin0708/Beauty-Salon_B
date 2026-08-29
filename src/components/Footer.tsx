import { Phone, Sparkles } from "lucide-react";
import { business } from "@/lib/business";
import type { Dictionary } from "@/lib/i18n";
import InstagramIcon from "./icons/InstagramIcon";

export default function Footer({ t }: { t: Dictionary }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="flex items-center justify-center sm:justify-start gap-2 font-serif text-lg font-semibold text-white">
            <Sparkles className="size-5 text-rose-soft" strokeWidth={1.75} />
            {business.name}
          </p>
          <p className="mt-1 text-sm text-cream/60">{t.footer.tagline}</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={business.phoneHref}
            aria-label="Call the studio"
            className="rounded-full bg-white/10 p-2.5 hover:bg-white/20 transition-colors"
          >
            <Phone className="size-4" />
          </a>
          <a
            href={business.instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="rounded-full bg-white/10 p-2.5 hover:bg-white/20 transition-colors"
          >
            <InstagramIcon className="size-4" />
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-cream/50">
        © {year} {business.name}. {t.footer.rights}
      </div>
    </footer>
  );
}
