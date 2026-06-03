import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  advanceLeadFlow,
  buildChatbotLeadPayload,
  runLeadFlowChecks,
} from "./chat-lead-flow";
import { EMPTY_LEAD_DRAFT } from "./chat-lead-types";

describe("chat lead flow", () => {
  it("passes built-in flow checks", () => {
    const { ok, failures } = runLeadFlowChecks();
    assert.equal(ok, true, failures.join(", "));
  });

  it("builds chatbot payload with optional fields omitted", () => {
    const draft = {
      ...EMPTY_LEAD_DRAFT,
      fullName: "Jane Contractor",
      company: "Acme Restoration",
      email: "jane@acme.com",
      phone: "",
      primaryNeed: "supplements",
      carrierEstimateStatus: "yes",
      approximateClaimValue: "",
      preferredNextStep: "claim-intake",
    };
    const payload = buildChatbotLeadPayload(draft, "User: hello");
    assert.equal(payload.calculatorType, "chatbot");
    assert.equal(payload.lead.phone, "");
    assert.equal(payload.chatbotDetails.approximateClaimValue, undefined);
  });

  it("rejects invalid email at contact step", () => {
    const draft = {
      ...EMPTY_LEAD_DRAFT,
      fullName: "Jane",
      company: "Acme",
    };
    const outcome = advanceLeadFlow("contact", draft, "not-an-email");
    assert.equal(outcome.result.kind, "validation-error");
    assert.equal(outcome.nextStep, "contact");
  });
});
