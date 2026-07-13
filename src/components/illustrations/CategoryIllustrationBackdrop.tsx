import type { BlogVisualVariant } from "@/lib/blog-data";
import { cn } from "@/lib/cn";

const VARIANT_OVERLAYS: Record<BlogVisualVariant, string> = {
  redGlow:
    "bg-[radial-gradient(ellipse_80%_60%_at_70%_20%,rgba(220,38,38,0.35),transparent_55%)]",
  darkGrid: "",
  ember:
    "bg-[radial-gradient(ellipse_60%_80%_at_20%_100%,rgba(220,38,38,0.28),transparent_50%)]",
};

type CategoryIllustrationBackdropProps = {
  visualVariant?: BlogVisualVariant;
  showBottomFade?: boolean;
  className?: string;
};

export function CategoryIllustrationBackdrop({
  visualVariant = "darkGrid",
  showBottomFade = true,
  className,
}: CategoryIllustrationBackdropProps) {
  const variantOverlay = VARIANT_OVERLAYS[visualVariant];

  return (
    <div className={cn("absolute inset-0", className)} aria-hidden>
      <div className="absolute inset-0 bg-brand-elevated" />
      <div
        className={cn(
          "absolute inset-0",
          "bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]",
        )}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,rgba(220,38,38,0.14),transparent_60%)]" />
      {variantOverlay ? (
        <div className={cn("absolute inset-0 opacity-60", variantOverlay)} />
      ) : null}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.45)_100%)]" />
      {showBottomFade ? (
        <div className="absolute inset-0 bg-gradient-to-t from-brand-surface/90 to-transparent" />
      ) : null}
    </div>
  );
}
