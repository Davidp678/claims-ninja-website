import assert from "node:assert/strict";
import { test } from "node:test";

import {
  APPROVED_CLICKWRAP_LANGUAGE,
  PRIVACY_CONTENT_SHA256,
  PRIVACY_TITLE,
  PRIVACY_VERSION,
  TERMS_CONTENT_SHA256,
  TERMS_DISPLAY_TITLE,
  TERMS_TITLE,
  TERMS_VERSION,
  assertPlatformAgreementMatchesCanonical,
} from "./agreement-canonical";

test("agreement canonical integrity accepts exact platform package", () => {
  const result = assertPlatformAgreementMatchesCanonical({
    title: TERMS_TITLE,
    displayTitle: TERMS_DISPLAY_TITLE,
    version: TERMS_VERSION,
    effectiveDate: "2026-06-10",
    contentSha256: TERMS_CONTENT_SHA256,
    approvedAcceptanceLanguage: APPROVED_CLICKWRAP_LANGUAGE,
    privacy: {
      title: PRIVACY_TITLE,
      version: PRIVACY_VERSION,
      effectiveDate: "2026-07-23",
      contentSha256: PRIVACY_CONTENT_SHA256,
    },
  });
  assert.equal(result.ok, true);
});

test("fails closed on title, version, or hash mismatch", () => {
  assert.equal(
    assertPlatformAgreementMatchesCanonical({
      title: TERMS_TITLE,
      version: "wrong",
      effectiveDate: "2026-06-10",
      contentSha256: TERMS_CONTENT_SHA256,
      privacy: {
        title: PRIVACY_TITLE,
        version: PRIVACY_VERSION,
        effectiveDate: "2026-07-23",
        contentSha256: PRIVACY_CONTENT_SHA256,
      },
    }).ok,
    false,
  );
  assert.equal(
    assertPlatformAgreementMatchesCanonical({
      title: TERMS_TITLE,
      version: TERMS_VERSION,
      effectiveDate: "2026-06-10",
      contentSha256: TERMS_CONTENT_SHA256,
      privacy: {
        title: PRIVACY_TITLE,
        version: PRIVACY_VERSION,
        effectiveDate: "2026-07-23",
        contentSha256: "0".repeat(64),
      },
    }).ok,
    false,
  );
});
