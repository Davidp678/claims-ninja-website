import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { CTA_LINKS } from "@/lib/constants";
import { FINAL_CTA_SECTION } from "@/lib/start-here/content";

export function StartHereFinalCta() {
  return (
    <Section bordered className="pb-24 sm:pb-28">
      <div className="relative overflow-hidden rounded-3xl border border-brand-red/45 bg-gradient-to-br from-brand-red/25 via-brand-surface to-brand-black p-8 shadow-[0_0_60px_-15px_rgba(220,38,38,0.4)] sm:p-12 lg:p-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-red/35 blur-3xl"
        />
        <div className="relative max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-light">
            {FINAL_CTA_SECTION.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {FINAL_CTA_SECTION.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-300">
            {FINAL_CTA_SECTION.description}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href={CTA_LINKS.onboardingForm} size="lg" external className="whitespace-nowrap">
              {FINAL_CTA_SECTION.primaryCta}
            </Button>
            <a
              href={FINAL_CTA_SECTION.secondaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[3.25rem] items-center justify-center rounded-full border border-white/30 bg-brand-elevated/92 px-9 text-base font-semibold tracking-wide text-white shadow-[0_10px_26px_-16px_rgba(0,0,0,0.95)] backdrop-blur-sm transition-all duration-200 hover:border-white/50 hover:bg-brand-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black whitespace-nowrap"
            >
              {FINAL_CTA_SECTION.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
