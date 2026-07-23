import { getIntakeHandleFromCookie } from "@/lib/onboarding/cookie";
import {
  handleOnboardingRouteError,
  jsonError,
} from "@/lib/onboarding/http";
import { externalIntakeS2SRequest } from "@/lib/onboarding/s2s";

export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    const intakeHandle = await getIntakeHandleFromCookie();
    if (!intakeHandle) {
      return jsonError(401, "SESSION_UNAUTHORIZED", "No active intake session.");
    }

    const url = new URL(request.url);
    const doc = url.searchParams.get("doc") === "privacy" ? "privacy" : "terms";

    const { status, rawText, envelope } = await externalIntakeS2SRequest({
      method: "GET",
      path: "/api/external-intake/v1/agreement/current/download",
      searchParams: { intakeHandle, doc },
    });

    if (status >= 400) {
      const code = envelope.error?.code ?? "DOWNLOAD_FAILED";
      const message =
        envelope.error?.message ?? "Unable to download legal document snapshot.";
      return jsonError(status, code, message);
    }

    const filename =
      doc === "privacy"
        ? "claims-ninja-privacy-policy.txt"
        : "claims-ninja-terms-of-service.txt";

    return new Response(rawText, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    return handleOnboardingRouteError(err);
  }
}
