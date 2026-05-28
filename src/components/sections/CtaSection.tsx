import { ConversionCtaGroup } from "@/components/ui/ConversionCtaGroup";
import { Section } from "@/components/ui/Section";

export function CtaSection() {
  return (
    <Section id="contact" bordered className="pb-24 sm:pb-28">
      <div className="relative overflow-hidden rounded-3xl border border-brand-red/45 bg-gradient-to-br from-brand-red/25 via-brand-surface to-brand-black p-8 shadow-[0_0_60px_-15px_rgba(220,38,38,0.4)] sm:p-12 lg:p-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-red/35 blur-3xl"
        />
        <div className="relative max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-light">
            Ready when you are
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Start with a free claim review
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-300">
            Tell us about your operation. We&apos;ll assess your claim workflow,
            identify recovery opportunities, and outline next steps.
          </p>
          <ConversionCtaGroup
            className="mt-8"
            primaryLabel="Begin Claim Intake"
            secondaryLabel="Schedule Strategy Call"
          />
        </div>
      </div>
    </Section>
  );
}
