import Link from "next/link";
import { HeroBackdrop } from "@/components/sections/HeroBackdrop";
import { MarketingCtaPanel } from "@/components/marketing/MarketingCtaPanel";
import { SiteFaqSection } from "@/components/faq/SiteFaqSection";
import { Container } from "@/components/ui/Container";
import { ConversionCtaGroup } from "@/components/ui/ConversionCtaGroup";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ABOUT_CARD_CLASS } from "@/lib/about-page";
import type { Locale } from "@/lib/i18n/config";
import { getCommonContent } from "@/lib/i18n/content/common";
import { getCompanyContent } from "@/lib/i18n/content/company";
import { SITE_FAQ } from "@/lib/site-faq-selections";
import { cn } from "@/lib/cn";

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-zinc-300">
          <span
            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-red-light"
            aria-hidden
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function AudienceCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href?: string;
}) {
  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          ABOUT_CARD_CLASS,
          "group flex h-full flex-col",
        )}
      >
        <h3 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-brand-red-light">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-300">
          {description}
        </p>
        <span className="mt-4 text-sm font-medium text-brand-red-light">
          Explore solution →
        </span>
      </Link>
    );
  }

  return (
    <div className={ABOUT_CARD_CLASS}>
      <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-300">{description}</p>
    </div>
  );
}

function JourneyStepLabel({ label }: { label: string }) {
  const isYear = /^\d{4}$/.test(label);

  return (
    <span
      className={cn(
        "font-display font-semibold text-brand-red/75 transition-colors group-hover:text-brand-red-light",
        isYear ? "text-4xl" : "text-2xl sm:text-3xl",
      )}
    >
      {label}
    </span>
  );
}

export function AboutPage({ locale = "en" }: { locale?: Locale }) {
  const about = getCompanyContent(locale).about;
  const cta = getCommonContent(locale);

  return (
    <>
      <section className="relative overflow-hidden bg-brand-black">
        <HeroBackdrop />
        <Container className="relative z-10 pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pb-20 lg:pt-36">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-light">
              {about.hero.eyebrow}
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {about.hero.title}
            </h1>
            <div className="mt-5 space-y-5 text-lg leading-relaxed text-zinc-300 sm:text-xl">
              {about.hero.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
            <ConversionCtaGroup
              className="mt-10"
              size="md"
              primaryLabel={cta.beginClaimIntake}
              secondaryLabel={cta.scheduleStrategyCallCta}
            />
          </div>
        </Container>
      </section>

      <Section bordered compact>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow={about.whyWeExist.eyebrow}
              title={about.whyWeExist.title}
              align="left"
              className="max-w-none"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-300">
              {about.whyWeExist.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
              <p>{about.whyWeExist.closing}</p>
            </div>
          </div>

          <aside
            className={cn(
              ABOUT_CARD_CLASS,
              "border-brand-red/25 bg-brand-black/60 p-8 lg:self-center lg:p-10",
              "shadow-[0_0_64px_-24px_rgba(220,38,38,0.35)]",
            )}
          >
            <h3 className="font-display text-lg font-semibold text-white">
              What growing claim volume demands
            </h3>
            <div className="mt-4">
              <BulletList items={about.whyWeExist.complexityItems} />
            </div>
          </aside>
        </div>
      </Section>

      <Section bordered compact className="bg-brand-elevated">
        <SectionHeading
          eyebrow={about.beliefs.eyebrow}
          title={about.beliefs.title}
          align="left"
          className="max-w-3xl"
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {about.beliefs.items.map((belief) => (
            <li key={belief.title} className={cn(ABOUT_CARD_CLASS, "group")}>
              <h3 className="font-display text-xl font-semibold text-white transition-colors group-hover:text-brand-red-light">
                {belief.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                {belief.description}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section bordered compact>
        <SectionHeading
          eyebrow={about.audience.eyebrow}
          title={about.audience.title}
          description={about.audience.description}
          align="left"
          className="max-w-3xl"
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {about.audience.items.map((item) => (
            <li key={item.title}>
              <AudienceCard
                title={item.title}
                description={item.description}
                href={item.href}
              />
            </li>
          ))}
        </ul>
      </Section>

      <Section bordered compact className="bg-brand-elevated py-16 sm:py-20">
        <SectionHeading
          eyebrow={about.journey.eyebrow}
          title={about.journey.title}
          align="left"
          className="max-w-3xl"
        />
        <ol className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {about.journey.steps.map((step) => (
            <li key={step.label} className={cn("group relative", ABOUT_CARD_CLASS)}>
              <JourneyStepLabel label={step.label} />
              <h3 className="mt-4 font-display text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section bordered compact>
        <SectionHeading
          title={about.values.title}
          align="left"
          className="max-w-3xl"
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {about.values.items.map((value) => (
            <li key={value.title} className={ABOUT_CARD_CLASS}>
              <h3 className="font-display text-lg font-semibold text-white">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                {value.description}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section bordered compact className="bg-brand-elevated">
        <div className="max-w-3xl">
          <SectionHeading
            title={about.partnership.title}
            align="left"
            className="max-w-none"
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
            {about.partnership.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Section>

      <SiteFaqSection {...SITE_FAQ.about} locale={locale} />
      <MarketingCtaPanel locale={locale} />
    </>
  );
}
