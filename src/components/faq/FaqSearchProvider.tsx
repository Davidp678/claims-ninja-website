"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type FaqSearchContextValue = {
  query: string;
  setQuery: (query: string) => void;
  clearQuery: () => void;
};

const FaqSearchContext = createContext<FaqSearchContextValue | null>(null);

export function FaqSearchProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState("");

  const clearQuery = useCallback(() => {
    setQuery("");
  }, []);

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
