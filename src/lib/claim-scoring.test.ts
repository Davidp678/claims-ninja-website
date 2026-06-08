import assert from "node:assert/strict";
import { test } from "node:test";

import type { ClaimFinding } from "@/lib/claim-analysis";
import { calibrateOpportunityScore, parseCarrierEstimate } from "@/lib/claim-scoring";

function finding(
  severity: ClaimFinding["severity"],
  confidence: number,
): ClaimFinding {
  return {
    title: "Sample finding",
    severity,
    category: "missing_item",
    explanation: "",
    recommendedAction: "",
    confidence,
  };
}

test("defers to model score when there is no revenue or carrier signal", () => {
  assert.equal(
    calibrateOpportunityScore({
      revenueRange: { low: 0, high: 0 },
      findings: [],
      carrierEstimate: 0,
      fallbackScore: 37,
    }),
    37,
  );
});

test("worked example: $67,605 carrier + $5k–$15k missed revenue lands Meaningful/Strong", () => {
  const score = calibrateOpportunityScore({
    revenueRange: { low: 5000, high: 15000 },
    findings: [finding("high", 0.8), finding("medium", 0.7), finding("low", 0.6)],
    carrierEstimate: 67605,
    fallbackScore: 7,
  });
  // mid = 10000; rev = clamp(10000/67605*300,0,70) ≈ 44.4
  // findings = 12*0.8 + 6*0.7 + 2*0.6 = 9.6+4.2+1.2 = 15 → total ≈ 59
  assert.ok(score >= 55 && score <= 65, `expected 55–65, got ${score}`);
});

test("applies the $5k floor for legitimate value with findings", () => {
  const score = calibrateOpportunityScore({
    revenueRange: { low: 4000, high: 8000 },
    findings: [finding("low", 0.3)],
    carrierEstimate: 0,
    fallbackScore: 3,
  });
  // mid = 6000, no carrier → rev = clamp(6000/25000*70,0,70) ≈ 16.8
  // findings = 2*0.3 = 0.6 → raw ≈ 17.4, floored to 42
  assert.equal(score, 42);
});

test("applies the $1.5k floor without findings", () => {
  const score = calibrateOpportunityScore({
    revenueRange: { low: 1000, high: 3000 },
    findings: [],
    carrierEstimate: 0,
    fallbackScore: 1,
  });
  // mid = 2000 → rev ≈ 5.6, floored to 22
  assert.equal(score, 22);
});

test("caps the score at 100", () => {
  const score = calibrateOpportunityScore({
    revenueRange: { low: 100000, high: 100000 },
    findings: [finding("high", 1), finding("high", 1), finding("high", 1)],
    carrierEstimate: 50000,
    fallbackScore: 50,
  });
  assert.equal(score, 100);
});

test("parseCarrierEstimate strips formatting", () => {
  assert.equal(parseCarrierEstimate("$67,605"), 67605);
  assert.equal(parseCarrierEstimate("12345.67"), 12345.67);
  assert.equal(parseCarrierEstimate(""), 0);
  assert.equal(parseCarrierEstimate(undefined), 0);
  assert.equal(parseCarrierEstimate(-5), 0);
  assert.equal(parseCarrierEstimate("abc"), 0);
});
