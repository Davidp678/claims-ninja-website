import { NextResponse } from "next/server";

import type { SupabaseClient } from "@supabase/supabase-js";

import { loadClaimAnalysisForSession } from "@/lib/claim-analysis-persistence";
import type {
  ClaimReviewLeadSubmission,
  ContactInquiryType,
  LeadSubmissionPayload,
} from "@/lib/calculator-lead";
import { CONTACT_INQUIRY_TYPES } from "@/lib/calculator-lead";
import {
  createSupabaseServerClient,
  getSupabaseEnvDiagnostics,
  SupabaseServerConfigError,
} from "@/lib/supabase";
import {
  countPhoneDigits,
  isValidEmail,
  isValidPhoneOptional,
} from "@/lib/validation/email";

function stripClientAiFields(
  payload: ClaimReviewLeadSubmission,
): ClaimReviewLeadSubmission {
  const rest = { ...payload };
  delete rest.aiAnalysis;
  delete rest.analyzedAt;
  delete rest.aiModel;
  delete rest.analysisVersion;
  return rest;
}

async function buildLeadPayloadForInsert(
  supabase: SupabaseClient,
  payload: LeadSubmissionPayload,
): Promise<LeadSubmissionPayload> {
  if (payload.calculatorType !== "claim-review") {
    return payload;
  }

  const stripped = stripClientAiFields(payload);
  const sessionId = stripped.claimSessionId?.trim();
  if (!sessionId) {
    return stripped;
  }

  const persisted = await loadClaimAnalysisForSession(supabase, sessionId);
  if (!persisted) {
    return stripped;
  }

  return {
    ...stripped,
    aiAnalysis: persisted.aiAnalysis,
    analyzedAt: persisted.analyzedAt,
    aiModel: persisted.aiModel,
    analysisVersion: persisted.analysisVersion,
  };
}

function isValidLeadPayload(
  data: unknown,
): data is Pick<LeadSubmissionPayload, "calculatorType" | "lead"> {
  if (!data || typeof data !== "object") return false;
  const row = data as Record<string, unknown>;
  const type = row.calculatorType;
  if (
    type !== "claim-review" &&
    type !== "roi-report" &&
    type !== "chatbot" &&
    type !== "contact-inquiry"
  ) {
    return false;
  }

  const lead = row.lead;
  if (!lead || typeof lead !== "object") return false;
  const L = lead as Record<string, unknown>;
  if (typeof L.fullName !== "string" || !L.fullName.trim()) return false;
  if (typeof L.email !== "string" || !L.email.trim()) return false;

  if (type === "chatbot") {
    const details = row.chatbotDetails;
    if (!details || typeof details !== "object") return false;
  }

  if (type === "contact-inquiry") {
    const details = row.contactDetails;
    if (!details || typeof details !== "object") return false;
  }

  return true;
}

function validateChatbotLead(body: Record<string, unknown>): string | null {
  const lead = body.lead as Record<string, unknown>;
  const email = typeof lead.email === "string" ? lead.email : "";
  if (!isValidEmail(email)) {
    return "Invalid email address.";
  }

  const phone = typeof lead.phone === "string" ? lead.phone : "";
  if (!isValidPhoneOptional(phone)) {
    return "Invalid phone number.";
  }

  return null;
}

function isContactInquiryType(value: string): value is ContactInquiryType {
  return (CONTACT_INQUIRY_TYPES as readonly string[]).includes(value);
}

function validateContactInquiryLead(
  body: Record<string, unknown>,
): string | null {
  const lead = body.lead as Record<string, unknown>;
  const email = typeof lead.email === "string" ? lead.email : "";
  if (!isValidEmail(email)) {
    return "Invalid email address.";
  }

  const phone = typeof lead.phone === "string" ? lead.phone : "";
  if (!phone.trim() || countPhoneDigits(phone) < 7) {
    return "Invalid phone number.";
  }

  const company = typeof lead.company === "string" ? lead.company : "";
  if (!company.trim()) {
    return "Company is required.";
  }

  const details = body.contactDetails as Record<string, unknown>;
  const message =
    typeof details.message === "string" ? details.message.trim() : "";
  if (!message) {
    return "Message is required.";
  }

  const inquiryType =
    typeof details.inquiryType === "string" ? details.inquiryType : "";
  if (!isContactInquiryType(inquiryType)) {
    return "Invalid inquiry type.";
  }

  return null;
}

function logSupabaseEnvDiag(context: string) {
  const d = getSupabaseEnvDiagnostics();
  console.info(`[api/leads] ${context}`, {
    NEXT_PUBLIC_SUPABASE_URL_set: d.nextPublicSupabaseUrlPresent,
    SUPABASE_SECRET_KEY_set: d.supabaseSecretKeyPresent,
    supabaseUrlHost: d.supabaseUrlHost,
    urlParseFailed: d.urlParseFailed,
    urlUsesHttps: d.urlUsesHttps,
    urlHostnameIncludesSupabaseCo: d.urlHostnameIncludesSupabaseCo,
  });
}

function looksLikeOutboundNetworkFailure(message: string): boolean {
  return /fetch failed|network|ECONNREFUSED|ENOTFOUND|ETIMEDOUT|EAI_AGAIN/i.test(
    message,
  );
}

export async function POST(request: Request) {
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    if (!isValidLeadPayload(body)) {
      return NextResponse.json(
        {
          error:
            "Invalid payload. calculatorType, lead.fullName, and lead.email are required.",
        },
        { status: 400 },
      );
    }

    const payload = body as LeadSubmissionPayload;

    if (payload.calculatorType === "chatbot") {
      const chatbotError = validateChatbotLead(body as Record<string, unknown>);
      if (chatbotError) {
        return NextResponse.json({ error: chatbotError }, { status: 400 });
      }
    }

    if (payload.calculatorType === "contact-inquiry") {
      const contactError = validateContactInquiryLead(
        body as Record<string, unknown>,
      );
      if (contactError) {
        return NextResponse.json({ error: contactError }, { status: 400 });
      }
    }

    logSupabaseEnvDiag("Supabase env diagnostics (before client)");

    let supabase;
    try {
      supabase = createSupabaseServerClient();
    } catch (err) {
      if (err instanceof SupabaseServerConfigError) {
        console.error(
          "[api/leads] Supabase configuration rejected:",
          err.message,
        );
        logSupabaseEnvDiag("Supabase env diagnostics (after config error)");
        return NextResponse.json(
          { error: "Lead intake is not configured.", code: err.code },
          { status: 503 },
        );
      }
      throw err;
    }

    const payloadToInsert = await buildLeadPayloadForInsert(supabase, payload);

    const initialStatus =
      payloadToInsert.calculatorType === "claim-review" &&
      payloadToInsert.aiAnalysis
        ? "ai_reviewed"
        : "new";

    let insertError: {
      message: string;
      code?: string;
      details?: string;
      hint?: string;
    } | null = null;

    try {
      const { error } = await supabase.from("leads").insert({
        calculator_type: payloadToInsert.calculatorType,
        lead_name: payloadToInsert.lead.fullName,
        company: payloadToInsert.lead.company ?? "",
        email: payloadToInsert.lead.email,
        phone: payloadToInsert.lead.phone ?? "",
        payload: payloadToInsert,
        status: initialStatus,
      });

      if (error) {
        insertError = {
          message: error.message,
          code: "code" in error ? String(error.code) : undefined,
          details: "details" in error ? error.details : undefined,
          hint: "hint" in error ? error.hint : undefined,
        };
      }
    } catch (runtimeErr) {
      const msg =
        runtimeErr instanceof Error ? runtimeErr.message : String(runtimeErr);
      const cause =
        runtimeErr instanceof Error && runtimeErr.cause != null
          ? runtimeErr.cause
          : undefined;

      console.error("[api/leads] Supabase insert threw (runtime):", {
        errorName: runtimeErr instanceof Error ? runtimeErr.name : typeof runtimeErr,
        errorMessage: msg,
        cause,
      });
      logSupabaseEnvDiag("Supabase env diagnostics (after insert throw)");

      if (
        runtimeErr instanceof TypeError &&
        runtimeErr.message === "fetch failed"
      ) {
        console.error(
          "[api/leads] TypeError: fetch failed — likely outbound TLS/DNS/network from Vercel to Supabase, or invalid URL. See supabaseUrlHost above.",
        );
      } else if (looksLikeOutboundNetworkFailure(msg)) {
        console.error(
          "[api/leads] Insert runtime error matches network/DNS pattern — verify Vercel region, Supabase status, and firewall.",
        );
      }

      return NextResponse.json(
        {
          error: "Failed to save lead",
          code: "SUPABASE_INSERT_RUNTIME",
        },
        { status: 500 },
      );
    }

    if (insertError) {
      console.error("[api/leads] Supabase insert error (PostgREST/client):", {
        message: insertError.message,
        code: insertError.code,
        details: insertError.details,
        hint: insertError.hint,
      });
      logSupabaseEnvDiag("Supabase env diagnostics (after insert error object)");

      if (looksLikeOutboundNetworkFailure(insertError.message)) {
        console.error(
          "[api/leads] Insert returned error that looks like a network/fetch failure, not a row/RLS issue.",
        );
      }

      return NextResponse.json(
        { error: "Failed to save lead", code: "SUPABASE_INSERT_ERROR" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[api/leads] Unhandled error:", err);
    logSupabaseEnvDiag("Supabase env diagnostics (unhandled)");
    return NextResponse.json(
      { error: "Internal server error", code: "INTERNAL" },
      { status: 500 },
    );
  }
}
