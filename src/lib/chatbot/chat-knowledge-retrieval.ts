import { normalizeInput } from "@/components/chatbot/chat-match";

import {
  CHAT_KNOWLEDGE_CHUNKS,
  type ChatKnowledgeChunk,
} from "./chat-knowledge";

const PHRASE_SCORE = 10;
const KEYWORD_SCORE = 3;
const MIN_SCORE = 5;
const MAX_SNIPPETS = 5;
const MAX_CONTEXT_CHARS = 2800;
const MAX_TOKEN_OVERLAP_BONUS = 15;

const RESOURCE_INTENT_TERMS = [
  "resources",
  "guides",
  "articles",
  "what should i read",
  "do you have",
  "library",
] as const;

const PROCEDURAL_INTENT_TERMS = [
  "how do i",
  "how to",
  "checklist",
  "step-by-step",
  "steps to",
  "steps for",
  "what should i document",
  "field guide",
  "procedure",
  "on site",
  "on-site",
] as const;

const CATEGORY_HUB_RESOURCE_BOOST = 6;

const STOP_WORDS = new Set([
  "a",
  "an",
  "and",
  "are",
  "can",
  "do",
  "does",
  "for",
  "how",
  "i",
  "in",
  "is",
  "it",
  "me",
  "my",
  "of",
  "on",
  "or",
  "our",
  "the",
  "this",
  "to",
  "we",
  "what",
  "when",
  "where",
  "which",
  "who",
  "why",
  "with",
  "you",
  "your",
]);

export type RetrievedSnippet = {
  source: string;
  text: string;
};

export type RetrieveKnowledgeResult = {
  snippets: RetrievedSnippet[];
  formatted: string;
};

const TOPIC_KEYWORD_MAP: Record<string, readonly string[]> = {
  pricing: ["price", "fee", "cost", "charge", "rcv", "15%", "4%", "billing", "percent"],
  supplements: [
    "supplement",
    "line item",
    "scope",
    "carrier estimate",
    "under-scope",
  ],
  public_adjuster: [
    "public adjuster",
    "licensed adjuster",
    "pa",
    "adjuster access",
  ],
  ai: ["ai", "analysis", "triage", "scope gap", "intelligence", "machine"],
  onboarding: [
    "onboard",
    "intake",
    "getting started",
    "first claim",
    "partnership",
  ],
  billing: ["invoice", "payment", "billed", "billing", "paid"],
  platform: ["portal", "platform", "tracking", "communication"],
  contractor_fit: ["contractor", "restoration", "roofing", "fit"],
  water_damage_claims: ["water damage", "water mitigation", "mitigation", "drying"],
  fire_damage_claims: ["fire damage", "fire claim", "smoke", "soot"],
  dry_logs: ["dry log", "drying log", "moisture log", "dry standard"],
  moisture_mapping: ["moisture map", "mapping", "moisture mapping"],
  denial_recovery: [
    "denied supplement",
    "denial recovery",
    "partial denial",
    "resubmission",
    "denied",
  ],
  xactimate: ["xactimate", "estimate review", "line item", "missed line"],
  odor_mitigation: [
    "odor",
    "deodorization",
    "hydroxyl",
    "ozone",
    "thermal fog",
    "smoke odor",
  ],
  hvac_fire: ["hvac", "duct", "duct contamination", "ductwork"],
  first_48: ["first 48", "carrier estimate", "estimate receipt"],
  equipment_charges: [
    "equipment charge",
    "dehumidifier",
    "equipment day",
    "air mover",
  ],
  monitoring: ["monitoring visit", "daily monitoring", "monitoring log"],
  op_claims: ["o&p", "overhead", "profit", "overhead and profit"],
  blog_resources: [
    "resources",
    "guides",
    "articles",
    "documentation guides",
    "what should i read",
    "do you have",
    "library",
    "blog",
  ],
  claim_guides: [
    "claim guides",
    "operational guide",
    "checklist",
    "field guide",
    "playbook",
    "sop",
    "step-by-step",
    "how do i",
  ],
  mitigation: ["mitigation", "water mitigation", "drying", "restoration"],
};

function matchesWordBoundary(input: string, token: string): boolean {
  const pattern = new RegExp(
    `\\b${token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`,
    "i",
  );
  return pattern.test(input);
}

function scoreChunk(
  normalizedMessage: string,
  chunk: ChatKnowledgeChunk,
): number {
  let score = 0;

  for (const phrase of chunk.phrases ?? []) {
    if (normalizedMessage.includes(phrase.toLowerCase())) {
      score += PHRASE_SCORE;
    }
  }

  for (const keyword of chunk.keywords ?? []) {
    const kw = keyword.toLowerCase();
    if (kw.length <= 2) {
      if (matchesWordBoundary(normalizedMessage, kw)) {
        score += KEYWORD_SCORE;
      }
    } else if (normalizedMessage.includes(kw)) {
      score += KEYWORD_SCORE;
    }
  }

  for (const topic of chunk.topics) {
    const topicKeywords = TOPIC_KEYWORD_MAP[topic];
    if (!topicKeywords) {
      continue;
    }
    for (const kw of topicKeywords) {
      const normalized = kw.toLowerCase();
      if (normalized.length <= 2) {
        if (matchesWordBoundary(normalizedMessage, normalized)) {
          score += KEYWORD_SCORE;
        }
      } else if (normalizedMessage.includes(normalized)) {
        score += KEYWORD_SCORE;
      }
    }
  }

  const structuredScore = score;

  const messageTokens = normalizedMessage
    .split(" ")
    .filter((token) => token.length >= 4 && !STOP_WORDS.has(token));
  let overlapBonus = 0;
  const chunkText = chunk.text.toLowerCase();
  for (const token of messageTokens) {
    if (chunkText.includes(token)) {
      overlapBonus += 1;
      if (overlapBonus >= MAX_TOKEN_OVERLAP_BONUS) {
        break;
      }
    }
  }

  if (structuredScore >= KEYWORD_SCORE) {
    score += overlapBonus;
  }

  if (
    (chunk.id.startsWith("blog-category:") || chunk.id.startsWith("guide-category:")) &&
    RESOURCE_INTENT_TERMS.some((term) => normalizedMessage.includes(term))
  ) {
    score += CATEGORY_HUB_RESOURCE_BOOST;
  }

  if (
    chunk.id.startsWith("guide:") &&
    PROCEDURAL_INTENT_TERMS.some((term) => normalizedMessage.includes(term))
  ) {
    score += 10;
  }

  return score;
}

export function formatApprovedSiteContext(
  snippets: readonly RetrievedSnippet[],
): string {
  if (snippets.length === 0) {
    return "";
  }

  const body = snippets
    .map(
      (snippet) =>
        `[Source: ${snippet.source}]\n${snippet.text.trim()}`,
    )
    .join("\n\n");

  return `APPROVED CLAIMS NINJA SITE CONTEXT
Prioritize the excerpts below over general knowledge. Do not contradict them. Do not invent services, fees, or policies not stated here. If excerpts do not cover the question, answer using system guardrails only.

${body}`;
}

export function retrieveKnowledgeSnippets(
  message: string,
  options?: { minScore?: number; maxSnippets?: number; maxChars?: number },
): RetrieveKnowledgeResult {
  const normalized = normalizeInput(message);
  const minScore = options?.minScore ?? MIN_SCORE;
  const maxSnippets = options?.maxSnippets ?? MAX_SNIPPETS;
  const maxChars = options?.maxChars ?? MAX_CONTEXT_CHARS;

  if (normalized.length === 0) {
    return { snippets: [], formatted: "" };
  }

  const scored = CHAT_KNOWLEDGE_CHUNKS.map((chunk, index) => ({
    chunk,
    score: scoreChunk(normalized, chunk),
    index,
  }))
    .filter((entry) => entry.score >= minScore)
    .sort((a, b) => b.score - a.score || a.index - b.index);

  const snippets: RetrievedSnippet[] = [];
  let charCount = 0;

  for (const { chunk } of scored) {
    if (snippets.length >= maxSnippets) {
      break;
    }

    const snippetText = chunk.text.trim();
    const snippetBlock = `[Source: ${chunk.source}]\n${snippetText}`;
    const addedLength = snippetBlock.length + (snippets.length > 0 ? 2 : 0);

    if (charCount + addedLength > maxChars && snippets.length > 0) {
      break;
    }

    snippets.push({ source: chunk.source, text: snippetText });
    charCount += addedLength;
  }

  return {
    snippets,
    formatted: formatApprovedSiteContext(snippets),
  };
}

type RetrievalCheck = {
  label: string;
  message: string;
  assert: (result: RetrieveKnowledgeResult) => boolean;
};

const RETRIEVAL_CHECKS: RetrievalCheck[] = [
  {
    label: "pricing question retrieves pricing context",
    message: "How much do you charge?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /15%|documented increase|fee|pricing|rcv/i.test(s.text) ||
          /pricing/i.test(s.source),
      ),
  },
  {
    label: "billing question retrieves billing context",
    message: "When do I get billed?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /bill|invoice|payment|fee/i.test(s.text) ||
          /billing|pricing/i.test(s.source),
      ),
  },
  {
    label: "supplement question retrieves supplement context",
    message: "Do you help with supplements?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) => /supplement|line item|scope/i.test(s.text)),
  },
  {
    label: "AI analysis question retrieves AI context",
    message: "What does AI claim analysis review?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /ai|analysis|scope gap|line item|carrier estimate/i.test(s.text) ||
          /ai-claim-analysis/i.test(s.source),
      ),
  },
  {
    label: "public adjuster question retrieves PA context",
    message: "Are you a public adjuster?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /public adjuster|licensed|supplement|negotiation/i.test(s.text),
      ),
  },
  {
    label: "off-topic question returns no snippets",
    message: "What's the weather?",
    assert: (result) => result.snippets.length === 0,
  },
  {
    label: "dry log question retrieves blog context",
    message: "dry log documentation for insurance claims",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /dry log|dry-log-documentation/i.test(s.text) ||
          /dry log|dry-log-documentation/i.test(s.source),
      ),
  },
  {
    label: "fire denial question retrieves blog context",
    message: "fire supplement denial recovery",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /fire.*denial|fire-damage-supplement-denial/i.test(s.text) ||
          /fire damage supplement denial/i.test(s.source),
      ),
  },
  {
    label: "xactimate checklist question retrieves blog context",
    message: "xactimate estimate review checklist for contractors",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /xactimate|estimate review checklist/i.test(s.text) ||
          /xactimate estimate review/i.test(s.source),
      ),
  },
  {
    label: "water mitigation resources retrieves category hub",
    message: "water mitigation resources",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /water-damage-claims|blog category — water damage claims/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "fire damage guides retrieves category hub",
    message: "fire damage guides",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /fire-damage|guide category — fire damage|blog category — fire damage claims/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "xactimate articles retrieves category hub",
    message: "xactimate articles",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /blog category — xactimate|\/resources\/blog\/category\/xactimate/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "denied supplement resources retrieves recovery context",
    message: "denied supplement resources",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /claim-recovery|denial recovery|supplement denial|blog category — claim recovery/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "claim documentation guides retrieves category hub",
    message: "claim documentation guides",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /claim-documentation|guide category|blog category — claim documentation|documentation standards guide/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "claim guides hub retrieves guide context",
    message: "claim guides checklist",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /guide —|guide category —|\/resources\/guides/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "dry log collection procedural question retrieves guide",
    message: "how do i collect dry logs on a water job",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /dry log collection|dry-log-collection-guide|guide — dry log collection/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "supplement submission guide retrieves guide context",
    message: "supplement submission steps for contractors",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /supplement submission|supplement-submission-guide|guide — supplement submission/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "water mitigation documentation procedural question retrieves guide",
    message: "How do I document a water mitigation claim?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) => /^guide —/i.test(s.source)),
  },
  {
    label: "insurance supplementing educational question retrieves blog or faq",
    message: "What is insurance supplementing?",
    assert: (result) => {
      if (result.snippets.length === 0) return false;
      const hasEducational = result.snippets.some(
        (s) => /^blog —|^faq —/i.test(s.source),
      );
      const guideOnly =
        result.snippets.length > 0 &&
        result.snippets.every((s) => /^guide —|^guide category —/i.test(s.source));
      return hasEducational && !guideOnly;
    },
  },
  {
    label: "water mitigation resources retrieves guide or blog category hub",
    message: "water mitigation resources",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /guide category — water damage|blog category — water damage claims|water-damage-claims/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
];

export function runKnowledgeRetrievalChecks(): {
  ok: boolean;
  failures: string[];
} {
  const failures: string[] = [];

  for (const check of RETRIEVAL_CHECKS) {
    const result = retrieveKnowledgeSnippets(check.message);
    if (!check.assert(result)) {
      failures.push(check.label);
    }
  }

  return { ok: failures.length === 0, failures };
}
