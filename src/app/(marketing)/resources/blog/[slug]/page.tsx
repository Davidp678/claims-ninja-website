import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogPostPage } from "@/components/blog/BlogPostPage";
import { MarketingCtaPanel } from "@/components/marketing/MarketingCtaPanel";
import { BLOG_POST_CTA, getAllBlogSlugs, getPublishedPostBySlug } from "@/lib/blog-page";
import { blogArticleMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPublishedPostBySlug(slug);

  if (!post) {
    return { title: "Article not found" };
  }

  return blogArticleMetadata(post);
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPublishedPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <BlogPostPage post={post} />
      <MarketingCtaPanel {...BLOG_POST_CTA} />
    </>
  );
}
