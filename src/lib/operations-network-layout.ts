import type { NetworkModuleId } from "@/lib/homepage-proof-intelligence";

const CORE_X = 50;
const CORE_Y = 50;
const ORBIT_RADIUS = 38;

export type NetworkNodePosition = {
  id: NetworkModuleId;
  xPct: number;
  yPct: number;
};

function polarToPercent(angleDeg: number): { xPct: number; yPct: number } {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    xPct: CORE_X + ORBIT_RADIUS * Math.cos(rad),
    yPct: CORE_Y + ORBIT_RADIUS * Math.sin(rad),
  };
}

/** Hexagonal orbit: 6 nodes at 60° intervals, first node at top (-90°). */
export const NETWORK_NODE_POSITIONS: readonly NetworkNodePosition[] = [
  { id: "ai_intelligence", ...polarToPercent(-90) },
  { id: "supplement_team", ...polarToPercent(-30) },
  { id: "pa_support", ...polarToPercent(30) },
  { id: "client_portal", ...polarToPercent(90) },
  { id: "claim_coordination", ...polarToPercent(150) },
  { id: "estimate_delivery", ...polarToPercent(210) },
] as const;

export const NETWORK_CORE = { xPct: CORE_X, yPct: CORE_Y } as const;

export function getNodeIndex(id: NetworkModuleId): number {
  return NETWORK_NODE_POSITIONS.findIndex((n) => n.id === id);
}

export function getNeighborIndices(index: number): [number, number] {
  const len = NETWORK_NODE_POSITIONS.length;
  return [(index - 1 + len) % len, (index + 1) % len];
}
