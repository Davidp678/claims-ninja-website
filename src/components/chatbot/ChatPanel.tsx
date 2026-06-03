"use client";

import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
  type RefObject,
} from "react";
import { MAX_CHAT_MESSAGE_CHARS } from "@/lib/chatbot/chat-limits";
import { ChatMessageBubble } from "./ChatMessageBubble";
import { LeadFlowChoiceRow } from "./LeadFlowChoiceRow";
import { QuickActionRow } from "./QuickActionRow";
import { TypingIndicator } from "./TypingIndicator";
import type { ChatMessage, QuickAction } from "./types";

type ChatPanelProps = {
  messages: ChatMessage[];
  isTyping: boolean;
  leadFlowActive?: boolean;
  isLeadSubmitting?: boolean;
  onSend: (text: string) => void;
  onSelectAction: (action: QuickAction) => void;
  onLeadFlowChoice: (value: string) => void;
  onClose: () => void;
  onMinimize: () => void;
  titleId: string;
};

export function ChatPanel({
  messages,
  isTyping,
  leadFlowActive = false,
  isLeadSubmitting = false,
  onSend,
  onSelectAction,
  onLeadFlowChoice,
  onClose,
  onMinimize,
  titleId,
}: ChatPanelProps) {
  const [draft, setDraft] = useState("");
  const scrollAnchorRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      scrollAnchorRef.current?.scrollIntoView({ block: "end", behavior: "smooth" });
    });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  const autoGrowTextarea = useCallback((node: HTMLTextAreaElement) => {
    node.style.height = "auto";
    node.style.height = `${Math.min(node.scrollHeight, 112)}px`;
  }, []);

  const handleDraftChange = (value: string) => {
    setDraft(value);
    if (inputRef.current) {
      autoGrowTextarea(inputRef.current);
    }
  };

  const inputDisabled = isTyping || isLeadSubmitting;

  const submit = () => {
    const text = draft.trim();
    if (!text || inputDisabled || text.length > MAX_CHAT_MESSAGE_CHARS) {
      return;
    }
    onSend(text);
    setDraft("");
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    submit();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      submit();
    }
  };

  const canSend =
    draft.trim().length > 0 &&
    draft.trim().length <= MAX_CHAT_MESSAGE_CHARS &&
    !inputDisabled;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="flex h-full w-full flex-col overflow-hidden border border-white/12 bg-brand-elevated/95 shadow-[0_24px_64px_-20px_rgba(0,0,0,0.92)] ring-1 ring-brand-red-light/22 backdrop-blur-xl sm:rounded-2xl"
    >
      <div className="flex shrink-0 flex-col sm:hidden">
        <div className="flex justify-center pt-2.5 pb-1">
          <div aria-hidden className="h-1 w-10 rounded-full bg-white/20" />
        </div>
      </div>

      <ChatHeader
        titleId={titleId}
        onClose={onClose}
        onMinimize={onMinimize}
        closeButtonRef={closeButtonRef}
      />

      <div className="flex-1 space-y-4 overflow-y-auto scroll-smooth px-4 py-5 pb-2">
        {messages.map((message) => (
          <div key={message.id} className="space-y-3">
            <ChatMessageBubble message={message} />
            {message.role === "assistant" && message.flowChoices?.length ? (
              <LeadFlowChoiceRow
                choices={message.flowChoices}
                onSelect={onLeadFlowChoice}
                disabled={inputDisabled}
                className="pl-1"
              />
            ) : null}
            {message.role === "assistant" &&
            message.actions?.length &&
            (!leadFlowActive || message.leadCaptureComplete) ? (
              <QuickActionRow
                actionIds={message.actions}
                onSelect={onSelectAction}
                className="pl-1"
              />
            ) : null}
          </div>
        ))}

        <AnimatePresence>
          {(isTyping || isLeadSubmitting) && <TypingIndicator />}
        </AnimatePresence>
        <div ref={scrollAnchorRef} aria-hidden className="h-px shrink-0" />
      </div>

      <form
        onSubmit={handleSubmit}
        className="shrink-0 border-t border-white/10 bg-brand-black/40 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:pb-3"
      >
        <div className="flex items-end gap-2 rounded-xl border border-white/12 bg-brand-surface/80 px-3 py-2 focus-within:border-brand-red-light/60 focus-within:ring-1 focus-within:ring-brand-red-light/38">
          <label htmlFor="claims-ninja-chat-input" className="sr-only">
            Message Claims Ninja AI
          </label>
          <textarea
            id="claims-ninja-chat-input"
            ref={inputRef}
            value={draft}
            onChange={(event) => handleDraftChange(event.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
            maxLength={MAX_CHAT_MESSAGE_CHARS}
            disabled={inputDisabled}
            placeholder={
              isLeadSubmitting
                ? "Sending your info…"
                : leadFlowActive
                  ? "Answer above, or type skip / cancel…"
                  : isTyping
                    ? "Claims Ninja AI is responding…"
                    : "Ask about pricing, supplements, or getting started…"
            }
            className="max-h-28 min-h-[1.5rem] flex-1 resize-none bg-transparent py-1 text-sm text-white placeholder:text-text-muted-subtle focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={!canSend}
            aria-label="Send message"
            aria-disabled={!canSend}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-red-light text-white shadow-[0_6px_18px_-10px_rgba(239,68,68,0.85)] ring-1 ring-white/15 transition-all duration-200 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red-light disabled:cursor-not-allowed disabled:opacity-45"
          >
            <svg
              aria-hidden
              viewBox="0 0 20 20"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 10 14-6-6 14-2.5-5.5L3 10Z" />
            </svg>
          </button>
        </div>
        <p className="mt-2 px-1 text-center text-[10px] leading-tight text-text-muted-subtle">
          Claims Ninja AI provides general guidance, not final legal or coverage
          determinations.
        </p>
      </form>
    </div>
  );
}

type ChatHeaderProps = {
  titleId: string;
  onClose: () => void;
  onMinimize: () => void;
  closeButtonRef: RefObject<HTMLButtonElement | null>;
};

function ChatHeader({ titleId, onClose, onMinimize, closeButtonRef }: ChatHeaderProps) {
  return (
    <header className="flex shrink-0 items-center gap-3 border-t border-brand-red-light/42 border-b border-b-white/10 bg-gradient-to-r from-brand-red-light/22 via-brand-elevated to-brand-elevated px-4 py-3.5 sm:border-t-0">
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-brand-red-light/50 bg-brand-black shadow-[0_0_14px_-4px_rgba(239,68,68,0.55)] ring-1 ring-white/10">
        <Image
          src="/logo.png"
          alt=""
          width={40}
          height={40}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="min-w-0 flex-1">
        <h2
          id={titleId}
          className="font-display text-sm font-semibold tracking-tight text-white"
        >
          Claims Ninja AI
        </h2>
        <p className="flex items-center gap-1.5 text-xs text-text-muted-subtle">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60 motion-reduce:hidden" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400/90" />
          </span>
          Online now
        </p>
      </div>
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={onMinimize}
          aria-label="Minimize chat"
          className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-zinc-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red-light focus-visible:ring-offset-2 focus-visible:ring-offset-brand-elevated"
        >
          <svg
            aria-hidden
            viewBox="0 0 16 16"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <path d="M3.5 8h9" />
          </svg>
        </button>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close chat"
          className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-zinc-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red-light focus-visible:ring-offset-2 focus-visible:ring-offset-brand-elevated"
        >
          <svg
            aria-hidden
            viewBox="0 0 16 16"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <path d="m4 4 8 8M12 4l-8 8" />
          </svg>
        </button>
      </div>
    </header>
  );
}
