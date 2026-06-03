import { SiteFaqAccordion } from "@/components/faq/SiteFaqAccordion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { BlogPost } from "@/lib/blog-data";
import { getFaqItemsByIds } from "@/lib/faq-page";

import { BlogInlineFaqAccordion } from "./BlogInlineFaqAccordion";

type BlogPostFaqProps = Pick<BlogPost, "faq" | "faqIds">;

export function BlogPostFaq({ faq, faqIds }: BlogPostFaqProps) {
  if (faqIds && faqIds.length > 0) {
    const items = getFaqItemsByIds(faqIds);
    return (
      <Section bordered compact>
        <div className="max-w-[850px]">
          <SectionHeading
            title="Frequently asked questions"
            description="Quick answers related to this topic."
            align="left"
          />
          <SiteFaqAccordion items={items} />
        </div>
      </Section>
    );
  }

  if (faq && faq.length > 0) {
    return (
      <Section bordered compact>
        <div className="max-w-[850px]">
          <SectionHeading
            title="Frequently asked questions"
            description="Quick answers related to this topic."
            align="left"
          />
          <BlogInlineFaqAccordion items={faq} />
        </div>
      </Section>
    );
  }

  return null;
}
