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

import { FAQ_ITEMS } from "@/lib/faq-data";
import { getCategoryTitle } from "@/lib/faq-page";
import { filterFaqItems } from "@/lib/faq-search";

type FaqSearchContextValue = {
  query: string;
  setQuery: (query: string) => void;
  clearQuery: () => void;
};

const FaqSearchContext = createContext<FaqSearchContextValue | null>(null);

function isFaqItemHash(hash: string) {
  return hash.startsWith("#faq-") && !hash.startsWith("#faq-category-");
}

export function FaqSearchProvider({ children }: { children: ReactNode }) {
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
    }),
    [query, clearQuery],
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
  const { query } = useFaqSearch();
  return useMemo(
    () => filterFaqItems(FAQ_ITEMS, query, getCategoryTitle),
    [query],
  );
}
