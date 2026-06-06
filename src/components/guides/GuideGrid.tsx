import type { Guide } from "@/lib/guide-data";

import { GuideCard } from "./GuideCard";

type GuideGridProps = {
  guides: readonly Guide[];
  compact?: boolean;
  showCategory?: boolean;
};

export function GuideGrid({ guides, compact = false, showCategory = false }: GuideGridProps) {
  if (guides.length === 0) {
    return (
      <p className="text-sm text-zinc-500">No guides match your filters. Try adjusting your search.</p>
    );
  }

  return (
    <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {guides.map((guide) => (
        <li key={`${guide.category}-${guide.slug}`}>
          <GuideCard guide={guide} compact={compact} showCategory={showCategory} />
        </li>
      ))}
    </ul>
  );
}
