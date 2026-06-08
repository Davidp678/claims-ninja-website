"use client";

import type { Locale } from "@/lib/i18n/config";

import { FaqSearchBar } from "./FaqSearchBar";
import { FaqSearchResults } from "./FaqSearchResults";

export function FaqSearchPanel({ locale = "en" }: { locale?: Locale }) {
  return (
    <>
      <FaqSearchBar locale={locale} />
      <FaqSearchResults locale={locale} />
    </>
  );
}
