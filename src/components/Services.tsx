import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";
import type { Dictionary } from "@/lib/i18n";

export default function Services({ t }: { t: Dictionary }) {
  return (
    <section id="services" className="section-anchor py-20 sm:py-28 bg-rose-soft/25">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <RevealOnScroll>
            <span className="text-sm font-semibold uppercase tracking-wide text-rose">
              {t.services.eyebrow}
            </span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-semibold text-charcoal">
              {t.services.title}
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="mt-4 text-charcoal/70">{t.services.subtitle}</p>
          </RevealOnScroll>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, i) => (
            <RevealOnScroll key={service.title} delay={(i % 3) * 0.1}>
              <div className="group h-full overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-charcoal">{service.title}</h3>
                  <p className="mt-2 text-sm text-charcoal/70 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
