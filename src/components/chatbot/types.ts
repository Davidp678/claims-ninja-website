import type { LeadFlowChoice } from "./chat-lead-types";

export type ChatRole = "assistant" | "user";

export type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
  /** Optional follow-up quick actions surfaced beneath an assistant message. */
  actions?: QuickActionId[];
  /** Step-specific chips during lead capture flow. */
  flowChoices?: LeadFlowChoice[];
  /** When true, Get Started opens claim intake instead of restarting lead flow. */
  leadCaptureComplete?: boolean;
  /** Epoch ms; used for ordering and potential timestamp display. */
  createdAt: number;
};

/** Stable identifiers for quick actions (Phase 1 chips + Phase 2 site CTAs). */
export type QuickActionId =
  | "get-started"
  | "pricing"
  | "how-it-works"
  | "supplements"
  | "public-adjuster"
  | "talk-to-team"
  | "view-pricing"
  | "view-faq"
  | "view-platform"
  | "view-ai-analysis"
  | "view-billing";

export type QuickAction = {
  id: QuickActionId;
  label: string;
  /** When set, navigates to this destination instead of dispatching a prompt. */
  href?: string;
  /**
   * When true, opens href in a new tab. Defaults to true for http(s) URLs.
   * Internal site routes should set external: false.
   */
  external?: boolean;
  /** Prompt text injected as the user message when this action is dispatched. */
  prompt?: string;
  /** When true, starts in-chat lead capture instead of navigating away. */
  startLeadFlow?: boolean;
};

/**
 * Shape returned by the response engine. Kept intentionally minimal so it can be
 * satisfied by a future `POST /api/chat` call without changing UI components.
 */
export type AssistantReply = {
  content: string;
  followUps?: QuickActionId[];
};
