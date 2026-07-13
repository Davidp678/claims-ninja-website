import type { BlogVisualVariant } from "@/lib/blog-data";
import type { BlogCategorySlug } from "@/lib/blog-categories";
import { cn } from "@/lib/cn";

import { CategoryIllustrationBackdrop } from "./CategoryIllustrationBackdrop";
import { CategoryIllustrationGlyph } from "./CategoryIllustrationGlyph";
import { resolveCategoryIllustration } from "./category-illustration-map";
import type {
  CategoryIllustrationKey,
  CategoryIllustrationSize,
} from "./category-illustration-types";

type CategoryIllustrationProps = {
  category: BlogCategorySlug;
  size?: CategoryIllustrationSize;
  visualVariant?: BlogVisualVariant;
  showBottomFade?: boolean;
  className?: string;
};

const SIZE_CLASSES: Record<CategoryIllustrationSize, string> = {
  sm: "h-20 rounded-lg",
  md: "h-28 rounded-xl",
  lg: "min-h-[200px] lg:min-h-[280px]",
};

type CategoryIllustrationByKeyProps = {
  illustrationKey: CategoryIllustrationKey;
  size?: CategoryIllustrationSize;
  visualVariant?: BlogVisualVariant;
  showBottomFade?: boolean;
  className?: string;
};

export function CategoryIllustration({
  category,
  size = "md",
  visualVariant = "darkGrid",
  showBottomFade = true,
  className,
}: CategoryIllustrationProps) {
  const illustrationKey = resolveCategoryIllustration(category);

  return (
    <CategoryIllustrationByKey
      illustrationKey={illustrationKey}
      size={size}
      visualVariant={visualVariant}
      showBottomFade={showBottomFade}
      className={className}
    />
  );
}

export function CategoryIllustrationByKey({
  illustrationKey,
  size = "md",
  visualVariant = "darkGrid",
  showBottomFade = true,
  className,
}: CategoryIllustrationByKeyProps) {
  return (
    <div
      className={cn("relative overflow-hidden text-white/80", SIZE_CLASSES[size], className)}
      aria-hidden
    >
      <CategoryIllustrationBackdrop
        visualVariant={visualVariant}
        showBottomFade={showBottomFade}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <CategoryIllustrationGlyph illustrationKey={illustrationKey} />
      </div>
    </div>
  );
}
