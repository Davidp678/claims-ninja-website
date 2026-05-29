import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CLIENT_REVIEWS } from "@/lib/testimonials";

export function TestimonialsSection() {
  return (
    <Section id="reviews" bordered>
      <SectionHeading
        eyebrow="Client stories"
        title="Results that speak louder than ads"
      />
      <ul className="mt-14 grid gap-6 md:grid-cols-3">
        {CLIENT_REVIEWS.map((review) => (
          <li
            key={review.author}
            className="flex min-h-0 flex-col rounded-2xl border border-white/15 bg-brand-surface p-8 shadow-[0_0_48px_-28px_rgba(220,38,38,0.2)] shadow-lg shadow-black/25 transition-colors hover:border-brand-red/35"
          >
            <div className="flex gap-1 text-brand-red-light" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-sm">
                  ★
                </span>
              ))}
            </div>
            <blockquote className="mt-3.5 flex-1 text-base leading-snug text-zinc-300">
              &ldquo;{review.quote}&rdquo;
            </blockquote>
            <footer className="mt-5 border-t border-white/12 pt-6">
              <cite className="not-italic">
                <p className="font-semibold text-white">{review.author}</p>
                <p className="text-sm text-zinc-300">{review.location}</p>
              </cite>
            </footer>
          </li>
        ))}
      </ul>
    </Section>
  );
}
