import "server-only";

import { randomBytes } from "node:crypto";

import { getExternalIntakeConfig } from "./config";
import { getMissingExternalIntakeEnvNames } from "./env-check";
import {
  buildCanonicalString,
  sha256Hex,
  signCanonical,
} from "./s2s-canonical";

export {
  buildCanonicalString,
  safeEqualHex,
  sha256Hex,
  signCanonical,
} from "./s2s-canonical";

export class ExternalIntakeConfigError extends Error {
  readonly code = "EXTERNAL_INTAKE_NOT_CONFIGURED";
  readonly missingEnvNames: string[];

  constructor(message?: string, missingEnvNames?: string[]) {
    const missing = missingEnvNames ?? getMissingExternalIntakeEnvNames();
    const detail =
      missing.length > 0
        ? ` Missing server environment: ${missing.join(", ")}.`
        : "";
    super(
      message ??
        `Claim intake is temporarily unavailable because the Preview server-to-server connection is not configured.${detail}`,
    );
    this.name = "ExternalIntakeConfigError";
    this.missingEnvNames = missing;
  }
}

export class ExternalIntakeS2SError extends Error {
  readonly status: number;
  readonly code: string;
  readonly body: unknown;

  constructor(status: number, code: string, message: string, body?: unknown) {
    super(message);
    this.name = "ExternalIntakeS2SError";
    this.status = status;
    this.code = code;
    this.body = body;
  }
}

type S2SRequestOptions = {
  method: "GET" | "POST" | "PATCH" | "DELETE";
  /** Platform path beginning with /api/external-intake/ */
  path: string;
  body?: Buffer | string | null;
  contentType?: string;
  idempotencyKey?: string;
  searchParams?: Record<string, string>;
};

export type PlatformEnvelope<T> = {
  ok: boolean;
  data: T | null;
  error: { code: string; message: string; retryable?: boolean } | null;
};

export async function externalIntakeS2SRequest<T>(
  options: S2SRequestOptions,
): Promise<{ status: number; envelope: PlatformEnvelope<T>; rawText: string }> {
  const config = getExternalIntakeConfig();
  if (!config) {
    const missing = getMissingExternalIntakeEnvNames();
    console.error(
      "[onboarding/s2s] EXTERNAL_INTAKE_NOT_CONFIGURED — missing env names:",
      missing.join(", ") || "(unknown)",
    );
    throw new ExternalIntakeConfigError(undefined, missing);
  }

  if (!options.path.startsWith("/api/external-intake/")) {
    throw new ExternalIntakeS2SError(
      500,
      "INVALID_S2S_PATH",
      "S2S path must be scoped to /api/external-intake/",
    );
  }

  const bodyBuffer = options.body
    ? Buffer.isBuffer(options.body)
      ? options.body
      : Buffer.from(options.body, "utf8")
    : Buffer.alloc(0);

  const timestamp = Math.floor(Date.now() / 1000).toString();
  const nonce = randomBytes(16).toString("hex");
  const bodyHash = sha256Hex(bodyBuffer);
  const canonical = buildCanonicalString({
    credentialId: config.credentialId,
    method: options.method,
    path: options.path,
    timestamp,
    nonce,
    bodyHash,
  });
  const signature = signCanonical(config.credentialSecret, canonical);

  const url = new URL(`${config.platformBaseUrl}${options.path}`);
  if (options.searchParams) {
    for (const [key, value] of Object.entries(options.searchParams)) {
      url.searchParams.set(key, value);
    }
  }

  const headers: Record<string, string> = {
    "X-CN-Credential-Id": config.credentialId,
    "X-CN-Timestamp": timestamp,
    "X-CN-Nonce": nonce,
    "X-CN-Body-Sha256": bodyHash,
    "X-CN-Signature": signature,
  };

  if (options.contentType) {
    headers["Content-Type"] = options.contentType;
  } else if (bodyBuffer.length > 0) {
    headers["Content-Type"] = "application/json";
  }

  if (options.idempotencyKey) {
    headers["Idempotency-Key"] = options.idempotencyKey;
  }

  const response = await fetch(url, {
    method: options.method,
    headers,
    body: bodyBuffer.length > 0 ? new Uint8Array(bodyBuffer) : undefined,
    cache: "no-store",
  });

  const rawText = await response.text();
  let envelope: PlatformEnvelope<T>;
  try {
    envelope = JSON.parse(rawText) as PlatformEnvelope<T>;
  } catch {
    envelope = {
      ok: false,
      data: null,
      error: {
        code: "INVALID_PLATFORM_RESPONSE",
        message: "Platform returned a non-JSON response.",
        retryable: true,
      },
    };
  }

  return { status: response.status, envelope, rawText };
}

export async function externalIntakeS2SJson<T>(
  method: S2SRequestOptions["method"],
  path: string,
  body?: unknown,
  extras?: Pick<S2SRequestOptions, "idempotencyKey" | "searchParams">,
): Promise<{ status: number; envelope: PlatformEnvelope<T> }> {
  const payload =
    body === undefined || body === null ? null : JSON.stringify(body);
  const result = await externalIntakeS2SRequest<T>({
    method,
    path,
    body: payload,
    contentType: payload ? "application/json" : undefined,
    ...extras,
  });
  return { status: result.status, envelope: result.envelope };
}
