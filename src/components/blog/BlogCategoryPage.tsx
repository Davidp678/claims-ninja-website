import type { BlogCategory } from "@/lib/blog-categories";
import type { BlogPost } from "@/lib/blog-types";
import { BLOG_HUB_CTA } from "@/lib/blog-page";

import { MarketingCtaPanel } from "@/components/marketing/MarketingCtaPanel";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { BlogArticleGrid } from "./BlogArticleGrid";
import { BlogBreadcrumbs } from "./BlogBreadcrumbs";
import { BlogCategoryEmptyState } from "./BlogCategoryEmptyState";
import { BlogCategoryHero } from "./BlogCategoryHero";
import { BlogCategoryJsonLd } from "./BlogCategoryJsonLd";
import { BlogRelatedCategories } from "./BlogRelatedCategories";

type BlogCategoryPageProps = {
  category: BlogCategory;
  posts: readonly BlogPost[];
  relatedCategories: readonly BlogCategory[];
};

export function BlogCategoryPage({
  category,
  posts,
  relatedCategories,
}: BlogCategoryPageProps) {
  return (
    <>
      <BlogCategoryJsonLd category={category} posts={posts} />
      <BlogCategoryHero category={category} articleCount={posts.length} />
      <Section bordered compact>
        <Container>
          <BlogBreadcrumbs currentLabel={category.name} />
          <div className="mt-10">
            {posts.length > 0 ? (
              <>
                <SectionHeading
                  eyebrow="Articles"
                  title={`Latest in ${category.name}`}
                  description="Newest articles in this topic, sorted by publish date."
                  align="left"
                />
                <BlogArticleGrid posts={posts} />
              </>
            ) : (
              <BlogCategoryEmptyState />
            )}
          </div>
        </Container>
      </Section>
      <BlogRelatedCategories categories={relatedCategories} />
      <MarketingCtaPanel {...BLOG_HUB_CTA} />
    </>
  );
}
