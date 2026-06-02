import Link from "next/link";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFaqItemsByIds } from "@/lib/faq-page";

import { SiteFaqAccordion } from "./SiteFaqAccordion";

type SiteFaqSectionProps = {
  topic: string;
  faqIds: readonly string[];
};

export function SiteFaqSection({ topic, faqIds }: SiteFaqSectionProps) {
  const items = getFaqItemsByIds(faqIds);

  return (
    <Section bordered compact>
      <div className="mx-auto max-w-[850px]">
        <SectionHeading
          title="Frequently Asked Questions"
          description={`Answers to common questions about ${topic}.`}
          align="center"
        />
        <SiteFaqAccordion items={items} />
        <div className="text-center">
          <Link
            href="/faq"
            className="mt-8 inline-block text-sm font-medium text-zinc-400 transition-colors hover:text-brand-red-light"
          >
            View the full FAQ library →
          </Link>
        </div>
      </div>
    </Section>
  );
}
