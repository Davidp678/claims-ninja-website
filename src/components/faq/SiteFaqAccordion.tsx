"use client";

import type { FaqItem } from "@/lib/faq-page";

import { SiteFaqAccordionItem } from "./SiteFaqAccordionItem";

type SiteFaqAccordionProps = {
  items: readonly Pick<FaqItem, "id" | "question" | "answer" | "relatedLinks">[];
};

export function SiteFaqAccordion({ items }: SiteFaqAccordionProps) {
  return (
    <div className="border-t border-white/10">
      {items.map((item) => (
        <SiteFaqAccordionItem key={item.id} {...item} />
      ))}
    </div>
  );
}
