import { Suspense } from "react";

import { SiteFaqSection } from "@/components/faq/SiteFaqSection";
import { MarketingCtaPanel } from "@/components/marketing/MarketingCtaPanel";
import Link from "next/link";
import { getFeaturedGuides, getRecommendedGuides } from "@/lib/guide-page";
import type { Locale } from "@/lib/i18n/config";
import { getResourcesContent } from "@/lib/i18n/content/resources";
import { localizePath } from "@/lib/i18n/paths";
import { SITE_FAQ } from "@/lib/site-faq-selections";

import { GuideFeaturedPlaybooks } from "./GuideFeaturedPlaybooks";
import { GuideHero } from "./GuideHero";
import { GuideHubContent } from "./GuideHubContent";
import { GuideHubJsonLd } from "./GuideHubJsonLd";
import { GuidePhaseSection } from "./GuidePhaseSection";
import { GuideRoleCards } from "./GuideRoleCards";
import { GuideGrid } from "./GuideGrid";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function GuideHubPage({ locale = "en" }: { locale?: Locale }) {
  const guides = getResourcesContent(locale).guides;
  const featured = getFeaturedGuides(3);
  const recommended = getRecommendedGuides(4);

  return (
    <>
      <GuideHubJsonLd />
      <GuideHero locale={locale} />
      <GuideFeaturedPlaybooks guides={featured} locale={locale} />
      <Suspense fallback={null}>
        <GuideRoleCards locale={locale} />
      </Suspense>
      <Suspense fallback={null}>
        <GuideHubContent locale={locale} />
      </Suspense>
      <GuidePhaseSection locale={locale} />
      {recommended.length > 0 ? (
        <Section bordered compact>
          <SectionHeading
            eyebrow={guides.recommendedSection.eyebrow}
            title={guides.recommendedSection.title}
            description={guides.recommendedSection.description}
            align="left"
          />
          <GuideGrid guides={recommended} compact showCategory />
        </Section>
      ) : null}
      <Section compact>
        <div className="text-center">
          <p className="text-sm text-zinc-500">
            {guides.hubFooter.text}{" "}
            <Link
              href={localizePath(locale, "/resources/blog")}
              className="font-medium text-brand-red-light transition-colors hover:text-white"
            >
              {guides.hubFooter.linkLabel}
            </Link>
          </p>
        </div>
      </Section>
      <SiteFaqSection {...SITE_FAQ.guides} locale={locale} />
      <MarketingCtaPanel {...guides.hubCta} locale={locale} />
    </>
  );
}
