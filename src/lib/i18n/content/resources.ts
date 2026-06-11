import type { Locale } from "@/lib/i18n/config";
import {
  BLOG_CATEGORY_RELATED_SECTION,
  BLOG_CATEGORY_SECTION,
  BLOG_EXPLORE_TOPICS_SECTION,
  BLOG_FEATURED_SECTION,
  BLOG_HERO,
  BLOG_HUB_CTA,
  BLOG_LATEST_SECTION,
  BLOG_META,
  BLOG_POST_CTA,
  BLOG_RECOMMENDED_SECTION,
} from "@/lib/blog-page";
import {
  CLAIM_PHASE_LABELS,
  GUIDE_CATEGORY_HUB_RELATED,
  GUIDE_CATEGORY_SECTION,
  GUIDE_DETAIL_CTA,
  GUIDE_FEATURED_SECTION,
  GUIDE_HERO,
  GUIDE_HUB_CTA,
  GUIDE_META,
  GUIDE_PHASE_SECTION,
  GUIDE_ROLE_LABELS,
  GUIDE_ROLE_SECTION,
  GUIDE_TYPE_LABELS,
} from "@/lib/guide-page";
import type { GuideCategorySlug } from "@/lib/guide-categories";
import type { ClaimPhase, GuideRole, GuideType } from "@/lib/guide-types";

type PageMeta = {
  path: string;
  metaTitle: string;
  metaDescription: string;
};

type SectionContent = {
  eyebrow: string;
  title: string;
  description: string;
};

type CtaContent = {
  eyebrow: string;
  title: string;
  description: string;
};

export type BlogHubContent = {
  meta: PageMeta;
  hero: SectionContent;
  featuredSection: SectionContent;
  categorySection: SectionContent;
  exploreTopicsSection: SectionContent;
  categoryRelatedSection: SectionContent;
  latestSection: SectionContent;
  recommendedSection: SectionContent;
  postCta: CtaContent;
  hubCta: CtaContent;
};

export type GuideCategoryLabel = {
  name: string;
  description: string;
  guidesSectionTitle: string;
};

export type GuideDetailUi = {
  breadcrumbsGuides: string;
  purpose: string;
  whenToUse: string;
  signalPrefix: string;
  prerequisites: string;
  requiredDocumentation: string;
  qualityGates: string;
  documentationQcChecklist: string;
  processHeading: string;
  executionChecklist: string;
  commonMistakes: string;
  mistake: string;
  impact: string;
  correction: string;
  supplementOpportunities: string;
  lineItemHint: string;
  relatedResources: string;
  otherGuides: string;
  learnStrategy: string;
  faqSection: string;
  commonQuestions: string;
  faqDescription: string;
  phaseSuffix: string;
  operationsLabel: string;
  solutionPage: string;
  solutions: string;
  moreResources: string;
};

export type GuideHubContent = {
  meta: PageMeta;
  hero: SectionContent;
  featuredSection: SectionContent;
  roleSection: SectionContent;
  categorySection: SectionContent;
  phaseSection: SectionContent;
  recommendedSection: SectionContent;
  categoryHubRelated: SectionContent;
  detailCta: CtaContent;
  hubCta: CtaContent;
  hubFooter: { text: string; linkLabel: string };
  hubUi: {
    heroCountLine: (count: number) => string;
    searchResultsTitle: string;
    searchLabel: string;
    searchPlaceholder: string;
    roleFilterLabel: string;
    roleFilterDescription: (roleLabel: string) => string;
    clearFilterLabel: string;
    allCategories: string;
    allTypes: string;
    categoryGuidesTitle: (name: string) => string;
    viewAllGuides: (count: number) => string;
    openGuide: string;
    updatedPrefix: string;
    minutesShort: string;
    minutesExecution: string;
    essentialPlaybook: string;
    noResults: string;
  };
  categoryLabels: Record<GuideCategorySlug, GuideCategoryLabel>;
  roleDescriptions: Record<GuideRole, string>;
  typeLabels: Record<GuideType, string>;
  roleLabels: Record<GuideRole, string>;
  phaseLabels: Record<ClaimPhase, string>;
  detailUi: GuideDetailUi;
};

export type ResourcesContent = {
  blog: BlogHubContent;
  guides: GuideHubContent;
};

const EN: ResourcesContent = {
  blog: {
    meta: BLOG_META,
    hero: BLOG_HERO,
    featuredSection: BLOG_FEATURED_SECTION,
    categorySection: BLOG_CATEGORY_SECTION,
    exploreTopicsSection: BLOG_EXPLORE_TOPICS_SECTION,
    categoryRelatedSection: BLOG_CATEGORY_RELATED_SECTION,
    latestSection: BLOG_LATEST_SECTION,
    recommendedSection: BLOG_RECOMMENDED_SECTION,
    postCta: BLOG_POST_CTA,
    hubCta: BLOG_HUB_CTA,
  },
  guides: {
    meta: GUIDE_META,
    hero: GUIDE_HERO,
    featuredSection: GUIDE_FEATURED_SECTION,
    roleSection: GUIDE_ROLE_SECTION,
    categorySection: GUIDE_CATEGORY_SECTION,
    phaseSection: GUIDE_PHASE_SECTION,
    recommendedSection: {
      eyebrow: "Recommended",
      title: "Popular playbooks",
      description:
        "Guides teams return to when scaling supplement volume or tightening documentation.",
    },
    categoryHubRelated: GUIDE_CATEGORY_HUB_RELATED,
    detailCta: GUIDE_DETAIL_CTA,
    hubCta: GUIDE_HUB_CTA,
    hubFooter: {
      text: "Looking for strategy and industry context?",
      linkLabel: "Browse the blog",
    },
    hubUi: {
      heroCountLine: (count) => `${count} guides · 5 disciplines`,
      searchResultsTitle: "Search results",
      searchLabel: "Search guides",
      searchPlaceholder: "Search guides by title, tag, or checklist item...",
      roleFilterLabel: "Role:",
      roleFilterDescription: (roleLabel) => `Showing guides for ${roleLabel}.`,
      clearFilterLabel: "Clear filter",
      allCategories: "All categories",
      allTypes: "All types",
      categoryGuidesTitle: (name) => `${name} guides`,
      viewAllGuides: (count) => `View all ${count} guides →`,
      openGuide: "Open guide →",
      updatedPrefix: "Updated",
      minutesShort: "min",
      minutesExecution: "min execution",
      essentialPlaybook: "Essential playbook",
      noResults: "No guides match your filters. Try adjusting your search.",
    },
    categoryLabels: {
      "general-claims": {
        name: "General Claims",
        description:
          "Cross-loss operational workflows: intake, file audit, supplement submission, carrier review, O&P, and documentation standards.",
        guidesSectionTitle: "General Claims guides",
      },
      "roofing-claims": {
        name: "Roofing Claims",
        description:
          "Roof-specific field and office procedures: supplements, documentation, reinspection, code upgrades, and steep/high work.",
        guidesSectionTitle: "Roofing Claims guides",
      },
      "water-damage": {
        name: "Water Damage",
        description:
          "Mitigation and drying operations: dry logs, moisture mapping, equipment, monitoring, and IICRC category/class documentation.",
        guidesSectionTitle: "Water Damage guides",
      },
      "fire-damage": {
        name: "Fire Damage",
        description:
          "Fire and smoke restoration procedures: intake, smoke/HVAC/odor/contents documentation, and structural stabilization.",
        guidesSectionTitle: "Fire Damage guides",
      },
      "exterior-restoration": {
        name: "Exterior Restoration",
        description:
          "Non-roof exterior scope: siding, envelope, and window and door replacement documentation.",
        guidesSectionTitle: "Exterior Restoration guides",
      },
    },
    roleDescriptions: {
      field: "Intake, documentation, and field execution checklists.",
      office: "File management, audit, and carrier-ready documentation.",
      "supplement-coordinator":
        "Estimate review, supplement submission, and O&P qualification.",
      "project-manager": "Intake oversight, estimate review, and reinspection coordination.",
    },
    typeLabels: GUIDE_TYPE_LABELS,
    roleLabels: GUIDE_ROLE_LABELS,
    phaseLabels: CLAIM_PHASE_LABELS,
    detailUi: {
      breadcrumbsGuides: "Guides",
      purpose: "Purpose",
      whenToUse: "When to use",
      signalPrefix: "Signal:",
      prerequisites: "Prerequisites",
      requiredDocumentation: "Required documentation",
      qualityGates: "Quality gates",
      documentationQcChecklist: "Documentation quality control checklist",
      processHeading: "Step-by-step process",
      executionChecklist: "Execution checklist",
      commonMistakes: "Common mistakes",
      mistake: "Mistake",
      impact: "Impact",
      correction: "Correction",
      supplementOpportunities: "Supplement opportunities",
      lineItemHint: "Line item hint:",
      relatedResources: "Related resources",
      otherGuides: "Other guides",
      learnStrategy: "Learn the strategy",
      faqSection: "FAQ",
      commonQuestions: "Common questions",
      faqDescription: "Quick answers related to this procedure.",
      phaseSuffix: "phase",
      operationsLabel: "Claims Ninja Operations",
      solutionPage: "Claims Ninja solution page",
      solutions: "Solutions",
      moreResources: "More resources",
    },
  },
};

const ES: ResourcesContent = {
  blog: {
    meta: {
      path: BLOG_META.path,
      metaTitle: "Blog",
      metaDescription:
        "Blog de Claims Ninja: orientación experta sobre suplementos de seguros, estimados de aseguradoras, documentación de reclamaciones y recuperación de ingresos para contratistas, sin añadir sobrecarga interna.",
    },
    hero: {
      eyebrow: "Recursos",
      title: "Inteligencia de recuperación de reclamaciones para contratistas",
      description:
        "Educación práctica sobre suplementos de seguros, precisión de estimados, documentación y construcción de un motor de recuperación más sólido, del equipo que ayuda a los contratistas a maximizar los pagos de reclamaciones como socio externo de reclamaciones.",
    },
    featuredSection: {
      eyebrow: "Destacado",
      title: "Comience aquí",
      description:
        "Nuestras guías más completas sobre estrategia de suplementos, brechas de aseguradoras y recuperación de ingresos para contratistas.",
    },
    categorySection: {
      eyebrow: "Temas",
      title: "Explorar por categoría",
      description:
        "Filtre artículos por los temas del flujo de reclamaciones que más importan a su operación.",
    },
    exploreTopicsSection: {
      eyebrow: "Centros temáticos",
      title: "Explorar por tema",
      description:
        "Páginas de categoría dedicadas con artículos seleccionados sobre suplementos, estimación, documentación y recuperación de reclamaciones para contratistas.",
    },
    categoryRelatedSection: {
      eyebrow: "Más temas",
      title: "Explorar categorías relacionadas",
      description:
        "Continúe profundizando en operaciones de reclamaciones y recuperación.",
    },
    latestSection: {
      eyebrow: "Reciente",
      title: "Artículos recientes",
      description:
        "Perspectivas frescas sobre suplementos, documentación y negociaciones con aseguradoras.",
    },
    recommendedSection: {
      eyebrow: "Recomendado",
      title: "Lecturas populares",
      description:
        "Artículos de alto impacto a los que los contratistas regresan al escalar el volumen de suplementos o evaluar una asociación.",
    },
    postCta: {
      eyebrow: "Asóciese con Claims Ninja",
      title: "¿Listo para recuperar más en su próxima reclamación?",
      description:
        "Obtenga una revisión gratuita de reclamación. Evaluamos brechas de alcance, documentación y oportunidades de suplementos, y luego delineamos un plan de recuperación alineado con su operación.",
    },
    hubCta: {
      eyebrow: "Ponga este conocimiento en práctica",
      title: "Comience con una revisión gratuita de reclamación",
      description:
        "Cuéntenos sobre su operación. Evaluaremos su flujo de reclamaciones, identificaremos oportunidades de recuperación y delinearemos cómo el suplemento externalizado encaja con su equipo.",
    },
  },
  guides: {
    meta: {
      path: GUIDE_META.path,
      metaTitle: "Guías de reclamaciones",
      metaDescription:
        "Guías operativas de reclamaciones para contratistas: listas de verificación, flujos de trabajo, estándares de documentación y procedimientos de campo para expedientes listos para suplementos.",
    },
    hero: {
      eyebrow: "Recursos operativos",
      title: "Guías de reclamaciones para equipos de campo y oficina",
      description:
        "Listas de verificación, flujos de trabajo y estándares de documentación diseñados para equipos de restauración y techado: no artículos, sino procedimientos operativos listos para el campo.",
    },
    featuredSection: {
      eyebrow: "Manuales esenciales",
      title: "Comience aquí",
      description:
        "Guías operativas fijadas que todo equipo de contratistas debería tener en su flujo de reclamaciones.",
    },
    roleSection: {
      eyebrow: "Inicio rápido",
      title: "Guías por rol",
      description:
        "Acceda a los manuales más relevantes para su posición en el expediente de reclamación.",
    },
    categorySection: {
      eyebrow: "Por disciplina",
      title: "Explorar por categoría",
      description:
        "Guías operativas organizadas por tipo de reclamación y disciplina de restauración.",
    },
    phaseSection: {
      eyebrow: "Por flujo de trabajo",
      title: "Explorar por fase de reclamación",
      description:
        "Encuentre la guía adecuada según dónde se encuentre en el ciclo de vida de la reclamación.",
    },
    recommendedSection: {
      eyebrow: "Recomendado",
      title: "Manuales populares",
      description:
        "Guías a las que los equipos regresan al escalar el volumen de suplementos o reforzar la documentación.",
    },
    categoryHubRelated: {
      eyebrow: "Aprenda la estrategia",
      title: "Educación relacionada",
      description:
        "Artículos que explican por qué estos procedimientos importan y cómo las aseguradoras los evalúan.",
    },
    detailCta: {
      eyebrow: "Asóciese con Claims Ninja",
      title: "¿Necesita ayuda ejecutando su próxima reclamación?",
      description:
        "Obtenga una revisión gratuita de reclamación. Evaluamos brechas de alcance, documentación y oportunidades de suplementos, y luego delineamos un plan de recuperación alineado con su operación.",
    },
    hubCta: {
      eyebrow: "Ponga estos manuales en práctica",
      title: "Comience con una revisión gratuita de reclamación",
      description:
        "Cuéntenos sobre su operación. Evaluaremos su flujo de reclamaciones, identificaremos oportunidades de recuperación y delinearemos cómo el suplemento externalizado encaja con su equipo.",
    },
    hubFooter: {
      text: "¿Busca estrategia y contexto del sector?",
      linkLabel: "Explore el blog",
    },
    hubUi: {
      heroCountLine: (count) => `${count} guías · 5 disciplinas`,
      searchResultsTitle: "Resultados de búsqueda",
      searchLabel: "Buscar guías",
      searchPlaceholder: "Busque guías por título, etiqueta o elemento de lista...",
      roleFilterLabel: "Rol:",
      roleFilterDescription: (roleLabel) => `Mostrando guías para ${roleLabel}.`,
      clearFilterLabel: "Limpiar filtro",
      allCategories: "Todas las categorías",
      allTypes: "Todos los tipos",
      categoryGuidesTitle: (name) => `Guías de ${name}`,
      viewAllGuides: (count) => `Ver las ${count} guías →`,
      openGuide: "Abrir guía →",
      updatedPrefix: "Actualizado",
      minutesShort: "min",
      minutesExecution: "min de ejecución",
      essentialPlaybook: "Manual esencial",
      noResults: "Ninguna guía coincide con sus filtros. Intente ajustar la búsqueda.",
    },
    categoryLabels: {
      "general-claims": {
        name: "Reclamaciones generales",
        description:
          "Flujos operativos transversales: admisión, auditoría de expediente, envío de suplementos, revisión de aseguradora, O&P y estándares de documentación.",
        guidesSectionTitle: "Guías de reclamaciones generales",
      },
      "roofing-claims": {
        name: "Reclamaciones de techado",
        description:
          "Procedimientos de campo y oficina para techos: suplementos, documentación, reinspección, mejoras por código y trabajo en pendiente/altura.",
        guidesSectionTitle: "Guías de reclamaciones de techado",
      },
      "water-damage": {
        name: "Daños por agua",
        description:
          "Operaciones de mitigación y secado: registros de secado, mapeo de humedad, equipos, monitoreo y documentación de categoría/clase IICRC.",
        guidesSectionTitle: "Guías de daños por agua",
      },
      "fire-damage": {
        name: "Daños por incendio",
        description:
          "Procedimientos de restauración por incendio y humo: admisión, documentación de humo/HVAC/olor/contenidos y estabilización estructural.",
        guidesSectionTitle: "Guías de daños por incendio",
      },
      "exterior-restoration": {
        name: "Restauración exterior",
        description:
          "Alcance exterior no relacionado con techos: documentación de revestimiento, envolvente y reemplazo de ventanas y puertas.",
        guidesSectionTitle: "Guías de restauración exterior",
      },
    },
    roleDescriptions: {
      field: "Listas de admisión, documentación y ejecución de campo.",
      office: "Gestión de expedientes, auditoría y documentación lista para la aseguradora.",
      "supplement-coordinator":
        "Revisión de estimados, envío de suplementos y calificación de O&P.",
      "project-manager":
        "Supervisión de admisión, revisión de estimados y coordinación de reinspección.",
    },
    typeLabels: {
      checklist: "Lista de verificación",
      workflow: "Flujo de trabajo",
      "documentation-standard": "Estándar de documentación",
      "field-procedure": "Procedimiento de campo",
    },
    roleLabels: {
      field: "Campo",
      office: "Oficina",
      "supplement-coordinator": "Coordinador de suplementos",
      "project-manager": "Gerente de proyecto",
    },
    phaseLabels: {
      intake: "Admisión",
      mitigation: "Mitigación",
      documentation: "Documentación",
      supplement: "Suplemento",
      negotiation: "Negociación",
      closeout: "Cierre",
    },
    detailUi: {
      breadcrumbsGuides: "Guías",
      purpose: "Propósito",
      whenToUse: "Cuándo usar",
      signalPrefix: "Señal:",
      prerequisites: "Requisitos previos",
      requiredDocumentation: "Documentación requerida",
      qualityGates: "Controles de calidad",
      documentationQcChecklist: "Lista de control de calidad de documentación",
      processHeading: "Proceso paso a paso",
      executionChecklist: "Lista de ejecución",
      commonMistakes: "Errores comunes",
      mistake: "Error",
      impact: "Impacto",
      correction: "Corrección",
      supplementOpportunities: "Oportunidades de suplemento",
      lineItemHint: "Pista de partida:",
      relatedResources: "Recursos relacionados",
      otherGuides: "Otras guías",
      learnStrategy: "Aprenda la estrategia",
      faqSection: "Preguntas frecuentes",
      commonQuestions: "Preguntas comunes",
      faqDescription: "Respuestas rápidas relacionadas con este procedimiento.",
      phaseSuffix: "fase",
      operationsLabel: "Operaciones Claims Ninja",
      solutionPage: "Página de solución Claims Ninja",
      solutions: "Soluciones",
      moreResources: "Más recursos",
    },
  },
};

const RESOURCES_CONTENT: Record<Locale, ResourcesContent> = { en: EN, es: ES };

export function getResourcesContent(locale: Locale): ResourcesContent {
  return RESOURCES_CONTENT[locale] ?? EN;
}
