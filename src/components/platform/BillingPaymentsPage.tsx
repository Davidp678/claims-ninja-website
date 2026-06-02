import { HeroBackdrop } from "@/components/sections/HeroBackdrop";
import { HeroVideoCard } from "@/components/sections/HeroVideoCard";
import { MarketingCtaPanel } from "@/components/marketing/MarketingCtaPanel";
import { SiteFaqSection } from "@/components/faq/SiteFaqSection";
import { Container } from "@/components/ui/Container";
import { ConversionCtaGroup } from "@/components/ui/ConversionCtaGroup";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BILLING_PAYMENTS_HERO_VIDEO } from "@/lib/constants";
import { billingPaymentsPage } from "@/lib/marketing-pages";
import { SITE_FAQ } from "@/lib/site-faq-selections";

export function BillingPaymentsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-black">
        <HeroBackdrop />
        <Container className="relative z-10 grid grid-cols-1 gap-8 pb-10 pt-24 sm:gap-10 sm:pb-12 sm:pt-28 lg:grid-cols-[minmax(0,0.9fr)_minmax(620px,1.15fr)] lg:items-center lg:gap-x-16 lg:pb-14 lg:pt-24">
          <div className="max-w-2xl lg:col-start-1 lg:max-w-none">
            <SectionHeading
              eyebrow={billingPaymentsPage.eyebrow}
              title={billingPaymentsPage.title}
              description={billingPaymentsPage.description}
              align="left"
              className="max-w-none"
            />
            <ConversionCtaGroup
              className="mt-10 lg:mt-12"
              size="md"
              primaryLabel="Begin Claim Intake"
              secondaryLabel="Schedule Strategy Call"
            />
          </div>
          <div className="w-full lg:col-start-2 lg:mt-2">
            <HeroVideoCard
              embedSrc={BILLING_PAYMENTS_HERO_VIDEO.embedUrl}
              title="Billing and payments demo"
              embedFit={BILLING_PAYMENTS_HERO_VIDEO.embedFit}
              sourceAspect={BILLING_PAYMENTS_HERO_VIDEO.sourceAspect}
            />
          </div>
        </Container>
      </section>

      <Section bordered className="py-16 sm:py-20">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {billingPaymentsPage.features.map((feature) => (
            <li
              key={feature.title}
              className="rounded-2xl border border-white/15 bg-brand-surface p-6 shadow-[0_0_48px_-28px_rgba(220,38,38,0.2)] shadow-lg shadow-black/25 transition-colors hover:border-brand-red/45"
            >
              <h3 className="font-display text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <SiteFaqSection {...SITE_FAQ.billingPayments} />
      <MarketingCtaPanel />
    </>
  );
}
