import type { Locale } from "@/lib/i18n/config";
import {
  getHeroIntakeContent,
  type HeroProofMetric,
} from "@/lib/onboarding/content";
import { Container } from "@/components/ui/Container";
import { HeroBackdrop } from "./HeroBackdrop";
import { HeroClaimIntakeCard } from "./HeroClaimIntakeCard";

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
      <path d="m9.5 12 1.8 1.8L15 10" />
    </svg>
  );
}

function RedDot() {
  return (
    <span
      aria-hidden
      className="mx-2 inline-block h-1 w-1 shrink-0 rounded-full bg-brand-red-light sm:mx-2.5"
    />
  );
}

function ProofMetricText({ metric }: { metric: HeroProofMetric }) {
  return (
    <span className="whitespace-nowrap">
      {metric.text}
      {metric.accent ? (
        <span className="text-brand-red-light">{metric.accent}</span>
      ) : null}
      {metric.suffix ?? null}
    </span>
  );
}

export function Hero({ locale = "en" }: { locale?: Locale }) {
  const content = getHeroIntakeContent(locale);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-brand-black"
    >
      <HeroBackdrop />

      <Container className="relative z-10 grid grid-cols-1 gap-12 pb-10 pt-28 sm:gap-14 sm:pb-12 sm:pt-32 lg:grid-cols-[minmax(0,1.05fr)_minmax(440px,520px)] lg:items-center lg:gap-x-16 lg:gap-y-12 lg:pb-14 lg:pt-32">
        <div className="min-w-0 max-w-xl lg:max-w-none">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red-light sm:text-xs">
            {content.eyebrow}
          </p>
          <h1
            id="hero-heading"
            className="mt-5 font-display text-[2.35rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]"
          >
            {content.title}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg">
            {content.subhead}
          </p>

          <div className="mt-7 max-w-xl text-[13px] leading-snug text-zinc-300 sm:text-sm">
            <ul className="flex flex-wrap items-center gap-y-2">
              {content.bullets.map((bullet, index) => (
                <li key={bullet} className="flex items-center">
                  {index > 0 ? <RedDot /> : null}
                  <ShieldIcon className="mr-1.5 h-3.5 w-3.5 shrink-0 text-emerald-400 sm:h-4 sm:w-4" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div
              aria-hidden
              className="my-3 h-px max-w-md bg-white/10"
            />

            <ul className="flex flex-wrap items-center gap-y-2 text-zinc-400">
              {content.proofMetrics.map((metric, index) => (
                <li key={`${metric.text}-${index}`} className="flex items-center">
                  {index > 0 ? <RedDot /> : null}
                  <ProofMetricText metric={metric} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full">
          <HeroClaimIntakeCard content={content} locale={locale} />
        </div>
      </Container>
    </section>
  );
}
