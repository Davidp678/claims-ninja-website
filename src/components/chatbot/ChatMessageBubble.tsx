"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import type { ChatMessage } from "./types";

type ChatMessageBubbleProps = {
  message: ChatMessage;
};

function MessageContent({ content }: { content: string }) {
  const paragraphs = content.split(/\n\n+/);

  return (
    <div className="space-y-2">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="whitespace-pre-line">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export function ChatMessageBubble({ message }: ChatMessageBubbleProps) {
  const isAssistant = message.role === "assistant";
  const prefersReducedMotion = useReducedMotion();

  const bubbleClasses = cn(
    "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed sm:max-w-[92%]",
    isAssistant
      ? "rounded-tl-sm border border-white/14 bg-zinc-800/95 text-zinc-100 shadow-[0_6px_20px_-14px_rgba(0,0,0,0.75)] ring-1 ring-brand-red/18"
      : "rounded-tr-sm bg-gradient-to-br from-brand-red to-brand-red-deep text-white shadow-[0_8px_24px_-14px_rgba(220,38,38,0.72)]",
  );

  const layoutClasses = cn(
    "flex w-full",
    isAssistant ? "justify-start" : "justify-end",
  );

  if (prefersReducedMotion) {
    return (
      <div className={layoutClasses}>
        <div className={bubbleClasses}>
          <MessageContent content={message.content} />
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className={layoutClasses}
    >
      <div className={bubbleClasses}>
        <MessageContent content={message.content} />
      </div>
    </motion.div>
  );
}
