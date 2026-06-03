import { MAX_CHAT_CONTEXT_MESSAGES } from "@/lib/chatbot/chat-limits";
import { isQuickActionId } from "./quick-actions";
import type { AssistantReply, ChatMessage, QuickActionId } from "./types";

const MAX_HISTORY_MESSAGES = MAX_CHAT_CONTEXT_MESSAGES;

function buildHistoryPayload(
  messages: Pick<ChatMessage, "role" | "content">[],
): Pick<ChatMessage, "role" | "content">[] {
  return messages
    .filter((msg) => msg.content.trim().length > 0)
    .slice(-MAX_HISTORY_MESSAGES);
}

function sanitizeFollowUps(followUps: unknown): QuickActionId[] | undefined {
  if (!Array.isArray(followUps)) {
    return undefined;
  }
  const valid = followUps.filter(isQuickActionId);
  return valid.length > 0 ? valid : undefined;
}

function isAssistantReply(value: unknown): value is AssistantReply {
  if (value === null || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }
  const record = value as Record<string, unknown>;
  return typeof record.content === "string" && record.content.trim().length > 0;
}

/**
 * Request an AI reply from POST /api/chat. Returns null on any failure so the
 * caller can fall back to the local getAssistantReply engine.
 */
export async function fetchAssistantReply(
  message: string,
  history: Pick<ChatMessage, "role" | "content">[],
  signal?: AbortSignal,
): Promise<AssistantReply | null> {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message,
        history: buildHistoryPayload(history),
      }),
      signal,
    });

    if (!response.ok) {
      return null;
    }

    const data: unknown = await response.json();
    if (!isAssistantReply(data)) {
      return null;
    }

    return {
      content: data.content.trim(),
      followUps: sanitizeFollowUps(data.followUps),
    };
  } catch {
    return null;
  }
}
