import type { ClaimFinding, FindingSeverity } from "@/lib/claim-analysis";

function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}

const SEVERITY_WEIGHT: Record<FindingSeverity, number> = {
  high: 12,
  medium: 6,
  low: 2,
};

export type CalibrateOpportunityScoreInput = {
  revenueRange: { low: number; high: number };
  findings: readonly ClaimFinding[];
  carrierEstimate: number;
  /** Model-provided score, used as a fallback when no signal is available. */
  fallbackScore: number;
};

/**
 * Deterministic, calibrated opportunity score (0–100).
 *
 * The score blends a revenue component (how much recovery is on the table,
 * both in absolute terms and relative to the carrier estimate) with a findings
 * component (severity + confidence + count). Floors guarantee that a claim with
 * legitimate, documented missed revenue never reads as "worthless".
 */
export function calibrateOpportunityScore({
  revenueRange,
  findings,
  carrierEstimate,
  fallbackScore,
}: CalibrateOpportunityScoreInput): number {
  const low = Number.isFinite(revenueRange.low) ? Math.max(0, revenueRange.low) : 0;
  const high = Number.isFinite(revenueRange.high)
    ? Math.max(0, revenueRange.high)
    : 0;
  const mid = (low + high) / 2;
  const carrier = Number.isFinite(carrierEstimate)
    ? Math.max(0, carrierEstimate)
    : 0;

  // No usable signal at all — defer to the model's clamped score.
  if (mid === 0 && carrier === 0) {
    return clamp(Math.round(fallbackScore), 0, 100);
  }

  // Revenue component (0–70).
  let revComponent = 0;
  if (carrier > 0 && mid > 0) {
    revComponent = clamp((mid / carrier) * 300, 0, 70);
  } else if (mid > 0) {
    revComponent = clamp((mid / 25000) * 70, 0, 70);
  }

  // Findings component (0–30).
  const findingsComponent = clamp(
    findings.reduce(
      (sum, f) => sum + SEVERITY_WEIGHT[f.severity] * clamp(f.confidence, 0, 1),
      0,
    ),
    0,
    30,
  );

  let raw = revComponent + findingsComponent;

  // Floors: legitimate value never looks worthless.
  if (mid >= 5000 && findings.length > 0) {
    raw = Math.max(raw, 42);
  } else if (mid >= 1500) {
    raw = Math.max(raw, 22);
  }

  return clamp(Math.round(raw), 0, 100);
}

/** Parse a free-form carrier estimate string into a non-negative number. */
export function parseCarrierEstimate(value: string | number | undefined): number {
  if (typeof value === "number") {
    return Number.isFinite(value) && value > 0 ? value : 0;
  }
  if (typeof value !== "string") return 0;
  const cleaned = value.replace(/[^0-9.]/g, "");
  if (!cleaned) return 0;
  const n = Number(cleaned);
  return Number.isFinite(n) && n > 0 ? n : 0;
}
