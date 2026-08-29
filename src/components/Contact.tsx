import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import { business } from "@/lib/business";
import type { Dictionary } from "@/lib/i18n";

export default function Contact({ t }: { t: Dictionary }) {
  return (
    <section id="contact" className="section-anchor py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid gap-12 md:grid-cols-2 md:items-start">
        <div>
          <RevealOnScroll>
            <span className="text-sm font-semibold uppercase tracking-wide text-rose">
              {t.contact.eyebrow}
            </span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-semibold text-charcoal">
              {t.contact.title}
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="mt-4 text-charcoal/70">{t.contact.subtitle}</p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <dl className="mt-8 space-y-5">
              <div className="flex gap-4">
                <MapPin className="size-5 shrink-0 text-rose mt-0.5" />
                <div>
                  <dt className="text-sm font-semibold text-charcoal">{t.contact.addressLabel}</dt>
                  <dd className="text-charcoal/70">{business.address.full}</dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="size-5 shrink-0 text-rose mt-0.5" />
                <div>
                  <dt className="text-sm font-semibold text-charcoal">{t.contact.hoursLabel}</dt>
                  <dd className="text-charcoal/70">{business.hours}</dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="size-5 shrink-0 text-rose mt-0.5" />
                <div>
                  <dt className="text-sm font-semibold text-charcoal">{t.contact.phoneLabel}</dt>
                  <dd className="text-charcoal/70">{business.phone}</dd>
                </div>
              </div>
            </dl>
          </RevealOnScroll>

          <RevealOnScroll delay={0.4}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={business.mapDirectionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-rose px-6 py-3 text-sm font-semibold text-white hover:bg-rose/90 transition-colors"
              >
                <MapPin className="size-4" />
                {t.contact.directionsCta}
              </a>
              <a
                href={business.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-3 text-sm font-semibold text-white hover:bg-charcoal/90 transition-colors"
              >
                <Phone className="size-4" />
                {t.contact.callCta}
              </a>
              <a
                href={business.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-charcoal ring-1 ring-charcoal/15 hover:bg-rose-soft/40 transition-colors"
              >
                <MessageCircle className="size-4" />
                {t.contact.whatsappCta}
              </a>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll direction="left" delay={0.2}>
          <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-charcoal/10 h-80 sm:h-full min-h-80">
            <iframe
              title={`${business.name} location map`}
              src={business.mapEmbedSrc}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
