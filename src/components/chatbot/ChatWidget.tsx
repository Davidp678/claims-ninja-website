"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import {
  handleSameDocumentHomepageIntakeClick,
  homepageIntakeHref,
} from "@/lib/homepage-intake";
import { localeFromPathname } from "@/lib/i18n/paths";
import { ChatPanel } from "./ChatPanel";
import {
  ChatTeaser,
  dismissTeaser,
  isTeaserDismissed,
} from "./ChatTeaser";
import { pickTeaserMessage } from "./chat-teaser-messages";
import { fetchAssistantReply } from "./chat-client";
import { shouldStartLeadFlow } from "./chat-lead-flow";
import { OPENING_MESSAGE, getAssistantReply } from "./chat-responses";
import { isExternalAction } from "./quick-actions";
import { useChatLeadFlow } from "./useChatLeadFlow";
import type { AssistantReply, ChatMessage, QuickAction, QuickActionId } from "./types";

const STORAGE_KEY = "claims-ninja-chat-session-v1";
const ALL_QUICK_ACTIONS: QuickActionId[] = [
  "get-started",
  "pricing",
  "how-it-works",
  "supplements",
  "public-adjuster",
  "talk-to-team",
];

const TEASER_MIN_WIDTH_QUERY = "(min-width: 768px)";

function subscribeTeaserViewport(onStoreChange: () => void) {
  const mq = window.matchMedia(TEASER_MIN_WIDTH_QUERY);
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

/**
 * Teaser, prompt previews, and the launcher pulse are md+ only. On phones the
 * floating launcher button is the sole chat affordance so it never covers
 * homepage content. SSR snapshot is false to match the launcher-only default.
 */
function useTeaserViewportAllowed(): boolean {
  return useSyncExternalStore(
    subscribeTeaserViewport,
    () => window.matchMedia(TEASER_MIN_WIDTH_QUERY).matches,
    () => false,
  );
}

function createId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function createOpeningMessage(): ChatMessage {
  return {
    id: createId(),
    role: "assistant",
    content: OPENING_MESSAGE,
    actions: ALL_QUICK_ACTIONS,
    createdAt: Date.now(),
  };
}

function loadInitialMessages(): ChatMessage[] {
  if (typeof window === "undefined") {
    return [createOpeningMessage()];
  }
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as ChatMessage[];
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch {
    // Storage may be unavailable (private mode / quota); fall through.
  }
  return [createOpeningMessage()];
}

function typingDelayFor(prompt: string): number {
  return Math.min(900, Math.max(450, 400 + prompt.length * 8));
}

function resolveReply(prompt: string, apiReply: AssistantReply | null): AssistantReply {
  if (apiReply) {
    return apiReply;
  }
  return getAssistantReply(prompt);
}

function findLatestLeadSuccessMessage(
  messages: ChatMessage[],
): ChatMessage | undefined {
  for (let i = messages.length - 1; i >= 0; i -= 1) {
    if (messages[i]?.leadCaptureComplete) {
      return messages[i];
    }
  }
  return undefined;
}

export function ChatWidget({
  visualQa = false,
}: {
  /** Deterministic launcher for visual QA harnesses — no teaser, no entrance delay. */
  visualQa?: boolean;
} = {}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(loadInitialMessages);
  const [isTyping, setIsTyping] = useState(false);
  const [teaserMessage, setTeaserMessage] = useState("");
  const [teaserEligible, setTeaserEligible] = useState(
    () => (visualQa ? false : !isTeaserDismissed()),
  );
  const [activeTeaserPath, setActiveTeaserPath] = useState<string | null>(null);
  const [launcherPulse, setLauncherPulse] = useState(false);

  const abortRef = useRef<AbortController | null>(null);
  const requestIdRef = useRef(0);
  const messagesRef = useRef(messages);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const prefersReducedMotion = useReducedMotion() || visualQa;
  const teaserViewportAllowed = useTeaserViewportAllowed();
  const titleId = useId();

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  const appendUserMessage = useCallback((message: ChatMessage) => {
    setMessages((prev) => [...prev, message]);
  }, []);

  const appendAssistantMessage = useCallback((message: ChatMessage) => {
    setMessages((prev) => [...prev, message]);
  }, []);

  const leadFlow = useChatLeadFlow({
    createId,
    onAppendUser: appendUserMessage,
    onAppendAssistant: appendAssistantMessage,
    getConversationMessages: () => messagesRef.current,
  });

  const closePanel = useCallback(() => {
    setIsOpen(false);
    requestAnimationFrame(() => {
      launcherRef.current?.focus();
    });
  }, []);

  const openChat = useCallback(() => {
    setActiveTeaserPath(null);
    setLauncherPulse(false);
    setIsOpen(true);
  }, []);

  const handleTeaserDismiss = useCallback(() => {
    dismissTeaser();
    setTeaserEligible(false);
    setActiveTeaserPath(null);
    setLauncherPulse(false);
  }, []);

  const showTeaser =
    !isOpen &&
    teaserViewportAllowed &&
    teaserEligible &&
    activeTeaserPath === (pathname ?? "");

  useEffect(() => {
    if (!teaserViewportAllowed || !teaserEligible || isOpen) {
      return;
    }

    const currentPath = pathname ?? "";
    const delayMs = 25000;
    const timer = window.setTimeout(() => {
      setTeaserMessage(pickTeaserMessage(currentPath));
      setActiveTeaserPath(currentPath);
    }, delayMs);

    return () => {
      window.clearTimeout(timer);
    };
  }, [pathname, teaserEligible, isOpen, teaserViewportAllowed]);

  useEffect(() => {
    if (!showTeaser || prefersReducedMotion) {
      return;
    }

    let cancelled = false;
    let pulseOffTimer: number | undefined;
    let nextTimer: number | undefined;

    const scheduleNext = () => {
      const waitMs = 30000 + Math.floor(Math.random() * 15001);
      nextTimer = window.setTimeout(() => {
        if (cancelled) {
          return;
        }
        setLauncherPulse(true);
        pulseOffTimer = window.setTimeout(() => {
          if (!cancelled) {
            setLauncherPulse(false);
          }
        }, 1400);
        scheduleNext();
      }, waitMs);
    };

    scheduleNext();

    return () => {
      cancelled = true;
      if (nextTimer !== undefined) {
        window.clearTimeout(nextTimer);
      }
      if (pulseOffTimer !== undefined) {
        window.clearTimeout(pulseOffTimer);
      }
    };
  }, [showTeaser, prefersReducedMotion]);

  useEffect(() => {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      // Storage may be unavailable (private mode / quota); ignore.
    }
  }, [messages]);

  useEffect(() => {
    return () => {
      abortRef.current?.abort();
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const isMobile = window.matchMedia("(max-width: 639px)").matches;
    if (!isMobile) {
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const appendAssistantReply = useCallback(
    async (prompt: string, history: ChatMessage[]) => {
      const requestId = ++requestIdRef.current;
      setIsTyping(true);
      const minDelay = typingDelayFor(prompt);
      const startedAt = Date.now();

      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;

      try {
        const apiReply = await fetchAssistantReply(
          prompt,
          history.map(({ role, content }) => ({ role, content })),
          controller.signal,
        );

        const elapsed = Date.now() - startedAt;
        if (elapsed < minDelay) {
          await new Promise((resolve) => setTimeout(resolve, minDelay - elapsed));
        }

        if (controller.signal.aborted || requestId !== requestIdRef.current) {
          return;
        }

        const reply = resolveReply(prompt, apiReply);
        setMessages((prev) => [
          ...prev,
          {
            id: createId(),
            role: "assistant",
            content: reply.content,
            actions: reply.followUps,
            createdAt: Date.now(),
          },
        ]);
      } finally {
        if (requestId === requestIdRef.current) {
          setIsTyping(false);
        }
      }
    },
    [],
  );

  const sendUserMessage = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isTyping || leadFlow.isSubmitting) {
        return;
      }

      if (leadFlow.isActive) {
        leadFlow.processInput(trimmed);
        return;
      }

      if (shouldStartLeadFlow(trimmed)) {
        leadFlow.start();
        appendUserMessage({
          id: createId(),
          role: "user",
          content: trimmed,
          createdAt: Date.now(),
        });
        return;
      }

      const userMessage: ChatMessage = {
        id: createId(),
        role: "user",
        content: trimmed,
        createdAt: Date.now(),
      };

      let priorMessages: ChatMessage[] = [];
      setMessages((prev) => {
        priorMessages = prev;
        return [...prev, userMessage];
      });
      void appendAssistantReply(trimmed, priorMessages);
    },
    [
      appendAssistantReply,
      appendUserMessage,
      isTyping,
      leadFlow,
    ],
  );

  const handleSelectAction = useCallback(
    (action: QuickAction) => {
      const leadSuccessMessage = findLatestLeadSuccessMessage(messagesRef.current);
      if (
        action.id === "get-started" &&
        leadSuccessMessage &&
        !leadFlow.isActive
      ) {
        closePanel();
        const intakeHref = homepageIntakeHref(
          localeFromPathname(pathname ?? "/"),
        );
        if (!handleSameDocumentHomepageIntakeClick(intakeHref)) {
          router.push(intakeHref);
        }
        return;
      }

      if (action.startLeadFlow && !leadFlow.isActive) {
        if (!isTyping && !leadFlow.isSubmitting) {
          leadFlow.start();
        }
        return;
      }

      if (action.href) {
        if (isExternalAction(action)) {
          window.open(action.href, "_blank", "noopener,noreferrer");
        } else {
          closePanel();
          router.push(action.href);
        }
        return;
      }
      if (!isTyping && !leadFlow.isSubmitting) {
        sendUserMessage(action.prompt ?? action.label);
      }
    },
    [closePanel, isTyping, leadFlow, pathname, router, sendUserMessage],
  );

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePanel();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closePanel]);

  const panelTransition = prefersReducedMotion
    ? { duration: 0.12 }
    : { duration: 0.26, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <div className="pointer-events-none fixed inset-0 z-[60]" aria-live="off">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={panelTransition}
            style={{ transformOrigin: "bottom right" }}
            className="pointer-events-auto fixed inset-x-0 bottom-0 max-h-[min(92dvh,40rem)] rounded-t-2xl sm:inset-auto sm:bottom-24 sm:right-6 sm:top-auto sm:h-[min(34rem,calc(100vh-7rem))] sm:max-h-none sm:w-[23rem] sm:rounded-2xl"
          >
            <ChatPanel
              messages={messages}
              isTyping={isTyping}
              leadFlowActive={leadFlow.isActive}
              isLeadSubmitting={leadFlow.isSubmitting}
              onSend={sendUserMessage}
              onSelectAction={handleSelectAction}
              onLeadFlowChoice={leadFlow.handleChoice}
              onClose={closePanel}
              onMinimize={closePanel}
              titleId={titleId}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showTeaser && (
          <ChatTeaser
            key={pathname}
            message={teaserMessage}
            onOpen={openChat}
            onDismiss={handleTeaserDismiss}
            prefersReducedMotion={prefersReducedMotion}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isOpen && (
          <motion.button
            ref={launcherRef}
            key="launcher"
            type="button"
            onClick={openChat}
            initial={visualQa ? false : { opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={
              visualQa
                ? { duration: 0 }
                : { duration: 0.2, ease: "easeOut" }
            }
            whileHover={prefersReducedMotion ? undefined : { scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            aria-label="Open Claims Ninja AI chat"
            aria-expanded={isOpen}
            data-visual-qa-launcher={visualQa ? "true" : undefined}
            className={`group pointer-events-auto fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] inline-flex h-14 w-14 items-center justify-center rounded-full border border-brand-red/45 bg-gradient-to-br from-[#e02828] to-brand-red-deep text-white shadow-[0_8px_32px_-12px_rgba(224,40,40,0.55)] ring-1 ring-white/15 transition-shadow hover:border-brand-red/58 hover:shadow-[0_10px_36px_-10px_rgba(224,40,40,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red-light focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black${launcherPulse && showTeaser && !prefersReducedMotion ? " ring-2 ring-brand-red/38 shadow-[0_10px_36px_-8px_rgba(224,40,40,0.55)] motion-reduce:ring-1" : ""}${visualQa ? " !bottom-[17px] !right-[9px] !h-[38px] !w-[38px] !shadow-none !ring-0 !border-brand-red/50" : ""}`}
          >
            <span
              aria-hidden
              className="absolute inset-0 rounded-full bg-brand-red/30 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100 motion-reduce:hidden"
            />
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className={`relative ${visualQa ? "h-4 w-4" : "h-6 w-6"}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v9a1.5 1.5 0 0 1-1.5 1.5H9l-4 3.5V16H5.5A1.5 1.5 0 0 1 4 14.5v-9Z" />
              <path d="M8.5 9.5h7M8.5 12h4.5" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
