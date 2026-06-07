import { HeroBackdrop } from "@/components/sections/HeroBackdrop";
import { MarketingCtaPanel } from "@/components/marketing/MarketingCtaPanel";
import { SiteFaqSection } from "@/components/faq/SiteFaqSection";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  CASE_STUDIES_CARD_CLASS,
  CASE_STUDIES_COMMON_FINDINGS,
  CASE_STUDIES_HERO,
  CASE_STUDIES_PORTFOLIO,
  CASE_STUDIES_RECOVERY_EXAMPLES,
  CASE_STUDIES_RECOVERY_EXAMPLES_SECTION,
  CASE_STUDIES_REVIEWS_BRIDGE,
  CASE_STUDIES_TRADE_CARDS,
  CASE_STUDIES_TRADE_RESULTS,
} from "@/lib/case-studies-page";
import { CTA_LINKS } from "@/lib/constants";
import { SITE_FAQ } from "@/lib/site-faq-selections";
import { CLIENT_REVIEWS } from "@/lib/testimonials";
import { cn } from "@/lib/cn";

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
        <Container className="relative z-10 pb-14 pt-24 sm:pb-16 sm:pt-28 lg:pb-20 lg:pt-24">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {CASE_STUDIES_HERO.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-zinc-300 sm:text-xl">
              {CASE_STUDIES_HERO.description}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href={CTA_LINKS.schedule} size="md" external>
                Schedule Strategy Call
              </Button>
              <Button href="/contact" variant="secondary" size="md">
                Talk With Our Team
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 1: Recovery Results by Trade */}
      <Section bordered className="py-16 sm:py-20">
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
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-lg font-semibold text-white">
                  {trade.title}
                </h3>
                <p className="shrink-0 text-right">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Typical Recovery Improvement Range
                  </span>
                  <span className="font-display text-lg font-semibold text-brand-red-light">
                    {trade.recoveryRange}
                  </span>
                </p>
              </div>
              <div className="mt-6 flex-1 space-y-5">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Most Common Findings
                  </h4>
                  <BulletList items={trade.commonFindings} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Areas Reviewed by Claims Ninja
                  </h4>
                  <BulletList items={trade.areasReviewed} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Representative Opportunities
                  </h4>
                  <BulletList items={trade.opportunities} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* Section 2: What We Commonly Find */}
      <Section bordered className="bg-brand-elevated py-16 sm:py-20">
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
      <Section bordered className="py-16 sm:py-20">
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
                What We Analyze
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
              Typical Outcome
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
              {CASE_STUDIES_PORTFOLIO.typicalOutcome}
            </p>
          </aside>
        </div>
      </Section>

      {/* Section 4: Representative Recovery Examples */}
      <Section bordered className="bg-brand-elevated py-16 sm:py-20">
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
                  <dt className="text-zinc-400">Carrier estimate</dt>
                  <dd className="font-medium text-white">{example.carrierEstimate}</dd>
                </div>
                <div className="flex justify-between gap-4 text-sm">
                  <dt className="text-zinc-400">Additional recovery</dt>
                  <dd className="font-medium text-brand-red-light">
                    {example.additionalRecovery}
                  </dd>
                </div>
                <div className="flex justify-between gap-4 text-sm">
                  <dt className="text-zinc-400">Recovery increase</dt>
                  <dd className="font-medium text-white">{example.recoveryIncrease}</dd>
                </div>
              </dl>
              <div className="mt-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Key Findings
                </h4>
                <BulletList items={example.keyFindings} />
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* Section 5: Reviews Bridge */}
      <Section bordered className="py-16 sm:py-20">
        <SectionHeading
          title={CASE_STUDIES_REVIEWS_BRIDGE.title}
          description={CASE_STUDIES_REVIEWS_BRIDGE.description}
          align="left"
          className="max-w-3xl"
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {CLIENT_REVIEWS.map((review) => (
            <li
              key={review.author}
              className="flex min-h-0 flex-col rounded-2xl border border-white/15 bg-brand-surface p-8 shadow-[0_0_48px_-28px_rgba(220,38,38,0.2)] shadow-lg shadow-black/25 transition-colors hover:border-brand-red/35"
            >
              <div className="flex gap-1 text-brand-red-light" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-sm">
                    ★
                  </span>
                ))}
              </div>
              <blockquote className="mt-3.5 flex-1 text-base leading-snug text-zinc-300">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <footer className="mt-5 border-t border-white/12 pt-6">
                <cite className="not-italic">
                  <p className="font-semibold text-white">{review.author}</p>
                  <p className="text-sm text-zinc-300">{review.location}</p>
                </cite>
              </footer>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <Button href="/reviews" variant="secondary" size="md">
            View All Contractor Reviews
          </Button>
        </div>
      </Section>

      {/* Section 6: FAQ */}
      <SiteFaqSection {...SITE_FAQ.caseStudies} />

      {/* Section 7: CTA */}
      <MarketingCtaPanel />
    </>
  );
}
