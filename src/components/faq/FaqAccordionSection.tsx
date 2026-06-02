import { FaqAccordionItem } from "./FaqAccordionItem";
import { FaqCategoryIcon } from "./FaqCategoryIcon";
import type { FaqItem, FaqCategoryId } from "@/lib/faq-page";
import { FAQ_CARD_CLASS } from "@/lib/faq-page";
import { cn } from "@/lib/cn";

type FaqAccordionSectionProps = {
  categoryId: FaqCategoryId;
  title: string;
  description: string;
  items: FaqItem[];
};

export function FaqAccordionSection({
  categoryId,
  title,
  description,
  items,
}: FaqAccordionSectionProps) {
  return (
    <section
      id={`faq-category-${categoryId}`}
      className={cn("scroll-mt-28", FAQ_CARD_CLASS, "hover:border-white/15")}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-brand-elevated/80 text-brand-red-light">
          <FaqCategoryIcon id={categoryId} />
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">
            {title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            {description}
          </p>
        </div>
      </div>
      <div className="mt-6 border-t border-white/10">
        {items.map((item) => (
          <FaqAccordionItem
            key={item.id}
            id={item.id}
            question={item.question}
            answer={item.answer}
            relatedLinks={item.relatedLinks}
          />
        ))}
      </div>
    </section>
  );
}
