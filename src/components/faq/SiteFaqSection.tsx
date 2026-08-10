import Link from "next/link";

import type { Locale } from "@/lib/i18n/config";
import { localizePath } from "@/lib/i18n/paths";
import { getCommonContent } from "@/lib/i18n/content/common";
import {
  getLocalizedFaqItems,
  translateFaqTopic,
} from "@/lib/i18n/content/faq";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { SiteFaqAccordion } from "./SiteFaqAccordion";

type SiteFaqSectionProps = {
  topic: string;
  faqIds: readonly string[];
  locale?: Locale;
};

function buildVisibleFaqPageSchema(
  items: readonly { question: string; answer: string }[],
) {
  if (items.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function SiteFaqSection({
  topic,
  faqIds,
  locale = "en",
}: SiteFaqSectionProps) {
  const items = getLocalizedFaqItems(faqIds, locale);
  const faqCopy = getCommonContent(locale).faq;
  const localizedTopic = translateFaqTopic(topic, locale);
  const faqSchema = buildVisibleFaqPageSchema(items);

  return (
    <Section bordered compact>
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}
      <div className="max-w-[850px] lg:-ml-6 xl:-ml-8">
        <SectionHeading
          title={faqCopy.title}
          description={`${faqCopy.answersAbout} ${localizedTopic}.`}
          align="left"
        />
        <SiteFaqAccordion items={items} />
        <Link
          href={localizePath(locale, "/faq")}
          className="mt-8 inline-block text-sm font-medium text-zinc-400 transition-colors hover:text-brand-red-light"
        >
          {faqCopy.viewAll}
        </Link>
      </div>
    </Section>
  );
}
