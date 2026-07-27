import assert from "node:assert/strict";
import { test } from "node:test";

import {
  isRouteAllowed,
  maxAllowedOnboardingRoute,
  nextStage,
  ONBOARDING_STAGES,
} from "./stages";

test("uses Claim → Company → Agreement → Billing → Account", () => {
  assert.deepEqual([...ONBOARDING_STAGES], [
    "claim",
    "company",
    "agreement",
    "billing",
    "account",
  ]);
  assert.equal(nextStage("company"), "agreement");
  assert.equal(nextStage("billing"), "account");
  assert.equal(nextStage("account"), "verify");
});

test("blocks skip-ahead past incomplete stages", () => {
  const max = maxAllowedOnboardingRoute({
    status: "company",
    stage: "company",
    agreement: { accepted: false },
  });
  assert.equal(max, "company");
  assert.equal(isRouteAllowed("claim", max), true);
  assert.equal(isRouteAllowed("agreement", max), false);
});

test("allows billing after agreement acceptance", () => {
  const max = maxAllowedOnboardingRoute({
    status: "agreement",
    stage: "agreement",
    agreement: { accepted: true },
  });
  assert.equal(max, "billing");
  assert.equal(isRouteAllowed("billing", max), true);
  assert.equal(isRouteAllowed("account", max), false);
});

test("allows account after billing continue status", () => {
  const max = maxAllowedOnboardingRoute({
    status: "account",
    stage: "account",
  });
  assert.equal(max, "account");
  assert.equal(isRouteAllowed("account", max), true);
  assert.equal(isRouteAllowed("verify", max), false);
});
