import { INTAKE_CSRF_COOKIE, INTAKE_CSRF_HEADER } from "./constants";
import {
  normalizeIntakeFileSummary,
  ONBOARDING_UPLOAD_TIMEOUT_MS,
} from "./file-summary";
import type { IntakeFileSummary } from "./types";

function readBrowserCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${name}=`));
  if (!match) return null;
  return decodeURIComponent(match.slice(name.length + 1));
}

export type OnboardingApiResult<T> =
  | { ok: true; data: T }
  | {
      ok: false;
      status: number;
      code: string;
      message: string;
      retryable?: boolean;
    };

export type OnboardingUploadResult =
  | {
      ok: true;
      data: {
        id: string;
        filename: string;
        sizeBytes: number;
        securityState: string;
        version?: number;
        checksumSha256?: string | null;
      };
    }
  | {
      ok: false;
      status: number;
      code: string;
      message: string;
      retryable?: boolean;
    };

async function ensureCsrf(): Promise<string> {
  const existing = readBrowserCookie(INTAKE_CSRF_COOKIE);
  if (existing) return existing;
  const res = await fetch("/api/onboarding/csrf", { credentials: "same-origin" });
  const json = (await res.json()) as {
    ok: boolean;
    data?: { csrfToken?: string };
  };
  if (!res.ok || !json.data?.csrfToken) {
    throw new Error("Unable to initialize onboarding security token.");
  }
  return json.data.csrfToken;
}

export async function onboardingFetchJson<T>(
  path: string,
  init: RequestInit & { json?: unknown } = {},
): Promise<OnboardingApiResult<T>> {
  const method = (init.method ?? "GET").toUpperCase();
  const headers = new Headers(init.headers);

  if (method !== "GET" && method !== "HEAD") {
    const csrf = await ensureCsrf();
    headers.set(INTAKE_CSRF_HEADER, csrf);
  }

  let body = init.body;
  if (init.json !== undefined) {
    headers.set("Content-Type", "application/json");
    body = JSON.stringify(init.json);
  }

  const res = await fetch(path, {
    ...init,
    method,
    headers,
    body,
    credentials: "same-origin",
    cache: "no-store",
  });

  let payload: {
    ok?: boolean;
    data?: T;
    error?: { code?: string; message?: string; retryable?: boolean };
  } = {};
  try {
    payload = (await res.json()) as typeof payload;
  } catch {
    /* empty */
  }

  if (!res.ok || payload.ok === false) {
    return {
      ok: false,
      status: res.status,
      code: payload.error?.code ?? "REQUEST_FAILED",
      message: payload.error?.message ?? "Request failed.",
      retryable: payload.error?.retryable,
    };
  }

  return { ok: true, data: payload.data as T };
}

export async function onboardingUploadFile(
  file: File,
  expectedVersion: number,
  options?: { timeoutMs?: number; signal?: AbortSignal },
): Promise<OnboardingUploadResult> {
  const csrf = await ensureCsrf();
  const form = new FormData();
  form.append("file", file);
  form.append("expectedVersion", String(expectedVersion));

  const timeoutMs = options?.timeoutMs ?? ONBOARDING_UPLOAD_TIMEOUT_MS;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  const onExternalAbort = () => controller.abort();
  options?.signal?.addEventListener("abort", onExternalAbort);

  try {
    const res = await fetch("/api/onboarding/files", {
      method: "POST",
      headers: {
        [INTAKE_CSRF_HEADER]: csrf,
      },
      body: form,
      credentials: "same-origin",
      signal: controller.signal,
    });

    const payload = (await res.json()) as {
      ok?: boolean;
      data?: Record<string, unknown>;
      error?: { code?: string; message?: string; retryable?: boolean };
    };

    if (!res.ok || payload.ok === false) {
      return {
        ok: false,
        status: res.status,
        code: payload.error?.code ?? "UPLOAD_FAILED",
        message: payload.error?.message ?? "Upload failed.",
        retryable: payload.error?.retryable ?? res.status >= 500,
      };
    }

    const summary = normalizeIntakeFileSummary(payload.data ?? null);
    if (!summary) {
      return {
        ok: false,
        status: 502,
        code: "UPLOAD_INVALID_RESPONSE",
        message: "Upload completed but file details were missing. Please retry.",
        retryable: true,
      };
    }

    const version =
      typeof payload.data?.version === "number"
        ? payload.data.version
        : undefined;
    const checksumSha256 =
      typeof payload.data?.checksumSha256 === "string"
        ? payload.data.checksumSha256
        : null;

    return {
      ok: true,
      data: {
        id: summary.id,
        filename: summary.filename,
        sizeBytes: summary.sizeBytes,
        securityState: summary.securityState,
        version,
        checksumSha256,
      },
    };
  } catch (err) {
    if (err instanceof DOMException && err.name === "AbortError") {
      return {
        ok: false,
        status: 408,
        code: "UPLOAD_TIMEOUT",
        message:
          "Upload timed out while preparing your file. Please retry — your previous attempt will not create a duplicate.",
        retryable: true,
      };
    }
    return {
      ok: false,
      status: 0,
      code: "UPLOAD_NETWORK",
      message: "Network error during upload. Please try again.",
      retryable: true,
    };
  } finally {
    clearTimeout(timeoutId);
    options?.signal?.removeEventListener("abort", onExternalAbort);
  }
}

export function mapSessionFiles(raw: unknown): IntakeFileSummary[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .map((item) =>
      item && typeof item === "object"
        ? normalizeIntakeFileSummary(item as Record<string, unknown>)
        : null,
    )
    .filter((f): f is IntakeFileSummary => f !== null);
}
