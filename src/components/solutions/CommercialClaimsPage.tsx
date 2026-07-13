import { HeroBackdrop } from "@/components/sections/HeroBackdrop";
import { MarketingCtaPanel } from "@/components/marketing/MarketingCtaPanel";
import { ResourceGroup, ResourceLink } from "@/components/guides/GuideRelatedResources";
import { SiteFaqSection } from "@/components/faq/SiteFaqSection";
import { Container } from "@/components/ui/Container";
import { ConversionCtaGroup } from "@/components/ui/ConversionCtaGroup";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getBlogPostBySlug, getBlogPostPath } from "@/lib/blog-page";
import {
  COMMERCIAL_CLAIM_TYPES,
  COMMERCIAL_DIFFERENCES,
  COMMERCIAL_FEATURE_CARD_CLASS,
  COMMERCIAL_HELP,
  COMMERCIAL_HERO,
  COMMERCIAL_HERO_IMAGE,
  COMMERCIAL_INDUSTRIES,
  COMMERCIAL_OPPORTUNITIES,
  COMMERCIAL_PROPERTY_TYPES,
  COMMERCIAL_RESOURCES,
  COMMERCIAL_WHY_CHOOSE,
} from "@/lib/commercial-page";
import { getGuidePathForGuide } from "@/lib/guide-page";
import { getGuideBySlugOnly } from "@/lib/guide-registry";
import type { Locale } from "@/lib/i18n/config";
import { getCommonContent } from "@/lib/i18n/content/common";
import { SITE_FAQ } from "@/lib/site-faq-selections";

import { RoofingHeroImageCard } from "./RoofingHeroImageCard";

type Card = { title: string; description: string };

function CardGrid({ items }: { items: readonly Card[] }) {
  return (
    <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.title} className={COMMERCIAL_FEATURE_CARD_CLASS}>
          <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-300">{item.description}</p>
        </li>
      ))}
    </ul>
  );
}

export function CommercialClaimsPage({ locale = "en" }: { locale?: Locale }) {
  const common = getCommonContent(locale);

  const guideLinks = COMMERCIAL_RESOURCES.guideSlugs
    .map((slug) => getGuideBySlugOnly(slug))
    .filter((guide): guide is NonNullable<typeof guide> => Boolean(guide))
    .map((guide) => ({ label: guide.title, href: getGuidePathForGuide(guide) }));

  const blogLinks = COMMERCIAL_RESOURCES.blogSlugs
    .map((slug) => getBlogPostBySlug(slug))
    .filter((post): post is NonNullable<typeof post> => Boolean(post))
    .map((post) => ({ label: post.title, href: getBlogPostPath(post.slug) }));

  return (
    <>
      <section className="relative overflow-hidden bg-brand-black">
        <HeroBackdrop />
        <Container className="relative z-10 grid grid-cols-1 gap-8 pb-10 pt-24 sm:gap-10 sm:pb-12 sm:pt-28 lg:grid-cols-[minmax(0,0.9fr)_minmax(620px,1.15fr)] lg:items-center lg:gap-x-16 lg:pb-14 lg:pt-24">
          <div
            className={
              locale === "es"
                ? "min-w-0 max-w-2xl lg:col-start-1 lg:max-w-none"
                : "max-w-2xl lg:col-start-1 lg:max-w-none"
            }
          >
            <SectionHeading
              as="h1"
              eyebrow={COMMERCIAL_HERO.eyebrow}
              title={COMMERCIAL_HERO.title}
              description={COMMERCIAL_HERO.description}
              align="left"
              className="max-w-none"
            />
            <ConversionCtaGroup
              className="mt-10 lg:mt-12"
              size="md"
              primaryLabel={common.beginClaimIntake}
              secondaryLabel={common.scheduleStrategyCallCta}
              rowBreakpoint={locale === "es" ? "xl" : "sm"}
              allowWrap={locale === "es"}
            />
          </div>
          <div className="w-full lg:col-start-2 lg:mt-2">
            <RoofingHeroImageCard
              src={COMMERCIAL_HERO_IMAGE.src}
              alt={COMMERCIAL_HERO_IMAGE.alt}
              objectPosition="62% center"
            />
          </div>
        </Container>
      </section>

      {/* Section 1 — Built for Commercial Restoration */}
      <Section bordered>
        <SectionHeading
          eyebrow={COMMERCIAL_PROPERTY_TYPES.eyebrow}
          title={COMMERCIAL_PROPERTY_TYPES.title}
          description={COMMERCIAL_PROPERTY_TYPES.description}
          align="left"
          className="max-w-3xl"
        />
        <CardGrid items={COMMERCIAL_PROPERTY_TYPES.items} />
      </Section>

      {/* Section 2 — How Claims Ninja Helps */}
      <Section bordered className="bg-brand-elevated py-16 sm:py-20">
        <SectionHeading
          eyebrow={COMMERCIAL_HELP.eyebrow}
          title={COMMERCIAL_HELP.title}
          align="left"
          className="max-w-3xl"
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2">
          {COMMERCIAL_HELP.items.map((item) => (
            <li key={item.title} className={COMMERCIAL_FEATURE_CARD_CLASS}>
              <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">{item.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Section 3 — Commercial Claim Types */}
      <Section bordered className="py-16 sm:py-20">
        <SectionHeading
          eyebrow={COMMERCIAL_CLAIM_TYPES.eyebrow}
          title={COMMERCIAL_CLAIM_TYPES.title}
          description={COMMERCIAL_CLAIM_TYPES.description}
          align="left"
          className="max-w-3xl"
        />
        <CardGrid items={COMMERCIAL_CLAIM_TYPES.items} />
      </Section>

      {/* Section 4 — Why Commercial Claims Are Different */}
      <Section bordered className="bg-brand-elevated py-16 sm:py-20">
        <SectionHeading
          eyebrow={COMMERCIAL_DIFFERENCES.eyebrow}
          title={COMMERCIAL_DIFFERENCES.title}
          description={COMMERCIAL_DIFFERENCES.description}
          align="left"
          className="max-w-3xl"
        />
        <CardGrid items={COMMERCIAL_DIFFERENCES.items} />
      </Section>

      {/* Section 5 — Commercial Claim Opportunities */}
      <Section bordered className="py-16 sm:py-20">
        <SectionHeading
          title={COMMERCIAL_OPPORTUNITIES.title}
          description={COMMERCIAL_OPPORTUNITIES.description}
          align="left"
          className="max-w-3xl"
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {COMMERCIAL_OPPORTUNITIES.items.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-xl border border-white/12 bg-brand-surface/60 px-5 py-4 text-sm leading-relaxed text-zinc-300"
            >
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red-light"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* Section 6 — Industries We Support */}
      <Section bordered className="bg-brand-elevated py-16 sm:py-20">
        <SectionHeading
          eyebrow={COMMERCIAL_INDUSTRIES.eyebrow}
          title={COMMERCIAL_INDUSTRIES.title}
          description={COMMERCIAL_INDUSTRIES.description}
          align="left"
          className="max-w-3xl"
        />
        <CardGrid items={COMMERCIAL_INDUSTRIES.items} />
      </Section>

      {/* Section 7 — Why Contractors Choose Claims Ninja */}
      <Section bordered className="py-16 sm:py-20">
        <SectionHeading
          eyebrow={COMMERCIAL_WHY_CHOOSE.eyebrow}
          title={COMMERCIAL_WHY_CHOOSE.title}
          align="left"
          className="max-w-3xl"
        />
        <CardGrid items={COMMERCIAL_WHY_CHOOSE.items} />
      </Section>

      {/* Section 8 — Featured Commercial Resources */}
      {guideLinks.length > 0 || blogLinks.length > 0 ? (
        <Section bordered className="bg-brand-elevated py-16 sm:py-20">
          <SectionHeading
            eyebrow={COMMERCIAL_RESOURCES.eyebrow}
            title={COMMERCIAL_RESOURCES.title}
            description={COMMERCIAL_RESOURCES.description}
            align="left"
            className="max-w-3xl"
          />
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {guideLinks.length > 0 ? (
              <ResourceGroup title="Commercial Guides">
                {guideLinks.map((link) => (
                  <ResourceLink key={link.href} href={link.href} label={link.label} />
                ))}
              </ResourceGroup>
            ) : null}
            {blogLinks.length > 0 ? (
              <ResourceGroup title="From the Blog">
                {blogLinks.map((link) => (
                  <ResourceLink key={link.href} href={link.href} label={link.label} />
                ))}
              </ResourceGroup>
            ) : null}
          </div>
        </Section>
      ) : null}

      <SiteFaqSection {...SITE_FAQ.commercial} locale={locale} />
      <MarketingCtaPanel locale={locale} />
    </>
  );
}
