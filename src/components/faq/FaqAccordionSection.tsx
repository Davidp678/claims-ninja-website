"use client";

import { FaqAccordionItem } from "./FaqAccordionItem";
import { FaqCategoryIcon } from "./FaqCategoryIcon";
import type { FaqItem, FaqCategoryId } from "@/lib/faq-page";

type FaqAccordionSectionProps = {
  categoryId: FaqCategoryId;
  title: string;
  description: string;
  items: FaqItem[];
  defaultOpen?: boolean;
};

export function FaqAccordionSection({
  categoryId,
  title,
  description,
  items,
  defaultOpen = false,
}: FaqAccordionSectionProps) {
  return (
    <section
      id={`faq-category-${categoryId}`}
      className="scroll-mt-28 border-t border-white/10 pt-10 first:border-t-0 first:pt-0"
    >
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-brand-elevated/60 text-brand-red-light">
          <FaqCategoryIcon id={categoryId} />
        </div>
        <div>
          <h2 className="font-display text-lg font-semibold text-white sm:text-xl">
            {title}
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-zinc-400">
            {description}
          </p>
        </div>
      </div>
      <div className="mt-5 border-t border-white/10">
        {items.map((item) => (
          <FaqAccordionItem
            key={`${item.id}-${defaultOpen}`}
            id={item.id}
            question={item.question}
            answer={item.answer}
            relatedLinks={item.relatedLinks}
            defaultOpen={defaultOpen}
          />
        ))}
      </div>
    </section>
  );
}
