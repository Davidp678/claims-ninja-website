"use client";

import { FAQ_ITEMS } from "@/lib/faq-data";
import { FAQ_SEARCH, getCategoryTitle, getFaqsByCategory } from "@/lib/faq-page";
import { filterFaqItems } from "@/lib/faq-search";
import { cn } from "@/lib/cn";

import { FaqAccordionSection } from "./FaqAccordionSection";
import { useFaqSearch } from "./FaqSearchProvider";

type FaqFilteredResultsProps = {
  expandMatches?: boolean;
  showEmptyState?: boolean;
  className?: string;
};

export function FaqFilteredResults({
  expandMatches = false,
  showEmptyState = false,
  className,
}: FaqFilteredResultsProps) {
  const { query, clearQuery } = useFaqSearch();
  const trimmedQuery = query.trim();
  const isFiltering = trimmedQuery.length > 0;
  const filtered = filterFaqItems(FAQ_ITEMS, query, getCategoryTitle);
  const groups = getFaqsByCategory(filtered);

  if (showEmptyState && isFiltering && filtered.length === 0) {
    return (
      <div
        role="status"
        className={cn(
          "rounded-2xl border border-white/15 bg-brand-surface px-6 py-10 text-center shadow-[0_0_48px_-28px_rgba(220,38,38,0.15)] sm:px-10",
          className,
        )}
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-brand-elevated/60 text-brand-red-light">
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
          >
            <circle cx="11" cy="11" r="7" />
            <path strokeLinecap="round" d="M20 20l-3-3" />
          </svg>
        </div>
        <p className="mt-5 font-display text-lg font-semibold text-white">
          No FAQ results found for &ldquo;{trimmedQuery}&rdquo;
        </p>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">
          Try {FAQ_SEARCH.emptyStateSuggestions}.
        </p>
        <button
          type="button"
          onClick={clearQuery}
          className="mt-6 text-sm font-medium text-brand-red-light transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/40"
        >
          Clear search
        </button>
      </div>
    );
  }

  return (
    <div className={className}>
      {groups.map(({ category, items }) => (
        <FaqAccordionSection
          key={category.id}
          categoryId={category.id}
          title={category.title}
          description={category.description}
          items={items}
          defaultOpen={expandMatches && isFiltering}
        />
      ))}
    </div>
  );
}
