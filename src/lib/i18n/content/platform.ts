import type { Locale } from "@/lib/i18n/config";
import {
  PLATFORM_AI,
  PLATFORM_HERO,
  PLATFORM_PILLARS,
  PLATFORM_VISION,
} from "@/lib/platform-overview";
import { PLATFORM_NAV } from "@/lib/navigation";

type TitleDescription = { title: string; description: string };

export type PlatformModuleContent = {
  label: string;
  href: string;
  description: string;
};

export type PlatformContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    description: string;
    pillars: readonly TitleDescription[];
  };
  modulesSection: {
    eyebrow: string;
    title: string;
    description: string;
    exploreLabel: string;
    modules: readonly PlatformModuleContent[];
  };
  ai: {
    eyebrow: string;
    title: string;
    description: string;
    capabilities: readonly TitleDescription[];
    exploreLink: string;
  };
  vision: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly string[];
  };
};

const EN_MODULES = PLATFORM_NAV.filter((item) => item.href !== "/platform").map(
  (item) => ({
    label: item.label,
    href: item.href,
    description: item.description,
  }),
);

const EN: PlatformContent = {
  hero: {
    eyebrow: PLATFORM_HERO.eyebrow,
    title: PLATFORM_HERO.title,
    description: PLATFORM_HERO.description,
    primaryCta: "Start Claim Review",
    secondaryCta: "Schedule Strategy Call",
  },
  howItWorks: {
    eyebrow: "How it works",
    title: "Human expertise plus platform power",
    description:
      "Claims Ninja is not a tool waiting for adoption—it is the operational backbone contractors use today, backed by people who know carrier negotiation and supplement strategy.",
    pillars: PLATFORM_PILLARS,
  },
  modulesSection: {
    eyebrow: "Platform modules",
    title: "Every capability, one connected ecosystem",
    description:
      "Each module is live today and shares the same claim context—so your team, documents, and recovery workflows stay aligned from intake through payment.",
    exploreLabel: "Explore module →",
    modules: EN_MODULES,
  },
  ai: {
    eyebrow: PLATFORM_AI.eyebrow,
    title: PLATFORM_AI.title,
    description: PLATFORM_AI.description,
    capabilities: PLATFORM_AI.capabilities,
    exploreLink: "Explore AI Claim Analysis →",
  },
  vision: {
    eyebrow: PLATFORM_VISION.eyebrow,
    title: PLATFORM_VISION.title,
    description: PLATFORM_VISION.description,
    items: PLATFORM_VISION.items,
  },
};

const ES: PlatformContent = {
  hero: {
    eyebrow: "Plataforma",
    title: "La plataforma de operaciones de reclamaciones para contratistas",
    description:
      "Claims Ninja combina profesionales de suplementos con experiencia, una plataforma de gestión en vivo y una capa de inteligencia de IA en expansión, para que los equipos de restauración y techado gestionen las reclamaciones con el rigor de un departamento de operaciones dedicado.",
    primaryCta: "Iniciar revisión de reclamación",
    secondaryCta: "Agendar llamada estratégica",
  },
  howItWorks: {
    eyebrow: "Cómo funciona",
    title: "Experiencia humana más el poder de la plataforma",
    description:
      "Claims Ninja no es una herramienta esperando ser adoptada: es la columna vertebral operativa que los contratistas usan hoy, respaldada por personas que conocen la negociación con aseguradoras y la estrategia de suplementos.",
    pillars: [
      {
        title: "Apoyo experto en reclamaciones",
        description:
          "Profesionales de suplementos, apoyo en negociación y servicios de ajustador público cuando necesita asumir la reclamación por completo, sin formar un equipo interno.",
      },
      {
        title: "Tecnología de gestión de reclamaciones",
        description:
          "Portal del cliente, seguimiento de reclamaciones, gestión de documentos, comunicación en tiempo real, facturación y visibilidad del proyecto, operativos hoy en toda su cartera de negocios.",
      },
      {
        title: "Inteligencia de IA",
        description:
          "Evaluación asistida por IA, puntuación de oportunidades y análisis de alcance que aceleran la revisión experta y revelan el potencial de recuperación antes de dejar dinero sobre la mesa.",
      },
    ],
  },
  modulesSection: {
    eyebrow: "Módulos de la plataforma",
    title: "Cada capacidad, un ecosistema conectado",
    description:
      "Cada módulo está activo hoy y comparte el mismo contexto de reclamación, para que su equipo, sus documentos y sus flujos de recuperación se mantengan alineados desde el ingreso hasta el pago.",
    exploreLabel: "Explorar módulo →",
    modules: [
      {
        label: "Portal del cliente",
        href: "/platform/client-portal",
        description:
          "Gestione documentos, comunicación y la actividad del proyecto.",
      },
      {
        label: "Seguimiento de reclamaciones",
        href: "/platform/claim-tracking",
        description:
          "Supervise el estado de la reclamación y el progreso de la recuperación.",
      },
      {
        label: "Centro de comunicación",
        href: "/platform/communication-hub",
        description: "Colabore directamente con el equipo de Claims Ninja.",
      },
      {
        label: "Facturación y pagos",
        href: "/platform/billing-payments",
        description: "Gestione facturas y la facturación relacionada con reclamaciones.",
      },
      {
        label: "Análisis de reclamaciones con IA",
        href: "/platform/ai-claim-analysis",
        description:
          "Identifique oportunidades omitidas y el potencial de recuperación de la reclamación.",
      },
    ],
  },
  ai: {
    eyebrow: "Capa de inteligencia de IA",
    title: "Inteligencia construida sobre la plataforma que ya usa",
    description:
      "La IA no reemplaza a su equipo ni a nuestros expertos: los acelera. La inteligencia de Claims Ninja se ejecuta sobre los mismos expedientes, flujos de trabajo y contexto de reclamación que su operación usa todos los días.",
    capabilities: [
      {
        title: "Puntuación de oportunidades de recuperación",
        description:
          "Priorice las reclamaciones con mayor potencial de suplemento y aumento en toda su cartera.",
      },
      {
        title: "Detección de brechas de alcance",
        description:
          "Señale partidas y brechas de documentación comunes en los estimados de la aseguradora antes de presentarlos.",
      },
      {
        title: "Resultados validados por expertos",
        description:
          "La evaluación automática alimenta la revisión de especialistas; la estrategia final y la negociación siguen siendo dirigidas por personas.",
      },
    ],
    exploreLink: "Explorar el análisis de reclamaciones con IA →",
  },
  vision: {
    eyebrow: "Expansión del ecosistema",
    title: "Una plataforma que crece con su operación",
    description:
      "Claims Ninja está expandiendo activamente el ecosistema que usa hoy, no una diapositiva de hoja de ruta. Las nuevas capacidades se suman a la misma base de portal, seguimiento y comunicación.",
    items: [
      "Motor de inteligencia de reclamaciones para el reconocimiento de patrones en toda su cartera",
      "Puntuación de oportunidades de recuperación integrada con el ingreso y el seguimiento",
      "Sistema operativo de reclamaciones que unifica los flujos de trabajo de campo, oficina y expertos",
      "Reemplazo de CRM diseñado específicamente para las operaciones de reclamaciones de contratistas",
    ],
  },
};

const PLATFORM_CONTENT: Record<Locale, PlatformContent> = { en: EN, es: ES };

export function getPlatformContent(locale: Locale): PlatformContent {
  return PLATFORM_CONTENT[locale] ?? EN;
}
