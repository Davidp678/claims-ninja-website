import type { AssistantReply } from "./types";

export type ChatRule = {
  id: string;
  /** Multi-word phrases; each match adds +10 to the score. */
  phrases?: string[];
  /** Single keywords; each match adds +3. Use wordBoundary for short tokens. */
  keywords: string[];
  /** Short tokens that require a word-boundary match (e.g. "pa", "ai", "gc"). */
  wordBoundary?: string[];
  reply: AssistantReply;
};

const PHRASE_SCORE = 10;
const KEYWORD_SCORE = 3;

/** Normalize user input for matching. */
export function normalizeInput(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^\w\s%&/-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function matchesWordBoundary(input: string, token: string): boolean {
  const pattern = new RegExp(`\\b${token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
  return pattern.test(input);
}

/** Score how well a rule matches normalized input. Returns 0 if no match. */
export function scoreRule(input: string, rule: ChatRule): number {
  let score = 0;

  for (const phrase of rule.phrases ?? []) {
    if (input.includes(phrase)) {
      score += PHRASE_SCORE;
    }
  }

  for (const keyword of rule.keywords) {
    if (input.includes(keyword)) {
      score += KEYWORD_SCORE;
    }
  }

  for (const token of rule.wordBoundary ?? []) {
    if (matchesWordBoundary(input, token)) {
      score += KEYWORD_SCORE;
    }
  }

  return score;
}

/** Find the best-matching rule; earlier rules win ties. */
export function matchRule(input: string, rules: ChatRule[]): ChatRule | null {
  let best: ChatRule | null = null;
  let bestScore = 0;

  for (const rule of rules) {
    const score = scoreRule(input, rule);
    if (score > bestScore) {
      bestScore = score;
      best = rule;
    }
  }

  return best;
}

/** Cap follow-up actions to keep mobile chip rows manageable. */
export function capFollowUps(
  followUps: AssistantReply["followUps"],
  max = 3,
): AssistantReply["followUps"] {
  if (!followUps?.length) {
    return followUps;
  }
  return followUps.slice(0, max);
}
