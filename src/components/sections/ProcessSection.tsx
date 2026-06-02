import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const STEPS = [
  {
    step: "01",
    title: "Access Your Client Platform",
    description:
      "Upload project details to our secure contractor platform for streamlined collaboration and claim management.",
  },
  {
    step: "02",
    title: "Expert Estimate Writing",
    description:
      "Receive a professional insurance-ready estimate prepared for carrier review and supplement support.",
  },
  {
    step: "03",
    title: "Negotiation & Approval",
    description:
      "We manage carrier communication, supplement negotiations, and approval workflows to maximize recovery.",
  },
  {
    step: "04",
    title: "Public Adjuster Services",
    description:
      "When needed, licensed public adjuster support is available for full claim ownership — keeping complex files managed without building an in-house team.",
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
            className="group relative rounded-2xl border border-white/15 bg-brand-surface p-6 shadow-[0_0_48px_-28px_rgba(220,38,38,0.2)] shadow-lg shadow-black/25 transition-colors hover:border-brand-red/45"
          >
            <span className="font-display text-4xl font-semibold text-brand-red/75 transition-colors group-hover:text-brand-red-light">
              {item.step}
            </span>
            <h3 className="mt-4 font-display text-xl font-semibold text-white">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
