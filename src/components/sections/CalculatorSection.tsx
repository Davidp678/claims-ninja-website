import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function CalculatorSection() {
  return (
    <Section id="calculator" bordered>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <SectionHeading
          align="left"
          eyebrow="ROI clarity"
          title="See what your claim could be worth"
          description="Interactive cost-benefit calculator coming in Phase 2. Estimate recovery potential before you commit."
        />
        <div className="rounded-2xl border border-white/10 bg-brand-surface p-8 shadow-2xl shadow-black/40 sm:p-10">
          <div className="space-y-6">
            {["Claim type", "Estimated damage", "Policy deductible"].map(
              (label) => (
                <div key={label}>
                  <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    {label}
                  </label>
                  <div
                    className="mt-2 h-12 rounded-lg border border-dashed border-white/15 bg-brand-black/50"
                    aria-hidden
                  />
                </div>
              ),
            )}
            <div className="rounded-xl border border-brand-red/20 bg-brand-red/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-red-light">
                Projected recovery range
              </p>
              <p className="mt-2 font-display text-3xl font-semibold text-white">
                $— — —
              </p>
              <p className="mt-1 text-sm text-zinc-500">
                Placeholder — calculator logic ships next phase
              </p>
            </div>
            <Button href="#contact" className="w-full sm:w-auto">
              Talk to an adjuster
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
