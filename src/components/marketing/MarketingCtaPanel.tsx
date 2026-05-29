import { ConversionCtaGroup } from "@/components/ui/ConversionCtaGroup";
import { Section } from "@/components/ui/Section";

export function MarketingCtaPanel() {
  return (
    <Section bordered className="pb-20 sm:pb-24">
      <div className="relative overflow-hidden rounded-2xl border border-brand-red/40 bg-gradient-to-br from-brand-red/20 via-brand-surface to-brand-black p-8 shadow-[0_0_48px_-18px_rgba(220,38,38,0.45)] sm:p-10">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-red/30 blur-3xl"
        />
        <div className="relative max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-light">
            Ready when you are
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Start with a free claim review
          </h2>
          <p className="mt-3 text-base leading-relaxed text-zinc-300">
            Tell us about your operation. We&apos;ll assess your claim workflow,
            identify recovery opportunities, and outline next steps.
          </p>
          <ConversionCtaGroup
            className="mt-6"
            primaryLabel="Begin Claim Intake"
            secondaryLabel="Schedule Strategy Call"
            size="md"
          />
        </div>
      </div>
    </Section>
  );
}
