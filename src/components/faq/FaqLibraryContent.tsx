"use client";

import { FaqFilteredResults } from "./FaqFilteredResults";

export function FaqLibraryContent() {
  return (
    <FaqFilteredResults
      expandMatches={false}
      showEmptyState={false}
      className="mt-12"
    />
  );
}
