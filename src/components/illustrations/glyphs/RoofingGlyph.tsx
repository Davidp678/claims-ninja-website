import { cn } from "@/lib/cn";

import { GLYPH_BASE, type GlyphProps } from "./glyph-props";

export function RoofingGlyph({ className }: GlyphProps) {
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
      <path d="M8 32l24-20 24 20" />
      <path d="M14 30v22h36V30" />
      <path d="M26 52V38h12v14" />
      <path d="M18 26l6-2M26 22l6-2M34 22l6-2M42 26l6-2" opacity="0.7" />
    </svg>
  );
}
