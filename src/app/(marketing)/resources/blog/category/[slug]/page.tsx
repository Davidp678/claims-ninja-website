import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogCategoryPage } from "@/components/blog/BlogCategoryPage";
import {
  getAllCategorySlugs,
  getCategoryBySlugParam,
  getRelatedCategories,
} from "@/lib/blog-categories";
import { getPostsByCategorySlug } from "@/lib/blog-registry";
import { blogCategoryMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlugParam(slug);

  if (!category) {
    return { title: "Category not found" };
  }

  return blogCategoryMetadata(category.slug);
}

export default async function BlogCategoryRoutePage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlugParam(slug);

  if (!category) {
    notFound();
  }

  const posts = getPostsByCategorySlug(category.slug);
  const relatedCategories = getRelatedCategories(category.slug);

  return (
    <BlogCategoryPage
      category={category}
      posts={posts}
      relatedCategories={relatedCategories}
    />
  );
}
