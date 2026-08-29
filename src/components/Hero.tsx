import Image from "next/image";
import { Star, MapPin } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import { business } from "@/lib/business";
import type { Dictionary } from "@/lib/i18n";

export default function Hero({ t }: { t: Dictionary }) {
  return (
    <section
      id="top"
      className="section-anchor relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/55 to-cream" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8 text-center">
        <RevealOnScroll>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm ring-1 ring-white/25">
            {t.hero.eyebrow}
          </span>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h1 className="mt-6 font-serif text-4xl sm:text-6xl font-semibold leading-[1.1] text-white">
            {t.hero.title}
            <br />
            <span className="text-rose-soft">{t.hero.highlight}</span>
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-white/85">
            {t.hero.subtitle}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto rounded-full bg-rose px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-rose/30 hover:bg-rose/90 transition-colors"
            >
              {t.hero.primaryCta}
            </a>
            <a
              href={business.mapDirectionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-8 py-3.5 text-sm font-semibold text-white ring-1 ring-white/40 backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <MapPin className="size-4" />
              {t.hero.secondaryCta}
            </a>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4}>
          <div className="mt-10 inline-flex items-center gap-2 text-white/90 text-sm">
            <span className="inline-flex items-center gap-1 font-semibold text-white">
              {business.rating}
              <Star className="size-4 fill-gold text-gold" />
            </span>
            <span className="text-white/70">
              ({business.reviewCount}) {t.hero.ratingSuffix}
            </span>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
