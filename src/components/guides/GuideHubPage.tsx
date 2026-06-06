import { Suspense } from "react";

import { SiteFaqSection } from "@/components/faq/SiteFaqSection";
import { MarketingCtaPanel } from "@/components/marketing/MarketingCtaPanel";
import Link from "next/link";
import {
  GUIDE_HUB_CTA,
  getFeaturedGuides,
  getRecommendedGuides,
} from "@/lib/guide-page";
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

export function GuideHubPage() {
  const featured = getFeaturedGuides(3);
  const recommended = getRecommendedGuides(4);

  return (
    <>
      <GuideHubJsonLd />
      <GuideHero />
      <GuideFeaturedPlaybooks guides={featured} />
      <Suspense fallback={null}>
        <GuideRoleCards />
      </Suspense>
      <Suspense fallback={null}>
        <GuideHubContent />
      </Suspense>
      <GuidePhaseSection />
      {recommended.length > 0 ? (
        <Section bordered compact>
          <SectionHeading
            eyebrow="Recommended"
            title="Popular playbooks"
            description="Guides teams return to when scaling supplement volume or tightening documentation."
            align="left"
          />
          <GuideGrid guides={recommended} compact showCategory />
        </Section>
      ) : null}
      <Section compact>
        <div className="text-center">
          <p className="text-sm text-zinc-500">
            Looking for strategy and industry context?{" "}
            <Link
              href="/resources/blog"
              className="font-medium text-brand-red-light transition-colors hover:text-white"
            >
              Browse the blog
            </Link>
          </p>
        </div>
      </Section>
      <SiteFaqSection {...SITE_FAQ.guides} />
      <MarketingCtaPanel {...GUIDE_HUB_CTA} />
    </>
  );
}
