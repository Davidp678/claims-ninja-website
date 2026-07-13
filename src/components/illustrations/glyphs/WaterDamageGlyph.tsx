import { cn } from "@/lib/cn";

import { GLYPH_BASE, type GlyphProps } from "./glyph-props";

export function WaterDamageGlyph({ className }: GlyphProps) {
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
      <path d="M32 10c0 0-14 16-14 26a14 14 0 0028 0C46 26 32 10 32 10z" />
      <ellipse cx="32" cy="48" rx="18" ry="4" />
      <ellipse cx="32" cy="52" rx="24" ry="5" opacity="0.6" />
    </svg>
  );
}
