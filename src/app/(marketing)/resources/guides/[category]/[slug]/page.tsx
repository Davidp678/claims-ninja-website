import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { GuideDetailPage } from "@/components/guides/GuideDetailPage";
import { MarketingCtaPanel } from "@/components/marketing/MarketingCtaPanel";
import { isGuideCategorySlug } from "@/lib/guide-categories";
import {
  GUIDE_DETAIL_CTA,
  getAllGuidePathParams,
  getGuideBySlug,
} from "@/lib/guide-page";
import { guideDetailMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ category: string; slug: string }>;
};

export function generateStaticParams() {
  return getAllGuidePathParams().map(({ category, slug }) => ({ category, slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;

  if (!isGuideCategorySlug(category)) {
    return { title: "Guide not found" };
  }

  const guide = getGuideBySlug(category, slug);

  if (!guide) {
    return { title: "Guide not found" };
  }

  return guideDetailMetadata(guide);
}

export default async function GuideDetailRoutePage({ params }: PageProps) {
  const { category, slug } = await params;

  if (!isGuideCategorySlug(category)) {
    notFound();
  }

  const guide = getGuideBySlug(category, slug);

  if (!guide) {
    notFound();
  }

  return (
    <>
      <GuideDetailPage guide={guide} />
      <MarketingCtaPanel {...GUIDE_DETAIL_CTA} />
    </>
  );
}
