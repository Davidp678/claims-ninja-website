import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { GuideDetailPage } from "@/components/guides/GuideDetailPage";
import { MarketingCtaPanel } from "@/components/marketing/MarketingCtaPanel";
import { isGuideCategorySlug } from "@/lib/guide-categories";
import { getSpanishGuideDetail, getSpanishGuideDetailParams } from "@/lib/guide-localization";
import { getResourcesContent } from "@/lib/i18n/content/resources";
import { guideDetailMetadataWithLocale } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ category: string; slug: string }>;
};

export function generateStaticParams() {
  return getSpanishGuideDetailParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;

  if (!isGuideCategorySlug(category)) {
    return { title: "Guía no encontrada" };
  }

  const guide = getSpanishGuideDetail(category, slug);

  if (!guide) {
    return { title: "Guía no encontrada" };
  }

  return guideDetailMetadataWithLocale(guide, {
    path: `/es/resources/guides/${category}/${slug}`,
    locale: "es",
  });
}

export default async function SpanishGuideDetailRoutePage({ params }: PageProps) {
  const { category, slug } = await params;

  if (!isGuideCategorySlug(category)) {
    notFound();
  }

  const guide = getSpanishGuideDetail(category, slug);

  if (!guide) {
    notFound();
  }

  return (
    <>
      <GuideDetailPage guide={guide} locale="es" />
      <MarketingCtaPanel {...getResourcesContent("es").guides.detailCta} locale="es" />
    </>
  );
}
