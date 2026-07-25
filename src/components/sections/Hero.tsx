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
      className="inline-block h-1 w-1 shrink-0 justify-self-center rounded-full bg-brand-red-light"
    />
  );
}

function IconSlot({ children }: { children?: React.ReactNode }) {
  return (
    <span className="mr-1.5 inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center sm:h-4 sm:w-4">
      {children}
    </span>
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
  const [leftBullet, centerBullet, rightBullet] = content.bullets;
  const [leftMetric, centerMetric, rightMetric] = content.proofMetrics;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-brand-black lg:min-h-[100svh]"
    >
      <HeroBackdrop />

      <Container className="relative z-10 grid grid-cols-1 gap-12 pb-14 pt-28 sm:gap-14 sm:pb-16 sm:pt-32 lg:grid-cols-[minmax(0,1.05fr)_minmax(440px,520px)] lg:items-center lg:gap-x-16 lg:gap-y-12 lg:pb-20 lg:pt-32">
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

          <div
            className="mt-7 w-full max-w-xl text-[13px] leading-snug text-zinc-300 sm:text-sm lg:max-w-none"
            role="group"
            aria-label="Trust and proof points"
          >
            {/* Mobile: single shared-width stack (no independent row widths). */}
            <div className="flex w-full flex-col gap-2 sm:hidden">
              {content.bullets.map((bullet) => (
                <div key={bullet} className="flex items-center">
                  <ShieldIcon className="mr-1.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                  <span>{bullet}</span>
                </div>
              ))}
              <div aria-hidden className="my-1 h-px w-full bg-white/10" />
              {content.proofMetrics.map((metric, index) => (
                <div
                  key={`${metric.text}-${index}`}
                  className="text-zinc-400"
                >
                  <ProofMetricText metric={metric} />
                </div>
              ))}
            </div>

            {/*
              Desktop: shared grid with a reserved left icon column so metric
              text starts under bullet text (S→2). Right column uses the same
              icon-slot + text pattern so N→3. Center stays visually centered.
              [icon | left | · | center | · | right]
            */}
            <div className="hidden w-full grid-cols-[auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] items-center sm:grid">
              <IconSlot>
                <ShieldIcon className="h-3.5 w-3.5 text-emerald-400 sm:h-4 sm:w-4" />
              </IconSlot>
              <span className="min-w-0 justify-self-start whitespace-nowrap">
                {leftBullet}
              </span>
              <RedDot />
              <div className="flex min-w-0 items-center justify-self-center">
                <IconSlot>
                  <ShieldIcon className="h-3.5 w-3.5 text-emerald-400 sm:h-4 sm:w-4" />
                </IconSlot>
                <span className="whitespace-nowrap">{centerBullet}</span>
              </div>
              <RedDot />
              <div className="flex min-w-0 items-center justify-self-start">
                <IconSlot>
                  <ShieldIcon className="h-3.5 w-3.5 text-emerald-400 sm:h-4 sm:w-4" />
                </IconSlot>
                <span className="whitespace-nowrap">{rightBullet}</span>
              </div>

              <div
                aria-hidden
                className="col-span-full my-3 h-px w-full bg-white/10"
              />

              <IconSlot />
              <span className="min-w-0 justify-self-start whitespace-nowrap text-zinc-400">
                {leftMetric ? <ProofMetricText metric={leftMetric} /> : null}
              </span>
              <RedDot />
              <span className="min-w-0 justify-self-center whitespace-nowrap text-center text-zinc-400">
                {centerMetric ? (
                  <ProofMetricText metric={centerMetric} />
                ) : null}
              </span>
              <RedDot />
              <div className="flex min-w-0 items-center justify-self-start text-zinc-400">
                <IconSlot />
                <span className="whitespace-nowrap">
                  {rightMetric ? (
                    <ProofMetricText metric={rightMetric} />
                  ) : null}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <HeroClaimIntakeCard content={content} locale={locale} />
        </div>
      </Container>
    </section>
  );
}
