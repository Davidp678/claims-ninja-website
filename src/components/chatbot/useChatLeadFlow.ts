"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import {
  advanceLeadFlow,
  applyLeadFlowChoice,
  buildChatbotLeadPayload,
  buildConversationSummary,
  startLeadFlow,
} from "./chat-lead-flow";
import { submitChatbotLead } from "./chat-lead-client";
import type { LeadFlowChoice, LeadFlowDraft, LeadFlowStep } from "./chat-lead-types";
import {
  EMPTY_LEAD_DRAFT,
  LEAD_SUCCESS_FOLLOW_UPS,
  LEAD_SUCCESS_MESSAGE,
} from "./chat-lead-types";
import type { ChatMessage, QuickActionId } from "./types";

type UseChatLeadFlowOptions = {
  createId: () => string;
  onAppendUser: (message: ChatMessage) => void;
  onAppendAssistant: (message: ChatMessage) => void;
  getConversationMessages: () => ChatMessage[];
};

function assistantMessage(
  createId: () => string,
  content: string,
  options?: {
    choices?: LeadFlowChoice[];
    actions?: QuickActionId[];
    leadCaptureComplete?: boolean;
  },
): ChatMessage {
  return {
    id: createId(),
    role: "assistant",
    content,
    createdAt: Date.now(),
    flowChoices: options?.choices,
    actions: options?.actions,
    leadCaptureComplete: options?.leadCaptureComplete,
  };
}

export function useChatLeadFlow({
  createId,
  onAppendUser,
  onAppendAssistant,
  getConversationMessages,
}: UseChatLeadFlowOptions) {
  const [step, setStep] = useState<LeadFlowStep>("idle");
  const [draft, setDraft] = useState<LeadFlowDraft>({ ...EMPTY_LEAD_DRAFT });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const draftRef = useRef(draft);
  const stepRef = useRef(step);

  useEffect(() => {
    draftRef.current = draft;
    stepRef.current = step;
  }, [draft, step]);

  const isActive = step !== "idle" && step !== "success";

  const emitPrompt = useCallback(
    (result: ReturnType<typeof startLeadFlow>) => {
      if (result.kind !== "prompt" && result.kind !== "validation-error") {
        return;
      }
      onAppendAssistant(
        assistantMessage(createId, result.content, { choices: result.choices }),
      );
    },
    [createId, onAppendAssistant],
  );

  const start = useCallback(() => {
    const initial = startLeadFlow();
    setDraft({ ...EMPTY_LEAD_DRAFT });
    setStep("name");
    emitPrompt(initial);
  }, [emitPrompt]);

  const cancel = useCallback(() => {
    setDraft({ ...EMPTY_LEAD_DRAFT });
    setStep("idle");
    onAppendAssistant(
      assistantMessage(
        createId,
        "No problem — lead capture cancelled. Ask me anything about Claims Ninja, or tap Get Started when you're ready.",
      ),
    );
  }, [createId, onAppendAssistant]);

  const submitDraft = useCallback(
    async (currentDraft: LeadFlowDraft) => {
      setIsSubmitting(true);
      setStep("submitting");

      const summary = buildConversationSummary(
        getConversationMessages().map(({ role, content }) => ({ role, content })),
      );
      const payload = buildChatbotLeadPayload(currentDraft, summary);
      const result = await submitChatbotLead(payload);

      setIsSubmitting(false);

      if (!result.ok) {
        setStep("confirm");
        onAppendAssistant(
          assistantMessage(createId, `${result.error}\n\nReply confirm to try again.`),
        );
        return;
      }

      setStep("success");
      onAppendAssistant(
        assistantMessage(createId, LEAD_SUCCESS_MESSAGE, {
          actions: [...LEAD_SUCCESS_FOLLOW_UPS],
          leadCaptureComplete: true,
        }),
      );
    },
    [createId, getConversationMessages, onAppendAssistant],
  );

  const processInput = useCallback(
    (input: string) => {
      const currentStep = stepRef.current;
      const currentDraft = draftRef.current;

      if (currentStep === "idle" || currentStep === "success") {
        return false;
      }

      onAppendUser({
        id: createId(),
        role: "user",
        content: input,
        createdAt: Date.now(),
      });

      const outcome = advanceLeadFlow(currentStep, currentDraft, input);
      setDraft(outcome.draft);
      setStep(outcome.nextStep);

      if (outcome.result.kind === "cancelled") {
        setStep("idle");
        setDraft({ ...EMPTY_LEAD_DRAFT });
        cancel();
        return true;
      }

      if (outcome.result.kind === "ready-to-submit") {
        void submitDraft(outcome.draft);
        return true;
      }

      if (
        outcome.result.kind === "prompt" ||
        outcome.result.kind === "validation-error"
      ) {
        emitPrompt(outcome.result);
      }

      return true;
    },
    [cancel, createId, emitPrompt, onAppendUser, submitDraft],
  );

  const handleChoice = useCallback(
    (value: string) => {
      const currentStep = stepRef.current;
      const currentDraft = draftRef.current;

      if (currentStep === "idle" || currentStep === "success") {
        return false;
      }

      const choiceLabel =
        value === "__cancel__"
          ? "Cancel"
          : value === "__restart__"
            ? "Start over"
            : value;

      onAppendUser({
        id: createId(),
        role: "user",
        content: choiceLabel,
        createdAt: Date.now(),
      });

      const outcome = applyLeadFlowChoice(currentStep, currentDraft, value);
      setDraft(outcome.draft);
      setStep(outcome.nextStep);

      if (outcome.result.kind === "cancelled") {
        setStep("idle");
        setDraft({ ...EMPTY_LEAD_DRAFT });
        cancel();
        return true;
      }

      if (outcome.result.kind === "ready-to-submit") {
        void submitDraft(outcome.draft);
        return true;
      }

      if (
        outcome.result.kind === "prompt" ||
        outcome.result.kind === "validation-error"
      ) {
        emitPrompt(outcome.result);
      }

      return true;
    },
    [cancel, createId, emitPrompt, onAppendUser, submitDraft],
  );

  return {
    step,
    isActive,
    isSubmitting,
    start,
    cancel,
    processInput,
    handleChoice,
  };
}
