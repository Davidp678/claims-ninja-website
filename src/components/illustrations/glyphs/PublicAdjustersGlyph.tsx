import { cn } from "@/lib/cn";

import { GLYPH_BASE, type GlyphProps } from "./glyph-props";

export function PublicAdjustersGlyph({ className }: GlyphProps) {
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
      <path d="M32 12v8" />
      <path d="M20 20h24" />
      <path d="M22 20v28c0 2 4 4 10 4s10-2 10-4V20" />
      <path d="M18 28h28" opacity="0.7" />
      <circle cx="26" cy="36" r="3" />
      <circle cx="38" cy="36" r="3" />
    </svg>
  );
}
