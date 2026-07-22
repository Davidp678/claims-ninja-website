import {
  ensureCsrfCookie,
  setIntakeHandleCookie,
} from "@/lib/onboarding/cookie";
import { assertMutationSecurity } from "@/lib/onboarding/csrf";
import {
  handleOnboardingRouteError,
  jsonError,
  jsonOk,
  mapPlatformResponse,
} from "@/lib/onboarding/http";
import { externalIntakeS2SJson } from "@/lib/onboarding/s2s";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const security = assertMutationSecurity(request);
    if (!security.ok) {
      return jsonError(security.status, security.code, security.message);
    }

    let body: { email?: string; code?: string } = {};
    try {
      body = (await request.json()) as typeof body;
    } catch {
      return jsonError(400, "INVALID_JSON", "Invalid JSON body.");
    }

    const { status, envelope } = await externalIntakeS2SJson<{
      intakeHandle: string;
      status: string;
      stage: string;
      version: number;
      expiresAt?: string;
    }>("POST", "/api/external-intake/v1/resume/consume", {
      email: body.email,
      code: body.code,
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
