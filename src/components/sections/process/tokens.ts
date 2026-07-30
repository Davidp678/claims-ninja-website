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

  pageBg: "#101010",
  cardBg: "#161616",
  cardBorder: "#242424",
  cardRadius: 11,
  cardShadow: "0 12px 28px -16px rgba(0,0,0,0.92)",

  title: "#e7e7e7",
  bodyText: "#949494",
  /** Reference support glyphs read near-white on the mock. */
  supportText: "#b9b9b9",
  pillBorder: "#222222",
  pillLabel: "#bcbcbc",
  pillBg: "rgba(8,8,8,0.72)",
  /** Site-native accent system: vivid enough to read against the dark card fills. */
  mutedRed: "#ef4444",
  connector: "#dc2626",
  numberRed: "#dc2626",
  numberRedRgb: "220, 38, 38",
  eyebrow: "#ef4444",
  panelBg: "#0c0c0c",
  panelBorder: "rgba(255,255,255,0.16)",
  activeDot: "#ef4444",
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
    desc: { left: 13, top: 132, size: 9.5, lineHeight: 1.58 },
    pill: { left: 11, top: 191, height: 22 },
  },

  /** Frame top relative to visual area (mask y 210 − cardTop 170 − visualTop 28). */
  frameTop: 11,

  heading: {
    eyebrowTop: 49,
    eyebrowSize: 9.05,
    eyebrowTracking: "0.18em",
    titleTop: 69,
    titleSize: 30.25,
    titleLineHeight: "34px",
    supportTop: 113,
    supportSize: 12.55,
    supportMaxWidth: 460,
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
    glow: 17,
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
