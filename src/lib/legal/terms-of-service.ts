import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "node:path";

import {
  TERMS_CONTENT_SHA256,
  TERMS_DISPLAY_TITLE,
  TERMS_EFFECTIVE_DATE,
  TERMS_EFFECTIVE_LABEL,
  TERMS_TITLE,
  TERMS_VERSION,
} from "@/lib/onboarding/agreement-canonical";

export const TERMS_SNAPSHOT_RELATIVE =
  "src/lib/legal/consulting-agreement-2026-06-10.txt";

export {
  TERMS_CONTENT_SHA256,
  TERMS_DISPLAY_TITLE,
  TERMS_EFFECTIVE_DATE,
  TERMS_EFFECTIVE_LABEL,
  TERMS_TITLE,
  TERMS_VERSION,
};

/**
 * Approved Terms contentSha256 is over UTF-8 LF snapshot bytes.
 * Canonicalize CRLF/CR → LF only — do not apply broader whitespace normalization
 * (that would change the counsel-approved hash).
 */
function canonicalizeLegalSnapshotLineEndings(raw: string): string {
  return raw.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
}

export function loadPublishedTermsOfServiceText(): string {
  const abs = path.join(process.cwd(), TERMS_SNAPSHOT_RELATIVE);
  return readFileSync(abs, "utf8");
}

export function verifyPublishedTermsOfServiceHash(): {
  ok: boolean;
  actual: string;
  expected: string;
} {
  const actual = createHash("sha256")
    .update(
      canonicalizeLegalSnapshotLineEndings(loadPublishedTermsOfServiceText()),
      "utf8",
    )
    .digest("hex");
  return {
    ok: actual === TERMS_CONTENT_SHA256,
    actual,
    expected: TERMS_CONTENT_SHA256,
  };
}
