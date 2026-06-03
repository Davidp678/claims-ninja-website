import type { BlogVisualVariant } from "@/lib/blog-data";
import { cn } from "@/lib/cn";

const VISUAL_VARIANTS: Record<BlogVisualVariant, string> = {
  redGlow:
    "bg-[radial-gradient(ellipse_80%_60%_at_70%_20%,rgba(220,38,38,0.35),transparent_55%)] bg-brand-elevated",
  darkGrid:
    "bg-brand-elevated bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]",
  ember:
    "bg-[radial-gradient(ellipse_60%_80%_at_20%_100%,rgba(220,38,38,0.28),transparent_50%)] bg-brand-elevated",
};

export function getBlogVisualClass(variant: BlogVisualVariant): string {
  return cn("relative overflow-hidden", VISUAL_VARIANTS[variant]);
}
