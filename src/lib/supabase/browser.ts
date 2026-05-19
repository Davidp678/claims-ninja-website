import { createBrowserClient } from "@supabase/ssr";

export type SupabaseBrowserEnvStatus = {
  urlPresent: boolean;
  anonKeyPresent: boolean;
  urlHost: string | null;
};

export type SupabaseBrowserConfigErrorCode =
  | "MISSING_URL"
  | "MISSING_ANON_KEY"
  | "INVALID_URL";

export class SupabaseBrowserConfigError extends Error {
  readonly code: SupabaseBrowserConfigErrorCode;

  constructor(message: string, code: SupabaseBrowserConfigErrorCode) {
    super(message);
    this.name = "SupabaseBrowserConfigError";
    this.code = code;
  }
}

/** Safe diagnostics only — never includes keys or secrets. */
export function getSupabaseBrowserEnvStatus(): SupabaseBrowserEnvStatus {
  const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() ?? "";
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim() ?? "";

  const base: SupabaseBrowserEnvStatus = {
    urlPresent: Boolean(rawUrl),
    anonKeyPresent: Boolean(anonKey),
    urlHost: null,
  };

  if (!rawUrl) return base;

  try {
    return { ...base, urlHost: new URL(rawUrl).host };
  } catch {
    return base;
  }
}

/** Dev-only: logs public URL + hostname + anon key presence (never keys). */
export function logSupabaseBrowserEnvForDev(context?: string): void {
  if (process.env.NODE_ENV !== "development") return;

  const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() ?? "";
  const status = getSupabaseBrowserEnvStatus();

  console.info("[supabase/browser] client env", {
    context: context ?? "createSupabaseBrowserClient",
    NEXT_PUBLIC_SUPABASE_URL: rawUrl || "(empty)",
    hostname: status.urlHost ?? "(unparseable)",
    anonKeyExists: status.anonKeyPresent,
  });
}

function readBrowserSupabaseConfig(): { url: string; anonKey: string } {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() ?? "";
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim() ?? "";

  if (!url) {
    throw new SupabaseBrowserConfigError(
      "NEXT_PUBLIC_SUPABASE_URL is missing. Add it to .env.local and restart the dev server.",
      "MISSING_URL",
    );
  }

  if (!anonKey) {
    throw new SupabaseBrowserConfigError(
      "NEXT_PUBLIC_SUPABASE_ANON_KEY is missing. Add it to .env.local and restart the dev server.",
      "MISSING_ANON_KEY",
    );
  }

  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    throw new SupabaseBrowserConfigError(
      "NEXT_PUBLIC_SUPABASE_URL is not a valid URL. Expected https://xxxx.supabase.co",
      "INVALID_URL",
    );
  }

  if (parsed.protocol !== "https:") {
    throw new SupabaseBrowserConfigError(
      "NEXT_PUBLIC_SUPABASE_URL must use https://",
      "INVALID_URL",
    );
  }

  if (!parsed.hostname.includes(".supabase.co")) {
    throw new SupabaseBrowserConfigError(
      "NEXT_PUBLIC_SUPABASE_URL must be your Supabase project URL (*.supabase.co).",
      "INVALID_URL",
    );
  }

  return { url, anonKey };
}

export function createSupabaseBrowserClient() {
  logSupabaseBrowserEnvForDev();
  const { url, anonKey } = readBrowserSupabaseConfig();
  return createBrowserClient(url, anonKey);
}
