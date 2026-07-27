import assert from "node:assert/strict";
import { test } from "node:test";

import {
  TERMS_CONTENT_SHA256,
  TERMS_VERSION,
  verifyPublishedTermsOfServiceHash,
} from "./terms-of-service";

test("published Terms of Service snapshot matches canonical content hash", () => {
  const check = verifyPublishedTermsOfServiceHash();
  assert.equal(TERMS_VERSION, "2026-06-10");
  assert.equal(
    TERMS_CONTENT_SHA256,
    "30142d8d0b9452de83b7cf41f92e7094a413e813af3325e74e343e639aae948d",
  );
  assert.equal(check.ok, true);
  assert.equal(check.actual, TERMS_CONTENT_SHA256);
});
