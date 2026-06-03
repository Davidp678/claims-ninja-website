import type { ChatbotLeadSubmission } from "@/lib/calculator-lead";
import {
  isValidEmail,
  isValidPhoneOptional,
} from "@/lib/validation/email";

import type { LeadFlowDraft, LeadFlowStep } from "./chat-lead-types";
import {
  CARRIER_ESTIMATE_CHOICES,
  EMPTY_LEAD_DRAFT,
  LEAD_FLOW_CANCEL_CHOICES,
  LEAD_SUCCESS_MESSAGE,
  PREFERRED_NEXT_STEP_CHOICES,
  PRIMARY_NEED_CHOICES,
} from "./chat-lead-types";

export type LeadFlowTurnResult =
  | {
      kind: "prompt";
      step: LeadFlowStep;
      content: string;
      choices?: typeof LEAD_FLOW_CANCEL_CHOICES;
    }
  | {
      kind: "validation-error";
      step: LeadFlowStep;
      content: string;
      choices?: typeof LEAD_FLOW_CANCEL_CHOICES;
    }
  | { kind: "cancelled" }
  | { kind: "ready-to-submit"; draft: LeadFlowDraft }
  | { kind: "success"; content: string };

const SKIP_PATTERN = /^(skip|n\/a|na|none|don't know|dont know|not sure)$/i;

export function isSkipInput(value: string): boolean {
  return SKIP_PATTERN.test(value.trim());
}

export function isCancelInput(value: string): boolean {
  return /^cancel$/i.test(value.trim());
}

export function isRestartInput(value: string): boolean {
  return /^(start over|restart|reset)$/i.test(value.trim());
}

export function isConfirmInput(value: string): boolean {
  return /^(yes|confirm|submit|looks good|send)$/i.test(value.trim());
}

const START_INTENT_PHRASES = [
  "get started",
  "start intake",
  "sign up",
  "talk to your team about my claim",
  "i want to get started",
  "help me get started",
];

export function shouldStartLeadFlow(message: string): boolean {
  const normalized = message
    .toLowerCase()
    .replace(/[^\w\s/-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return START_INTENT_PHRASES.some((phrase) => normalized.includes(phrase));
}

export function getStepPrompt(step: LeadFlowStep, draft: LeadFlowDraft): string {
  switch (step) {
    case "name":
      return "Great — let's get you connected with the Claims Ninja team. What's your full name?";
    case "company":
      return `Thanks, ${draft.fullName.split(" ")[0] || "there"}. What company are you with?`;
    case "contact":
      return "What's the best email to reach you? You can add a phone number on the same line, or type skip for phone.";
    case "primaryNeed":
      return "What's your primary need right now? Pick one below or describe it in your own words.";
    case "carrierEstimate":
      return "Does a carrier estimate already exist for this claim?";
    case "claimValue":
      return "If you know the approximate claim value, share it here — or type skip.";
    case "preferredNextStep":
      return "What would you like as the next step?";
    case "confirm":
      return buildSummaryMessage(draft);
    default:
      return "";
  }
}

export function getStepChoices(step: LeadFlowStep) {
  const cancel = LEAD_FLOW_CANCEL_CHOICES;
  switch (step) {
    case "primaryNeed":
      return [...PRIMARY_NEED_CHOICES, ...cancel];
    case "carrierEstimate":
      return [...CARRIER_ESTIMATE_CHOICES, ...cancel];
    case "preferredNextStep":
      return [...PREFERRED_NEXT_STEP_CHOICES, ...cancel];
    case "name":
    case "company":
    case "contact":
    case "claimValue":
    case "confirm":
      return cancel;
    default:
      return undefined;
  }
}

function buildSummaryMessage(draft: LeadFlowDraft): string {
  const lines = [
    "Here's what I have:",
    `• Name: ${draft.fullName}`,
    `• Company: ${draft.company}`,
    `• Email: ${draft.email}`,
    `• Phone: ${draft.phone.trim() || "Not provided"}`,
    `• Primary need: ${formatLabel(draft.primaryNeed)}`,
    `• Carrier estimate: ${formatLabel(draft.carrierEstimateStatus)}`,
    `• Approx. claim value: ${draft.approximateClaimValue.trim() || "Not provided"}`,
    `• Preferred next step: ${formatLabel(draft.preferredNextStep)}`,
    "",
    "Reply confirm to send, or start over to change anything.",
  ];
  return lines.join("\n");
}

function formatLabel(value: string): string {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function parseContactInput(input: string): { email: string; phone: string } {
  const trimmed = input.trim();
  const emailMatch = trimmed.match(/[^\s@]+@[^\s@]+\.[^\s@]+/);
  const email = emailMatch?.[0]?.trim() ?? trimmed;
  let phone = "";
  if (emailMatch) {
    phone = trimmed.replace(emailMatch[0], " ").trim();
  }
  if (isSkipInput(phone)) {
    phone = "";
  }
  return { email, phone };
}

export function advanceLeadFlow(
  step: LeadFlowStep,
  draft: LeadFlowDraft,
  input: string,
): { nextStep: LeadFlowStep; draft: LeadFlowDraft; result: LeadFlowTurnResult } {
  const trimmed = input.trim();

  if (isCancelInput(trimmed)) {
    return { nextStep: "idle", draft: { ...EMPTY_LEAD_DRAFT }, result: { kind: "cancelled" } };
  }
  if (isRestartInput(trimmed)) {
    return {
      nextStep: "name",
      draft: { ...EMPTY_LEAD_DRAFT },
      result: {
        kind: "prompt",
        step: "name",
        content: getStepPrompt("name", EMPTY_LEAD_DRAFT),
        choices: getStepChoices("name"),
      },
    };
  }

  switch (step) {
    case "name": {
      if (!trimmed) {
        return {
          nextStep: "name",
          draft,
          result: {
            kind: "validation-error",
            step: "name",
            content: "Please share your full name to continue.",
            choices: getStepChoices("name"),
          },
        };
      }
      const nextDraft = { ...draft, fullName: trimmed };
      return {
        nextStep: "company",
        draft: nextDraft,
        result: {
          kind: "prompt",
          step: "company",
          content: getStepPrompt("company", nextDraft),
          choices: getStepChoices("company"),
        },
      };
    }
    case "company": {
      if (!trimmed) {
        return {
          nextStep: "company",
          draft,
          result: {
            kind: "validation-error",
            step: "company",
            content: "Please share your company name to continue.",
            choices: getStepChoices("company"),
          },
        };
      }
      const nextDraft = { ...draft, company: trimmed };
      return {
        nextStep: "contact",
        draft: nextDraft,
        result: {
          kind: "prompt",
          step: "contact",
          content: getStepPrompt("contact", nextDraft),
          choices: getStepChoices("contact"),
        },
      };
    }
    case "contact": {
      const { email, phone } = parseContactInput(trimmed);
      if (!email || !isValidEmail(email)) {
        return {
          nextStep: "contact",
          draft,
          result: {
            kind: "validation-error",
            step: "contact",
            content:
              "That email doesn't look valid — mind double-checking? Example: name@company.com",
            choices: getStepChoices("contact"),
          },
        };
      }
      if (!isValidPhoneOptional(phone)) {
        return {
          nextStep: "contact",
          draft,
          result: {
            kind: "validation-error",
            step: "contact",
            content:
              "That phone number looks incomplete — share at least 7 digits, or type skip.",
            choices: getStepChoices("contact"),
          },
        };
      }
      const nextDraft = { ...draft, email, phone: isSkipInput(phone) ? "" : phone };
      return {
        nextStep: "primaryNeed",
        draft: nextDraft,
        result: {
          kind: "prompt",
          step: "primaryNeed",
          content: getStepPrompt("primaryNeed", nextDraft),
          choices: getStepChoices("primaryNeed"),
        },
      };
    }
    case "primaryNeed": {
      if (!trimmed) {
        return {
          nextStep: "primaryNeed",
          draft,
          result: {
            kind: "validation-error",
            step: "primaryNeed",
            content: "Pick a primary need or describe it briefly.",
            choices: getStepChoices("primaryNeed"),
          },
        };
      }
      const nextDraft = { ...draft, primaryNeed: trimmed };
      return {
        nextStep: "carrierEstimate",
        draft: nextDraft,
        result: {
          kind: "prompt",
          step: "carrierEstimate",
          content: getStepPrompt("carrierEstimate", nextDraft),
          choices: getStepChoices("carrierEstimate"),
        },
      };
    }
    case "carrierEstimate": {
      if (!trimmed) {
        return {
          nextStep: "carrierEstimate",
          draft,
          result: {
            kind: "validation-error",
            step: "carrierEstimate",
            content: "Let us know if a carrier estimate exists — Yes, No, or Not sure.",
            choices: getStepChoices("carrierEstimate"),
          },
        };
      }
      const nextDraft = { ...draft, carrierEstimateStatus: trimmed };
      return {
        nextStep: "claimValue",
        draft: nextDraft,
        result: {
          kind: "prompt",
          step: "claimValue",
          content: getStepPrompt("claimValue", nextDraft),
          choices: getStepChoices("claimValue"),
        },
      };
    }
    case "claimValue": {
      const nextDraft = {
        ...draft,
        approximateClaimValue: isSkipInput(trimmed) ? "" : trimmed,
      };
      return {
        nextStep: "preferredNextStep",
        draft: nextDraft,
        result: {
          kind: "prompt",
          step: "preferredNextStep",
          content: getStepPrompt("preferredNextStep", nextDraft),
          choices: getStepChoices("preferredNextStep"),
        },
      };
    }
    case "preferredNextStep": {
      if (!trimmed) {
        return {
          nextStep: "preferredNextStep",
          draft,
          result: {
            kind: "validation-error",
            step: "preferredNextStep",
            content: "Choose your preferred next step to continue.",
            choices: getStepChoices("preferredNextStep"),
          },
        };
      }
      const nextDraft = { ...draft, preferredNextStep: trimmed };
      return {
        nextStep: "confirm",
        draft: nextDraft,
        result: {
          kind: "prompt",
          step: "confirm",
          content: getStepPrompt("confirm", nextDraft),
          choices: getStepChoices("confirm"),
        },
      };
    }
    case "confirm": {
      if (!isConfirmInput(trimmed)) {
        return {
          nextStep: "confirm",
          draft,
          result: {
            kind: "validation-error",
            step: "confirm",
            content: 'Reply confirm to send your info, or type start over to edit.',
            choices: getStepChoices("confirm"),
          },
        };
      }
      return {
        nextStep: "submitting",
        draft,
        result: { kind: "ready-to-submit", draft },
      };
    }
    default:
      return {
        nextStep: step,
        draft,
        result: {
          kind: "validation-error",
          step,
          content: "Something went wrong — type start over to try again.",
          choices: getStepChoices("name"),
        },
      };
  }
}

export function applyLeadFlowChoice(
  step: LeadFlowStep,
  draft: LeadFlowDraft,
  value: string,
): ReturnType<typeof advanceLeadFlow> {
  if (value === "__cancel__") {
    return advanceLeadFlow(step, draft, "cancel");
  }
  if (value === "__restart__") {
    return advanceLeadFlow(step, draft, "start over");
  }
  return advanceLeadFlow(step, draft, value);
}

export function startLeadFlow(): LeadFlowTurnResult {
  return {
    kind: "prompt",
    step: "name",
    content: getStepPrompt("name", EMPTY_LEAD_DRAFT),
    choices: getStepChoices("name"),
  };
}

export function buildConversationSummary(
  messages: { role: string; content: string }[],
  maxMessages = 8,
): string {
  return messages
    .slice(-maxMessages)
    .map((msg) => `${msg.role === "user" ? "User" : "Assistant"}: ${msg.content}`)
    .join("\n");
}

export function buildChatbotLeadPayload(
  draft: LeadFlowDraft,
  conversationSummary: string,
): ChatbotLeadSubmission {
  const submittedAt = new Date().toISOString();
  return {
    calculatorType: "chatbot",
    timestamp: submittedAt,
    lead: {
      fullName: draft.fullName.trim(),
      company: draft.company.trim(),
      email: draft.email.trim(),
      phone: draft.phone.trim(),
    },
    chatbotDetails: {
      source: "claims-ninja-ai-chatbot",
      primaryNeed: draft.primaryNeed,
      carrierEstimateStatus: draft.carrierEstimateStatus,
      approximateClaimValue: draft.approximateClaimValue.trim() || undefined,
      preferredNextStep: draft.preferredNextStep,
      conversationSummary,
      submittedAt,
    },
  };
}

export function getLeadSuccessResult(): LeadFlowTurnResult {
  return { kind: "success", content: LEAD_SUCCESS_MESSAGE };
}

export function runLeadFlowChecks(): { ok: boolean; failures: string[] } {
  const failures: string[] = [];
  let draft = { ...EMPTY_LEAD_DRAFT };
  let step: LeadFlowStep = "name";

  const steps: { input: string; expectStep: LeadFlowStep }[] = [
    { input: "Jane Contractor", expectStep: "company" },
    { input: "Acme Restoration", expectStep: "contact" },
    { input: "jane@acme.com skip", expectStep: "primaryNeed" },
    { input: "supplements", expectStep: "carrierEstimate" },
    { input: "yes", expectStep: "claimValue" },
    { input: "skip", expectStep: "preferredNextStep" },
    { input: "claim-intake", expectStep: "confirm" },
    { input: "confirm", expectStep: "submitting" },
  ];

  for (const { input, expectStep } of steps) {
    const outcome = advanceLeadFlow(step, draft, input);
    if (outcome.nextStep !== expectStep) {
      failures.push(`Expected step ${expectStep}, got ${outcome.nextStep} after "${input}"`);
      break;
    }
    draft = outcome.draft;
    step = outcome.nextStep;
  }

  if (failures.length === 0 && step === "submitting") {
    const payload = buildChatbotLeadPayload(draft, "User: hello");
    if (payload.calculatorType !== "chatbot" || !payload.lead.email) {
      failures.push("Payload builder failed");
    }
  }

  const badEmail = advanceLeadFlow("contact", draft, "not-an-email");
  if (badEmail.result.kind !== "validation-error") {
    failures.push("Invalid email should fail at contact step");
  }

  const cancelled = advanceLeadFlow("name", EMPTY_LEAD_DRAFT, "cancel");
  if (cancelled.result.kind !== "cancelled") {
    failures.push("Cancel should reset flow");
  }

  const restarted = advanceLeadFlow("company", { ...EMPTY_LEAD_DRAFT, fullName: "Test" }, "start over");
  if (restarted.nextStep !== "name") {
    failures.push("Start over should reset to name");
  }

  return { ok: failures.length === 0, failures };
}
