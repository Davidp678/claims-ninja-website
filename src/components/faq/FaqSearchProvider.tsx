"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { Locale } from "@/lib/i18n/config";
import {
  getAllFaqItems,
  getCategoryTitleLocalized,
} from "@/lib/i18n/content/faq";
import { filterFaqItems } from "@/lib/faq-search";

type FaqSearchContextValue = {
  query: string;
  setQuery: (query: string) => void;
  clearQuery: () => void;
  locale: Locale;
};

const FaqSearchContext = createContext<FaqSearchContextValue | null>(null);

function isFaqItemHash(hash: string) {
  return hash.startsWith("#faq-") && !hash.startsWith("#faq-category-");
}

export function FaqSearchProvider({
  locale = "en",
  children,
}: {
  locale?: Locale;
  children: ReactNode;
}) {
  const [query, setQuery] = useState("");

  const clearQuery = useCallback(() => {
    setQuery("");
  }, []);

  useEffect(() => {
    const syncHash = () => {
      if (isFaqItemHash(window.location.hash)) {
        clearQuery();
      }
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [clearQuery]);

  const value = useMemo(
    () => ({
      query,
      setQuery,
      clearQuery,
      locale,
    }),
    [query, clearQuery, locale],
  );

  return (
    <FaqSearchContext.Provider value={value}>{children}</FaqSearchContext.Provider>
  );
}

export function useFaqSearch() {
  const context = useContext(FaqSearchContext);
  if (!context) {
    throw new Error("useFaqSearch must be used within FaqSearchProvider");
  }
  return context;
}

export function useFilteredFaqs() {
  const { query, locale } = useFaqSearch();
  const items = getAllFaqItems(locale);
  return useMemo(
    () =>
      filterFaqItems(items, query, (categoryId) =>
        getCategoryTitleLocalized(categoryId, locale),
      ),
    [items, query, locale],
  );
}
