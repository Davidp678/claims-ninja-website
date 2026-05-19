import { NextResponse } from "next/server";

import { requireDashboardApiUser } from "@/lib/dashboard/api-auth";
import { isClaimStatus } from "@/lib/dashboard/claim-status";
import { updateClaimLeadStatus } from "@/lib/dashboard/leads";

export const runtime = "nodejs";

type RouteContext = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, context: RouteContext) {
  const auth = await requireDashboardApiUser();
  if (!auth.authorized) return auth.response;

  const { id } = await context.params;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const status =
    body && typeof body === "object" && "status" in body
      ? (body as { status: unknown }).status
      : undefined;

  if (typeof status !== "string" || !isClaimStatus(status)) {
    return NextResponse.json({ error: "Invalid status value" }, { status: 400 });
  }

  const result = await updateClaimLeadStatus(id, status);
  if (!result.ok) {
    return NextResponse.json(
      { error: "Failed to update status" },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true, status });
}
