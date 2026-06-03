"use client";

import type { BlogCategorySlug } from "@/lib/blog-categories";
import { BLOG_CATEGORIES } from "@/lib/blog-page";
import { cn } from "@/lib/cn";

type BlogCategoryRailProps = {
  activeCategory: BlogCategorySlug | "all";
  onCategoryChange: (category: BlogCategorySlug | "all") => void;
};

export function BlogCategoryRail({
  activeCategory,
  onCategoryChange,
}: BlogCategoryRailProps) {
  return (
    <div
      className="mt-10 flex flex-wrap gap-2"
      role="tablist"
      aria-label="Filter articles by category"
    >
      <CategoryPill
        label="All topics"
        active={activeCategory === "all"}
        onClick={() => onCategoryChange("all")}
      />
      {BLOG_CATEGORIES.map((category) => (
        <CategoryPill
          key={category.slug}
          label={category.name}
          active={activeCategory === category.slug}
          onClick={() => onCategoryChange(category.slug)}
        />
      ))}
    </div>
  );
}

function CategoryPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
        active
          ? "border-brand-red/50 bg-brand-red/15 text-brand-red-light"
          : "border-white/12 bg-brand-elevated/60 text-zinc-400 hover:border-white/25 hover:text-white",
      )}
    >
      {label}
    </button>
  );
}
