/**
 * Claims Ninja Workflow section tokens.
 * Canvas geometry is locked to the 1024×467 native mock.
 */
export const PROCESS = {
  width: 1024,
  height: 467,
  padLeft: 85,
  cardTop: 170,
  cardHeight: 229,
  widths: [157, 220, 210, 142] as const,
  gaps: [40, 34, 33] as const,
  connectorY: 239,
  bottomLineY: 465,

  pageBg: "#111111",
  cardBg: "#171717",
  cardBorder: "#222222",
  cardRadius: 11,
  cardShadow: "0 12px 28px -16px rgba(0,0,0,0.92)",

  title: "#e7e7e7",
  bodyText: "#686868",
  supportText: "#686868",
  pillBorder: "#1c1c1c",
  pillLabel: "#a3a3a3",
  pillBg: "rgba(8,8,8,0.72)",
  mutedRed: "#2b1c1f",
  connector: "#984746",
  numberRed: "#762e31",
  numberRedRgb: "118, 46, 49",
  eyebrow: "#711929",
  panelBg: "#0d0d0d",
  panelBorder: "rgba(255,255,255,0.17)",
  activeDot: "#9a4540",
  frameBorder: "rgba(255,255,255,0.13)",
  frameBg: "#121212",

  ink: {
    number: { left: 15, top: 16, size: 14.5 },
    visual: { left: 11, top: 28, height: 82 },
    title: { left: 14, top: 112, size: 12.25 },
    desc: { left: 15, top: 133, size: 9.4, lineHeight: 1.52 },
    pill: { left: 11, top: 191, height: 22 },
  },

  heading: {
    eyebrowTop: 49,
    eyebrowSize: 9.4,
    eyebrowTracking: "0.142em",
    titleTop: 70,
    titleSize: 30.1,
    titleLineHeight: "30px",
    supportTop: 113,
    supportSize: 12.35,
    supportMaxWidth: 450,
  },

  /** Gap-indexed connector line insets (gaps 40 / 34 / 33). */
  connectorLines: [
    { left: 4, width: 30, nodeNudgeX: 0 },
    { left: 6, width: 24, nodeNudgeX: 0 },
    { left: 4, width: 24, nodeNudgeX: 1 },
  ] as const,

  connectorNode: {
    outer: 13,
    border: 1.5,
    interior: 9,
    dot: 5,
    /** Soft node halo; keep tight to avoid washing the connector crop. */
    glow: 14,
  },

  pillMaxWidth: {
    "01": 94,
    "02": 120,
    "03": 132,
    "04": 100,
  } as const,
} as const;

export type ProcessStageId = "01" | "02" | "03" | "04";
