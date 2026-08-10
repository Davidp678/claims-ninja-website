import { buildGuideHubCollectionSchema } from "@/lib/guide-seo";
import { getAllGuides } from "@/lib/guide-page";
import type { Locale } from "@/lib/i18n/config";

export function GuideHubJsonLd({ locale = "en" }: { locale?: Locale }) {
  const schema = buildGuideHubCollectionSchema(getAllGuides(), locale);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
