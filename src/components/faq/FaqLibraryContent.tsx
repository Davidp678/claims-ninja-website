"use client";

import type { Locale } from "@/lib/i18n/config";

import { FaqFilteredResults } from "./FaqFilteredResults";

export function FaqLibraryContent({ locale = "en" }: { locale?: Locale }) {
  return (
    <FaqFilteredResults
      locale={locale}
      expandMatches={false}
      showEmptyState={false}
      className="mt-12"
    />
  );
}
