"use client";

import { FAQ_ITEMS } from "@/lib/faq-data";
import { FAQ_SEARCH, getCategoryTitle } from "@/lib/faq-page";
import { filterFaqItems } from "@/lib/faq-search";
import { cn } from "@/lib/cn";

import { useFaqSearch } from "./FaqSearchProvider";

export function FaqSearchBar() {
  const { query, setQuery, clearQuery } = useFaqSearch();
  const trimmedQuery = query.trim();
  const resultCount = filterFaqItems(
    FAQ_ITEMS,
    query,
    getCategoryTitle,
  ).length;

  return (
    <div className="mt-10 max-w-2xl">
      <label htmlFor="faq-search" className="sr-only">
        Search claims questions
      </label>
      <div className="relative">
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
        >
          <circle cx="11" cy="11" r="7" />
          <path strokeLinecap="round" d="M20 20l-3-3" />
        </svg>
        <input
          id="faq-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Search claims questions"
          placeholder={FAQ_SEARCH.placeholder}
          className={cn(
            "w-full rounded-xl border border-white/15 bg-brand-surface py-3.5 pl-12 text-sm text-white placeholder:text-zinc-500 shadow-[0_0_48px_-28px_rgba(220,38,38,0.15)] transition-colors focus:border-brand-red/45 focus:outline-none focus:ring-2 focus:ring-brand-red/20",
            trimmedQuery ? "pr-12" : "pr-4",
          )}
        />
        {trimmedQuery ? (
          <button
            type="button"
            onClick={clearQuery}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-white/8 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/40"
          >
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
            >
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        ) : null}
      </div>
      <p
        className="mt-3 text-sm text-zinc-400"
        aria-live="polite"
        aria-atomic="true"
      >
        {trimmedQuery
          ? `Showing ${resultCount} result${resultCount === 1 ? "" : "s"} for “${trimmedQuery}”`
          : FAQ_SEARCH.helperText}
      </p>
    </div>
  );
}
