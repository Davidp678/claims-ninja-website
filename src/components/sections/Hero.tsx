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

/** Fixed-width icon gutter so bullet text and metric text share an identical start edge. */
function IconGutter({ showShield }: { showShield?: boolean }) {
  return (
    <span
      aria-hidden
      className="inline-flex h-4 w-4 shrink-0 items-center justify-center"
    >
      {showShield ? (
        <ShieldIcon className="h-3.5 w-3.5 text-emerald-400 sm:h-4 sm:w-4" />
      ) : null}
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

function ProofCell({
  align,
  showShield,
  children,
  muted,
}: {
  align: "start" | "center";
  showShield?: boolean;
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <div
      className={`flex min-w-0 items-center gap-1.5 ${
        align === "center" ? "justify-center" : "justify-start"
      } ${muted ? "text-zinc-400" : ""}`}
    >
      {/* Always reserve the gutter so S→2 and N→3 share the same text start edge. */}
      <IconGutter showShield={showShield} />
      <span className="min-w-0 whitespace-nowrap">{children}</span>
    </div>
  );
}

/** Red dots sit on the two column boundaries of the shared 3-col grid. */
function ProofDotRail() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-y-0 left-0 right-0 grid grid-cols-3"
    >
      <span className="relative">
        <span className="absolute right-0 top-1/2 h-1 w-1 -translate-y-1/2 translate-x-1/2 rounded-full bg-brand-red-light" />
      </span>
      <span className="relative">
        <span className="absolute right-0 top-1/2 h-1 w-1 -translate-y-1/2 translate-x-1/2 rounded-full bg-brand-red-light" />
      </span>
      <span />
    </div>
  );
}

export function Hero({ locale = "en" }: { locale?: Locale }) {
  const content = getHeroIntakeContent(locale);
  const [leftBullet, centerBullet, rightBullet] = content.bullets;
  const [leftMetric, centerMetric, rightMetric] = content.proofMetrics;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-brand-black lg:flex lg:min-h-[100svh] lg:flex-col"
    >
      <HeroBackdrop />

      <Container className="hero-first-viewport relative z-10 grid grid-cols-1 gap-12 pb-20 pt-28 sm:gap-14 sm:pb-24 sm:pt-32 lg:grid-cols-[minmax(0,1.05fr)_minmax(440px,520px)] lg:gap-x-16">
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
            <div className="flex w-full flex-col gap-2 sm:hidden">
              {content.bullets.map((bullet) => (
                <div key={bullet} className="flex items-center gap-1.5">
                  <IconGutter showShield />
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
              Desktop: one parent 3-column grid shared by both rows + divider.
              Equal 1fr tracks keep S→2 and N→3 on the same start edges.
              Red dots overlay column boundaries (not independent auto tracks).
            */}
            <div className="relative hidden w-full sm:block">
              <div className="grid w-full grid-cols-3 gap-x-6">
                <div className="relative py-0.5">
                  <ProofCell align="start" showShield>
                    {leftBullet}
                  </ProofCell>
                </div>
                <div className="relative py-0.5">
                  <ProofCell align="center" showShield>
                    {centerBullet}
                  </ProofCell>
                </div>
                <div className="relative py-0.5">
                  <ProofCell align="start" showShield>
                    {rightBullet}
                  </ProofCell>
                </div>

                <div
                  aria-hidden
                  className="col-span-3 my-3 h-px w-full bg-white/10"
                />

                <div className="relative py-0.5">
                  <ProofCell align="start" muted>
                    {leftMetric ? <ProofMetricText metric={leftMetric} /> : null}
                  </ProofCell>
                </div>
                <div className="relative py-0.5">
                  <ProofCell align="center" muted>
                    {centerMetric ? (
                      <ProofMetricText metric={centerMetric} />
                    ) : null}
                  </ProofCell>
                </div>
                <div className="relative py-0.5">
                  <ProofCell align="start" muted>
                    {rightMetric ? (
                      <ProofMetricText metric={rightMetric} />
                    ) : null}
                  </ProofCell>
                </div>
              </div>

              {/* Dot rails for each content row (exclude divider band). */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[1.75rem]">
                <ProofDotRail />
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[1.75rem]">
                <ProofDotRail />
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
