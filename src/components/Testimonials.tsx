import { Star, Quote } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import type { Dictionary } from "@/lib/i18n";

export default function Testimonials({ t }: { t: Dictionary }) {
  return (
    <section id="testimonials" className="section-anchor py-20 sm:py-28 bg-rose-soft/25">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <RevealOnScroll>
            <span className="text-sm font-semibold uppercase tracking-wide text-rose">
              {t.testimonials.eyebrow}
            </span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-semibold text-charcoal">
              {t.testimonials.title}
            </h2>
          </RevealOnScroll>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.testimonials.items.map((review, i) => (
            <RevealOnScroll key={review.name} delay={i * 0.12}>
              <div className="h-full rounded-3xl bg-white p-7 shadow-sm">
                <Quote className="size-7 text-rose/40" />
                <div className="mt-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className={`size-4 ${
                        idx < review.rating ? "fill-gold text-gold" : "text-charcoal/15"
                      }`}
                    />
                  ))}
                </div>
                <p className="mt-4 text-charcoal/80 leading-relaxed">&ldquo;{review.quote}&rdquo;</p>
                <div className="mt-6">
                  <p className="font-semibold text-charcoal">{review.name}</p>
                  <p className="text-sm text-charcoal/60">{review.role}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
