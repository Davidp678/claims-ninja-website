import "server-only";

import { getAssistantReply } from "@/components/chatbot/chat-responses";
import { capFollowUps } from "@/components/chatbot/chat-match";
import type { AssistantReply } from "@/components/chatbot/types";
import {
  MAX_CHAT_HISTORY_ITEMS,
  MAX_CHAT_MESSAGE_CHARS,
} from "@/lib/chatbot/chat-limits";

import { retrieveKnowledgeSnippets } from "./chat-knowledge-retrieval";
import { runChatCompletion, type ChatHistoryMessage } from "./chat-openai";

export type ChatApiRequest = {
  message: string;
  history?: ChatHistoryMessage[];
};

export type ValidateChatRequestResult =
  | { ok: true; data: ChatApiRequest }
  | { ok: false; reason: string };

const MAX_MESSAGE_CHARS = MAX_CHAT_MESSAGE_CHARS;
const MAX_HISTORY_ITEMS = MAX_CHAT_HISTORY_ITEMS;

function isChatRole(value: unknown): value is "user" | "assistant" {
  return value === "user" || value === "assistant";
}

export function validateChatRequest(body: unknown): ValidateChatRequestResult {
  if (body === null || typeof body !== "object" || Array.isArray(body)) {
    return { ok: false, reason: "Request body must be a JSON object." };
  }

  const record = body as Record<string, unknown>;

  if (typeof record.message !== "string") {
    return { ok: false, reason: "message must be a string." };
  }

  const message = record.message.trim();
  if (message.length === 0) {
    return { ok: false, reason: "message cannot be empty." };
  }
  if (message.length > MAX_MESSAGE_CHARS) {
    return { ok: false, reason: "message exceeds maximum length." };
  }

  let history: ChatHistoryMessage[] | undefined;

  if (record.history !== undefined) {
    if (!Array.isArray(record.history)) {
      return { ok: false, reason: "history must be an array." };
    }
    if (record.history.length > MAX_HISTORY_ITEMS) {
      return { ok: false, reason: "history exceeds maximum length." };
    }

    history = [];
    for (const item of record.history) {
      if (item === null || typeof item !== "object" || Array.isArray(item)) {
        return { ok: false, reason: "Each history item must be an object." };
      }
      const entry = item as Record<string, unknown>;
      if (!isChatRole(entry.role)) {
        return { ok: false, reason: "history role must be user or assistant." };
      }
      if (typeof entry.content !== "string") {
        return { ok: false, reason: "history content must be a string." };
      }
      const content = entry.content.trim();
      if (content.length === 0) {
        return { ok: false, reason: "history content cannot be empty." };
      }
      if (content.length > MAX_MESSAGE_CHARS) {
        return { ok: false, reason: "history content exceeds maximum length." };
      }
      history.push({ role: entry.role, content });
    }
  }

  return {
    ok: true,
    data: { message, history },
  };
}

function assembleFollowUps(message: string): AssistantReply["followUps"] {
  const local = getAssistantReply(message);
  return capFollowUps(local.followUps);
}

export async function handleChatRequest(
  request: ChatApiRequest,
): Promise<AssistantReply> {
  const { formatted } = retrieveKnowledgeSnippets(request.message);
  const { content } = await runChatCompletion({
    message: request.message,
    history: request.history,
    siteContext: formatted || undefined,
  });

  return {
    content,
    followUps: assembleFollowUps(request.message),
  };
}
