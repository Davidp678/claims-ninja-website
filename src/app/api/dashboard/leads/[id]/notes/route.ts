import { NextResponse } from "next/server";

import { requireDashboardApiUser } from "@/lib/dashboard/api-auth";
import { addClaimNote, listClaimNotes } from "@/lib/dashboard/leads";

export const runtime = "nodejs";

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(_request: Request, context: RouteContext) {
  const auth = await requireDashboardApiUser();
  if (!auth.authorized) return auth.response;

  const { id } = await context.params;

  try {
    const notes = await listClaimNotes(id);
    return NextResponse.json({ notes });
  } catch {
    return NextResponse.json({ error: "Failed to load notes" }, { status: 500 });
  }
}

export async function POST(request: Request, context: RouteContext) {
  const auth = await requireDashboardApiUser();
  if (!auth.authorized) return auth.response;

  const { id } = await context.params;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const noteText =
    body && typeof body === "object" && "noteText" in body
      ? (body as { noteText: unknown }).noteText
      : undefined;

  if (typeof noteText !== "string" || !noteText.trim()) {
    return NextResponse.json({ error: "noteText is required" }, { status: 400 });
  }

  try {
    const note = await addClaimNote(id, noteText);
    return NextResponse.json({ note });
  } catch {
    return NextResponse.json({ error: "Failed to save note" }, { status: 500 });
  }
}
