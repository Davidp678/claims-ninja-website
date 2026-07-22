import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  AGREEMENT_CONTENT_SHA256,
  AGREEMENT_EFFECTIVE_LABEL,
  AGREEMENT_TITLE,
  AGREEMENT_VERSION,
  assertPlatformAgreementMatchesCanonical,
} from "./agreement-canonical";

describe("agreement canonical integrity", () => {
  it("accepts exact platform metadata", () => {
    const result = assertPlatformAgreementMatchesCanonical({
      title: AGREEMENT_TITLE,
      version: AGREEMENT_VERSION,
      effectiveDate: "2026-06-10",
      effectiveDateDisplay: AGREEMENT_EFFECTIVE_LABEL,
      contentSha256: AGREEMENT_CONTENT_SHA256,
    });
    assert.equal(result.ok, true);
    assert.equal(
      AGREEMENT_CONTENT_SHA256,
      "30142d8d0b9452de83b7cf41f92e7094a413e813af3325e74e343e639aae948d",
    );
  });

  it("fails closed on title, version, or hash mismatch", () => {
    assert.equal(
      assertPlatformAgreementMatchesCanonical({
        title: "Claims Ninja Service Agreement",
        version: AGREEMENT_VERSION,
        effectiveDate: "2026-06-10",
        contentSha256: AGREEMENT_CONTENT_SHA256,
      }).ok,
      false,
    );
    assert.equal(
      assertPlatformAgreementMatchesCanonical({
        title: AGREEMENT_TITLE,
        version: "1.0",
        effectiveDate: "2026-06-10",
        contentSha256: AGREEMENT_CONTENT_SHA256,
      }).ok,
      false,
    );
    assert.equal(
      assertPlatformAgreementMatchesCanonical({
        title: AGREEMENT_TITLE,
        version: AGREEMENT_VERSION,
        effectiveDate: "2026-06-10",
        contentSha256: "deadbeef",
      }).ok,
      false,
    );
  });
});
