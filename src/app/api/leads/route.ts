import { NextResponse } from "next/server";

import type { LeadSubmissionPayload } from "@/lib/calculator-lead";
import { createSupabaseServerClient } from "@/lib/supabase";

function isValidLeadPayload(
  data: unknown,
): data is Pick<LeadSubmissionPayload, "calculatorType" | "lead"> {
  if (!data || typeof data !== "object") return false;
  const row = data as Record<string, unknown>;
  const type = row.calculatorType;
  if (type !== "claim-review" && type !== "roi-report") return false;

  const lead = row.lead;
  if (!lead || typeof lead !== "object") return false;
  const L = lead as Record<string, unknown>;
  if (typeof L.fullName !== "string" || !L.fullName.trim()) return false;
  if (typeof L.email !== "string" || !L.email.trim()) return false;

  return true;
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
    const supabase = createSupabaseServerClient();

    const { error } = await supabase.from("leads").insert({
      calculator_type: payload.calculatorType,
      lead_name: payload.lead.fullName,
      company: payload.lead.company ?? "",
      email: payload.lead.email,
      phone: payload.lead.phone ?? "",
      payload,
      status: "new",
    });

    if (error) {
      console.error("[api/leads] Supabase insert error:", error.message, error);
      return NextResponse.json(
        { error: "Failed to save lead" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[api/leads]", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
