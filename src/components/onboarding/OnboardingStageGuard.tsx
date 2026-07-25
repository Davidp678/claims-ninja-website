"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { OnboardingLoading } from "@/components/onboarding/OnboardingLoading";
import { onboardingFetchJson } from "@/lib/onboarding/client-api";
import {
  isOnboardingRoute,
  isRouteAllowed,
  maxAllowedOnboardingRoute,
  stagePath,
  type OnboardingRoute,
} from "@/lib/onboarding/stages";
import type { IntakeSessionProjection } from "@/lib/onboarding/types";

/**
 * Redirects skip-ahead deep links back to the furthest allowed stage.
 * Backward navigation to earlier stages remains allowed.
 */
export function OnboardingStageGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const segment = pathname.split("/").filter(Boolean).pop() ?? "";
      if (!isOnboardingRoute(segment)) {
        if (!cancelled) setChecked(true);
        return;
      }

      const requested = segment as OnboardingRoute;
      const result = await onboardingFetchJson<IntakeSessionProjection>(
        "/api/onboarding/session",
      );
      if (cancelled) return;

      if (!result.ok) {
        // No session — stage pages already render their own empty states.
        setChecked(true);
        return;
      }

      const maxAllowed = maxAllowedOnboardingRoute(result.data);
      if (!isRouteAllowed(requested, maxAllowed)) {
        router.replace(stagePath(maxAllowed));
      }
      setChecked(true);
    })();

    return () => {
      cancelled = true;
    };
  }, [pathname, router]);

  if (!checked) {
    return <OnboardingLoading />;
  }

  return <>{children}</>;
}
