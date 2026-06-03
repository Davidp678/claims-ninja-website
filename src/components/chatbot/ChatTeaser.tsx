"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const TEASER_DISMISS_STORAGE_KEY = "claims-ninja-chat-teaser-dismissed";

export function isTeaserDismissed(): boolean {
  if (typeof window === "undefined") {
    return false;
  }
  try {
    return window.sessionStorage.getItem(TEASER_DISMISS_STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export function dismissTeaser(): void {
  if (typeof window === "undefined") {
    return;
  }
  try {
    window.sessionStorage.setItem(TEASER_DISMISS_STORAGE_KEY, "1");
  } catch {
    // Storage may be unavailable; ignore.
  }
}

export type ChatTeaserProps = {
  message: string;
  onOpen: () => void;
  onDismiss: () => void;
  prefersReducedMotion: boolean | null;
};

export function ChatTeaser({
  message,
  onOpen,
  onDismiss,
  prefersReducedMotion,
}: ChatTeaserProps) {
  const transition = prefersReducedMotion
    ? { duration: 0.12 }
    : { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const };

  const exitTransition = prefersReducedMotion
    ? { duration: 0.12 }
    : { duration: 0.22, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <motion.div
      initial={
        prefersReducedMotion
          ? { opacity: 0 }
          : { opacity: 0, y: 10 }
      }
      animate={
        prefersReducedMotion
          ? { opacity: 1 }
          : { opacity: 1, y: 0 }
      }
      exit={
        prefersReducedMotion
          ? { opacity: 0, transition: exitTransition }
          : { opacity: 0, y: 6, transition: exitTransition }
      }
      transition={transition}
      className="pointer-events-auto fixed bottom-[calc(max(1.25rem,env(safe-area-inset-bottom))+4.75rem)] right-[max(1.25rem,env(safe-area-inset-right))] z-[61] w-[min(17rem,calc(100vw-2.5rem))] sm:w-[19rem]"
    >
      <div className="relative rounded-2xl border border-white/12 bg-brand-elevated/95 shadow-[0_16px_48px_-20px_rgba(0,0,0,0.9),0_0_32px_-16px_rgba(239,68,68,0.42)] ring-1 ring-brand-red-light/25 backdrop-blur-xl">
        <button
          type="button"
          onClick={onOpen}
          aria-label="Open Claims Ninja AI chat"
          className="flex w-full items-start gap-3 rounded-2xl p-3.5 pr-10 text-left transition-colors hover:bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red-light focus-visible:ring-offset-2 focus-visible:ring-offset-brand-elevated"
        >
          <div className="relative mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-brand-red-light/50 bg-brand-black ring-1 ring-white/10">
            <Image
              src="/logo.png"
              alt=""
              width={32}
              height={32}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-red-300">
              Claims Ninja AI
            </p>
            <p className="mt-1 text-sm leading-snug text-zinc-100">{message}</p>
          </div>
        </button>

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onDismiss();
          }}
          aria-label="Dismiss suggestion"
          className="absolute right-2 top-2 inline-flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-white/10 hover:text-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red-light"
        >
          <svg
            aria-hidden
            viewBox="0 0 16 16"
            className="h-3.5 w-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <path d="m4 4 8 8M12 4l-8 8" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}
