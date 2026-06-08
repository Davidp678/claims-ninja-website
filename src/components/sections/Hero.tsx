import type { Locale } from "@/lib/i18n/config";
import { getHomeContent } from "@/lib/i18n/content/home";
import { ConversionCtaGroup } from "@/components/ui/ConversionCtaGroup";
import { Container } from "@/components/ui/Container";
import { HeroBackdrop } from "./HeroBackdrop";
import { HeroVideoCard } from "./HeroVideoCard";

type StatIconName = "bars" | "shield" | "star";

const STAT_ICONS: StatIconName[] = ["bars", "shield", "star"];

function StatIcon({ name, className }: { name: StatIconName; className?: string }) {
  switch (name) {
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
    case "shield":
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
          <path d="M12 3 4 6v6c0 4.5 3.2 8.6 8 9 4.8-.4 8-4.5 8-9V6l-8-3Z" />
        </svg>
      );
    case "star":
      return (
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className={className}
          fill="currentColor"
        >
          <path d="m12 2.5 2.95 6.4 7.05.74-5.27 4.78L18.3 21.5 12 17.9l-6.3 3.6 1.57-7.08L2 9.64l7.05-.74L12 2.5Z" />
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
        <div className="max-w-2xl lg:col-start-1 lg:row-start-1 lg:max-w-none">
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
            className="mt-8"
            primaryLabel={content.primaryCta}
            secondaryLabel={content.secondaryCta}
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
