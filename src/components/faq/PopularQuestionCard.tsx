import { FAQ_CARD_CLASS } from "@/lib/faq-page";
import { cn } from "@/lib/cn";

type PopularQuestionCardProps = {
  question: string;
  preview: string;
  category: string;
};

export function PopularQuestionCard({
  question,
  preview,
  category,
}: PopularQuestionCardProps) {
  return (
    <div className={cn("group flex gap-4", FAQ_CARD_CLASS)}>
      <div className="min-w-0 flex-1">
        <span className="inline-block rounded-full border border-white/10 bg-brand-elevated/80 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.12em] text-zinc-400">
          {category}
        </span>
        <h3 className="mt-3 font-display text-base font-semibold text-white sm:text-lg">
          {question}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">{preview}</p>
      </div>
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="mt-1 h-5 w-5 shrink-0 text-zinc-500 transition-colors group-hover:text-brand-red-light"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
      </svg>
    </div>
  );
}
