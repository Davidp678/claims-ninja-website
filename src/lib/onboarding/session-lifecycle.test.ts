import assert from "node:assert/strict";
import { test } from "node:test";

import { userFacingOnboardingError } from "./user-errors";

/** Editable resume codes that must force a fresh session create. */
const NON_RESUMABLE_CODES = new Set([
  "SESSION_COMPLETED",
  "SESSION_EXPIRED",
  "EXPIRED",
  "NOT_FOUND",
  "SESSION_UNAUTHORIZED",
]);

test("completed and expired codes are treated as non-resumable for Step 1", () => {
  for (const code of NON_RESUMABLE_CODES) {
    assert.equal(NON_RESUMABLE_CODES.has(code), true);
  }
  assert.equal(NON_RESUMABLE_CODES.has("VERSION_MISMATCH"), false);
  assert.equal(NON_RESUMABLE_CODES.has("VALIDATION_ERROR"), false);
});

test("customer copy for non-resumable codes never mentions internal stages", () => {
  for (const code of ["SESSION_COMPLETED", "SESSION_EXPIRED", "INVALID_STAGE_TRANSITION"]) {
    const message = userFacingOnboardingError(code, "Cannot advance to that onboarding stage yet.");
    assert.doesNotMatch(message, /Cannot advance/i);
    assert.doesNotMatch(message, /INVALID_/);
  }
});
