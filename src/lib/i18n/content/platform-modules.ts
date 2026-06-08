import type { Locale } from "@/lib/i18n/config";
import {
  CLIENT_PORTAL_CAPABILITIES,
  CLIENT_PORTAL_CTA,
  CLIENT_PORTAL_FIELD,
  CLIENT_PORTAL_HERO,
  CLIENT_PORTAL_TRUST,
  CLIENT_PORTAL_WORKFLOW,
} from "@/lib/client-portal-page";
import { AI_CLAIM_WORKFLOW } from "@/lib/ai-claim-analysis-page";
import {
  aiClaimAnalysisPage,
  billingPaymentsPage,
  claimTrackingPage,
  communicationHubPage,
} from "@/lib/marketing-pages";

type TitleDescription = { title: string; description: string };
type HeroContent = { eyebrow: string; title: string; description: string };
type SectionContent = HeroContent;
type WorkflowStep = { step: string; title: string; description: string };
type WorkflowContent = SectionContent & {
  steps: readonly WorkflowStep[];
};
type CapabilitiesContent = SectionContent & {
  items: readonly TitleDescription[];
};
type FieldContent = SectionContent & {
  body: string;
  points: readonly string[];
};
type TrustContent = SectionContent & {
  roles: readonly string[];
  closing: string;
};
type CtaContent = SectionContent;
type AiWorkflowCard = { title: string; items: readonly string[] };
type AiWorkflowContent = SectionContent & {
  cards: readonly AiWorkflowCard[];
};

export type PlatformModulePageContent = {
  hero: HeroContent;
  features: readonly TitleDescription[];
  videoTitle: string;
};

export type ClientPortalContent = {
  hero: HeroContent;
  capabilities: CapabilitiesContent;
  workflow: WorkflowContent;
  field: FieldContent;
  trust: TrustContent;
  cta: CtaContent;
};

export type AiClaimAnalysisContent = {
  hero: HeroContent;
  features: readonly TitleDescription[];
  workflow: AiWorkflowContent;
};

type PlatformModulesContent = {
  clientPortal: ClientPortalContent;
  claimTracking: PlatformModulePageContent;
  communicationHub: PlatformModulePageContent;
  billingPayments: PlatformModulePageContent;
  aiClaimAnalysis: AiClaimAnalysisContent;
};

const EN: PlatformModulesContent = {
  clientPortal: {
    hero: CLIENT_PORTAL_HERO,
    capabilities: CLIENT_PORTAL_CAPABILITIES,
    workflow: CLIENT_PORTAL_WORKFLOW,
    field: CLIENT_PORTAL_FIELD,
    trust: CLIENT_PORTAL_TRUST,
    cta: CLIENT_PORTAL_CTA,
  },
  claimTracking: {
    hero: {
      eyebrow: claimTrackingPage.eyebrow,
      title: claimTrackingPage.title,
      description: claimTrackingPage.description,
    },
    features: claimTrackingPage.features,
    videoTitle: "Claim tracking demo",
  },
  communicationHub: {
    hero: {
      eyebrow: communicationHubPage.eyebrow,
      title: communicationHubPage.title,
      description: communicationHubPage.description,
    },
    features: communicationHubPage.features,
    videoTitle: "Communication hub demo",
  },
  billingPayments: {
    hero: {
      eyebrow: billingPaymentsPage.eyebrow,
      title: billingPaymentsPage.title,
      description: billingPaymentsPage.description,
    },
    features: billingPaymentsPage.features,
    videoTitle: "Billing and payments demo",
  },
  aiClaimAnalysis: {
    hero: {
      eyebrow: aiClaimAnalysisPage.eyebrow,
      title: aiClaimAnalysisPage.title,
      description: aiClaimAnalysisPage.description,
    },
    features: aiClaimAnalysisPage.features,
    workflow: AI_CLAIM_WORKFLOW,
  },
};

const ES: PlatformModulesContent = {
  clientPortal: {
    hero: {
      eyebrow: "Portal del cliente",
      title: "Su centro de operaciones de reclamaciones",
      description:
        "Los contratistas obtienen un espacio centralizado para enviar documentos de reclamación, comunicarse con el equipo de Claims Ninja, monitorear el progreso del proyecto y mantener la actividad de reclamaciones organizada desde la admisión hasta la recuperación.",
    },
    capabilities: {
      eyebrow: "Capacidades del portal",
      title: "Todo lo que su equipo de reclamaciones necesita en un solo lugar",
      description:
        "El Portal del Cliente está activo hoy, diseñado para equipos de restauración y techado que necesitan claridad operativa, no otro buzón que administrar.",
      items: [
        {
          title: "Carga de documentos",
          description:
            "Envíe fotos, estimados, alcances y correspondencia de la aseguradora directamente al expediente de la reclamación, sin adjuntos perdidos ni cargas duplicadas.",
        },
        {
          title: "Gestión del expediente de reclamación",
          description:
            "Cada trabajo permanece organizado con un espacio dedicado para que las cuadrillas de campo y el personal de oficina trabajen siempre con la misma fuente de verdad.",
        },
        {
          title: "Comunicación en tiempo real",
          description:
            "Envíe mensajes al equipo de Claims Ninja dentro del portal para que las conversaciones permanezcan vinculadas a la reclamación, no enterradas en correos o cadenas de texto.",
        },
        {
          title: "Seguimiento de proyectos",
          description:
            "Monitoree hitos, solicitudes abiertas y actividad de reclamaciones para saber qué avanza, qué espera y qué requiere su atención.",
        },
        {
          title: "Visibilidad de facturación",
          description:
            "Mantenga facturas, estado de pagos y facturación relacionada con la reclamación conectados al trabajo para que finanzas y operaciones estén alineados.",
        },
        {
          title: "Colaboración en equipo",
          description:
            "Ofrezca a las cuadrillas de campo, gerentes de proyecto y liderazgo la visibilidad adecuada para que todos se coordinen sin pisarse.",
        },
      ],
    },
    workflow: {
      eyebrow: "Cómo lo usan los contratistas",
      title: "Desde la carga de documentos hasta la recuperación, en un solo flujo",
      description:
        "Un flujo operativo directo, diseñado para cuadrillas y equipos de oficina que necesitan mantener los trabajos en movimiento mientras Claims Ninja gestiona el apoyo de reclamaciones.",
      steps: [
        {
          step: "01",
          title: "Envíe documentos de reclamación",
          description:
            "Cargue alcances, fotos, estimados y documentación de la aseguradora al expediente para que nuestro equipo tenga todo lo necesario para comenzar.",
        },
        {
          step: "02",
          title: "Colabore con Claims Ninja",
          description:
            "Comuníquese directamente en el portal: haga preguntas, responda solicitudes y mantenga cada intercambio vinculado al trabajo.",
        },
        {
          step: "03",
          title: "Haga seguimiento del progreso y las solicitudes",
          description:
            "Vea la actividad de reclamaciones, elementos abiertos y actualizaciones del proyecto en tiempo real para que nada se detenga entre campo, oficina y nuestro equipo.",
        },
        {
          step: "04",
          title: "Revise resultados y facturación",
          description:
            "Manténgase informado sobre resultados de suplementos, aprobaciones y estado de facturación a medida que la reclamación avanza hacia la recuperación y el pago.",
        },
      ],
    },
    field: {
      eyebrow: "Diseñado para el campo",
      title: "Hecho para contratistas, no para trabajo de escritorio",
      description:
        "Los contratistas no deberían tener que gestionar reclamaciones entre hilos de correo, carpetas aleatorias, mensajes de texto y hojas de cálculo.",
      body: "El Portal del Cliente centraliza el flujo de reclamaciones para que las cuadrillas y los equipos de oficina sigan avanzando mientras Claims Ninja gestiona el proceso de apoyo.",
      points: [
        "Deje de perseguir documentos entre buzones y unidades compartidas",
        "Ofrezca a las cuadrillas de campo una forma sencilla de enviar lo que aseguradoras y ajustadores necesitan",
        "Mantenga al personal de oficina alineado sobre el estado sin llamadas de seguimiento constantes",
        "Conecte la actividad de reclamaciones con la facturación y los flujos de proyecto en un solo lugar",
      ],
    },
    trust: {
      eyebrow: "Operaciones respaldadas por expertos",
      title: "Organizado por el portal. Impulsado por expertos reales en reclamaciones.",
      description:
        "El portal mantiene todo organizado. El equipo de Claims Ninja hace el trabajo pesado.",
      roles: [
        "Redactores de estimados que construyen documentación lista para la aseguradora",
        "Especialistas en suplementos que identifican y persiguen oportunidades de recuperación",
        "Coordinadores de reclamaciones que mantienen los expedientes avanzando en cada etapa",
        "Apoyo de ajustador público cuando se requiere propiedad total de la reclamación",
      ],
      closing:
        "El software no reemplaza a profesionales experimentados en reclamaciones: le da a su operación un solo lugar para trabajar con ellos.",
    },
    cta: {
      eyebrow: "Comience",
      title: "¿Listo para poner orden en su flujo de reclamaciones?",
      description:
        "Comience con un ingreso de reclamación o agende una llamada estratégica. Le mostraremos cómo el portal encaja en su operación.",
    },
  },
  claimTracking: {
    hero: {
      eyebrow: "Plataforma",
      title: "Seguimiento de reclamaciones",
      description:
        "Monitoree cada reclamación desde la admisión hasta el suplemento, la negociación y el pago, con estado claro en cada etapa.",
    },
    features: [
      {
        title: "Visibilidad del pipeline",
        description:
          "Vea reclamaciones abiertas, grupos de antigüedad y etapas de recuperación en toda su organización.",
      },
      {
        title: "Métricas de recuperación",
        description:
          "Haga seguimiento del incremento, resultados de suplementos y tiempo de ciclo para mejorar las operaciones.",
      },
      {
        title: "Hitos de la aseguradora",
        description:
          "Sepa cuándo vencen o están atrasadas las inspecciones, revisiones y aprobaciones.",
      },
      {
        title: "Responsabilidad del equipo",
        description:
          "Asigne responsables para que nada se detenga entre campo, oficina y apoyo de reclamaciones.",
      },
    ],
    videoTitle: "Demostración de seguimiento de reclamaciones",
  },
  communicationHub: {
    hero: {
      eyebrow: "Plataforma",
      title: "Centro de comunicación",
      description:
        "Colabore directamente con el equipo de Claims Ninja y mantenga las conversaciones de reclamaciones vinculadas al trabajo.",
    },
    features: [
      {
        title: "Contexto de reclamación en hilos",
        description:
          "Los mensajes permanecen adjuntos al trabajo, no se pierden en buzones genéricos.",
      },
      {
        title: "Respuestas más rápidas",
        description:
          "Obtenga respuestas de expertos en suplementos sin perseguir actualizaciones de estado.",
      },
      {
        title: "Notas internas y externas",
        description:
          "Separe las actualizaciones para contratistas de la estrategia sensible ante la aseguradora.",
      },
      {
        title: "Historial listo para auditoría",
        description:
          "Mantenga un registro de decisiones y comunicaciones para la revisión del liderazgo.",
      },
    ],
    videoTitle: "Demostración del centro de comunicación",
  },
  billingPayments: {
    hero: {
      eyebrow: "Plataforma",
      title: "Facturación y pagos",
      description:
        "Gestione facturas, estructuras de tarifas y facturación relacionada con reclamaciones con claridad para finanzas y operaciones.",
    },
    features: [
      {
        title: "Visibilidad de facturas",
        description:
          "Vea qué está facturado, pendiente y pagado por reclamación o contrato.",
      },
      {
        title: "Modelos de tarifas predecibles",
        description:
          "Alinee la facturación con su estructura de asociación y volumen.",
      },
      {
        title: "Exportaciones para finanzas",
        description:
          "Apoye los flujos contables con registros de pago organizados.",
      },
      {
        title: "Menos sorpresas en facturación",
        description:
          "Partidas transparentes vinculadas a la actividad de reclamaciones y entregables.",
      },
    ],
    videoTitle: "Demostración de facturación y pagos",
  },
  aiClaimAnalysis: {
    hero: {
      eyebrow: "Plataforma",
      title: "Análisis de reclamaciones con IA",
      description:
        "Identifique oportunidades perdidas y potencial de recuperación con triaje asistido por IA antes de la revisión experta.",
    },
    features: [
      {
        title: "Puntuación de oportunidades",
        description:
          "Priorice reclamaciones con el mayor potencial de suplemento y recuperación.",
      },
      {
        title: "Detección de brechas de alcance",
        description:
          "Marque partidas y brechas de documentación comunes en estimados de aseguradoras.",
      },
      {
        title: "Validación experta",
        description:
          "La IA acelera el triaje; los especialistas definen la estrategia final y la negociación.",
      },
      {
        title: "Integración con calculadora",
        description:
          "Conecte el ingreso de campo con informes de inteligencia que su equipo puede ejecutar.",
      },
    ],
    workflow: {
      eyebrow: "Flujo de trabajo con IA",
      title: "Lo que revisa la IA",
      description:
        "El análisis con IA revisa la documentación de reclamaciones antes de la revisión experta, ayudando a identificar oportunidades, brechas de documentación y áreas que pueden requerir mayor investigación.",
      cards: [
        {
          title: "Documentos revisados",
          items: [
            "Estimados de la aseguradora",
            "Estimados del contratista",
            "Hojas de alcance",
            "Documentación de reclamación",
          ],
        },
        {
          title: "Lo que detecta",
          items: [
            "Partidas faltantes",
            "Oportunidades de código",
            "Discrepancias de precios",
            "Brechas de documentación",
          ],
        },
        {
          title: "Resultado",
          items: [
            "Puntuación de oportunidades",
            "Recomendaciones de suplementos",
            "Información de recuperación",
            "Cola de revisión experta",
          ],
        },
      ],
    },
  },
};

const PLATFORM_MODULES: Record<Locale, PlatformModulesContent> = { en: EN, es: ES };

export function getPlatformModulesContent(locale: Locale): PlatformModulesContent {
  return PLATFORM_MODULES[locale] ?? EN;
}
