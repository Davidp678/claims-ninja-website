import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const STEPS = [
  {
    step: "01",
    title: "Free consultation",
    description: "We review your policy, damage, and insurer position—no obligation.",
  },
  {
    step: "02",
    title: "Documentation & strategy",
    description: "Our team builds a claim package designed to withstand scrutiny.",
  },
  {
    step: "03",
    title: "Negotiation",
    description: "We advocate directly with adjusters to maximize your settlement.",
  },
  {
    step: "04",
    title: "Settlement & close",
    description: "You receive what you're owed—with full transparency along the way.",
  },
] as const;

export function ProcessSection() {
  return (
    <Section id="process" bordered className="bg-brand-elevated">
      <SectionHeading
        eyebrow="How it works"
        title="Four simple steps to a stronger claim"
        description="A clear, guided process—from first call to final settlement—built for speed and outcomes."
      />
      <ol className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {STEPS.map((item) => (
          <li
            key={item.step}
            className="group relative rounded-2xl border border-white/15 bg-brand-surface p-6 shadow-[0_0_48px_-28px_rgba(185,28,28,0.12)] shadow-lg shadow-black/25 transition-colors hover:border-brand-red/45"
          >
            <span className="font-display text-4xl font-semibold text-brand-red/60 transition-colors group-hover:text-brand-red-light">
              {item.step}
            </span>
            <h3 className="mt-4 font-display text-xl font-semibold text-white">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
