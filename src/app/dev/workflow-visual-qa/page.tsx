import { notFound } from "next/navigation";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WorkflowVisualQaChrome } from "./WorkflowVisualQaChrome";

export const dynamic = "force-dynamic";

/**
 * Local/non-production harness for pixel comparison against the 1024×467 mock.
 * Not linked from the public site.
 */
export default function WorkflowVisualQaPage() {
  const allow =
    process.env.NODE_ENV !== "production" ||
    process.env.ALLOW_WORKFLOW_VISUAL_QA === "1";
  if (!allow) notFound();

  return (
    <div className="min-h-screen bg-[#101010] text-white">
      <WorkflowVisualQaChrome />
      <div className="flex min-h-screen items-start justify-center">
        <ProcessSection referenceMode />
      </div>
    </div>
  );
}
