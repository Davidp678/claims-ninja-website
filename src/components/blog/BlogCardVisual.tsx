import type { BlogVisualVariant } from "@/lib/blog-data";
import type { BlogCategorySlug } from "@/lib/blog-categories";
import { cn } from "@/lib/cn";

import { CategoryIllustration } from "@/components/illustrations/CategoryIllustration";
import type { CategoryIllustrationSize } from "@/components/illustrations/category-illustration-types";

type BlogCardVisualProps = {
  category: BlogCategorySlug;
  visualVariant: BlogVisualVariant;
  size: CategoryIllustrationSize;
  showBottomFade?: boolean;
  className?: string;
};

const SIZE_MARGIN: Record<CategoryIllustrationSize, string> = {
  sm: "mb-4",
  md: "mb-5",
  lg: "",
};

export function BlogCardVisual({
  category,
  visualVariant,
  size,
  showBottomFade = size !== "lg",
  className,
}: BlogCardVisualProps) {
  return (
    <CategoryIllustration
      category={category}
      size={size}
      visualVariant={visualVariant}
      showBottomFade={showBottomFade}
      className={cn(SIZE_MARGIN[size], className)}
    />
  );
}
