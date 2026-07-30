"use client";

import { useEffect } from "react";
import { ChatWidget } from "@/components/chatbot/ChatWidget";

/**
 * Forces deterministic capture conditions for the workflow mock QA harness.
 */
export function WorkflowVisualQaChrome() {
  useEffect(() => {
    document.documentElement.setAttribute("data-visual-qa", "1");
    document.documentElement.classList.add("motion-reduce");
    return () => {
      document.documentElement.removeAttribute("data-visual-qa");
      document.documentElement.classList.remove("motion-reduce");
    };
  }, []);

  return <ChatWidget visualQa />;
}
