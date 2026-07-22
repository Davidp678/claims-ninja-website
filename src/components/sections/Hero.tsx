import Link from "next/link";

import type { Locale } from "@/lib/i18n/config";
import { getHeroIntakeContent } from "@/lib/onboarding/content";
import { Container } from "@/components/ui/Container";
import { HeroBackdrop } from "./HeroBackdrop";
import { HeroClaimIntakeCard } from "./HeroClaimIntakeCard";

type StatIconName = "clock" | "calendar" | "bars";

const STAT_ICONS: StatIconName[] = ["clock", "calendar", "bars"];

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
    case "bars":
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
          <path d="M4 20V10" />
          <path d="M10 20V4" />
          <path d="M16 20v-7" />
          <path d="M3 20h18" />
        </svg>
      );
  }
}

function CheckBullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-2.5 text-sm text-zinc-200 sm:text-base">
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
        <svg
          aria-hidden
          viewBox="0 0 20 20"
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
        >
          <path d="M4.5 10.5 8 14l7.5-8" />
        </svg>
      </span>
      {children}
    </li>
  );
}

export function Hero({ locale = "en" }: { locale?: Locale }) {
  const content = getHeroIntakeContent(locale);
  const stats = content.stats.map((stat, index) => ({
    ...stat,
    icon: STAT_ICONS[index] ?? "bars",
  }));

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[100svh] overflow-hidden bg-brand-black"
    >
      <HeroBackdrop />

      <Container className="relative z-10 grid grid-cols-1 gap-10 pb-14 pt-28 sm:gap-12 sm:pb-16 sm:pt-32 lg:grid-cols-[minmax(0,1fr)_minmax(420px,480px)] lg:items-start lg:gap-x-14 lg:gap-y-10 lg:pb-20 lg:pt-28">
        <div className="min-w-0 max-w-2xl lg:max-w-none">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red-light">
            {content.eyebrow}
          </p>
          <h1
            id="hero-heading"
            className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.35rem]"
          >
            {content.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
            {content.subhead}
          </p>

          <ul className="mt-7 space-y-3">
            {content.bullets.map((bullet) => (
              <CheckBullet key={bullet}>{bullet}</CheckBullet>
            ))}
          </ul>

          <p className="mt-8">
            <Link
              href="/login"
              className="text-sm font-semibold text-brand-red-light transition hover:text-brand-red"
            >
              {content.loginLink}
            </Link>
          </p>
        </div>

        <div className="w-full lg:mt-1">
          <HeroClaimIntakeCard content={content} locale={locale} />
        </div>

        <dl className="flex flex-col gap-2.5 border-t border-white/15 pt-8 sm:hidden lg:col-span-2">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-3 rounded-xl border border-white/12 bg-brand-surface/70 px-3.5 py-3 ring-1 ring-brand-red/15 shadow-[0_0_24px_-18px_rgba(220,38,38,0.4)]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-brand-red/30 bg-brand-black/50">
                <StatIcon name={stat.icon} className="h-4 w-4 text-brand-red-light" />
              </span>
              <dt className="min-w-0 flex-1 text-[11px] font-medium uppercase leading-tight tracking-[0.16em] text-zinc-400">
                {stat.label.replace(/\n/g, " ")}
              </dt>
              <dd className="font-display text-2xl font-semibold tracking-tight text-white whitespace-nowrap">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <dl className="hidden max-w-3xl grid-cols-3 gap-y-0 divide-x divide-white/10 border-t border-white/15 pt-8 sm:grid lg:col-span-2 lg:max-w-none">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col gap-2 ${
                index === 0 ? "pr-6" : "px-6"
              } first:pl-0 last:pr-0`}
            >
              <div className="flex items-center gap-2">
                <StatIcon
                  name={stat.icon}
                  className="h-4 w-4 text-brand-red-light"
                />
                <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-300 whitespace-pre-line">
                  {stat.label}
                </dt>
              </div>
              <dd className="font-display text-3xl font-semibold tracking-tight text-white sm:text-[2rem] whitespace-nowrap">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
