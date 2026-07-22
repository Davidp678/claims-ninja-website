import { INTAKE_CSRF_COOKIE, INTAKE_CSRF_HEADER } from "./constants";

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

export async function onboardingUploadFile(file: File, expectedVersion: number) {
  const csrf = await ensureCsrf();
  const form = new FormData();
  form.append("file", file);
  form.append("expectedVersion", String(expectedVersion));

  const res = await fetch("/api/onboarding/files", {
    method: "POST",
    headers: {
      [INTAKE_CSRF_HEADER]: csrf,
    },
    body: form,
    credentials: "same-origin",
  });

  const payload = (await res.json()) as {
    ok?: boolean;
    data?: unknown;
    error?: { code?: string; message?: string; retryable?: boolean };
  };

  if (!res.ok || payload.ok === false) {
    return {
      ok: false as const,
      status: res.status,
      code: payload.error?.code ?? "UPLOAD_FAILED",
      message: payload.error?.message ?? "Upload failed.",
      retryable: payload.error?.retryable,
    };
  }

  return { ok: true as const, data: payload.data };
}
