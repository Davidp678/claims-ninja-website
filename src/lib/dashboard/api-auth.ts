import { NextResponse } from "next/server";
import type { User } from "@supabase/supabase-js";

import { getDashboardUser } from "@/lib/dashboard/auth";

export type DashboardApiAuthResult =
  | { authorized: true; user: User }
  | { authorized: false; response: NextResponse };

export async function requireDashboardApiUser(): Promise<DashboardApiAuthResult> {
  const user = await getDashboardUser();
  if (!user) {
    return {
      authorized: false,
      response: NextResponse.json({ error: "Unauthorized" }, { status: 401 }),
    };
  }
  return { authorized: true, user };
}
