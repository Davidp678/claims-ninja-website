import { NextResponse } from "next/server";

import {
  ChatOpenAIConfigError,
  ChatOpenAIError,
} from "@/lib/chatbot/chat-openai";
import { handleChatRequest, validateChatRequest } from "@/lib/chatbot/chat-api";

export const runtime = "nodejs";
export const maxDuration = 30;

export async function POST(request: Request) {
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON body.", code: "INVALID_REQUEST" },
        { status: 400 },
      );
    }

    const validated = validateChatRequest(body);
    if (!validated.ok) {
      return NextResponse.json(
        { error: validated.reason, code: "INVALID_REQUEST" },
        { status: 400 },
      );
    }

    const reply = await handleChatRequest(validated.data);
    return NextResponse.json(reply);
  } catch (err) {
    if (err instanceof ChatOpenAIConfigError) {
      console.error("[api/chat] OpenAI config:", err.message);
      return NextResponse.json(
        { error: "Chat is not configured.", code: err.code },
        { status: 503 },
      );
    }
    if (err instanceof ChatOpenAIError) {
      console.error("[api/chat] OpenAI chat:", err.message);
      return NextResponse.json(
        { error: "Failed to generate response.", code: err.code },
        { status: 502 },
      );
    }

    console.error("[api/chat] Unhandled error:", err);
    return NextResponse.json(
      { error: "Internal server error.", code: "INTERNAL" },
      { status: 500 },
    );
  }
}
