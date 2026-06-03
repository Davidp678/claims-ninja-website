import type { ChatbotLeadSubmission } from "@/lib/calculator-lead";

export async function submitChatbotLead(
  payload: ChatbotLeadSubmission,
): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    let data: { success?: boolean; error?: string } = {};
    try {
      data = (await res.json()) as { success?: boolean; error?: string };
    } catch {
      data = {};
    }

    if (res.status === 503) {
      return {
        ok: false,
        error: "Lead intake is temporarily unavailable. Please try again shortly.",
      };
    }

    if (!res.ok || !data.success) {
      return {
        ok: false,
        error: "Something went wrong sending your info. Please try again.",
      };
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      error: "Something went wrong sending your info. Please try again.",
    };
  }
}
