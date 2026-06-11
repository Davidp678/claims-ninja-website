import { BlogInlineFaqAccordion } from "@/components/blog/BlogInlineFaqAccordion";
import type { GuideInlineFaq } from "@/lib/guide-types";
import type { Locale } from "@/lib/i18n/config";
import { getGuideDetailUi } from "@/lib/guide-display";
import { getLocalizedFaqItems } from "@/lib/i18n/content/faq";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

type GuideDetailFaqProps = {
  faq?: readonly GuideInlineFaq[];
  faqIds?: readonly string[];
  locale?: Locale;
};

export function GuideDetailFaq({ faq, faqIds, locale = "en" }: GuideDetailFaqProps) {
  const detailUi = getGuideDetailUi(locale);
  const inlineFaq = faq ?? [];
  const linkedFaq =
    faqIds
      ?.map((id) => getLocalizedFaqItems([id], locale)[0])
      .filter((item): item is NonNullable<typeof item> => Boolean(item))
      .map((item) => ({ question: item.question, answer: item.answer })) ?? [];

  const combined = [...inlineFaq, ...linkedFaq];

  if (combined.length === 0) return null;

  return (
    <Section bordered compact>
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow={detailUi.faqSection}
          title={detailUi.commonQuestions}
          description={detailUi.faqDescription}
          align="left"
        />
        <div className="mt-8">
          <BlogInlineFaqAccordion items={combined} />
        </div>
      </Container>
    </Section>
  );
}
