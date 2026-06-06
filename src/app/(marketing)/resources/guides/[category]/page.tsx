import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { GuideCategoryPage } from "@/components/guides/GuideCategoryPage";
import {
  getAllGuideCategorySlugs,
  getGuideCategoryBySlugParam,
} from "@/lib/guide-categories";
import { getGuidesByCategory } from "@/lib/guide-page";
import { guideCategoryMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return getAllGuideCategorySlugs().map((category) => ({ category }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getGuideCategoryBySlugParam(categorySlug);

  if (!category) {
    return { title: "Category not found" };
  }

  return guideCategoryMetadata(category.slug);
}

export default async function GuideCategoryRoutePage({ params }: PageProps) {
  const { category: categorySlug } = await params;
  const category = getGuideCategoryBySlugParam(categorySlug);

  if (!category) {
    notFound();
  }

  const guides = getGuidesByCategory(category.slug);

  return <GuideCategoryPage category={category} guides={guides} />;
}
