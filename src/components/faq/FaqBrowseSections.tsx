"use client";

import type { ReactNode } from "react";

import { useFaqSearch } from "./FaqSearchProvider";

export function FaqBrowseSections({ children }: { children: ReactNode }) {
  const { query } = useFaqSearch();

  if (query.trim()) {
    return null;
  }

  return children;
}
