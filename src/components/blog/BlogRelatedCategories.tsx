import type { BlogCategory } from "@/lib/blog-categories";
import { BLOG_CATEGORY_RELATED_SECTION } from "@/lib/blog-page";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { BlogCategoryCard } from "./BlogCategoryCard";

type BlogRelatedCategoriesProps = {
  categories: readonly BlogCategory[];
};

export function BlogRelatedCategories({ categories }: BlogRelatedCategoriesProps) {
  if (categories.length === 0) {
    return null;
  }

  return (
    <Section bordered compact>
      <SectionHeading
        eyebrow={BLOG_CATEGORY_RELATED_SECTION.eyebrow}
        title={BLOG_CATEGORY_RELATED_SECTION.title}
        description={BLOG_CATEGORY_RELATED_SECTION.description}
        align="left"
      />
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <li key={category.slug} className="flex">
            <BlogCategoryCard category={category} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
