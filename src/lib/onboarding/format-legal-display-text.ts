/**
 * Display-only formatter for legal snapshot text.
 * Does NOT alter bytes used for acceptance hashing — call only for UI rendering.
 *
 * Joins single newlines that look like soft wraps into spaces, while preserving
 * blank-line paragraph breaks and markdown-ish list/heading structure.
 */
export function formatLegalDisplayText(raw: string): string {
  if (!raw) return raw;

  const paragraphs = raw.replace(/\r\n/g, "\n").split(/\n{2,}/);

  return paragraphs
    .map((block) => {
      const lines = block.split("\n").map((line) => line.trimEnd());
      if (lines.length <= 1) {
        return lines[0] ?? "";
      }

      // Keep list / numbered blocks line-oriented.
      if (
        lines.every(
          (line) =>
            !line.trim() ||
            /^([-*•]|\d+[.)])\s+/.test(line.trim()) ||
            /^#{1,6}\s+/.test(line.trim()) ||
            /^[A-Z0-9][A-Z0-9\s./()-]{2,}$/.test(line.trim()),
        )
      ) {
        return lines.join("\n");
      }

      return lines
        .map((line) => line.trim())
        .filter((line) => line.length > 0)
        .join(" ");
    })
    .join("\n\n");
}
