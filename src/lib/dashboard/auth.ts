import "server-only";

import type { User } from "@supabase/supabase-js";

import { createSupabaseAuthServerClient } from "@/lib/supabase/auth-server";

export async function getDashboardUser(): Promise<User | null> {
  const supabase = await createSupabaseAuthServerClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user) {
    return null;
  }
  return data.user;
}

export async function requireDashboardUser(): Promise<User> {
  const user = await getDashboardUser();
  if (!user) {
    throw new Error("UNAUTHORIZED");
  }
  return user;
}
