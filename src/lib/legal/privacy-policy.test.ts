import assert from "node:assert/strict";
import { test } from "node:test";

import {
  PRIVACY_CONTENT_SHA256,
  PRIVACY_VERSION,
  verifyPublishedPrivacyPolicyHash,
} from "./privacy-policy";

test("published Privacy Policy snapshot matches canonical content hash", () => {
  const check = verifyPublishedPrivacyPolicyHash();
  assert.equal(PRIVACY_VERSION, "counsel-approved-2026-07-24");
  assert.equal(check.ok, true);
  assert.equal(check.actual, PRIVACY_CONTENT_SHA256);
});
