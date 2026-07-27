import assert from "node:assert/strict";
import { test } from "node:test";

import { userFacingOnboardingError } from "./user-errors";

test("maps known codes to actionable copy", () => {
  assert.match(
    userFacingOnboardingError("VERSION_MISMATCH", "Session version mismatch."),
    /updated elsewhere/i,
  );
  assert.match(
    userFacingOnboardingError("PLATFORM_PROTECTION_BLOCKED", "blocked"),
    /temporarily blocked/i,
  );
  assert.match(
    userFacingOnboardingError("EXTERNAL_INTAKE_NOT_CONFIGURED", "missing"),
    /not configured/i,
  );
});

test("keeps Internal error generic", () => {
  const message = userFacingOnboardingError("INTERNAL_ERROR", "Internal error.");
  assert.match(message, /something went wrong/i);
  assert.doesNotMatch(message, /stack|ENOENT|supabase/i);
});

test("passes through useful validation messages", () => {
  assert.equal(
    userFacingOnboardingError("VALIDATION_ERROR", "expectedVersion is required."),
    "expectedVersion is required.",
  );
});
