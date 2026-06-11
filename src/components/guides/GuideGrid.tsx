import type { Guide } from "@/lib/guide-data";
import type { Locale } from "@/lib/i18n/config";
import { getGuideHubUi } from "@/lib/guide-display";

import { GuideCard } from "./GuideCard";

type GuideGridProps = {
  guides: readonly Guide[];
  compact?: boolean;
  showCategory?: boolean;
  locale?: Locale;
};

export function GuideGrid({
  guides,
  compact = false,
  showCategory = false,
  locale = "en",
}: GuideGridProps) {
  const hubUi = getGuideHubUi(locale);

  if (guides.length === 0) {
    return <p className="text-sm text-zinc-500">{hubUi.noResults}</p>;
  }

  return (
    <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {guides.map((guide) => (
        <li key={`${guide.category}-${guide.slug}`}>
          <GuideCard
            guide={guide}
            compact={compact}
            showCategory={showCategory}
            locale={locale}
          />
        </li>
      ))}
    </ul>
  );
}
