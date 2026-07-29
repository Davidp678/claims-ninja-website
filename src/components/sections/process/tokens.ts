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

  title: "#e8e8e8",
  bodyText: "#7a7a7a",
  supportText: "#8a8a8a",
  pillBorder: "#1c1c1c",
  pillLabel: "#b0b0b0",
  pillBg: "rgba(8,8,8,0.72)",
  /** Symbol / pill stroke — readable against card fills (reference appearance). */
  mutedRed: "#8a4548",
  connector: "#984746",
  numberRed: "#762e31",
  numberRedRgb: "118, 46, 49",
  eyebrow: "#711929",
  panelBg: "#0d0d0d",
  panelBorder: "rgba(255,255,255,0.17)",
  activeDot: "#9a4540",
  frameBorder: "rgba(255,255,255,0.13)",
  frameBg: "#121212",

  /**
   * Card-relative ink from reference masks:
   * number (98,186), frame (97,210), title (98,282), body (98,303), pill (96,362)
   * for card 01 at (85,170).
   */
  ink: {
    number: { left: 13, top: 16, size: 14.5 },
    visual: { left: 11, top: 28, height: 82 },
    title: { left: 13, top: 112, size: 12.4 },
    desc: { left: 13, top: 133, size: 9.5, lineHeight: 1.4 },
    pill: { left: 11, top: 192, height: 22 },
  },

  /** Frame top relative to visual area (mask y 210 − cardTop 170 − visualTop 28). */
  frameTop: 12,

  heading: {
    eyebrowTop: 49,
    eyebrowSize: 9.5,
    eyebrowTracking: "0.16em",
    titleTop: 72,
    titleSize: 30,
    titleLineHeight: "32px",
    supportTop: 113,
    supportSize: 13,
    supportMaxWidth: 460,
    /** Canvas x for centered support (mask 288). */
    supportLeft: 288,
  },

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
    glow: 19,
  },

  /** Allow full labels; mask widths were outer ink, not hard clip. */
  pillMaxWidth: {
    "01": 120,
    "02": 150,
    "03": 165,
    "04": 120,
  } as const,
} as const;

export type ProcessStageId = "01" | "02" | "03" | "04";
