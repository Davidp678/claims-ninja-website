import type { Locale } from "@/lib/i18n/config";
import {
  getHeroIntakeContent,
  type HeroProofMetric,
} from "@/lib/onboarding/content";
import { Container } from "@/components/ui/Container";
import { HeroBackdrop } from "./HeroBackdrop";
import { HeroClaimIntakeCard } from "./HeroClaimIntakeCard";

const ICON_CLASS = "h-3.5 w-3.5 sm:h-4 sm:w-4";

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

function ClockIcon({ className }: { className?: string }) {
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
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4.5l2.5 1.5" />
    </svg>
  );
}

function TrendingUpIcon({ className }: { className?: string }) {
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
      <path d="m4 16 5-5 4 4 7-7" />
      <path d="M14 8h6v6" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
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
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M8 3v4M16 3v4M4 10h16" />
    </svg>
  );
}

type ProofIconKind = "shield" | "clock" | "trend" | "calendar";

function ProofIcon({ kind }: { kind: ProofIconKind }) {
  if (kind === "shield") {
    return <ShieldIcon className={`${ICON_CLASS} text-emerald-400`} />;
  }
  if (kind === "clock") {
    return <ClockIcon className={`${ICON_CLASS} text-brand-red`} />;
  }
  if (kind === "trend") {
    return <TrendingUpIcon className={`${ICON_CLASS} text-brand-red`} />;
  }
  return <CalendarIcon className={`${ICON_CLASS} text-brand-red`} />;
}

/** Fixed-width icon gutter so every icon+label group shares identical icon geometry. */
function IconGutter({ icon }: { icon: ProofIconKind }) {
  return (
    <span
      aria-hidden
      className="inline-flex h-4 w-4 shrink-0 items-center justify-center"
    >
      <ProofIcon kind={icon} />
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
  icon,
  children,
  muted,
}: {
  icon: ProofIconKind;
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <div
      data-proof-group
      className={`flex min-w-0 items-center justify-center gap-1.5 ${
        muted ? "text-zinc-400" : ""
      }`}
    >
      <IconGutter icon={icon} />
      <span className="min-w-0 whitespace-nowrap">{children}</span>
    </div>
  );
}

/** Red dots sit on the two column boundaries of the shared 3-col grid (upper row only). */
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

const TRUST_ICONS: ProofIconKind[] = ["shield", "shield", "shield"];
const PERFORMANCE_ICONS: ProofIconKind[] = ["clock", "trend", "calendar"];

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
              {content.bullets.map((bullet, index) => (
                <div
                  key={bullet}
                  data-proof-group
                  className="flex items-center gap-1.5"
                >
                  <IconGutter icon={TRUST_ICONS[index] ?? "shield"} />
                  <span>{bullet}</span>
                </div>
              ))}
              <div aria-hidden className="my-1 h-px w-full bg-white/10" />
              {content.proofMetrics.map((metric, index) => (
                <div
                  key={`${metric.text}-${index}`}
                  data-proof-group
                  className="flex items-center gap-1.5 text-zinc-400"
                >
                  <IconGutter
                    icon={PERFORMANCE_ICONS[index] ?? "clock"}
                  />
                  <ProofMetricText metric={metric} />
                </div>
              ))}
            </div>

            {/*
              Desktop: one parent 3-column grid shared by both rows + divider.
              Equal 1fr tracks + justify-center keep upper/lower group centers aligned.
              Red dots overlay upper-row column boundaries only.
            */}
            <div className="relative hidden w-full sm:block">
              <div className="grid w-full grid-cols-3 gap-x-6">
                <div className="relative py-0.5">
                  <ProofCell icon="shield">{leftBullet}</ProofCell>
                </div>
                <div className="relative py-0.5">
                  <ProofCell icon="shield">{centerBullet}</ProofCell>
                </div>
                <div className="relative py-0.5">
                  <ProofCell icon="shield">{rightBullet}</ProofCell>
                </div>

                <div
                  aria-hidden
                  className="col-span-3 my-3 h-px w-full bg-white/10"
                />

                <div className="relative py-0.5">
                  <ProofCell icon="clock" muted>
                    {leftMetric ? <ProofMetricText metric={leftMetric} /> : null}
                  </ProofCell>
                </div>
                <div className="relative py-0.5">
                  <ProofCell icon="trend" muted>
                    {centerMetric ? (
                      <ProofMetricText metric={centerMetric} />
                    ) : null}
                  </ProofCell>
                </div>
                <div className="relative py-0.5">
                  <ProofCell icon="calendar" muted>
                    {rightMetric ? (
                      <ProofMetricText metric={rightMetric} />
                    ) : null}
                  </ProofCell>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-x-0 top-0 h-[1.75rem]">
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
