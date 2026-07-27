import {
  ensureCsrfCookie,
  getIntakeHandleFromCookie,
  setIntakeHandleCookie,
} from "@/lib/onboarding/cookie";
import { assertMutationSecurity } from "@/lib/onboarding/csrf";
import {
  handleOnboardingRouteError,
  jsonError,
  jsonOk,
  mapPlatformResponse,
} from "@/lib/onboarding/http";
import { normalizeSessionProjection } from "@/lib/onboarding/session-projection";
import { externalIntakeS2SJson } from "@/lib/onboarding/s2s";
import type { IntakeSessionProjection } from "@/lib/onboarding/types";

export const runtime = "nodejs";

export async function GET() {
  try {
    await ensureCsrfCookie();
    const intakeHandle = await getIntakeHandleFromCookie();
    if (!intakeHandle) {
      return jsonError(401, "SESSION_UNAUTHORIZED", "No active intake session.");
    }

    const { status, envelope } =
      await externalIntakeS2SJson<IntakeSessionProjection>(
        "GET",
        "/api/external-intake/v1/sessions/current",
        undefined,
        { searchParams: { intakeHandle } },
      );

    if (envelope.ok && envelope.data) {
      return mapPlatformResponse(status, {
        ...envelope,
        data: normalizeSessionProjection(envelope.data),
      });
    }

    return mapPlatformResponse(status, envelope);
  } catch (err) {
    return handleOnboardingRouteError(err);
  }
}

export async function POST(request: Request) {
  try {
    const security = assertMutationSecurity(request);
    if (!security.ok) {
      return jsonError(security.status, security.code, security.message);
    }

    let body: Record<string, unknown> = {};
    try {
      body = (await request.json()) as Record<string, unknown>;
    } catch {
      return jsonError(400, "INVALID_JSON", "Invalid JSON body.");
    }

    const claimDraft =
      body.claimDraft && typeof body.claimDraft === "object"
        ? body.claimDraft
        : {
            propertyOrJobName: body.propertyOrJobName,
            lossType: body.lossType,
          };
    const companyDraft =
      body.companyDraft && typeof body.companyDraft === "object"
        ? body.companyDraft
        : {
            firstName: body.firstName,
            lastName: body.lastName,
          };

    const { status, envelope } = await externalIntakeS2SJson<{
      intakeHandle: string;
      status: string;
      stage: string;
      version: number;
      expiresAt?: string;
    }>("POST", "/api/external-intake/v1/sessions", {
      source: body.source ?? "website_hero",
      locale: body.locale ?? "en-US",
      claimDraft,
      companyDraft,
    });

    if (envelope.ok && envelope.data?.intakeHandle) {
      await setIntakeHandleCookie(envelope.data.intakeHandle);
      await ensureCsrfCookie();
      return jsonOk({
        status: envelope.data.status,
        stage: envelope.data.stage,
        version: envelope.data.version,
        expiresAt: envelope.data.expiresAt,
      });
    }

    return mapPlatformResponse(status, envelope);
  } catch (err) {
    return handleOnboardingRouteError(err);
  }
}

export async function PATCH(request: Request) {
  try {
    const security = assertMutationSecurity(request);
    if (!security.ok) {
      return jsonError(security.status, security.code, security.message);
    }

    const intakeHandle = await getIntakeHandleFromCookie();
    if (!intakeHandle) {
      return jsonError(401, "SESSION_UNAUTHORIZED", "No active intake session.");
    }

    let body: Record<string, unknown> = {};
    try {
      body = (await request.json()) as Record<string, unknown>;
    } catch {
      return jsonError(400, "INVALID_JSON", "Invalid JSON body.");
    }

    const patch = (body.patch ?? {}) as Record<string, unknown>;
    const serialized = JSON.stringify(patch).toLowerCase();
    const forbiddenKeys = [
      "password",
      "cardnumber",
      "cvv",
      "securitycode",
      "routingnumber",
      "accountnumber",
      "pan",
    ];
    if (forbiddenKeys.some((key) => serialized.includes(`"${key}"`))) {
      return jsonError(
        400,
        "VALIDATION_ERROR",
        "Sensitive fields cannot be saved through autosave.",
      );
    }

    const { status, envelope } =
      await externalIntakeS2SJson<IntakeSessionProjection>(
        "PATCH",
        "/api/external-intake/v1/sessions/current",
        {
          intakeHandle,
          expectedVersion: body.expectedVersion,
          stage: body.stage,
          patch,
        },
      );

    if (!envelope.ok) {
      console.error("[api/onboarding/session] PATCH platform error", {
        status,
        code: envelope.error?.code ?? null,
        message: envelope.error?.message ?? null,
        hasExpectedVersion: body.expectedVersion !== undefined,
        stage: typeof body.stage === "string" ? body.stage : null,
      });
    }

    if (envelope.ok && envelope.data) {
      return mapPlatformResponse(status, {
        ...envelope,
        data: normalizeSessionProjection(envelope.data),
      });
    }

    return mapPlatformResponse(status, envelope);
  } catch (err) {
    return handleOnboardingRouteError(err);
  }
}
