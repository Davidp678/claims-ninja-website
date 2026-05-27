import type { NetworkModuleId } from "@/lib/homepage-proof-intelligence";

export type NetworkLayout = "desktop" | "mobile";

const CORE_X = 50;
const CORE_Y = 50;

/** @deprecated Prefer getNetworkCore(layout) for layout-aware positioning. */
export const NETWORK_CORE = { xPct: CORE_X, yPct: CORE_Y } as const;

export type NetworkNodePosition = {
  id: NetworkModuleId;
  xPct: number;
  yPct: number;
};

/** Flat atmospheric field (desktop) — decorative only, not a node path. */
export const NETWORK_ELLIPSE_DESKTOP = {
  cx: CORE_X,
  cy: CORE_Y,
  rx: 42,
  ry: 22,
} as const;

export const NETWORK_ELLIPSE_DESKTOP_STROKE_OPACITY = 0.05;

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

/** Desktop hub-and-spoke map — symmetric radius around centered core. */
export const NETWORK_DESKTOP_POSITIONS: readonly NetworkNodePosition[] = [
  { id: "ai_intelligence", xPct: 50, yPct: 15 },
  { id: "estimate_delivery", xPct: 22, yPct: 33 },
  { id: "supplement_team", xPct: 78, yPct: 33 },
  { id: "claim_coordination", xPct: 22, yPct: 68 },
  { id: "pa_support", xPct: 78, yPct: 68 },
  { id: "client_portal", xPct: 50, yPct: 84 },
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

export function getNetworkCore(layout: NetworkLayout) {
  return { xPct: CORE_X, yPct: CORE_Y };
}

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

export function getNodeAnchorClass(_id: NetworkModuleId, _layout: NetworkLayout): string {
  return "-translate-x-1/2 -translate-y-1/2";
}
