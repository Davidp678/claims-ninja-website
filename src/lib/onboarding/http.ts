import { NextResponse } from "next/server";

import {
  ExternalIntakeConfigError,
  ExternalIntakeS2SError,
  type PlatformEnvelope,
} from "./s2s";

export function jsonOk<T>(data: T, init?: ResponseInit) {
  return NextResponse.json({ ok: true, data, error: null }, init);
}

export function jsonError(
  status: number,
  code: string,
  message: string,
  retryable = false,
) {
  return NextResponse.json(
    {
      ok: false,
      data: null,
      error: { code, message, retryable },
    },
    { status },
  );
}

export function mapPlatformResponse<T>(
  status: number,
  envelope: PlatformEnvelope<T>,
  correlationId?: string | null,
) {
  const withCorrelation = (response: NextResponse) => {
    if (correlationId) {
      response.headers.set("x-cn-correlation-id", correlationId);
    }
    return response;
  };

  if (envelope.ok && envelope.data !== null && envelope.data !== undefined) {
    return withCorrelation(
      jsonOk(envelope.data, {
        status: status >= 200 && status < 300 ? status : 200,
      }),
    );
  }

  const code = envelope.error?.code ?? "PLATFORM_ERROR";
  const message =
    envelope.error?.message ?? "The onboarding service returned an error.";
  const retryable = Boolean(envelope.error?.retryable);
  return withCorrelation(jsonError(status || 502, code, message, retryable));
}

export function handleOnboardingRouteError(err: unknown) {
  if (err instanceof ExternalIntakeConfigError) {
    console.error(
      "[api/onboarding] intake not configured; missing env:",
      err.missingEnvNames.join(", ") || "(none listed)",
    );
    return jsonError(503, err.code, err.message, false);
  }
  if (err instanceof ExternalIntakeS2SError) {
    return jsonError(err.status, err.code, err.message, false);
  }
  console.error("[api/onboarding]", err instanceof Error ? err.message : err);
  return jsonError(500, "INTERNAL", "Internal server error.", true);
}
