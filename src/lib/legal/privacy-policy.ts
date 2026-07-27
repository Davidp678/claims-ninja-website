import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "node:path";

import {
  PRIVACY_CONTENT_SHA256,
  PRIVACY_EFFECTIVE_DATE,
  PRIVACY_EFFECTIVE_LABEL,
  PRIVACY_VERSION,
} from "@/lib/onboarding/agreement-canonical";

export const PRIVACY_SNAPSHOT_RELATIVE =
  "src/lib/legal/privacy-policy-counsel-approved-2026-07-24.txt";

export {
  PRIVACY_CONTENT_SHA256,
  PRIVACY_EFFECTIVE_DATE,
  PRIVACY_EFFECTIVE_LABEL,
  PRIVACY_VERSION,
};

function normalizeLegalSnapshotText(raw: string): string {
  const lf = raw.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  const trimmedLines = lf.split("\n").map((line) => line.replace(/[ \t]+$/g, ""));
  const collapsed: string[] = [];
  let blankRun = 0;
  for (const line of trimmedLines) {
    if (line === "") {
      blankRun += 1;
      if (blankRun <= 2) collapsed.push("");
    } else {
      blankRun = 0;
      collapsed.push(line);
    }
  }
  return collapsed.join("\n").replace(/\n*$/g, "\n");
}

export function loadPublishedPrivacyPolicyText(): string {
  const abs = path.join(process.cwd(), PRIVACY_SNAPSHOT_RELATIVE);
  return readFileSync(abs, "utf8");
}

export function verifyPublishedPrivacyPolicyHash(): {
  ok: boolean;
  actual: string;
  expected: string;
} {
  const actual = createHash("sha256")
    .update(normalizeLegalSnapshotText(loadPublishedPrivacyPolicyText()), "utf8")
    .digest("hex");
  return {
    ok: actual === PRIVACY_CONTENT_SHA256,
    actual,
    expected: PRIVACY_CONTENT_SHA256,
  };
}
