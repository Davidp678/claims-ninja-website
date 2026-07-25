import assert from "node:assert/strict";
import { test } from "node:test";

import { normalizeSessionProjection } from "./session-projection";
import type { IntakeSessionProjection } from "./types";

test("flattens platform form.claim and form.company onto top-level fields", () => {
  const raw = {
    status: "claim",
    stage: "claim",
    version: 3,
    form: {
      claim: { propertyOrJobName: "Johnson Residence", lossType: "wind_hail" },
      company: { firstName: "Alex", lastName: "Rivera" },
      billingContact: { email: "ops@example.com" },
      billingAddress: { city: "Austin" },
    },
    files: [
      {
        id: "f1",
        fileName: "scope.pdf",
        sizeBytes: 12,
        securityState: "ready",
      },
    ],
  };

  const normalized = normalizeSessionProjection(
    raw as unknown as IntakeSessionProjection & { form?: object },
  );

  assert.deepEqual(normalized.claim, {
    propertyOrJobName: "Johnson Residence",
    lossType: "wind_hail",
  });
  assert.deepEqual(normalized.company, {
    firstName: "Alex",
    lastName: "Rivera",
  });
  assert.deepEqual(normalized.billingContact, { email: "ops@example.com" });
  assert.deepEqual(normalized.billingAddress, { city: "Austin" });
  assert.equal(normalized.files?.[0]?.filename, "scope.pdf");
  assert.equal(
    (normalized as IntakeSessionProjection & { form?: unknown }).form,
    undefined,
  );
});

test("prefers already-flat top-level drafts over nested form", () => {
  const raw = {
    status: "company",
    stage: "company",
    version: 4,
    claim: { lossType: "water" },
    company: { firstName: "Kept" },
    form: {
      claim: { lossType: "fire" },
      company: { firstName: "Ignored" },
    },
  };

  const normalized = normalizeSessionProjection(
    raw as unknown as IntakeSessionProjection & { form?: object },
  );

  assert.equal(normalized.claim?.lossType, "water");
  assert.equal(normalized.company?.firstName, "Kept");
});
