import Link from "next/link";

import { HeroBackdrop } from "@/components/sections/HeroBackdrop";
import { MarketingCtaPanel } from "@/components/marketing/MarketingCtaPanel";
import { SiteFaqSection } from "@/components/faq/SiteFaqSection";
import { Container } from "@/components/ui/Container";
import { ConversionCtaGroup } from "@/components/ui/ConversionCtaGroup";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CASE_STUDIES_CARD_CLASS } from "@/lib/case-studies-page";
import {
  getCaseStudyPath,
  getClaimRecoveryCaseStudyByHubExampleId,
} from "@/lib/claim-recovery-case-studies";
import type { Locale } from "@/lib/i18n/config";
import { getCommonContent } from "@/lib/i18n/content/common";
import { getCompanyContent } from "@/lib/i18n/content/company";
import { localizePath } from "@/lib/i18n/paths";
import { SITE_FAQ } from "@/lib/site-faq-selections";
import { cn } from "@/lib/cn";

const CARD_SUBLABEL_CLASS = "text-xs font-medium text-zinc-400";

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-zinc-300">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-red-light" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function CaseStudiesPage({ locale = "en" }: { locale?: Locale }) {
  const cs = getCompanyContent(locale).caseStudies;
  const cta = getCommonContent(locale);
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-black">
        <HeroBackdrop />
        <Container className="relative z-10 pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pb-20 lg:pt-36">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {cs.hero.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-zinc-300 sm:text-xl">
              {cs.hero.description}
            </p>
            <ConversionCtaGroup
              className="mt-10"
              size="md"
              primaryLabel={cta.beginClaimIntake}
              secondaryLabel={cta.scheduleStrategyCallCta}
            />
          </div>
        </Container>
      </section>

      {/* Section 1: Recovery Results by Trade */}
      <Section bordered compact>
        <SectionHeading
          eyebrow={cs.tradeResults.eyebrow}
          title={cs.tradeResults.title}
          description={cs.tradeResults.description}
          align="left"
          className="max-w-3xl"
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cs.tradeCards.map((trade) => (
            <li key={trade.id} className={cn(CASE_STUDIES_CARD_CLASS, "flex flex-col")}>
              <h3 className="font-display text-lg font-semibold text-white">
                {trade.title}
              </h3>
              <div className="mt-3 w-fit rounded-lg border border-white/10 bg-brand-black/40 px-3 py-2.5">
                <p className={CARD_SUBLABEL_CLASS}>Typical recovery range</p>
                <p className="mt-0.5 font-display text-lg font-semibold text-brand-red-light">
                  {trade.recoveryRange}
                </p>
              </div>
              <div className="mt-6 flex-1 space-y-5">
                <div>
                  <h4 className={CARD_SUBLABEL_CLASS}>Most common findings</h4>
                  <BulletList items={trade.commonFindings} />
                </div>
                <div>
                  <h4 className={CARD_SUBLABEL_CLASS}>Areas reviewed</h4>
                  <BulletList items={trade.areasReviewed} />
                </div>
                <div>
                  <h4 className={CARD_SUBLABEL_CLASS}>Representative opportunities</h4>
                  <BulletList items={trade.opportunities} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* Section 2: What We Commonly Find */}
      <Section bordered compact className="bg-brand-elevated">
        <SectionHeading
          eyebrow={cs.commonFindings.eyebrow}
          title={cs.commonFindings.title}
          description={cs.commonFindings.description}
          align="left"
          className="max-w-3xl"
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cs.commonFindings.categories.map((category) => (
            <li key={category.title} className={CASE_STUDIES_CARD_CLASS}>
              <h3 className="font-display text-lg font-semibold text-white">
                {category.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                {category.description}
              </p>
              <BulletList items={category.items} />
            </li>
          ))}
        </ul>
      </Section>

      {/* Section 3: Portfolio Recovery Review */}
      <Section bordered compact>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
          <div>
            <SectionHeading
              title={cs.portfolio.title}
              description={cs.portfolio.description}
              align="left"
              className="max-w-none"
            />
            <div className="mt-10">
              <h3 className="font-display text-lg font-semibold text-white">
                What we analyze
              </h3>
              <BulletList items={cs.portfolio.whatWeAnalyze} />
            </div>
          </div>

          <aside
            className={cn(
              CASE_STUDIES_CARD_CLASS,
              "border-brand-red/25 bg-brand-black/60 p-8 lg:self-center lg:p-10",
              "shadow-[0_0_64px_-24px_rgba(220,38,38,0.35)]",
            )}
          >
            <h3 className="font-display text-lg font-semibold text-white">
              Typical outcome
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
              {cs.portfolio.typicalOutcome}
            </p>
          </aside>
        </div>
      </Section>

      {/* Section 4: Representative Recovery Examples */}
      <Section bordered compact className="bg-brand-elevated">
        <SectionHeading
          eyebrow={cs.recoveryExamplesSection.eyebrow}
          title={cs.recoveryExamplesSection.title}
          description={cs.recoveryExamplesSection.description}
          align="left"
          className="max-w-3xl"
        />
        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {cs.recoveryExamples.map((example) => {
            const detail = getClaimRecoveryCaseStudyByHubExampleId(example.id);
            const href = detail ? getCaseStudyPath(detail.slug) : null;

            return (
              <li
                key={example.id}
                className={cn(
                  CASE_STUDIES_CARD_CLASS,
                  "border-white/10 p-5 shadow-[0_0_32px_-28px_rgba(220,38,38,0.15)]",
                )}
              >
                <h3 className="font-display text-base font-semibold text-white">
                  {href ? (
                    <Link
                      href={href}
                      className="transition-colors hover:text-brand-red-light"
                    >
                      {example.title}
                    </Link>
                  ) : (
                    example.title
                  )}
                </h3>
                <dl className="mt-4 space-y-3 border-b border-white/10 pb-4">
                  <div className="flex justify-between gap-4 text-sm">
                    <dt className={CARD_SUBLABEL_CLASS}>Carrier estimate</dt>
                    <dd className="font-medium text-white">{example.carrierEstimate}</dd>
                  </div>
                  <div className="flex justify-between gap-4 text-sm">
                    <dt className={CARD_SUBLABEL_CLASS}>Additional recovery identified</dt>
                    <dd className="font-medium text-brand-red-light">
                      {example.additionalRecovery}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4 text-sm">
                    <dt className={CARD_SUBLABEL_CLASS}>Recovery increase</dt>
                    <dd className="font-medium text-white">{example.recoveryIncrease}</dd>
                  </div>
                </dl>
                <div className="mt-4">
                  <h4 className={CARD_SUBLABEL_CLASS}>Key findings</h4>
                  <BulletList items={example.keyFindings} />
                </div>
                {href ? (
                  <Link
                    href={href}
                    className="mt-5 inline-block text-sm font-medium text-brand-red-light transition-colors hover:text-white"
                  >
                    Read case study
                  </Link>
                ) : null}
              </li>
            );
          })}
        </ul>
      </Section>

      {/* Related solution entry points */}
      <Section bordered compact>
        <SectionHeading
          eyebrow="Connected resources"
          title="Explore trade solutions and playbooks"
          description="Connect Results & Insights patterns to the solution pages and operational guides contractors use in the field."
          align="left"
          className="max-w-3xl"
        />
        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm">
          {[
            { label: "Roofing claims", href: "/solutions/roofing" },
            { label: "Water damage claims", href: "/solutions/water-damage" },
            { label: "Fire damage claims", href: "/solutions/fire-damage" },
            { label: "Mold claims", href: "/solutions/mold" },
            { label: "Commercial claims", href: "/solutions/commercial" },
            { label: "Claim guides", href: "/resources/guides" },
            {
              label: "Estimate Review Playbook",
              href: "/resources/guides/general-claims/insurance-estimate-review-playbook-for-contractors",
            },
            {
              label: "Estimate Review & Scope Validation",
              href: "/resources/guides/general-claims/insurance-estimate-review-scope-validation-guide",
            },
            {
              label: "How to choose a supplementing partner",
              href: "/resources/blog/how-to-choose-insurance-supplementing-partner",
            },
          ].map((link) => (
            <li key={link.href}>
              <Link
                href={localizePath(locale, link.href)}
                className="font-medium text-brand-red-light transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Section 5: FAQ */}
      <SiteFaqSection {...SITE_FAQ.caseStudies} locale={locale} />

      {/* Section 6: CTA */}
      <MarketingCtaPanel locale={locale} />
    </>
  );
}
