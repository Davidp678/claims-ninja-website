import { HeroBackdrop } from "@/components/sections/HeroBackdrop";
import { MarketingCtaPanel } from "@/components/marketing/MarketingCtaPanel";
import { SiteFaqSection } from "@/components/faq/SiteFaqSection";
import { Container } from "@/components/ui/Container";
import { ConversionCtaGroup } from "@/components/ui/ConversionCtaGroup";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  CASE_STUDIES_CARD_CLASS,
  CASE_STUDIES_COMMON_FINDINGS,
  CASE_STUDIES_HERO,
  CASE_STUDIES_PORTFOLIO,
  CASE_STUDIES_RECOVERY_EXAMPLES,
  CASE_STUDIES_RECOVERY_EXAMPLES_SECTION,
  CASE_STUDIES_TRADE_CARDS,
  CASE_STUDIES_TRADE_RESULTS,
} from "@/lib/case-studies-page";
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

export function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-black">
        <HeroBackdrop />
        <Container className="relative z-10 pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pb-20 lg:pt-36">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {CASE_STUDIES_HERO.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-zinc-300 sm:text-xl">
              {CASE_STUDIES_HERO.description}
            </p>
            <ConversionCtaGroup
              className="mt-10"
              size="md"
              primaryLabel="Begin Claim Intake"
              secondaryLabel="Schedule Strategy Call"
            />
          </div>
        </Container>
      </section>

      {/* Section 1: Recovery Results by Trade */}
      <Section bordered compact>
        <SectionHeading
          eyebrow={CASE_STUDIES_TRADE_RESULTS.eyebrow}
          title={CASE_STUDIES_TRADE_RESULTS.title}
          description={CASE_STUDIES_TRADE_RESULTS.description}
          align="left"
          className="max-w-3xl"
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {CASE_STUDIES_TRADE_CARDS.map((trade) => (
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
          eyebrow={CASE_STUDIES_COMMON_FINDINGS.eyebrow}
          title={CASE_STUDIES_COMMON_FINDINGS.title}
          description={CASE_STUDIES_COMMON_FINDINGS.description}
          align="left"
          className="max-w-3xl"
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES_COMMON_FINDINGS.categories.map((category) => (
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
              title={CASE_STUDIES_PORTFOLIO.title}
              description={CASE_STUDIES_PORTFOLIO.description}
              align="left"
              className="max-w-none"
            />
            <div className="mt-10">
              <h3 className="font-display text-lg font-semibold text-white">
                What we analyze
              </h3>
              <BulletList items={CASE_STUDIES_PORTFOLIO.whatWeAnalyze} />
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
              {CASE_STUDIES_PORTFOLIO.typicalOutcome}
            </p>
          </aside>
        </div>
      </Section>

      {/* Section 4: Representative Recovery Examples */}
      <Section bordered compact className="bg-brand-elevated">
        <SectionHeading
          eyebrow={CASE_STUDIES_RECOVERY_EXAMPLES_SECTION.eyebrow}
          title={CASE_STUDIES_RECOVERY_EXAMPLES_SECTION.title}
          description={CASE_STUDIES_RECOVERY_EXAMPLES_SECTION.description}
          align="left"
          className="max-w-3xl"
        />
        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {CASE_STUDIES_RECOVERY_EXAMPLES.map((example) => (
            <li
              key={example.id}
              className={cn(
                CASE_STUDIES_CARD_CLASS,
                "border-white/10 p-5 shadow-[0_0_32px_-28px_rgba(220,38,38,0.15)]",
              )}
            >
              <h3 className="font-display text-base font-semibold text-white">
                {example.title}
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
            </li>
          ))}
        </ul>
      </Section>

      {/* Section 5: FAQ */}
      <SiteFaqSection {...SITE_FAQ.caseStudies} />

      {/* Section 6: CTA */}
      <MarketingCtaPanel />
    </>
  );
}
