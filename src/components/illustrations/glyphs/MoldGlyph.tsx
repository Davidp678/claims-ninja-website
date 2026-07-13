import { cn } from "@/lib/cn";

import { GLYPH_BASE, type GlyphProps } from "./glyph-props";

export function MoldGlyph({ className }: GlyphProps) {
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
      <path d="M32 48V28" />
      <path d="M32 28c-6-8-14-6-14 2s8 10 14 4" />
      <path d="M32 28c6-8 14-6 14 2s-8 10-14 4" />
      <path d="M32 36c-4-6-10-4-10 2s6 8 10 4" opacity="0.7" />
      <path d="M32 36c4-6 10-4 10 2s-6 8-10 4" opacity="0.7" />
      <path d="M32 44c-3-4-7-3-7 1s4 5 7 2" opacity="0.5" />
      <path d="M32 44c3-4 7-3 7 1s-4 5-7 2" opacity="0.5" />
    </svg>
  );
}
