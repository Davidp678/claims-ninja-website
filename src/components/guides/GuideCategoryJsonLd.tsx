import type { GuideCategory } from "@/lib/guide-categories";
import type { Guide } from "@/lib/guide-data";
import { buildGuideCategoryCollectionSchema } from "@/lib/guide-seo";

type GuideCategoryJsonLdProps = {
  category: GuideCategory;
  guides: readonly Guide[];
};

export function GuideCategoryJsonLd({ category, guides }: GuideCategoryJsonLdProps) {
  const schema = buildGuideCategoryCollectionSchema(
    category.slug,
    category.name,
    category.description,
    guides,
  );

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
