import { FaqCategoryIcon } from "./FaqCategoryIcon";
import { FAQ_CARD_CLASS, type FaqCategoryId } from "@/lib/faq-page";
import { cn } from "@/lib/cn";

type FaqCategoryCardProps = {
  id: FaqCategoryId;
  title: string;
  description: string;
};

export function FaqCategoryCard({ id, title, description }: FaqCategoryCardProps) {
  return (
    <a
      href={`#faq-category-${id}`}
      aria-label={`Browse ${title} questions`}
      className={cn("group flex h-full flex-col", FAQ_CARD_CLASS)}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-brand-elevated/80 text-brand-red-light transition-colors group-hover:border-brand-red/35 group-hover:bg-brand-red/10">
        <FaqCategoryIcon id={id} />
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-300">
        {description}
      </p>
      <span className="mt-5 flex items-center gap-1.5 text-sm font-medium text-zinc-400 transition-colors group-hover:text-brand-red-light">
        Browse questions
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
        </svg>
      </span>
    </a>
  );
}
