import type { Locale } from "@/lib/i18n/config";

export type HomeHeroStat = { label: string; value: string };

export type HomeProcessVisual = "intake" | "workspace" | "manage" | "recover";

export type HomeProcessStep = {
  step: string;
  title: string;
  description: string;
  supportLabel: string;
  visual: HomeProcessVisual;
};

export type HomeMetric = {
  id: string;
  value: string;
  label: string;
  detail: string;
};

export type HomeNetworkModule = {
  id: string;
  label: string;
  subline: string;
};

export type HomeContent = {
  hero: {
    titleLine1: string;
    titleLine2: string;
    subhead: string;
    primaryCta: string;
    secondaryCta: string;
    stats: HomeHeroStat[];
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    steps: HomeProcessStep[];
  };
  calculator: {
    eyebrow: string;
    title: string;
    description: string;
    tabSingle: string;
    tabOrg: string;
    tablistLabel: string;
  };
  proof: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    performanceHeading: string;
    networkHeading: string;
    metrics: HomeMetric[];
    modules: HomeNetworkModule[];
  };
  partners: {
    eyebrow: string;
    title: string;
    link: string;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    quotesByAuthor: Record<string, string>;
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
};

const EN: HomeContent = {
  hero: {
    titleLine1: "Maximize your claims.",
    titleLine2: "Minimize the stress.",
    subhead:
      "The Claims Ninja writes, negotiates, and manages your insurance supplements so you get paid more, faster, without hiring an in-house claims team.",
    primaryCta: "Start Claim Review",
    secondaryCta: "Schedule Strategy Call",
    stats: [
      { label: "Estimate\nturnaround", value: "24 HRS" },
      { label: "Avg.\nsettlement", value: "3–5 WKS" },
      { label: "Avg. claim\nuplift", value: "40%+" },
    ],
  },
  process: {
    eyebrow: "FROM UPLOAD TO RECOVERY",
    title: "One connected claim journey.",
    description:
      "Submit the loss once. Your documentation, communication, approvals, and claim progress stay connected from intake through completion.",
    steps: [
      {
        step: "01",
        title: "Submit Your Claim",
        description:
          "Tell us what happened and securely upload the documents you already have.",
        supportLabel: "SECURE INTAKE",
        visual: "intake",
      },
      {
        step: "02",
        title: "Enter Your Workspace",
        description:
          "Create your account and open the dedicated workspace for that exact claim.",
        supportLabel: "YOUR CLAIM WORKSPACE",
        visual: "workspace",
      },
      {
        step: "03",
        title: "We Manage the Claim",
        description:
          "Our team reviews the file, prepares the strategy, and moves the work forward.",
        supportLabel: "EXPERT CLAIM SUPPORT",
        visual: "manage",
      },
      {
        step: "04",
        title: "Approve. Track. Recover.",
        description:
          "Follow progress, respond to approvals, and see the financial outcome through completion.",
        supportLabel: "CLEAR VISIBILITY",
        visual: "recover",
      },
    ],
  },
  calculator: {
    eyebrow: "Calculators",
    title: "Evaluate one claim or your entire pipeline",
    description:
      "Run a quick AI-assisted single-claim triage, or model how Claims Ninja stacks up against an in-house team across all your jobs.",
    tabSingle: "Single Claim Review",
    tabOrg: "Organization ROI",
    tablistLabel: "Calculator selector",
  },
  proof: {
    eyebrow: "High-speed claims operations",
    title: "AI-Assisted Claims Operations For Restoration Contractors",
    description:
      "Claims Ninja combines AI-assisted review, experienced supplement professionals, public adjuster support, and a centralized contractor platform to accelerate estimate delivery and supplement resolution across residential, commercial, and large-loss property claims — without an in-house estimator.",
    primaryCta: "Start Claim Review",
    secondaryCta: "Talk With Our Team",
    performanceHeading: "Operational performance",
    networkHeading: "Operations intelligence network",
    metrics: [
      {
        id: "estimate_delivery",
        value: "24hr",
        label: "Estimate delivery",
        detail: "AI-assisted triage + supplement team review",
      },
      {
        id: "settlement_cycle",
        value: "~3 weeks",
        label: "Average settlement cycle",
        detail: "Operational execution, not inbox backlog",
      },
      {
        id: "carrier_increase",
        value: "40–45%",
        label: "Avg. increase over carrier estimate",
        detail: "Documented supplement outcomes across restoration trades",
      },
      {
        id: "review_workflow",
        value: "AI + expert",
        label: "Review workflow",
        detail:
          "Intelligence flagged; experienced supplement professionals finalize",
      },
    ],
    modules: [
      {
        id: "ai_intelligence",
        label: "AI Claim Intelligence",
        subline: "Scope, pricing & documentation signals",
      },
      {
        id: "supplement_team",
        label: "Supplement Team",
        subline: "Contractor-focused supplement execution",
      },
      {
        id: "pa_support",
        label: "Public Adjuster Support",
        subline: "PA escalation when claims require it",
      },
      {
        id: "client_portal",
        label: "Contractor Client Portal",
        subline: "Centralized claim intake & files",
      },
      {
        id: "claim_coordination",
        label: "Claim Coordination",
        subline: "Status, notes, and workflow alignment",
      },
      {
        id: "estimate_delivery",
        label: "Estimate Delivery",
        subline: "24hr AI-assisted estimate turnaround",
      },
    ],
  },
  partners: {
    eyebrow: "Trusted network",
    title: "Partners who stand behind every claim",
    link: "View our full partner network →",
  },
  testimonials: {
    eyebrow: "Client stories",
    title: "Results that speak louder than ads",
    quotesByAuthor: {},
  },
  cta: {
    eyebrow: "Ready when you are",
    title: "Start with a free claim review",
    description:
      "Tell us about your operation. We'll assess your claim workflow, identify recovery opportunities, and outline next steps.",
    primaryCta: "Begin Claim Intake",
    secondaryCta: "Schedule Strategy Call",
  },
};

const ES: HomeContent = {
  hero: {
    titleLine1: "Maximice sus reclamaciones.",
    titleLine2: "Minimice el estrés.",
    subhead:
      "The Claims Ninja redacta, negocia y gestiona sus suplementos de seguro para que cobre más, más rápido y sin contratar un equipo de reclamaciones interno.",
    primaryCta: "Iniciar revisión de reclamación",
    secondaryCta: "Agendar llamada estratégica",
    stats: [
      { label: "Plazo de\nestimado", value: "24 HRS" },
      { label: "Tiempo de\nacuerdo", value: "3–5 SEM." },
      { label: "Aumento\npromedio", value: "40%+" },
    ],
  },
  process: {
    eyebrow: "DE LA CARGA A LA RECUPERACIÓN",
    title: "Un recorrido de reclamación conectado.",
    description:
      "Envíe la pérdida una sola vez. Su documentación, comunicación, aprobaciones y progreso de la reclamación permanecen conectados desde el ingreso hasta la finalización.",
    steps: [
      {
        step: "01",
        title: "Envíe su reclamación",
        description:
          "Cuéntenos qué ocurrió y cargue de forma segura los documentos que ya tiene.",
        supportLabel: "INGRESO SEGURO",
        visual: "intake",
      },
      {
        step: "02",
        title: "Ingrese a su espacio de trabajo",
        description:
          "Cree su cuenta y abra el espacio de trabajo dedicado para esa reclamación exacta.",
        supportLabel: "SU ESPACIO DE RECLAMACIÓN",
        visual: "workspace",
      },
      {
        step: "03",
        title: "Gestionamos la reclamación",
        description:
          "Nuestro equipo revisa el expediente, prepara la estrategia y avanza el trabajo.",
        supportLabel: "APOYO EXPERTO",
        visual: "manage",
      },
      {
        step: "04",
        title: "Apruebe. Siga. Recupere.",
        description:
          "Siga el progreso, responda a las aprobaciones y vea el resultado financiero hasta el cierre.",
        supportLabel: "VISIBILIDAD CLARA",
        visual: "recover",
      },
    ],
  },
  calculator: {
    eyebrow: "Calculadoras",
    title: "Evalúe una reclamación o toda su cartera",
    description:
      "Realice una evaluación rápida de una sola reclamación asistida por IA, o modele cómo Claims Ninja se compara con un equipo interno en todos sus trabajos.",
    tabSingle: "Revisión de una reclamación",
    tabOrg: "ROI organizacional",
    tablistLabel: "Selector de calculadora",
  },
  proof: {
    eyebrow: "Operaciones de reclamaciones de alta velocidad",
    title:
      "Operaciones de reclamaciones asistidas por IA para contratistas de restauración",
    description:
      "Claims Ninja combina revisión asistida por IA, profesionales de suplementos con experiencia, apoyo de ajustadores públicos y una plataforma centralizada para contratistas, con el fin de acelerar la entrega de estimados y la resolución de suplementos — sin un estimador interno.",
    primaryCta: "Iniciar revisión de reclamación",
    secondaryCta: "Hable con nuestro equipo",
    performanceHeading: "Rendimiento operativo",
    networkHeading: "Red de inteligencia operativa",
    metrics: [
      {
        id: "estimate_delivery",
        value: "24h",
        label: "Entrega de estimados",
        detail: "Evaluación asistida por IA + revisión del equipo de suplementos",
      },
      {
        id: "settlement_cycle",
        value: "~3 semanas",
        label: "Ciclo promedio de acuerdo",
        detail: "Ejecución operativa, no acumulación en la bandeja de entrada",
      },
      {
        id: "carrier_increase",
        value: "40–45%",
        label: "Aumento promedio sobre el estimado de la aseguradora",
        detail:
          "Resultados de suplementos documentados en los oficios de restauración",
      },
      {
        id: "review_workflow",
        value: "IA + experto",
        label: "Flujo de revisión",
        detail:
          "La inteligencia señala; los profesionales de suplementos con experiencia finalizan",
      },
    ],
    modules: [
      {
        id: "ai_intelligence",
        label: "Inteligencia de reclamaciones con IA",
        subline: "Señales de alcance, precios y documentación",
      },
      {
        id: "supplement_team",
        label: "Equipo de suplementos",
        subline: "Ejecución de suplementos enfocada en el contratista",
      },
      {
        id: "pa_support",
        label: "Apoyo de ajustador público",
        subline: "Escalamiento a ajustador público cuando la reclamación lo requiere",
      },
      {
        id: "client_portal",
        label: "Portal del cliente para contratistas",
        subline: "Ingreso y archivos de reclamaciones centralizados",
      },
      {
        id: "claim_coordination",
        label: "Coordinación de reclamaciones",
        subline: "Estado, notas y alineación del flujo de trabajo",
      },
      {
        id: "estimate_delivery",
        label: "Entrega de estimados",
        subline: "Entrega de estimados asistida por IA en 24h",
      },
    ],
  },
  partners: {
    eyebrow: "Red de confianza",
    title: "Socios que respaldan cada reclamación",
    link: "Vea nuestra red completa de socios →",
  },
  testimonials: {
    eyebrow: "Historias de clientes",
    title: "Resultados que hablan más que los anuncios",
    quotesByAuthor: {
      "Steve Kranz":
        "El equipo de Claims Ninja es realmente un placer para trabajar; son muy cercanos y los estimados son razonables, lo que da un buen punto de partida para nuestros proyectos. ¡Y de verdad apreciamos su enfoque directo!",
      "Kenneth Valentine":
        "Estos profesionales no solo gestionan reclamaciones: las llevan a través de un sistema probado, ultraorganizado y optimizado para el rendimiento que hace que nuestros antiguos ajustadores públicos parezcan aficionados a oscuras. Desde el momento en que toman una reclamación, es como ver funcionar una máquina perfectamente engrasada. Cada expediente se rastrea. Cada actualización es clara. Cada fecha límite se cumple. Sin dudas. Sin perseguir a nadie. Solo resultados.",
      "Daniel Deerwater":
        "Buscamos durante meses un socio confiable para gestionar nuestras reclamaciones. Qué afortunados de haber encontrado una empresa que realmente hace el trabajo.",
    },
  },
  cta: {
    eyebrow: "Listos cuando usted lo esté",
    title: "Comience con una revisión de reclamación gratuita",
    description:
      "Cuéntenos sobre su operación. Evaluaremos su flujo de reclamaciones, identificaremos oportunidades de recuperación y trazaremos los próximos pasos.",
    primaryCta: "Iniciar ingreso de reclamación",
    secondaryCta: "Agendar llamada estratégica",
  },
};

const HOME_CONTENT: Record<Locale, HomeContent> = { en: EN, es: ES };

export function getHomeContent(locale: Locale): HomeContent {
  return HOME_CONTENT[locale] ?? EN;
}
