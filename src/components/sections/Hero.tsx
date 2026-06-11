import type { Locale } from "@/lib/i18n/config";
import { getHomeContent } from "@/lib/i18n/content/home";
import { ConversionCtaGroup } from "@/components/ui/ConversionCtaGroup";
import { Container } from "@/components/ui/Container";
import { HeroBackdrop } from "./HeroBackdrop";
import { HeroVideoCard } from "./HeroVideoCard";

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

export function Hero({ locale = "en" }: { locale?: Locale }) {
  const content = getHomeContent(locale).hero;
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

      <Container className="relative z-10 grid grid-cols-1 gap-10 pb-14 pt-28 sm:gap-12 sm:pb-16 sm:pt-32 lg:grid-cols-[minmax(0,0.9fr)_minmax(620px,1.15fr)] lg:grid-rows-[auto_auto] lg:items-start lg:gap-x-16 lg:gap-y-10 lg:pb-20 lg:pt-28">
        <div className="min-w-0 max-w-2xl lg:col-start-1 lg:row-start-1 lg:max-w-none">
          <h1
            id="hero-heading"
            className="font-display text-4xl font-semibold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {content.titleLine1}
            <span className="block text-brand-red-light">{content.titleLine2}</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-300 sm:text-xl">
            {content.subhead}
          </p>
          <ConversionCtaGroup
            className={locale === "es" ? "mt-8 max-w-xl" : "mt-8"}
            rowBreakpoint={locale === "es" ? "xl" : "sm"}
            allowWrap={locale === "es"}
            primaryLabel={content.primaryCta}
            secondaryLabel={content.secondaryCta}
            primaryClassName={locale === "es" ? "w-full xl:w-auto" : undefined}
            secondaryClassName={locale === "es" ? "w-full xl:w-auto" : undefined}
          />
        </div>

        <div className="w-full lg:col-start-2 lg:row-start-1 lg:mt-2">
          <HeroVideoCard />
        </div>

        <dl className="grid max-w-2xl grid-cols-2 gap-y-6 border-t border-white/15 pt-8 sm:grid-cols-3 sm:gap-y-0 sm:divide-x sm:divide-white/10 lg:col-start-1 lg:row-start-2 lg:max-w-none">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col gap-2 ${
                index === 0 ? "sm:pr-6" : "sm:px-6"
              } first:sm:pl-0 last:sm:pr-0`}
            >
              <div className="flex items-center gap-2">
                <StatIcon
                  name={stat.icon}
                  className="h-4 w-4 text-brand-red-light"
                />
                <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-300">
                  {stat.label}
                </dt>
              </div>
              <dd className="font-display text-3xl font-semibold tracking-tight text-white sm:text-[2rem]">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
