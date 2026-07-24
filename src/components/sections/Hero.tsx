import type { Locale } from "@/lib/i18n/config";
import { getHeroIntakeContent } from "@/lib/onboarding/content";
import { Container } from "@/components/ui/Container";
import { HeroBackdrop } from "./HeroBackdrop";
import { HeroClaimIntakeCard } from "./HeroClaimIntakeCard";

type StatIconName = "clock" | "trend" | "calendar";

const STAT_ICONS: StatIconName[] = ["clock", "trend", "calendar"];

function StatIcon({ name, className }: { name: StatIconName; className?: string }) {
  switch (name) {
    case "clock":
      return (
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "trend":
      return (
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 17 9 11l4 4 8-8" />
          <path d="M14 7h6v6" />
        </svg>
      );
    case "calendar":
      return (
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="5" width="16" height="15" rx="2" />
          <path d="M8 3v4M16 3v4M4 10h16" />
        </svg>
      );
  }
}

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

export function Hero({ locale = "en" }: { locale?: Locale }) {
  const content = getHeroIntakeContent(locale);
  const stats = content.stats.map((stat, index) => ({
    ...stat,
    icon: STAT_ICONS[index] ?? "clock",
  }));

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

          <ul className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-zinc-200">
            {content.bullets.map((bullet, index) => (
              <li key={bullet} className="flex items-center gap-2">
                {index > 0 ? (
                  <span
                    aria-hidden
                    className="mr-1 h-1.5 w-1.5 rounded-full bg-emerald-400"
                  />
                ) : null}
                <ShieldIcon className="h-4 w-4 shrink-0 text-emerald-400" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full">
          <HeroClaimIntakeCard content={content} locale={locale} />
        </div>

        <div className="lg:col-span-2 lg:mx-auto lg:w-full lg:max-w-4xl">
          <dl className="grid grid-cols-1 divide-y divide-white/10 rounded-2xl border border-white/12 bg-brand-elevated/90 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-start gap-3 px-5 py-5 sm:px-6 sm:py-6"
              >
                <StatIcon
                  name={stat.icon}
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-red-light"
                />
                <div className="min-w-0">
                  <dd className="font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    {stat.value}
                  </dd>
                  <dt className="mt-1 text-sm text-zinc-400">{stat.label}</dt>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
