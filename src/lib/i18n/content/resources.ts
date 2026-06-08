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
    roleFilterLabel: string;
    clearFilterLabel: string;
  };
  typeLabels: Record<GuideType, string>;
  roleLabels: Record<GuideRole, string>;
  phaseLabels: Record<ClaimPhase, string>;
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
      roleFilterLabel: "Role:",
      clearFilterLabel: "Clear filter",
    },
    typeLabels: GUIDE_TYPE_LABELS,
    roleLabels: GUIDE_ROLE_LABELS,
    phaseLabels: CLAIM_PHASE_LABELS,
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
      roleFilterLabel: "Rol:",
      clearFilterLabel: "Limpiar filtro",
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
  },
};

const RESOURCES_CONTENT: Record<Locale, ResourcesContent> = { en: EN, es: ES };

export function getResourcesContent(locale: Locale): ResourcesContent {
  return RESOURCES_CONTENT[locale] ?? EN;
}
