import Link from "next/link";

import { HeroBackdrop } from "@/components/sections/HeroBackdrop";
import { MarketingCtaPanel } from "@/components/marketing/MarketingCtaPanel";
import { Container } from "@/components/ui/Container";
import { ConversionCtaGroup } from "@/components/ui/ConversionCtaGroup";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ClaimRecoveryCaseStudy } from "@/lib/case-study-types";
import { buildCaseStudyArticleSchema } from "@/lib/case-study-seo";
import { CASE_STUDY_BASE_PATH } from "@/lib/claim-recovery-case-studies";
import { getBlogPostBySlug, getBlogPostPath } from "@/lib/blog-page";
import { CASE_STUDIES_CARD_CLASS } from "@/lib/case-studies-page";
import { cn } from "@/lib/cn";
import { getCommonContent } from "@/lib/i18n/content/common";

type CaseStudyDetailPageProps = {
  study: ClaimRecoveryCaseStudy;
};

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-zinc-300">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-red-light" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}

function RelatedLinkList({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  if (links.length === 0) return null;

  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-brand-red-light transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CaseStudyDetailPage({ study }: CaseStudyDetailPageProps) {
  const schema = buildCaseStudyArticleSchema(study);
  const cta = getCommonContent("en");
  const relatedBlogLinks = study.relatedBlogSlugs
    .map((slug) => {
      const post = getBlogPostBySlug(slug);
      if (!post) return null;
      return { label: post.title, href: getBlogPostPath(post.slug) };
    })
    .filter((link): link is { label: string; href: string } => Boolean(link));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="relative overflow-hidden bg-brand-black">
        <HeroBackdrop />
        <Container className="relative z-10 max-w-3xl pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pb-20 lg:pt-36">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-light">
            Claim Recovery Case Study
          </p>
          <nav aria-label="Breadcrumb" className="mt-4 text-sm text-zinc-500">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link
                  href={CASE_STUDY_BASE_PATH}
                  className="transition-colors hover:text-zinc-300"
                >
                  Results & Insights
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-zinc-400">{study.title}</li>
            </ol>
          </nav>
          <h1 className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
            {study.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-300">{study.summary}</p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className={cn(CASE_STUDIES_CARD_CLASS, "p-4")}>
              <dt className="text-xs font-medium text-zinc-400">Carrier estimate</dt>
              <dd className="mt-1 font-display text-lg font-semibold text-white">
                {study.carrierEstimate}
              </dd>
            </div>
            <div className={cn(CASE_STUDIES_CARD_CLASS, "p-4")}>
              <dt className="text-xs font-medium text-zinc-400">
                Additional recovery identified
              </dt>
              <dd className="mt-1 font-display text-lg font-semibold text-brand-red-light">
                {study.additionalRecovery}
              </dd>
            </div>
            <div className={cn(CASE_STUDIES_CARD_CLASS, "p-4")}>
              <dt className="text-xs font-medium text-zinc-400">Recovery increase</dt>
              <dd className="mt-1 font-display text-lg font-semibold text-white">
                {study.recoveryIncrease}
              </dd>
            </div>
          </dl>
          <ConversionCtaGroup
            className="mt-10"
            size="md"
            primaryLabel={cta.beginClaimIntake}
            secondaryLabel={cta.scheduleStrategyCallCta}
          />
        </Container>
      </section>

      <Section bordered compact>
        <Container className="max-w-3xl space-y-12">
          <section>
            <SectionHeading
              eyebrow={study.tradeFocus}
              title="Situation"
              description={study.lossType}
              align="left"
            />
            <p className="mt-6 leading-relaxed text-zinc-300">{study.situation}</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">
              Documentation gaps
            </h2>
            <BulletList items={study.documentationGaps} />
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">
              Review focus areas
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              Drawn from published Results & Insights trade review categories for{" "}
              {study.tradeFocus.toLowerCase()} — not a claim-specific work log.
            </p>
            <BulletList items={study.recoveryApproach} />
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">
              Outcome
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-300">{study.outcomeSummary}</p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              {study.methodologyNote}
            </p>
          </section>

          <section className="grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
            <RelatedLinkList
              title="Related solutions"
              links={study.relatedSolutionPaths}
            />
            <RelatedLinkList title="Related guides" links={study.relatedGuidePaths} />
            <RelatedLinkList title="Related articles" links={relatedBlogLinks} />
          </section>

          <p className="text-sm text-zinc-500">
            <Link
              href={CASE_STUDY_BASE_PATH}
              className="font-medium text-brand-red-light transition-colors hover:text-white"
            >
              Back to Results & Insights
            </Link>
          </p>
        </Container>
      </Section>

      <MarketingCtaPanel />
    </>
  );
}
