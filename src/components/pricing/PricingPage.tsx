import { HeroBackdrop } from "@/components/sections/HeroBackdrop";
import { SiteFaqSection } from "@/components/faq/SiteFaqSection";
import { MarketingCtaPanel } from "@/components/marketing/MarketingCtaPanel";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ABOUT_CARD_CLASS } from "@/lib/about-page";
import { CTA_LINKS } from "@/lib/constants";
import type { Locale } from "@/lib/i18n/config";
import { getPricingContent } from "@/lib/i18n/content/pricing";
import type { PricingRateRow } from "@/lib/pricing-page";
import { SITE_FAQ } from "@/lib/site-faq-selections";
import { cn } from "@/lib/cn";

function PricingRateRowItem({ range, rate }: PricingRateRow) {
  return (
    <div className="grid grid-cols-1 gap-1 border-t border-white/10 py-4 first:border-t-0 first:pt-0 last:pb-0 sm:grid-cols-[minmax(0,1fr)_minmax(14rem,1.2fr)] sm:items-start sm:gap-x-6 sm:gap-y-1">
      <span className="min-w-0 text-sm leading-relaxed text-zinc-300">
        {range}
      </span>
      <span className="min-w-0 break-words text-sm font-semibold leading-relaxed text-brand-red-light sm:text-right">
        {rate}
      </span>
    </div>
  );
}

function PricingRateCard({
  title,
  rows,
  invoiceNote,
  className,
}: {
  title: string;
  rows: readonly PricingRateRow[];
  invoiceNote?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        ABOUT_CARD_CLASS,
        "relative p-6 sm:p-8",
        className,
      )}
    >
      <span
        className="absolute left-0 top-6 h-10 w-0.5 rounded-full bg-brand-red/70"
        aria-hidden
      />
      <h3 className="pl-4 font-display text-xl font-semibold text-white">
        {title}
      </h3>
      <div className="mt-6 pl-4">
        {rows.map((row) => (
          <PricingRateRowItem key={row.range} {...row} />
        ))}
      </div>
      {invoiceNote ? (
        <p className="mt-6 border-t border-white/10 pl-4 pt-5 text-sm leading-relaxed text-zinc-400">
          {invoiceNote}
        </p>
      ) : null}
    </div>
  );
}

function BillingStepLabel({ label }: { label: string }) {
  return (
    <span className="font-display text-2xl font-semibold text-brand-red/75 transition-colors group-hover:text-brand-red-light sm:text-3xl">
      {label}
    </span>
  );
}

export function PricingPage({ locale = "en" }: { locale?: Locale }) {
  const content = getPricingContent(locale);

  return (
    <>
      <section className="relative overflow-hidden bg-brand-black">
        <HeroBackdrop />
        <Container className="relative z-10 pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pb-20 lg:pt-36">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-light">
              {content.hero.eyebrow}
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {content.hero.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-zinc-300 sm:text-xl">
              {content.hero.description}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                href={CTA_LINKS.startHere}
                size="md"
                className="whitespace-nowrap"
              >
                {content.hero.primaryCtaLabel}
              </Button>
              <Button
                href={CTA_LINKS.schedule}
                variant="secondary"
                size="md"
                className="whitespace-nowrap"
                external
              >
                {content.hero.secondaryCtaLabel}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Section bordered compact>
        <SectionHeading
          eyebrow={content.overview.eyebrow}
          title={content.overview.title}
          description={content.overview.description}
          align="left"
          className="max-w-3xl"
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2">
          {content.overview.cards.map((card) => (
            <li key={card.title} className={cn(ABOUT_CARD_CLASS, "group h-full")}>
              <h3 className="font-display text-xl font-semibold text-white transition-colors group-hover:text-brand-red-light">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                {card.description}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section bordered compact className="bg-brand-elevated">
        <SectionHeading
          eyebrow={content.estimateWriting.eyebrow}
          title={content.estimateWriting.title}
          description={content.estimateWriting.intro}
          align="left"
          className="max-w-3xl"
        />
        <div className="mt-10 max-w-3xl">
          <PricingRateCard
            title={content.estimateWriting.title}
            rows={content.estimateWriting.rows}
            invoiceNote={content.estimateWriting.invoiceNote}
          />
        </div>
      </Section>

      <Section bordered compact>
        <SectionHeading
          eyebrow={content.negotiationSupplementSection.eyebrow}
          title={content.negotiationSupplementSection.title}
          description={content.negotiationSupplementSection.description}
          align="left"
          className="max-w-3xl"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <PricingRateCard
            title={content.negotiation.title}
            rows={content.negotiation.rows}
            invoiceNote={content.negotiation.invoiceNote}
          />
          <PricingRateCard
            title={content.supplement.title}
            rows={content.supplement.rows}
            invoiceNote={content.supplement.invoiceNote}
          />
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-zinc-400">
          {content.negotiationSupplementSection.sharedInvoiceNote}
        </p>
      </Section>

      <Section bordered compact className="bg-brand-elevated">
        <SectionHeading
          eyebrow={content.additionalServices.eyebrow}
          title={content.additionalServices.title}
          description={content.additionalServices.description}
          align="left"
          className="max-w-3xl"
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.additionalServices.services.map((service) => (
            <li
              key={service.title}
              className={cn(
                ABOUT_CARD_CLASS,
                "group relative h-full overflow-hidden pl-7 pr-6 py-6 sm:py-7",
              )}
            >
              <span
                className="absolute left-0 top-6 h-10 w-0.5 rounded-full bg-brand-red/70"
                aria-hidden
              />
              <h3 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-brand-red-light">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section bordered compact>
        <SectionHeading
          eyebrow={content.billing.eyebrow}
          title={content.billing.title}
          description={content.billing.description}
          align="left"
          className="max-w-3xl"
        />
        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {content.billing.steps.map((step) => (
            <li key={step.label} className={cn("group h-full", ABOUT_CARD_CLASS)}>
              <BillingStepLabel label={step.label} />
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <SiteFaqSection {...SITE_FAQ.pricing} locale={locale} />

      <MarketingCtaPanel locale={locale} />
    </>
  );
}
