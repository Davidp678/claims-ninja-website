import type { Locale } from "@/lib/i18n/config";

export type MarketingCtaContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
};

export type CommonContent = {
  preferToTalk: string;
  scheduleStrategyCall: string;
  beginClaimIntake: string;
  scheduleStrategyCallCta: string;
  marketingCta: MarketingCtaContent;
  faq: {
    title: string;
    /** Rendered as `${answersAbout} ${topic}.` */
    answersAbout: string;
    viewAll: string;
  };
};

const EN: CommonContent = {
  preferToTalk: "Prefer to talk first?",
  scheduleStrategyCall: "Schedule a strategy call",
  beginClaimIntake: "Begin Claim Intake",
  scheduleStrategyCallCta: "Schedule Strategy Call",
  marketingCta: {
    eyebrow: "Ready when you are",
    title: "Start with a free claim review",
    description:
      "Tell us about your operation. We'll assess your claim workflow, identify recovery opportunities, and outline next steps.",
    primaryCta: "Begin Claim Intake",
    secondaryCta: "Schedule Strategy Call",
  },
  faq: {
    title: "Frequently Asked Questions",
    answersAbout: "Answers to common questions about",
    viewAll: "View the full FAQ library →",
  },
};

const ES: CommonContent = {
  preferToTalk: "¿Prefiere hablar primero?",
  scheduleStrategyCall: "Agende una llamada estratégica",
  beginClaimIntake: "Iniciar ingreso de reclamación",
  scheduleStrategyCallCta: "Agendar llamada estratégica",
  marketingCta: {
    eyebrow: "Listos cuando usted lo esté",
    title: "Comience con una revisión de reclamación gratuita",
    description:
      "Cuéntenos sobre su operación. Evaluaremos su flujo de reclamaciones, identificaremos oportunidades de recuperación y trazaremos los próximos pasos.",
    primaryCta: "Iniciar ingreso de reclamación",
    secondaryCta: "Agendar llamada estratégica",
  },
  faq: {
    title: "Preguntas frecuentes",
    answersAbout: "Respuestas a preguntas comunes sobre",
    viewAll: "Ver la biblioteca completa de preguntas frecuentes →",
  },
};

const COMMON_CONTENT: Record<Locale, CommonContent> = { en: EN, es: ES };

export function getCommonContent(locale: Locale): CommonContent {
  return COMMON_CONTENT[locale] ?? EN;
}
