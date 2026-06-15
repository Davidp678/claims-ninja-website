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

const PARTNER_CHUNK_INTENT_TERMS: Record<string, readonly string[]> = {
  "partner-network:page": [
    "partner network",
    "strategic partners",
    "who are claims ninja partners",
    "claims ninja partner network",
  ],
  "partner-network:policies": [
    "partner services required",
    "do i have to use partners",
    "request an introduction",
    "who can use network partners",
    "how are partners selected",
    "network partners work with all contractors",
  ],
  "partner-network:become-partner": [
    "become a partner",
    "become a claims ninja partner",
    "strategic partner application",
    "discuss partnership opportunities",
  ],
  "partner-network:profile-gorilla": ["profilegorilla", "profile gorilla"],
  "partner-network:core-group": ["core group"],
  "partner-network:911-restoration": ["911 restoration"],
  "partner-network:daylit": ["daylit", "contractor financing"],
  "partner-network:morgan-morgan": [
    "morgan and morgan",
    "morgan & morgan",
    "legal partner",
  ],
};

const PARTNER_CHUNK_BOOST = 10;

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
  pricing: [
    "price",
    "fee",
    "cost",
    "charge",
    "rcv",
    "15%",
    "4%",
    "billing",
    "percent",
    "estimate writing",
    "eagleview",
    "appraisal",
    "ach",
    "minimum",
    "1.25%",
    "0.75%",
    "0.50%",
    "invoice",
  ],
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
    "HEPA",
    "air scrubber",
    "specialty drying",
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
  results_insights: [
    "results and insights",
    "portfolio recovery",
    "book of business",
    "claim portfolio",
    "revenue leakage",
    "recovery opportunities",
    "scope omissions",
    "code compliance",
    "pricing discrepancies",
    "o&p",
    "trade recovery",
  ],
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

  const partnerIntentTerms = PARTNER_CHUNK_INTENT_TERMS[chunk.id];
  if (
    partnerIntentTerms?.some((term) => normalizedMessage.includes(term))
  ) {
    score += PARTNER_CHUNK_BOOST;
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
    label: "estimate writing cost retrieves estimate writing rates",
    message: "How much does estimate writing cost?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /\$100|1\.25%|estimate writing/i.test(s.text) ||
          /estimate writing/i.test(s.source),
      ),
  },
  {
    label: "negotiation fee retrieves negotiation rates",
    message: "What does Claims Ninja charge for negotiation?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) => /15%|\$150|negotiation/i.test(s.text) || /negotiation/i.test(s.source),
      ),
  },
  {
    label: "supplement cost retrieves supplement rates",
    message: "What do supplements cost?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /15%|supplement|approved increase/i.test(s.text) ||
          /supplement/i.test(s.source),
      ),
  },
  {
    label: "EagleView cost retrieves additional services context",
    message: "What does an EagleView report cost?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) => /\$60|eagleview/i.test(s.text) || /additional services/i.test(s.source),
      ),
  },
  {
    label: "ACH payment retrieves free ACH context",
    message: "Is ACH free?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) => /ach/i.test(s.text) && /free|no processing fee|no fee/i.test(s.text),
      ),
  },
  {
    label: "credit card fee retrieves convenience fee context",
    message: "Are there credit card fees?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) => /3%|credit card|convenience fee/i.test(s.text)),
  },
  {
    label: "invoices due retrieves immediate payment context",
    message: "When are invoices due?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) => /immediately|once approved|invoice/i.test(s.text),
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
  {
    label: "dry log documentation blog chunk links to dry log collection guide",
    message: "dry log documentation guide",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /dry-log-documentation-guide-insurance-claims|dry log documentation/i.test(
            `${s.text} ${s.source}`,
          ) &&
          /\/resources\/guides\/water-damage\/dry-log-collection-guide/i.test(s.text),
      ),
  },
  {
    label: "drying day reduction question retrieves blog context",
    message: "how do carriers reduce drying days",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /how-carriers-reduce-drying-days|drying day|reduce drying/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "equipment charge reduction question retrieves new blog context",
    message: "why do carriers reduce equipment charges on water claims",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /equipment-charges-that-get-cut-from-water-claims|equipment charge reduction/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "water claim documentation denial question retrieves blog context",
    message: "why are water damage claims denied for documentation",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /documentation-gaps-that-trigger-water-claim-denials|denied for documentation issues|denied or reduced for documentation/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "documentation gaps water claim question retrieves blog context",
    message: "documentation gaps water claim",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /documentation-gaps-that-trigger-water-claim-denials|documentation gap/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "missing dry logs insurance claim question retrieves blog context",
    message: "missing dry logs insurance claim",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /documentation-gaps-that-trigger-water-claim-denials|missing dry log|dry log/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "final drying verification question retrieves blog context",
    message: "final drying verification water damage",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /documentation-gaps-that-trigger-water-claim-denials|water-final-drying-verification|final drying verification/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "water mitigation file documentation question retrieves FAQ context",
    message: "what documentation should be in a water mitigation file",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /water-mitigation-file-documentation|documentation should be included in a water mitigation file/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "client portal question retrieves portal context",
    message: "What can I do in the client portal?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /client portal|client-portal|claims command center/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "claim tracking question retrieves tracking context",
    message: "How do I track claim status in the platform?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /claim tracking|claim-tracking|pipeline visibility|claim status/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "reviews question retrieves testimonial context",
    message: "What do contractors say about Claims Ninja?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /review|testimonial|steve kranz|kenneth valentine|daniel deerwater/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "calculator question retrieves calculator context",
    message: "How does the claim review calculator work?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /calculator|single claim review|organization roi|preliminary triage/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "contact question retrieves phone and email",
    message: "How do I contact Claims Ninja?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /615.*479.*2438|info@theclaimsninja\.com|page:\/contact/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "reinspection procedural question retrieves guide",
    message: "how do i prepare for a roof reinspection",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /reinspection|reinspection-preparation-guide|guide — roof reinspection/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "mold solution question retrieves solution context",
    message: "Do you support mold remediation claims?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some(
        (s) =>
          /mold claims|solutions\/mold|remediation protocol/i.test(
            `${s.text} ${s.source}`,
          ),
      ),
  },
  {
    label: "portfolio recovery review",
    message: "What is a portfolio recovery review?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /portfolio recovery|results-insights:portfolio/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "book of business",
    message: "Can Claims Ninja review my entire book of business?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /book of business|portfolio review/i.test(`${s.text} ${s.source}`),
      ),
  },
  {
    label: "roofing recovery opportunities",
    message: "What recovery opportunities do roofing contractors miss?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /roofing.*25%|missing accessories|results-insights:trade/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "common issues",
    message: "What issues does Claims Ninja commonly find?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /scope omissions|commonly find|results-insights:common/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "commercial portfolios",
    message: "Do you review commercial claim portfolios?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /commercial.*portfolio|results-insights/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "supplement recovery increase",
    message: "How much can supplementing improve recovery?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /40%|recovery increase|results-insights-recovery/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "partner network overview",
    message: "Who are Claims Ninja's partners?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /partner network|ProfileGorilla|CORE Group|Daylit|Morgan & Morgan|911 Restoration/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "legal partner",
    message: "Does Claims Ninja have a legal partner?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /Morgan & Morgan|legal partner|legal escalation/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "contractor financing",
    message: "Can Claims Ninja help with contractor financing?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /Daylit|financing|cash flow|working capital/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "daylit partnership",
    message: "What is the Daylit partnership?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /Daylit|authorized partner|short-term financing/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "911 restoration partnership",
    message: "Is Claims Ninja partnered with 911 Restoration?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /911 Restoration|preferred claims settlement|franchise/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "profilegorilla partner",
    message: "What is ProfileGorilla?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /ProfileGorilla|reputation|review management/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "core group partner",
    message: "What is CORE Group?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /CORE Group|restoration industry leadership|operator network/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "become a partner",
    message: "Can I become a Claims Ninja partner?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /become a strategic partner|partnership opportunities|\/contact/i.test(
          `${s.text} ${s.source}`,
        ),
      ),
  },
  {
    label: "partner services required",
    message: "Are partner services required?",
    assert: (result) =>
      result.snippets.length > 0 &&
      result.snippets.some((s) =>
        /optional|not required|partner services/i.test(
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
