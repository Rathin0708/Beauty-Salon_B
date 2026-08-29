import Image from "next/image";
import { Heart } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import type { Dictionary } from "@/lib/i18n";

export default function About({ t }: { t: Dictionary }) {
  return (
    <section id="about" className="section-anchor py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid gap-12 md:grid-cols-2 md:items-center">
        <RevealOnScroll direction="right">
          <div className="relative aspect-4/5 w-full max-w-md mx-auto md:mx-0 overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop"
              alt="Yahweh Family Makeup Studio interior"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 400px, 90vw"
            />
          </div>
        </RevealOnScroll>

        <div>
          <RevealOnScroll>
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-rose">
              <Heart className="size-4" />
              {t.about.eyebrow}
            </span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-semibold text-charcoal">
              {t.about.title}
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="mt-5 text-charcoal/75 leading-relaxed">{t.about.body}</p>
          </RevealOnScroll>

          <div className="mt-8 grid sm:grid-cols-3 gap-5">
            {t.about.points.map((point, i) => (
              <RevealOnScroll key={point.title} delay={0.25 + i * 0.1}>
                <div className="rounded-2xl bg-rose-soft/40 p-5 h-full">
                  <p className="font-serif text-lg font-semibold text-charcoal">{point.title}</p>
                  <p className="mt-1.5 text-sm text-charcoal/70">{point.body}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
