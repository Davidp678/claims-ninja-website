import Link from "next/link";

import { HeroBackdrop } from "@/components/sections/HeroBackdrop";
import { MarketingCtaPanel } from "@/components/marketing/MarketingCtaPanel";
import { SiteFaqSection } from "@/components/faq/SiteFaqSection";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  CASE_STUDIES_CARD_CLASS,
  CASE_STUDIES_HERO,
  CASE_STUDIES_HERO_METRICS,
  CASE_STUDIES_INDUSTRY_RESULTS,
  CASE_STUDIES_LIBRARY,
  CASE_STUDIES_OPPORTUNITY_LIBRARY,
  CASE_STUDIES_OPERATIONAL_IMPACT,
  CASE_STUDIES_PORTFOLIO,
  CASE_STUDIES_RECOVERY_PROCESS,
  CASE_STUDIES_REVIEWS_BRIDGE,
} from "@/lib/case-studies-page";
import { CTA_LINKS } from "@/lib/constants";
import { SITE_FAQ } from "@/lib/site-faq-selections";
import { CLIENT_REVIEWS } from "@/lib/testimonials";
import { cn } from "@/lib/cn";

import { CaseStudiesProofMetricsSection } from "./CaseStudiesProofMetricsSection";

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
      {/* 1. Hero + 2. Hero Metrics Strip */}
      <section className="relative overflow-hidden bg-brand-black">
        <HeroBackdrop />
        <Container className="relative z-10 pb-10 pt-24 sm:pb-12 sm:pt-28 lg:pb-14 lg:pt-24">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-light">
              {CASE_STUDIES_HERO.eyebrow}
            </p>
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
              <Button href="#recovery-results" variant="secondary" size="md">
                Explore Recovery Results
              </Button>
            </div>
          </div>

          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {CASE_STUDIES_HERO_METRICS.map((metric) => (
              <li
                key={metric.label}
                className={cn(
                  CASE_STUDIES_CARD_CLASS,
                  "p-5 text-center sm:p-6 sm:text-left",
                )}
              >
                <p className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {metric.value}
                </p>
                <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-brand-red-light">
                  {metric.label}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 3. How Recovery Happens */}
      <Section bordered className="py-16 sm:py-20">
        <SectionHeading
          eyebrow={CASE_STUDIES_RECOVERY_PROCESS.eyebrow}
          title={CASE_STUDIES_RECOVERY_PROCESS.title}
          align="left"
          className="max-w-3xl"
        />
        <ol className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {CASE_STUDIES_RECOVERY_PROCESS.steps.map((item) => (
            <li key={item.step} className={`group relative ${CASE_STUDIES_CARD_CLASS}`}>
              <span className="font-display text-4xl font-semibold text-brand-red/75 transition-colors group-hover:text-brand-red-light">
                {item.step}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 4. Featured Portfolio Recovery Story */}
      <Section
        id="recovery-results"
        bordered
        className="scroll-mt-24 bg-brand-elevated py-16 sm:py-20"
      >
        <SectionHeading
          title={CASE_STUDIES_PORTFOLIO.title}
          description={CASE_STUDIES_PORTFOLIO.situation}
          align="left"
          className="max-w-3xl"
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
          <div className="space-y-10">
            <div>
              <h3 className="font-display text-lg font-semibold text-white">
                Common Challenges
              </h3>
              <BulletList items={CASE_STUDIES_PORTFOLIO.commonChallenges} />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-white">
                Claims Ninja Review
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                Claims Ninja conducted a portfolio-level review of active claims and
                identified recurring opportunities involving:
              </p>
              <BulletList items={CASE_STUDIES_PORTFOLIO.reviewFindings} />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-white">
                Operational Impact
              </h3>
              <BulletList items={CASE_STUDIES_PORTFOLIO.operationalImpact} />
            </div>
          </div>

          <aside
            className={cn(
              CASE_STUDIES_CARD_CLASS,
              "border-brand-red/25 bg-brand-black/60 p-8 lg:p-10",
              "shadow-[0_0_64px_-24px_rgba(220,38,38,0.35)]",
            )}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-light">
              Representative Outcome
            </p>
            <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
              {CASE_STUDIES_PORTFOLIO.outcomes.map((outcome) => (
                <li key={outcome.label}>
                  <p className="font-display text-3xl font-semibold tracking-tight text-brand-red-light sm:text-4xl">
                    {outcome.value}
                  </p>
                  <p className="mt-1.5 text-sm font-medium text-zinc-300">
                    {outcome.label}
                  </p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>

      {/* 5. Recovery Opportunity Library */}
      <Section bordered className="py-16 sm:py-20">
        <SectionHeading
          title={CASE_STUDIES_OPPORTUNITY_LIBRARY.title}
          description={CASE_STUDIES_OPPORTUNITY_LIBRARY.description}
          align="left"
          className="max-w-3xl"
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES_OPPORTUNITY_LIBRARY.categories.map((category) => (
            <li key={category.title} className={CASE_STUDIES_CARD_CLASS}>
              <h3 className="font-display text-lg font-semibold text-white">
                {category.title}
              </h3>
              <BulletList items={category.items} />
            </li>
          ))}
        </ul>
      </Section>

      {/* 6. Industry Results Grid */}
      <Section bordered className="bg-brand-elevated py-16 sm:py-20">
        <SectionHeading
          eyebrow="Industry expertise"
          title="Recovery results by trade"
          description="Representative recovery ranges and review focus areas across the trades Claims Ninja supports most."
          align="left"
          className="max-w-3xl"
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {CASE_STUDIES_INDUSTRY_RESULTS.map((industry) => (
            <li key={industry.id} className={cn(CASE_STUDIES_CARD_CLASS, "flex flex-col")}>
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-lg font-semibold tracking-wide text-white">
                  {industry.title}
                </h3>
                <p className="shrink-0 text-right">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Recovery Range
                  </span>
                  <span className="font-display text-lg font-semibold text-brand-red-light">
                    {industry.recoveryRange}
                  </span>
                </p>
              </div>
              <div className="mt-6 flex-1 space-y-5">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Common Challenges
                  </h4>
                  <BulletList items={industry.commonChallenges} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    What Claims Ninja Reviews
                  </h4>
                  <BulletList items={industry.reviews} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Typical Outcomes
                  </h4>
                  <BulletList items={industry.typicalOutcomes} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* 7. Claims Ninja By The Numbers */}
      <CaseStudiesProofMetricsSection />

      {/* 8. Operational Impact */}
      <Section bordered className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="Operational impact"
          title="Business outcomes beyond supplements"
          description="How portfolio-level claims support changes day-to-day operations for contractor partners."
          align="left"
          className="max-w-3xl"
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES_OPERATIONAL_IMPACT.map((impact) => (
            <li key={impact.title} className={CASE_STUDIES_CARD_CLASS}>
              <h3 className="font-display text-lg font-semibold text-white">
                {impact.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                {impact.description}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* 9. Case Study Library */}
      <Section bordered className="bg-brand-elevated py-16 sm:py-20">
        <SectionHeading
          eyebrow="Case study library"
          title="Recovery outcomes by industry"
          description="Explore representative recovery patterns by trade. Detailed case study pages coming soon."
          align="left"
          className="max-w-3xl"
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES_LIBRARY.map((card) => {
            const content = (
              <>
                <h3 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-brand-red-light">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                  {card.description}
                </p>
              </>
            );

            return (
              <li key={card.slug}>
                {card.href ? (
                  <Link
                    href={card.href}
                    className={cn(
                      CASE_STUDIES_CARD_CLASS,
                      "group block h-full transition-colors",
                    )}
                  >
                    {content}
                  </Link>
                ) : (
                  <article className={cn(CASE_STUDIES_CARD_CLASS, "h-full")}>
                    {content}
                  </article>
                )}
              </li>
            );
          })}
        </ul>
      </Section>

      {/* 10. Reviews Bridge */}
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

      {/* 11. FAQ */}
      <SiteFaqSection {...SITE_FAQ.caseStudies} />

      {/* 12. CTA */}
      <MarketingCtaPanel />
    </>
  );
}
