"use client";

import type { Locale } from "@/lib/i18n/config";

import { FaqFilteredResults } from "./FaqFilteredResults";
import { useFaqSearch } from "./FaqSearchProvider";

export function FaqSearchResults({ locale = "en" }: { locale?: Locale }) {
  const { query } = useFaqSearch();
  const trimmedQuery = query.trim();

  if (!trimmedQuery) {
    return null;
  }

  return (
    <section
      id="faq-search-results"
      aria-label="Search results"
      className="mt-8 max-w-4xl"
    >
      <h2 className="sr-only">Search results</h2>
      <FaqFilteredResults locale={locale} expandMatches showEmptyState />
    </section>
  );
}
