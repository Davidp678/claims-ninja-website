import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PLACEHOLDER_REVIEWS = [
  {
    quote:
      "They handled everything while we focused on getting back in our home. The settlement exceeded what the insurer first offered.",
    author: "Homeowner",
    location: "South Florida",
  },
  {
    quote:
      "Professional, responsive, and relentless. This felt like hiring a firm—not a contractor with a clipboard.",
    author: "Property manager",
    location: "Texas",
  },
  {
    quote:
      "Clear communication at every step. We always knew where the claim stood and what came next.",
    author: "Business owner",
    location: "Georgia",
  },
] as const;

export function TestimonialsSection() {
  return (
    <Section id="reviews" bordered>
      <SectionHeading
        eyebrow="Client stories"
        title="Results that speak louder than ads"
        description="Testimonials and review integrations will connect here in a later phase."
      />
      <ul className="mt-14 grid gap-6 md:grid-cols-3">
        {PLACEHOLDER_REVIEWS.map((review) => (
          <li
            key={review.author}
            className="flex flex-col rounded-2xl border border-white/15 bg-brand-surface p-8 shadow-[0_0_48px_-28px_rgba(220,38,38,0.2)] shadow-lg shadow-black/25 transition-colors hover:border-brand-red/35"
          >
            <div className="flex gap-1 text-brand-red-light" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-sm">
                  ★
                </span>
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-base leading-relaxed text-zinc-300">
              &ldquo;{review.quote}&rdquo;
            </blockquote>
            <footer className="mt-6 border-t border-white/12 pt-6">
              <cite className="not-italic">
                <p className="font-semibold text-white">{review.author}</p>
                <p className="text-sm text-zinc-400">{review.location}</p>
              </cite>
            </footer>
          </li>
        ))}
      </ul>
    </Section>
  );
}
