import type { Guide } from "@/lib/guide-data";
import { buildGuideDetailSchema, buildGuideFaqSchema } from "@/lib/guide-seo";

type GuideHowToJsonLdProps = {
  guide: Guide;
};

export function GuideHowToJsonLd({ guide }: GuideHowToJsonLdProps) {
  const detailSchema = buildGuideDetailSchema(guide);
  const faqSchema = guide.faq ? buildGuideFaqSchema(guide.faq) : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(detailSchema) }}
      />
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}
    </>
  );
}
