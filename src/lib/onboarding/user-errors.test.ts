import assert from "node:assert/strict";
import { test } from "node:test";

import {
  userFacingHandoffError,
  userFacingOnboardingError,
} from "./user-errors";

test("maps known codes to actionable copy", () => {
  assert.match(
    userFacingOnboardingError("VERSION_MISMATCH", "Session version mismatch."),
    /updated elsewhere/i,
  );
  assert.match(
    userFacingOnboardingError("STALE_SESSION_VERSION", "Session version mismatch."),
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
  assert.match(
    userFacingOnboardingError("SESSION_COMPLETED", "done"),
    /already finished/i,
  );
  assert.match(
    userFacingOnboardingError("SESSION_EXPIRED", "gone"),
    /expired/i,
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

test("never exposes internal stage-transition or handoff machine language", () => {
  assert.doesNotMatch(
    userFacingOnboardingError(
      "INVALID_STATE",
      "Cannot advance to that onboarding stage yet.",
    ),
    /onboarding stage/i,
  );
  assert.doesNotMatch(
    userFacingOnboardingError(
      "INVALID_STAGE_TRANSITION",
      "Cannot advance to that onboarding stage yet.",
    ),
    /onboarding stage/i,
  );
  assert.doesNotMatch(
    userFacingHandoffError(
      "PROVISIONING_INCOMPLETE",
      "Handoff is only available after completed provisioning.",
    ),
    /completed provisioning/i,
  );
  assert.match(
    userFacingHandoffError("HANDOFF_EXPIRED", "Handoff code expired."),
    /couldn’t open your workspace/i,
  );
  assert.match(
    userFacingHandoffError("HANDOFF_REDEEMED", "already used"),
    /couldn’t open your workspace/i,
  );
});
