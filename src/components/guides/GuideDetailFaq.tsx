import { BlogInlineFaqAccordion } from "@/components/blog/BlogInlineFaqAccordion";
import { FAQ_ITEMS } from "@/lib/faq-data";
import type { GuideInlineFaq } from "@/lib/guide-types";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

type GuideDetailFaqProps = {
  faq?: readonly GuideInlineFaq[];
  faqIds?: readonly string[];
};

export function GuideDetailFaq({ faq, faqIds }: GuideDetailFaqProps) {
  const inlineFaq = faq ?? [];
  const linkedFaq =
    faqIds
      ?.map((id) => FAQ_ITEMS.find((item) => item.id === id))
      .filter((item): item is NonNullable<typeof item> => Boolean(item))
      .map((item) => ({ question: item.question, answer: item.answer })) ?? [];

  const combined = [...inlineFaq, ...linkedFaq];

  if (combined.length === 0) return null;

  return (
    <Section bordered compact>
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions"
          description="Quick answers related to this procedure."
          align="left"
        />
        <div className="mt-8">
          <BlogInlineFaqAccordion items={combined} />
        </div>
      </Container>
    </Section>
  );
}
