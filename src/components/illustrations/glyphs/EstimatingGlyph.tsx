import { cn } from "@/lib/cn";

import { GLYPH_BASE, type GlyphProps } from "./glyph-props";

export function EstimatingGlyph({ className }: GlyphProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 64 64"
      className={cn(GLYPH_BASE, className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="10" y="10" width="36" height="36" rx="1" />
      <path d="M10 22h36M10 34h36M22 10v36M34 10v36" opacity="0.5" />
      <path d="M46 18l8 28M46 46l8-28" />
      <path d="M44 24h12M44 32h12M44 40h12" opacity="0.7" />
    </svg>
  );
}
