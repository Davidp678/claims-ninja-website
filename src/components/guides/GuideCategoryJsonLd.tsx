import type { GuideCategory } from "@/lib/guide-categories";
import type { Guide } from "@/lib/guide-data";
import { buildGuideCategoryCollectionSchema } from "@/lib/guide-seo";
import type { Locale } from "@/lib/i18n/config";

type GuideCategoryJsonLdProps = {
  category: GuideCategory;
  guides: readonly Guide[];
  locale?: Locale;
};

export function GuideCategoryJsonLd({
  category,
  guides,
  locale = "en",
}: GuideCategoryJsonLdProps) {
  const schema = buildGuideCategoryCollectionSchema(
    category.slug,
    category.name,
    category.description,
    guides,
    locale,
  );

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
