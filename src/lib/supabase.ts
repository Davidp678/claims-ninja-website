import "server-only";

import { createClient } from "@supabase/supabase-js";

/** Safe fields for logs only — never includes secrets. */
export type SupabaseEnvDiagnostics = {
  nextPublicSupabaseUrlPresent: boolean;
  supabaseSecretKeyPresent: boolean;
  supabaseUrlHost: string | null;
  urlParseFailed: boolean;
  urlUsesHttps: boolean;
  urlHostnameIncludesSupabaseCo: boolean;
};

export function getSupabaseEnvDiagnostics(): SupabaseEnvDiagnostics {
  const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() ?? "";
  const secret = process.env.SUPABASE_SECRET_KEY?.trim() ?? "";

  const base = {
    nextPublicSupabaseUrlPresent: Boolean(rawUrl),
    supabaseSecretKeyPresent: Boolean(secret),
    supabaseUrlHost: null as string | null,
    urlParseFailed: false,
    urlUsesHttps: false,
    urlHostnameIncludesSupabaseCo: false,
  };

  if (!rawUrl) return base;

  try {
    const parsed = new URL(rawUrl);
    return {
      ...base,
      supabaseUrlHost: parsed.host,
      urlUsesHttps: parsed.protocol === "https:",
      urlHostnameIncludesSupabaseCo: parsed.hostname.includes(".supabase.co"),
    };
  } catch {
    return {
      ...base,
      urlParseFailed: true,
    };
  }
}

function readSupabaseServerConfig(): { url: string; secretKey: string } {
  const url = (process.env.NEXT_PUBLIC_SUPABASE_URL ?? "").trim();
  const secretKey = (process.env.SUPABASE_SECRET_KEY ?? "").trim();

  if (!url) {
    throw new Error(
      "NEXT_PUBLIC_SUPABASE_URL is missing or empty (after trim). Set it in Vercel project env.",
    );
  }
  if (!secretKey) {
    throw new Error(
      "SUPABASE_SECRET_KEY is missing or empty (after trim). Set it in Vercel project env.",
    );
  }

  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    throw new Error(
      "NEXT_PUBLIC_SUPABASE_URL is not a valid URL. Expected e.g. https://xxxx.supabase.co",
    );
  }

  if (parsed.protocol !== "https:") {
    throw new Error(
      `NEXT_PUBLIC_SUPABASE_URL must start with https:// (got protocol "${parsed.protocol}").`,
    );
  }

  if (!parsed.hostname.includes(".supabase.co")) {
    throw new Error(
      "NEXT_PUBLIC_SUPABASE_URL hostname must include .supabase.co (use your Supabase project API URL).",
    );
  }

  return { url, secretKey };
}

export class SupabaseServerConfigError extends Error {
  readonly code = "SUPABASE_SERVER_CONFIG" as const;

  constructor(message: string) {
    super(message);
    this.name = "SupabaseServerConfigError";
  }
}

/**
 * Server-only Supabase client (service role). Never import from client components.
 */
export function createSupabaseServerClient() {
  let url: string;
  let secretKey: string;
  try {
    ({ url, secretKey } = readSupabaseServerConfig());
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    throw new SupabaseServerConfigError(msg);
  }

  return createClient(url, secretKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
