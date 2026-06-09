import "server-only";

import { Resend } from "resend";

import type { LeadSubmissionPayload } from "@/lib/calculator-lead";
import { SITE } from "@/lib/constants";

import { escapeHtml } from "./escape-html";

const DEFAULT_FROM = "The Claims Ninja <leads@theclaimsninja.com>";

type LeadEmailField = {
  label: string;
  value: string | undefined;
};

function readEnv(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value || undefined;
}

function displayValue(value: string | undefined): string {
  const trimmed = value?.trim();
  return trimmed ? trimmed : "—";
}

function getSubjectLabel(payload: LeadSubmissionPayload): string {
  if (payload.calculatorType === "contact-inquiry") {
    return payload.contactDetails.inquiryType;
  }

  if (payload.calculatorType === "chatbot") {
    return payload.chatbotDetails.source ?? "chatbot";
  }

  return payload.calculatorType;
}

function getMessageOrDescription(payload: LeadSubmissionPayload): string | undefined {
  if (payload.calculatorType === "contact-inquiry") {
    return payload.contactDetails.message;
  }

  if (payload.calculatorType === "claim-review") {
    return payload.claimCalculatorInputs.description;
  }

  if (payload.calculatorType === "chatbot") {
    return payload.chatbotDetails.conversationSummary;
  }

  return undefined;
}

function getCarrierEstimate(payload: LeadSubmissionPayload): string | undefined {
  if (payload.calculatorType === "claim-review") {
    return payload.claimCalculatorInputs.carrierEstimate;
  }

  if (payload.calculatorType === "chatbot") {
    return payload.chatbotDetails.approximateClaimValue;
  }

  return undefined;
}

function getMonthlyClaimVolume(payload: LeadSubmissionPayload): string | undefined {
  const fromLead = payload.lead.monthlyClaimVolume?.trim();
  if (fromLead) return fromLead;

  if (payload.calculatorType === "contact-inquiry") {
    return payload.contactDetails.monthlyClaimVolume;
  }

  return undefined;
}

function buildLeadEmailFields(payload: LeadSubmissionPayload): LeadEmailField[] {
  const fields: LeadEmailField[] = [
    { label: "Name", value: payload.lead.fullName },
    { label: "Company", value: payload.lead.company },
    { label: "Email", value: payload.lead.email },
    { label: "Phone", value: payload.lead.phone },
    { label: "Calculator / form type", value: payload.calculatorType },
  ];

  if (payload.calculatorType === "contact-inquiry") {
    fields.push(
      { label: "Inquiry type", value: payload.contactDetails.inquiryType },
      { label: "Source page", value: payload.contactDetails.sourcePage },
      { label: "Website", value: payload.contactDetails.website },
    );
  }

  if (payload.calculatorType === "claim-review") {
    fields.push({
      label: "Claim type",
      value: payload.claimCalculatorInputs.claimType,
    });
  }

  const carrierEstimate = getCarrierEstimate(payload);
  if (carrierEstimate) {
    fields.push({ label: "Carrier estimate amount", value: carrierEstimate });
  }

  const monthlyClaimVolume = getMonthlyClaimVolume(payload);
  if (monthlyClaimVolume) {
    fields.push({ label: "Monthly claim volume", value: monthlyClaimVolume });
  }

  const message = getMessageOrDescription(payload);
  if (message) {
    const messageLabel =
      payload.calculatorType === "contact-inquiry" ? "Message" : "Description";
    fields.push({ label: messageLabel, value: message });
  }

  fields.push({ label: "Submitted at", value: payload.timestamp });

  return fields;
}

function buildPlainTextBody(
  payload: LeadSubmissionPayload,
  fields: LeadEmailField[],
): string {
  const lines = [
    "A new lead was submitted on the Claims Ninja website.",
    "",
    ...fields.map(
      (field) => `${field.label}: ${displayValue(field.value)}`,
    ),
    "",
    "Full payload JSON:",
    JSON.stringify(payload, null, 2),
  ];

  return lines.join("\n");
}

function buildHtmlBody(
  payload: LeadSubmissionPayload,
  fields: LeadEmailField[],
): string {
  const rows = fields
    .map(
      (field) =>
        `<tr><th align="left" style="padding:6px 12px 6px 0;vertical-align:top;">${escapeHtml(field.label)}</th><td style="padding:6px 0;">${escapeHtml(displayValue(field.value))}</td></tr>`,
    )
    .join("");

  const payloadJson = escapeHtml(JSON.stringify(payload, null, 2));

  return `<!DOCTYPE html>
<html>
  <body style="font-family:Arial,Helvetica,sans-serif;color:#111827;line-height:1.5;">
    <p>A new lead was submitted on the Claims Ninja website.</p>
    <table style="border-collapse:collapse;margin:16px 0;">${rows}</table>
    <h3 style="font-size:14px;margin:24px 0 8px;">Full payload JSON</h3>
    <pre style="background:#f3f4f6;padding:12px;border-radius:6px;overflow:auto;font-size:12px;white-space:pre-wrap;">${payloadJson}</pre>
  </body>
</html>`;
}

export async function sendLeadNotificationEmail(
  payload: LeadSubmissionPayload,
): Promise<void> {
  const apiKey = readEnv("RESEND_API_KEY");
  if (!apiKey) {
    console.info(
      "[email/leads] RESEND_API_KEY not set — skipping notification",
      { calculatorType: payload.calculatorType },
    );
    return;
  }

  const to = readEnv("LEAD_NOTIFICATION_TO") ?? SITE.email;
  const from = readEnv("LEAD_NOTIFICATION_FROM") ?? DEFAULT_FROM;
  const subjectLabel = getSubjectLabel(payload);
  const subject = `New Claims Ninja Lead: ${subjectLabel}`;
  const fields = buildLeadEmailFields(payload);
  const text = buildPlainTextBody(payload, fields);
  const html = buildHtmlBody(payload, fields);

  const resend = new Resend(apiKey);
  const { data, error } = await resend.emails.send({
    from,
    to,
    subject,
    text,
    html,
  });

  if (error) {
    console.error("[email/leads] Resend API error:", {
      calculatorType: payload.calculatorType,
      to,
      message: error.message,
      name: error.name,
    });
    throw new Error(error.message);
  }

  console.info("[email/leads] Notification sent", {
    calculatorType: payload.calculatorType,
    to,
    messageId: data?.id,
  });
}
