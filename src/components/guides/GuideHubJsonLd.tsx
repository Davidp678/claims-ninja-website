import { buildGuideHubCollectionSchema } from "@/lib/guide-seo";
import { getAllGuides } from "@/lib/guide-page";

export function GuideHubJsonLd() {
  const schema = buildGuideHubCollectionSchema(getAllGuides());

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
