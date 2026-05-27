import type { OperationalMetric } from "@/lib/homepage-proof-intelligence";

/** Shared vertical bands for Operations section content stage (0–100 yPct). */
export const OPERATIONS_VERTICAL_BANDS = {
  topAuthority: 18,
  upperOperations: 32,
  centralCore: 57,
  lowerOperations: 79,
  bottomDestination: 87,
} as const;

/** Metric id → anchor yPct aligned to network hierarchy. */
const METRIC_ANCHOR_Y_BY_ID: Record<OperationalMetric["id"], number> = {
  estimate_delivery: OPERATIONS_VERTICAL_BANDS.topAuthority,
  settlement_cycle: 47,
  carrier_increase: 63,
  review_workflow: OPERATIONS_VERTICAL_BANDS.bottomDestination,
};

export function getMetricAnchorY(metricId: string): number {
  return METRIC_ANCHOR_Y_BY_ID[metricId as OperationalMetric["id"]] ?? 50;
}

export function getMetricAnchorPositions(): { id: string; yPct: number }[] {
  return Object.entries(METRIC_ANCHOR_Y_BY_ID).map(([id, yPct]) => ({ id, yPct }));
}

/** Tailwind lg:top classes — static strings for JIT (matches getMetricAnchorY). */
export const METRIC_ANCHOR_TOP_CLASS: Record<OperationalMetric["id"], string> = {
  estimate_delivery: "lg:top-[18%]",
  settlement_cycle: "lg:top-[47%]",
  carrier_increase: "lg:top-[63%]",
  review_workflow: "lg:top-[87%]",
};

export function getMetricAnchorTopClass(metricId: string): string {
  return METRIC_ANCHOR_TOP_CLASS[metricId as OperationalMetric["id"]] ?? "lg:top-1/2";
}
