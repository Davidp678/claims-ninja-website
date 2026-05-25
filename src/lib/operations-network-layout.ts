import type { NetworkModuleId } from "@/lib/homepage-proof-intelligence";

export type NetworkLayout = "desktop" | "mobile";

const CORE_X = 50;
const CORE_Y = 50;

export const NETWORK_CORE = { xPct: CORE_X, yPct: CORE_Y } as const;

export type NetworkNodePosition = {
  id: NetworkModuleId;
  xPct: number;
  yPct: number;
};

/** Wide system-map ellipse guide (desktop) — soft frame for 2–1–2–1 layout. */
export const NETWORK_ELLIPSE_DESKTOP = {
  cx: CORE_X,
  cy: CORE_Y,
  rx: 38,
  ry: 32,
} as const;

export const NETWORK_ELLIPSE_DESKTOP_STROKE_OPACITY = 0.09;

/** Compact ellipse guide (mobile polar orbit). */
export const NETWORK_ELLIPSE_MOBILE = {
  cx: CORE_X,
  cy: CORE_Y,
  rx: 34,
  ry: 34,
} as const;

/** Clockwise module order for neighbor highlight logic. */
const MODULE_ORDER: readonly NetworkModuleId[] = [
  "ai_intelligence",
  "supplement_team",
  "pa_support",
  "client_portal",
  "claim_coordination",
  "estimate_delivery",
] as const;

/**
 * Desktop: balanced 2–1–2–1 system map (explicit coordinates).
 * Row1: AI top-center | Row2: Estimate + Supplement | Row3: Coordination + PA | Row4: Portal
 */
export const NETWORK_DESKTOP_POSITIONS: readonly NetworkNodePosition[] = [
  { id: "ai_intelligence", xPct: 50, yPct: 12 },
  { id: "estimate_delivery", xPct: 22, yPct: 25 },
  { id: "supplement_team", xPct: 78, yPct: 25 },
  { id: "claim_coordination", xPct: 22, yPct: 66 },
  { id: "pa_support", xPct: 78, yPct: 66 },
  { id: "client_portal", xPct: 50, yPct: 86 },
] as const;

const ORBIT_RADIUS_MOBILE = 34;

function polarToPercent(angleDeg: number, radius: number): { xPct: number; yPct: number } {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    xPct: CORE_X + radius * Math.cos(rad),
    yPct: CORE_Y + radius * Math.sin(rad),
  };
}

/** Mobile: compact hexagonal polar orbit. */
export const NETWORK_MOBILE_POSITIONS: readonly NetworkNodePosition[] = [
  { id: "ai_intelligence", ...polarToPercent(-90, ORBIT_RADIUS_MOBILE) },
  { id: "supplement_team", ...polarToPercent(-30, ORBIT_RADIUS_MOBILE) },
  { id: "pa_support", ...polarToPercent(30, ORBIT_RADIUS_MOBILE) },
  { id: "client_portal", ...polarToPercent(90, ORBIT_RADIUS_MOBILE) },
  { id: "claim_coordination", ...polarToPercent(150, ORBIT_RADIUS_MOBILE) },
  { id: "estimate_delivery", ...polarToPercent(210, ORBIT_RADIUS_MOBILE) },
] as const;

export function getNetworkPositions(layout: NetworkLayout): readonly NetworkNodePosition[] {
  return layout === "desktop" ? NETWORK_DESKTOP_POSITIONS : NETWORK_MOBILE_POSITIONS;
}

export function getNetworkEllipse(layout: NetworkLayout) {
  return layout === "desktop" ? NETWORK_ELLIPSE_DESKTOP : NETWORK_ELLIPSE_MOBILE;
}

export function getNodeIndex(id: NetworkModuleId, layout: NetworkLayout): number {
  return getNetworkPositions(layout).findIndex((n) => n.id === id);
}

export function getNeighborIndices(index: number): [number, number] {
  const len = MODULE_ORDER.length;
  return [(index - 1 + len) % len, (index + 1) % len];
}

/** Desktop anchor: top/bottom pins for vertical band nodes; center elsewhere. */
export function getNodeAnchorClass(id: NetworkModuleId, layout: NetworkLayout): string {
  if (layout !== "desktop") {
    return "-translate-x-1/2 -translate-y-1/2";
  }
  if (id === "ai_intelligence") {
    return "-translate-x-1/2 translate-y-0";
  }
  if (id === "client_portal") {
    return "-translate-x-1/2 -translate-y-full";
  }
  return "-translate-x-1/2 -translate-y-1/2";
}
