import Link from "next/link";

import { getPostsByCategory, getBlogPostPath } from "@/lib/blog-page";
import type { GuideCategory } from "@/lib/guide-categories";
import type { Guide } from "@/lib/guide-data";
import {
  GUIDE_BASE_PATH,
  GUIDE_CATEGORY_HUB_RELATED,
  GUIDE_HUB_CTA,
  getGuideCategoryPath,
} from "@/lib/guide-page";

import { MarketingCtaPanel } from "@/components/marketing/MarketingCtaPanel";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { GuideBreadcrumbs } from "./GuideBreadcrumbs";
import { GuideCategoryHero } from "./GuideCategoryHero";
import { GuideCategoryJsonLd } from "./GuideCategoryJsonLd";
import { GuideGrid } from "./GuideGrid";

type GuideCategoryPageProps = {
  category: GuideCategory;
  guides: readonly Guide[];
};

export function GuideCategoryPage({ category, guides }: GuideCategoryPageProps) {
  const relatedBlogPosts = category.relatedBlogCategories
    .flatMap((blogCategory) => getPostsByCategory(blogCategory).slice(0, 2))
    .slice(0, 4);

  return (
    <>
      <GuideCategoryJsonLd category={category} guides={guides} />
      <GuideCategoryHero category={category} guideCount={guides.length} />
      <Section bordered compact>
        <Container>
          <GuideBreadcrumbs
            categoryLabel={category.name}
            categoryPath={getGuideCategoryPath(category.slug)}
          />
          <div className="mt-10">
            <SectionHeading
              eyebrow="Playbooks"
              title={`${category.name} operational guides`}
              description="Field-ready procedures, checklists, and documentation standards for this discipline."
              align="left"
            />
            <GuideGrid guides={guides} />
          </div>
        </Container>
      </Section>

      {relatedBlogPosts.length > 0 ? (
        <Section bordered compact>
          <Container>
            <SectionHeading
              eyebrow={GUIDE_CATEGORY_HUB_RELATED.eyebrow}
              title={GUIDE_CATEGORY_HUB_RELATED.title}
              description={GUIDE_CATEGORY_HUB_RELATED.description}
              align="left"
            />
            <ul className="mt-6 space-y-3">
              {relatedBlogPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={getBlogPostPath(post.slug)}
                    className="text-sm text-zinc-400 transition-colors hover:text-brand-red-light"
                  >
                    {post.title} →
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      {category.relatedSolutionPath ? (
        <Section compact>
          <Container>
            <p className="text-sm text-zinc-500">
              See how Claims Ninja supports{" "}
              <Link
                href={category.relatedSolutionPath}
                className="font-medium text-brand-red-light transition-colors hover:text-white"
              >
                {category.name.toLowerCase()}
              </Link>{" "}
              operations end to end.
            </p>
          </Container>
        </Section>
      ) : null}

      <Section compact>
        <Container>
          <Link
            href={GUIDE_BASE_PATH}
            className="text-sm font-medium text-brand-red-light transition-colors hover:text-white"
          >
            ← Back to all guides
          </Link>
        </Container>
      </Section>

      <MarketingCtaPanel {...GUIDE_HUB_CTA} />
    </>
  );
}
