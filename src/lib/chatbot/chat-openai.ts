import "server-only";

import OpenAI from "openai";
import type { ChatCompletionMessageParam } from "openai/resources/chat/completions";

import { buildChatSystemPrompt } from "./chat-system-prompt";
import {
  MAX_CHAT_CONTEXT_MESSAGES,
  MAX_CHAT_MESSAGE_CHARS,
} from "./chat-limits";

export class ChatOpenAIConfigError extends Error {
  readonly code = "CHAT_OPENAI_CONFIG" as const;

  constructor(message: string) {
    super(message);
    this.name = "ChatOpenAIConfigError";
  }
}

export class ChatOpenAIError extends Error {
  readonly code = "CHAT_OPENAI_FAILED" as const;

  constructor(message: string, options?: { cause?: unknown }) {
    super(message, options);
    this.name = "ChatOpenAIError";
  }
}

export type ChatHistoryMessage = {
  role: "user" | "assistant";
  content: string;
};

const MAX_HISTORY_MESSAGES = MAX_CHAT_CONTEXT_MESSAGES;
const MAX_MESSAGE_CHARS = MAX_CHAT_MESSAGE_CHARS;

function createOpenAIClient(): OpenAI {
  const key = process.env.OPENAI_API_KEY?.trim();
  if (!key) {
    throw new ChatOpenAIConfigError("OPENAI_API_KEY is missing.");
  }
  return new OpenAI({ apiKey: key });
}

export function getChatModel(): string {
  return (
    process.env.OPENAI_CHAT_MODEL?.trim() ||
    process.env.OPENAI_MODEL?.trim() ||
    "gpt-4o-mini"
  );
}

function truncateContent(content: string): string {
  const trimmed = content.trim();
  if (trimmed.length <= MAX_MESSAGE_CHARS) {
    return trimmed;
  }
  return `${trimmed.slice(0, MAX_MESSAGE_CHARS)}…`;
}

function trimHistory(history: ChatHistoryMessage[]): ChatHistoryMessage[] {
  return history
    .filter((msg) => msg.content.trim().length > 0)
    .slice(-MAX_HISTORY_MESSAGES)
    .map((msg) => ({
      role: msg.role,
      content: truncateContent(msg.content),
    }));
}

export type RunChatCompletionInput = {
  message: string;
  history?: ChatHistoryMessage[];
  siteContext?: string;
};

export async function runChatCompletion(
  input: RunChatCompletionInput,
): Promise<{ content: string }> {
  const client = createOpenAIClient();
  const message = truncateContent(input.message);
  const history = trimHistory(input.history ?? []);

  const messages: ChatCompletionMessageParam[] = [
    { role: "system", content: buildChatSystemPrompt(input.siteContext) },
    ...history.map(
      (msg): ChatCompletionMessageParam => ({
        role: msg.role,
        content: msg.content,
      }),
    ),
    { role: "user", content: message },
  ];

  try {
    const completion = await client.chat.completions.create({
      model: getChatModel(),
      messages,
      max_tokens: 500,
      temperature: 0.4,
    });

    const content = completion.choices[0]?.message?.content?.trim();
    if (!content) {
      throw new ChatOpenAIError("Empty response from language model.");
    }

    return { content };
  } catch (err) {
    if (err instanceof ChatOpenAIConfigError) {
      throw err;
    }
    if (err instanceof ChatOpenAIError) {
      throw err;
    }
    console.error("[chat-openai] Completion failed:", err);
    throw new ChatOpenAIError("Chat completion request failed.", { cause: err });
  }
}
