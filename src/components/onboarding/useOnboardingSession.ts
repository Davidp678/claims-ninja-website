"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { useOnboardingSessionContext } from "@/components/onboarding/OnboardingSessionContext";
import { onboardingFetchJson } from "@/lib/onboarding/client-api";
import { stagePath, type OnboardingStage } from "@/lib/onboarding/stages";
import type { IntakeSessionProjection, SaveState } from "@/lib/onboarding/types";
import { userFacingOnboardingError } from "@/lib/onboarding/user-errors";

export function useOnboardingSession() {
  const router = useRouter();
  const { snapshot, guardReady, setSnapshot } = useOnboardingSessionContext();
  const [session, setSessionState] = useState<IntakeSessionProjection | null>(
    snapshot,
  );
  const [loading, setLoading] = useState(!snapshot);
  const [error, setError] = useState<string | null>(null);
  const [saveState, setSaveState] = useState<SaveState>("idle");
  const [version, setVersion] = useState(snapshot?.version ?? 0);
  const versionRef = useRef(snapshot?.version ?? 0);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mutationChainRef = useRef<Promise<void>>(Promise.resolve());
  const setSession = useCallback(
    (
      next:
        | IntakeSessionProjection
        | null
        | ((prev: IntakeSessionProjection | null) => IntakeSessionProjection | null),
    ) => {
      setSessionState((prev) => {
        const resolved = typeof next === "function" ? next(prev) : next;
        setSnapshot(resolved);
        return resolved;
      });
    },
    [setSnapshot],
  );

  const applySession = useCallback(
    (data: IntakeSessionProjection) => {
      const nextVersion = data.version ?? 0;
      versionRef.current = nextVersion;
      setSession(data);
      setVersion(nextVersion);
      setError(null);
    },
    [setSession],
  );

  const syncVersion = useCallback((next: number) => {
    versionRef.current = next;
    setVersion(next);
  }, []);

  const runSerialized = useCallback(<T,>(fn: () => Promise<T>): Promise<T> => {
    const next = mutationChainRef.current.then(fn, fn);
    mutationChainRef.current = next.then(
      () => undefined,
      () => undefined,
    );
    return next;
  }, []);

  const softRefresh = useCallback(async () => {
    const result = await onboardingFetchJson<IntakeSessionProjection>(
      "/api/onboarding/session",
    );
    if (!result.ok) {
      setError(userFacingOnboardingError(result.code, result.message));
      return null;
    }
    applySession(result.data);
    return result.data;
  }, [applySession]);

  const refresh = useCallback(async () => {
    setLoading(true);
    const data = await softRefresh();
    setLoading(false);
    return data;
  }, [softRefresh]);

  // Prefer the guard's shared snapshot; only GET if the guard finished without one.
  // Apply snapshot asynchronously so we do not setState synchronously inside the effect.
  useEffect(() => {
    if (!guardReady) return;

    let cancelled = false;
    void (async () => {
      if (snapshot) {
        await Promise.resolve();
        if (cancelled) return;
        applySession(snapshot);
        setLoading(false);
        return;
      }

      const result = await onboardingFetchJson<IntakeSessionProjection>(
        "/api/onboarding/session",
      );
      if (cancelled) return;
      if (!result.ok) {
        setError(userFacingOnboardingError(result.code, result.message));
        setSession(null);
        setLoading(false);
        return;
      }
      applySession(result.data);
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, [applySession, guardReady, setSession, snapshot]);

  const clearAutosaveTimer = useCallback(() => {
    if (saveTimer.current) {
      clearTimeout(saveTimer.current);
      saveTimer.current = null;
    }
  }, []);

  const patch = useCallback(
    async (stage: OnboardingStage, patchBody: Record<string, unknown>) => {
      return runSerialized(async () => {
        clearAutosaveTimer();
        setSaveState("saving");

        const send = (expectedVersion: number) =>
          onboardingFetchJson<IntakeSessionProjection>(
            "/api/onboarding/session",
            {
              method: "PATCH",
              json: {
                expectedVersion,
                stage,
                patch: patchBody,
              },
            },
          );

        let result = await send(versionRef.current);

        if (
          !result.ok &&
          result.code === "VERSION_MISMATCH" &&
          result.status === 409
        ) {
          const refreshed = await softRefresh();
          if (refreshed) {
            result = await send(versionRef.current);
          }
        }

        if (!result.ok) {
          setSaveState("error");
          await softRefresh();
          setError(userFacingOnboardingError(result.code, result.message));
          return null;
        }

        applySession(result.data);
        setSaveState("saved");
        return result.data;
      });
    },
    [applySession, clearAutosaveTimer, runSerialized, softRefresh],
  );

  const autosave = useCallback(
    (stage: OnboardingStage, patchBody: Record<string, unknown>) => {
      clearAutosaveTimer();
      saveTimer.current = setTimeout(() => {
        void patch(stage, patchBody);
      }, 600);
    },
    [clearAutosaveTimer, patch],
  );

  const saveExit = useCallback(async () => {
    return runSerialized(async () => {
      clearAutosaveTimer();
      setSaveState("saving");

      const send = (expectedVersion: number) =>
        onboardingFetchJson("/api/onboarding/save-exit", {
          method: "POST",
          json: { expectedVersion },
        });

      let result = await send(versionRef.current);

      if (
        !result.ok &&
        result.code === "VERSION_MISMATCH" &&
        result.status === 409
      ) {
        const refreshed = await softRefresh();
        if (refreshed) {
          result = await send(versionRef.current);
        }
      }

      if (!result.ok) {
        setSaveState("error");
        await softRefresh();
        setError(userFacingOnboardingError(result.code, result.message));
        return;
      }
      setSaveState("saved");
      router.push("/");
    });
  }, [clearAutosaveTimer, router, runSerialized, softRefresh]);

  return {
    session,
    loading,
    error,
    saveState,
    version,
    versionRef,
    refresh,
    softRefresh,
    syncVersion,
    runSerialized,
    clearAutosaveTimer,
    patch,
    autosave,
    saveExit,
    setError,
    setSession,
    setSaveState,
  };
}

export function goToStage(
  router: ReturnType<typeof useRouter>,
  stage: Parameters<typeof stagePath>[0],
) {
  router.push(stagePath(stage));
}
