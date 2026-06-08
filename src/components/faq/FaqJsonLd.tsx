import type { Locale } from "@/lib/i18n/config";
import { getAllFaqItems } from "@/lib/i18n/content/faq";

function buildFaqSchema(locale: Locale) {
  const items = getAllFaqItems(locale);
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

export function FaqJsonLd({ locale = "en" }: { locale?: Locale }) {
  const schema = buildFaqSchema(locale);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
