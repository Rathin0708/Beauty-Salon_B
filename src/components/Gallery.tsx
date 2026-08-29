import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";
import type { Dictionary } from "@/lib/i18n";

export default function Gallery({ t }: { t: Dictionary }) {
  return (
    <section id="gallery" className="section-anchor py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <RevealOnScroll>
            <span className="text-sm font-semibold uppercase tracking-wide text-rose">
              {t.gallery.eyebrow}
            </span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-semibold text-charcoal">
              {t.gallery.title}
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="mt-4 text-charcoal/70">{t.gallery.subtitle}</p>
          </RevealOnScroll>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {t.gallery.images.map((img, i) => (
            <RevealOnScroll key={img.src} delay={(i % 3) * 0.08}>
              <div className="group relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(min-width: 768px) 33vw, 50vw"
                />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
