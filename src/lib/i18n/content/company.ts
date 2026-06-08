import type { Locale } from "@/lib/i18n/config";
import {
  ABOUT_AUDIENCE,
  ABOUT_BELIEFS,
  ABOUT_HERO,
  ABOUT_JOURNEY,
  ABOUT_META,
  ABOUT_PARTNERSHIP,
  ABOUT_VALUES,
  ABOUT_WHY_WE_EXIST,
  type AboutAudienceItem,
} from "@/lib/about-page";
import {
  CASE_STUDIES_COMMON_FINDINGS,
  CASE_STUDIES_HERO,
  CASE_STUDIES_PORTFOLIO,
  CASE_STUDIES_RECOVERY_EXAMPLES,
  CASE_STUDIES_RECOVERY_EXAMPLES_SECTION,
  CASE_STUDIES_TRADE_CARDS,
  CASE_STUDIES_TRADE_RESULTS,
  type RecoveryExample,
  type TradeResultCard,
} from "@/lib/case-studies-page";
import { reviewsPage } from "@/lib/marketing-pages";
import {
  PARTNER_NETWORK_BECOME,
  PARTNER_NETWORK_BENEFITS,
  PARTNER_NETWORK_ECOSYSTEM,
  PARTNER_NETWORK_HERO,
  PARTNER_NETWORK_META,
  PARTNER_NETWORK_PARTNERS,
  PARTNER_NETWORK_POLICY,
  type PartnerCardConfig,
} from "@/lib/partner-network-page";

type PageMeta = {
  path: string;
  metaTitle: string;
  metaDescription: string;
};

type HeroWithParagraphs = {
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
};

type TitleDescription = { title: string; description: string };

type JourneyStep = { label: string; title: string; description: string };

type FindingCategory = {
  title: string;
  description: string;
  items: readonly string[];
};

export type AboutContent = {
  meta: PageMeta;
  hero: HeroWithParagraphs;
  whyWeExist: {
    eyebrow: string;
    title: string;
    paragraphs: readonly string[];
    closing: string;
    complexityItems: readonly string[];
  };
  beliefs: {
    eyebrow: string;
    title: string;
    items: readonly TitleDescription[];
  };
  audience: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly AboutAudienceItem[];
  };
  journey: {
    eyebrow: string;
    title: string;
    steps: readonly JourneyStep[];
  };
  values: {
    title: string;
    items: readonly TitleDescription[];
  };
  partnership: {
    title: string;
    paragraphs: readonly string[];
  };
};

export type PartnerNetworkContent = {
  meta: PageMeta;
  hero: HeroWithParagraphs;
  ecosystem: {
    eyebrow: string;
    title: string;
    paragraphs: readonly string[];
    supportAreasTitle: string;
    supportAreas: readonly string[];
  };
  partners: readonly PartnerCardConfig[];
  benefits: {
    title: string;
    items: readonly TitleDescription[];
  };
  become: {
    title: string;
    paragraphs: readonly string[];
    ctaLabel: string;
    ctaHref: string;
  };
  policy: {
    optionalUse: string;
    selectionCriteria: string;
    introductions: string;
    eligibility: string;
    goodPartnerTypes: string;
  };
};

export type CaseStudiesContent = {
  hero: { title: string; description: string };
  tradeResults: {
    eyebrow: string;
    title: string;
    description: string;
  };
  tradeCards: readonly TradeResultCard[];
  commonFindings: {
    eyebrow: string;
    title: string;
    description: string;
    categories: readonly FindingCategory[];
  };
  portfolio: {
    title: string;
    description: string;
    whatWeAnalyze: readonly string[];
    typicalOutcome: string;
  };
  recoveryExamplesSection: {
    eyebrow: string;
    title: string;
    description: string;
  };
  recoveryExamples: readonly RecoveryExample[];
};

export type ReviewsContent = {
  eyebrow: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
};

export type CompanyContent = {
  about: AboutContent;
  partnerNetwork: PartnerNetworkContent;
  caseStudies: CaseStudiesContent;
  reviews: ReviewsContent;
};

const EN: CompanyContent = {
  about: {
    meta: ABOUT_META,
    hero: ABOUT_HERO,
    whyWeExist: ABOUT_WHY_WE_EXIST,
    beliefs: ABOUT_BELIEFS,
    audience: ABOUT_AUDIENCE,
    journey: ABOUT_JOURNEY,
    values: ABOUT_VALUES,
    partnership: ABOUT_PARTNERSHIP,
  },
  partnerNetwork: {
    meta: PARTNER_NETWORK_META,
    hero: PARTNER_NETWORK_HERO,
    ecosystem: PARTNER_NETWORK_ECOSYSTEM,
    partners: PARTNER_NETWORK_PARTNERS,
    benefits: PARTNER_NETWORK_BENEFITS,
    become: PARTNER_NETWORK_BECOME,
    policy: PARTNER_NETWORK_POLICY,
  },
  caseStudies: {
    hero: CASE_STUDIES_HERO,
    tradeResults: CASE_STUDIES_TRADE_RESULTS,
    tradeCards: CASE_STUDIES_TRADE_CARDS,
    commonFindings: CASE_STUDIES_COMMON_FINDINGS,
    portfolio: CASE_STUDIES_PORTFOLIO,
    recoveryExamplesSection: CASE_STUDIES_RECOVERY_EXAMPLES_SECTION,
    recoveryExamples: CASE_STUDIES_RECOVERY_EXAMPLES,
  },
  reviews: {
    eyebrow: reviewsPage.eyebrow,
    title: reviewsPage.title,
    description: reviewsPage.description,
    metaTitle: reviewsPage.metaTitle,
    metaDescription: reviewsPage.metaDescription,
  },
};

const ES: CompanyContent = {
  about: {
    meta: {
      path: ABOUT_META.path,
      metaTitle: "Nosotros",
      metaDescription:
        "Claims Ninja es la plataforma operativa de reclamaciones para contratistas: soporte experto en reclamaciones de seguros, tecnología de gestión y flujos de trabajo para contratistas de restauración y techado en todo el país.",
    },
    hero: {
      eyebrow: "Empresa",
      title: "Experiencia en recuperación de reclamaciones. Ejecución a nivel empresarial.",
      paragraphs: [
        "Fundada en 2024, Claims Ninja se creó para ayudar a los contratistas a gestionar reclamaciones de seguros con la estructura, experiencia y visibilidad de un departamento de reclamaciones profesional, sin tener que construir uno internamente.",
        "Apoyamos a contratistas de techado, restauración, mitigación, reconstrucción y contenidos con los flujos de trabajo, la tecnología y la experiencia en reclamaciones necesarios para recuperar más, avanzar más rápido y mantener el enfoque en el crecimiento.",
      ],
    },
    whyWeExist: {
      eyebrow: "Por qué existimos",
      title: "Los contratistas no deberían necesitar un departamento de reclamaciones interno",
      paragraphs: [
        "El crecimiento del volumen de reclamaciones crea una complejidad operativa que la mayoría de los equipos enfocados en producción nunca fueron diseñados para absorber. Documentación, suplementos, comunicación con aseguradoras, revisión de estimados, seguimiento de reclamaciones y gestión de flujos de trabajo compiten por el mismo ancho de banda limitado.",
        "La mayoría de los contratistas no quieren construir un departamento de reclamaciones interno completo: quieren ejecutar trabajos, atender clientes y hacer crecer los ingresos sin dejar dinero atrapado en expedientes poco desarrollados.",
      ],
      closing:
        "Claims Ninja existe para proporcionar la experiencia, los sistemas, los flujos de trabajo y la tecnología necesarios para apoyar las operaciones de reclamaciones a escala.",
      complexityItems: [
        "Documentación",
        "Suplementos",
        "Comunicación con aseguradoras",
        "Revisión de estimados",
        "Seguimiento de reclamaciones",
        "Gestión de flujos de trabajo",
      ],
    },
    beliefs: {
      eyebrow: "Lo que creemos",
      title: "Principios que guían nuestra forma de trabajar",
      items: [
        {
          title: "Los contratistas merecen cobrar por el trabajo que realizan",
          description:
            "Las reclamaciones de seguros deben reflejar con precisión el trabajo necesario para restaurar una propiedad.",
        },
        {
          title: "El proceso crea resultados predecibles",
          description:
            "Una documentación sólida, flujos de trabajo disciplinados y comunicación clara superan consistentemente la gestión reactiva de reclamaciones.",
        },
        {
          title: "La tecnología debe apoyar a los expertos, no reemplazarlos",
          description:
            "La tecnología acelera la eficiencia. La experiencia impulsa los resultados. Claims Ninja combina ambas.",
        },
      ],
    },
    audience: {
      eyebrow: "A quién servimos",
      title: "Diseñado para contratistas de restauración y techado",
      description:
        "Claims Ninja apoya a los oficios y operadores que gestionan trabajo impulsado por seguros todos los días, desde empresas de restauración de una sola ubicación hasta operadores multirregionales que escalan el volumen de reclamaciones.",
      items: [
        {
          title: "Contratistas de techado",
          description:
            "Reclamaciones por tormenta, granizo y reparación con estrategia de suplementos, desarrollo de alcance y negociación con aseguradoras diseñados para equipos de producción de techado.",
          href: "/solutions/roofing",
        },
        {
          title: "Empresas de mitigación de agua",
          description:
            "Documentación de mitigación, mapeo de humedad, registros de secado y alineación del alcance de reconstrucción para pérdidas por agua que avanzan rápido y reciben escrutinio.",
          href: "/solutions/water-damage",
        },
        {
          title: "Contratistas de restauración por incendio",
          description:
            "Apoyo en alcance de humo, hollín, olores y estructura para pérdidas por incendio que requieren oficios coordinados y revisión documental intensiva por parte de aseguradoras.",
          href: "/solutions/fire-damage",
        },
        {
          title: "Empresas de remediación de moho",
          description:
            "Contención, protocolos de remediación y documentación de alcance para reclamaciones por moho donde el escrutinio de aseguradoras y el cumplimiento normativo son críticos.",
          href: "/solutions/mold",
        },
        {
          title: "Contratistas de reconstrucción",
          description:
            "Desarrollo de alcance de reconstrucción, revisión de estimados y apoyo en suplementos para proyectos complejos de restauración desde la demolición hasta la finalización.",
        },
        {
          title: "Empresas de restauración de contenidos",
          description:
            "Apoyo en alcance de pack-out, inventario, limpieza y almacenamiento para reclamaciones de contenidos que requieren documentación detallada y valoración.",
          href: "/solutions/contents",
        },
        {
          title: "Operadores multilocalización",
          description:
            "Visibilidad centralizada de reclamaciones, flujos de trabajo consistentes y apoyo experto en todas las sucursales sin construir departamentos regionales de reclamaciones.",
        },
        {
          title: "Empresas de restauración en crecimiento",
          description:
            "Operaciones de reclamaciones escalables para equipos que añaden volumen, nuevos oficios o alcance geográfico sin sacrificar la calidad del expediente o la recuperación.",
        },
      ],
    },
    journey: {
      eyebrow: "Nuestra trayectoria",
      title: "Del soporte de reclamaciones a la plataforma operativa",
      steps: [
        {
          label: "2024",
          title: "Fundada con una misión clara",
          description:
            "Claims Ninja se lanza con la misión de ofrecer operaciones estructuradas de reclamaciones de seguros para contratistas.",
        },
        {
          label: "2025",
          title: "Ampliación del soporte por oficio",
          description:
            "Ampliación de capacidades de soporte en techado, restauración, mitigación, reconstrucción y restauración de contenidos.",
        },
        {
          label: "Hoy",
          title: "Operaciones más sólidas, mejor visibilidad",
          description:
            "Ayudando a contratistas a operar con flujos de trabajo más fuertes, mejor visibilidad y mayores oportunidades de recuperación.",
        },
        {
          label: "Mañana",
          title: "La plataforma operativa de reclamaciones completa",
          description:
            "Construyendo la plataforma operativa de reclamaciones en la que los contratistas confían a escala, impulsada por experiencia, tecnología e inteligencia de reclamaciones.",
        },
      ],
    },
    values: {
      title: "Misión · visión · enfoque · impacto",
      items: [
        {
          title: "Misión",
          description:
            "Ayudar a los contratistas a escalar sin construir un departamento de reclamaciones interno.",
        },
        {
          title: "Visión",
          description:
            "Crear la plataforma operativa de reclamaciones más confiable de la industria.",
        },
        {
          title: "Enfoque",
          description:
            "Combinar tecnología, proceso y soporte experto en reclamaciones.",
        },
        {
          title: "Impacto",
          description:
            "Apoyar a contratistas con sistemas que mejoran la eficiencia, la visibilidad y las oportunidades de recuperación.",
        },
      ],
    },
    partnership: {
      title: "Más que una empresa de suplementos",
      paragraphs: [
        "Claims Ninja no es un proveedor transaccional de suplementos.",
        "Nuestro objetivo es convertirnos en una extensión de la operación del contratista, ayudando a los equipos a mejorar los resultados de reclamaciones, fortalecer flujos de trabajo, aumentar la visibilidad y escalar con confianza a medida que crecen.",
      ],
    },
  },
  partnerNetwork: {
    meta: {
      path: PARTNER_NETWORK_META.path,
      metaTitle: "Red de socios | Asociaciones estratégicas de la industria",
      metaDescription:
        "Explore la red de socios de Claims Ninja, incluyendo ProfileGorilla, CORE Group, 911 Restoration, Daylit y Morgan & Morgan. Recursos de confianza para contratistas, empresas de restauración y profesionales de reclamaciones de seguros.",
    },
    hero: {
      eyebrow: "Empresa",
      title: "Red de socios estratégicos",
      paragraphs: [
        "Claims Ninja conecta a los contratistas con organizaciones de confianza que fortalecen los resultados de reclamaciones, aceleran el flujo de caja, proporcionan recursos legales y apoyan el crecimiento operativo.",
        "Cada socio de nuestra red se selecciona porque resuelve problemas reales que los contratistas enfrentan antes, durante o después del proceso de reclamación.",
      ],
    },
    ecosystem: {
      eyebrow: "Ecosistema de socios",
      title: "Más que soporte de suplementos",
      paragraphs: [
        "La mayoría de los contratistas no solo necesitan mejores estimados. Necesitan acceso a recursos confiables en financiamiento, apoyo legal, gestión de reputación, operaciones de franquicia, relaciones de la industria y crecimiento empresarial.",
        "La red de socios de Claims Ninja extiende nuestro valor más allá de la recuperación de reclamaciones al conectar a los socios contratistas con organizaciones que apoyan la salud integral de su operación.",
      ],
      supportAreasTitle: "Áreas de apoyo de la red",
      supportAreas: [
        "Apoyo en liquidación de reclamaciones",
        "Financiamiento para contratistas",
        "Escalación legal",
        "Crecimiento de reputación",
        "Relaciones de franquicia y operadores",
        "Liderazgo en la industria de restauración",
      ],
    },
    partners: [
      {
        id: "profile-gorilla",
        name: "ProfileGorilla",
        category: "Reputación y gestión de reseñas para contratistas",
        description:
          "ProfileGorilla ayuda a los contratistas a generar, gestionar y mostrar reseñas de clientes en las principales plataformas en línea. Señales de reputación más sólidas pueden aumentar la confianza, mejorar las tasas de cierre y ayudar a los contratistas a destacar en mercados competitivos.",
        bulletLabel: "Ideal para",
        bullets: [
          "Contratistas de techado",
          "Empresas de restauración",
          "Negocios de servicios en crecimiento",
          "Operadores multilocalización",
        ],
        ctaLabel: "Visitar ProfileGorilla →",
        ctaHref: "https://profilegorilla.com",
      },
      {
        id: "core-group",
        name: "CORE Group",
        category: "Red de liderazgo en la industria de restauración",
        description:
          "CORE Group reúne a líderes de restauración enfocados en excelencia operativa, crecimiento y colaboración en la industria. Claims Ninja se asocia con CORE Group para apoyar a contratistas que buscan sistemas más sólidos, desarrollo de liderazgo y escalabilidad empresarial.",
        bulletLabel: "Ideal para",
        bullets: [
          "Propietarios de empresas de restauración",
          "Operadores enfocados en crecimiento",
          "Organizaciones multirregionales",
          "Líderes de la industria",
        ],
        ctaLabel: "Conocer CORE Group →",
        ctaHref: "https://www.coregroup.org",
      },
      {
        id: "911-restoration",
        name: "911 Restoration Corporate",
        category: "Proveedor preferido de liquidación de reclamaciones",
        description:
          "Claims Ninja sirve como recurso preferido de liquidación de reclamaciones para 911 Restoration Corporate, directores de franquicia, liderazgo nacional y operadores de franquicia participantes. Al apoyar la estrategia de suplementos, la calidad de documentación, la comunicación con aseguradoras y las oportunidades de recuperación, Claims Ninja ayuda a los operadores de franquicia a fortalecer los resultados de reclamaciones de seguros en todo el sistema.",
        bulletLabel: "Enfoque de la asociación",
        bullets: [
          "Estrategia de suplementos",
          "Apoyo en negociación con aseguradoras",
          "Revisión de documentación",
          "Optimización de recuperación de reclamaciones",
        ],
        ctaLabel: "Visitar 911 Restoration →",
        ctaHref: "https://911restoration.com",
      },
      {
        id: "daylit",
        name: "Daylit",
        category: "Socio autorizado de financiamiento para contratistas",
        description:
          "Daylit ofrece asistencia de financiamiento a corto plazo diseñada para ayudar a los contratistas a mantener el impulso cuando el calendario de pagos de seguros crea presión en el flujo de caja. Como socio autorizado, Claims Ninja puede ayudar a conectar a socios contratistas calificados con recursos de financiamiento de Daylit cuando el calendario del proyecto, necesidades de materiales, nómina o capital de trabajo requieren apoyo adicional.",
        bulletLabel: "Usos comunes",
        bullets: [
          "Compra de materiales",
          "Apoyo en nómina",
          "Movilización de proyectos",
          "Asistencia de capital de trabajo",
        ],
        ctaLabel: "Explorar Daylit →",
        ctaHref: "https://daylit.com",
      },
      {
        id: "morgan-morgan",
        name: "Morgan & Morgan",
        category: "Socio legal exclusivo",
        description:
          "Cuando una reclamación escala más allá de la negociación tradicional de suplementos, el apoyo legal puede ser apropiado. Morgan & Morgan es el socio legal exclusivo de Claims Ninja, dando a clientes calificados acceso a recursos con tarifas preferenciales de socio cuando una reclamación requiere escalación legal.",
        bulletLabel: "Escenarios de reclamación potenciales",
        bullets: [
          "Disputas de mala fe",
          "Desacuerdos de cobertura",
          "Resolución retrasada de reclamaciones",
          "Situaciones de pago significativamente insuficiente",
        ],
        ctaLabel: "Más información →",
        ctaHref: "https://www.forthepeople.com",
      },
    ],
    benefits: {
      title: "Cómo nuestra red ayuda a los contratistas",
      items: [
        {
          title: "Recuperar más ingresos",
          description:
            "Acceda a experiencia en reclamaciones, apoyo en documentación y recursos de liquidación diseñados en torno a los resultados del contratista.",
        },
        {
          title: "Proteger el flujo de caja",
          description:
            "Los recursos de financiamiento pueden ayudar a contratistas calificados a cubrir brechas de tiempo entre costos del proyecto y pagos de seguros.",
        },
        {
          title: "Navegar la escalación",
          description:
            "El acceso al socio legal ayuda a los contratistas a entender los próximos pasos cuando una reclamación avanza más allá de la negociación normal de suplementos.",
        },
        {
          title: "Escalar con confianza",
          description:
            "Las relaciones de reputación, liderazgo, franquicia y operadores apoyan el crecimiento más allá de un solo expediente de reclamación.",
        },
      ],
    },
    become: {
      title: "Conviértase en socio estratégico",
      paragraphs: [
        "Claims Ninja siempre está interesado en relaciones que creen valor medible para contratistas, empresas de restauración, operadores de techado y profesionales de reclamaciones de seguros.",
        "Si su organización apoya el crecimiento de contratistas, resultados de reclamaciones, financiamiento, recursos legales, tecnología o excelencia operativa, estaríamos abiertos a explorar una relación estratégica.",
      ],
      ctaLabel: "Hablar sobre oportunidades de asociación",
      ctaHref: "/contact",
    },
    policy: {
      optionalUse:
        "Los servicios de la red de socios son opcionales. Los contratistas pueden usar Claims Ninja para el soporte central de reclamaciones sin usar ningún socio de la red. Los socios de la red están disponibles cuando pueden agregar valor a la operación del contratista.",
      selectionCriteria:
        "Los socios estratégicos se seleccionan porque resuelven problemas reales de contratistas, incluyendo financiamiento, escalación legal, gestión de reputación, operaciones de franquicia y liderazgo en la industria de restauración. Claims Ninja prioriza calidad, ajuste y valor medible para contratistas sobre el volumen de socios.",
      introductions:
        "Los contratistas pueden solicitar una presentación a un socio de la red cuando sea apropiado. Claims Ninja puede facilitar presentaciones para socios contratistas calificados, sujeto a aprobación y calificación del socio. El uso de socios es independiente de los acuerdos de tarifas de Claims Ninja.",
      eligibility:
        "Los recursos de socios de la red se posicionan principalmente para socios contratistas de Claims Ninja. El acceso varía según el socio, el compromiso y la calificación; no todos los contratistas califican automáticamente para financiamiento, servicios legales u otros servicios de socios.",
      goodPartnerTypes:
        "Buenos candidatos a socio estratégico incluyen organizaciones que apoyan el crecimiento de contratistas, resultados de reclamaciones, financiamiento, recursos legales, tecnología, excelencia operativa, gestión de reputación o liderazgo en la industria de restauración.",
    },
  },
  caseStudies: {
    hero: {
      title: "Resultados e información",
      description:
        "Información recopilada de miles de reclamaciones de seguros en techado, restauración, mitigación, reconstrucción y proyectos comerciales en todo el país. Explore oportunidades comunes de recuperación, tendencias por oficio y los patrones de reclamación que vemos todos los días.",
    },
    tradeResults: {
      eyebrow: "Inteligencia de la industria",
      title: "Resultados de recuperación por oficio",
      description:
        "Patrones observados consistentemente en los oficios que más revisamos: lo que las aseguradoras omiten, dónde los estimados quedan cortos y dónde suele existir oportunidad de recuperación.",
    },
    tradeCards: [
      {
        id: "roofing",
        title: "Techado",
        recoveryRange: "25%–50%",
        commonFindings: [
          "Accesorios faltantes",
          "Desperdicio subestimado",
          "Brechas de cumplimiento de código",
          "Discrepancias en precios de materiales",
        ],
        areasReviewed: [
          "Estimados de techado",
          "Requisitos de código",
          "Alcance de accesorios",
          "Precios de mano de obra y materiales",
        ],
        opportunities: [
          "Alcance aprobado ampliado",
          "Valores de recuperación aumentados",
          "Paquetes de documentación más sólidos",
        ],
      },
      {
        id: "water-mitigation",
        title: "Mitigación de agua",
        recoveryRange: "20%–45%",
        commonFindings: [
          "Documentación de humedad incompleta",
          "Equipos de secado con alcance insuficiente",
          "Desconexiones entre mitigación y reconstrucción",
          "Monitoreo y contención faltantes",
        ],
        areasReviewed: [
          "Mapeo de humedad y registros de secado",
          "Alcance de mitigación y días de equipo",
          "Consideraciones de categoría y clase",
          "Alineación del alcance de reconstrucción",
        ],
        opportunities: [
          "Documentación de mitigación más sólida",
          "Alcance ampliado de secado y demolición",
          "Separación de fases más clara para revisión de aseguradoras",
        ],
      },
      {
        id: "fire-restoration",
        title: "Restauración por incendio",
        recoveryRange: "20%–40%",
        commonFindings: [
          "Tratamiento de humo y olor con alcance insuficiente",
          "Coordinación estructural y de oficios faltante",
          "Alcance incompleto de demolición y escombros",
          "Brechas de alcance en contenidos y estructura",
        ],
        areasReviewed: [
          "Alcances estructurales y multioficio",
          "Sellado de humo y desodorización",
          "Partidas de código y ordenanza",
          "Demolición, escombros y protección",
        ],
        opportunities: [
          "Alcances de reconstrucción más completos",
          "Mejor documentación de coordinación de oficios",
          "Organización de expedientes lista para aseguradoras",
        ],
      },
      {
        id: "mold-remediation",
        title: "Remediación de moho",
        recoveryRange: "15%–35%",
        commonFindings: [
          "Documentación de contención insuficiente",
          "Alcance HEPA y antimicrobiano faltante",
          "Brechas en pruebas y autorización",
          "Desconexión de reconstrucción tras la remediación",
        ],
        areasReviewed: [
          "Protocolos de contención y remediación",
          "Aspirado HEPA y limpieza detallada",
          "Documentación de fuente de humedad",
          "Autorización y alineación de reconstrucción",
        ],
        opportunities: [
          "Expedientes de remediación listos para disputa",
          "Alcance ampliado basado en protocolos",
          "Continuidad de reconstrucción más limpia",
        ],
      },
      {
        id: "reconstruction",
        title: "Reconstrucción",
        recoveryRange: "20%–45%",
        commonFindings: [
          "Brechas de alcance en acabados interiores",
          "Mano de obra multioficio con alcance insuficiente",
          "Omisiones de actualizaciones de código",
          "Inconsistencias en empalmes y transiciones",
        ],
        areasReviewed: [
          "Alcances de drywall, pisos y acabados",
          "Transiciones de gabinetes, molduras y pintura",
          "Partidas de reconstrucción eléctrica y mecánica",
          "Actualizaciones y permisos requeridos por código",
        ],
        opportunities: [
          "Estimados de reconstrucción más precisos",
          "Alcance ampliado de interiores y acabados",
          "Documentación más sólida para revisión de aseguradoras",
        ],
      },
      {
        id: "contents-restoration",
        title: "Restauración de contenidos",
        recoveryRange: "15%–35%",
        commonFindings: [
          "Brechas en inventario y cadena de custodia",
          "Artículos especializados con documentación insuficiente",
          "Omisiones de almacenamiento y manipulación",
          "Deficiencias en documentación de métodos de limpieza",
        ],
        areasReviewed: [
          "Operaciones de inventario y pack-out",
          "Protocolos de limpieza y restauración",
          "Duración de almacenamiento y registros de bodega",
          "Expedientes de electrónicos y artículos de alto valor",
        ],
        opportunities: [
          "Documentación de contenidos más completa",
          "Mejor soporte de precios para artículos especializados",
          "Presentaciones organizadas listas para aseguradoras",
        ],
      },
    ],
    commonFindings: {
      eyebrow: "Reconocimiento de patrones",
      title: "Lo que comúnmente encontramos",
      description:
        "Categorías recurrentes de deficiencias identificadas en miles de reclamaciones revisadas: los problemas que las aseguradoras pasan por alto y que los contratistas dejan sin capturar sin una revisión sistemática de estimados.",
      categories: [
        {
          title: "Omisiones de alcance",
          description:
            "Partidas y ensamblajes frecuentemente ausentes de los estimados de aseguradoras, a menudo porque las condiciones de campo, requisitos de acceso o secuencia de oficios no se reflejaron en el alcance inicial.",
          items: [
            "Partidas de accesorios y molduras faltantes",
            "Reparaciones temporales y protección",
            "Operaciones de desmontaje y reinstalación",
            "Retiro y disposición de escombros",
            "Brechas de alcance interior tras mitigación",
          ],
        },
        {
          title: "Brechas de cumplimiento de código",
          description:
            "Actualizaciones específicas de jurisdicción y trabajo impulsado por código que las aseguradoras omiten cuando los estimados se basan en condiciones previas a la pérdida en lugar de requisitos de código actuales.",
          items: [
            "Actualizaciones del código de construcción",
            "Requisitos de barrera de hielo y agua",
            "Requisitos de ventilación y extracción",
            "Regulaciones de seguridad y acceso",
            "Costos relacionados con permisos",
          ],
        },
        {
          title: "Discrepancias de precios",
          description:
            "Tarifas de materiales, mano de obra y equipo que no reflejan las condiciones del mercado, precios regionales o la base de costos real necesaria para ejecutar el trabajo documentado.",
          items: [
            "Precios de materiales por debajo del mercado",
            "Carga laboral y factores de productividad",
            "Ajustes por condiciones de mercado",
            "Variaciones de precios regionales",
            "Deficiencias en tarifas de equipo",
          ],
        },
        {
          title: "Oportunidades de documentación",
          description:
            "Expedientes que carecen de fotos organizadas, registros y documentación de respaldo necesarios para defender el alcance, creando brechas de recuperabilidad incluso cuando el trabajo se realizó correctamente.",
          items: [
            "Documentación fotográfica incompleta",
            "Registros de humedad o secado faltantes",
            "Narrativas débiles de causa y origen",
            "Desalineación inconsistente entre estimado y campo",
            "Brechas en registros de correspondencia con aseguradoras",
          ],
        },
        {
          title: "Elegibilidad de O&P",
          description:
            "Consideraciones de gastos generales y utilidad en pérdidas multioficio donde la coordinación del contratista, supervisión y condiciones generales justifican revisión bajo estándares de estimados de aseguradoras.",
          items: [
            "Alcance de coordinación multioficio",
            "Requisitos de supervisión del proyecto",
            "Condiciones generales en pérdidas complejas",
            "Facturación por fases y secuencia de oficios",
            "Brechas en documentación del rol del contratista",
          ],
        },
        {
          title: "Costos de coordinación",
          description:
            "Alcance de mano de obra, equipo y administración vinculado a gestión de proyectos, coordinación de oficios y la sobrecarga operativa de ejecutar trabajo complejo de restauración por seguros.",
          items: [
            "Brechas en reembolso de equipo",
            "Alcance de supervisión de proyecto y GC",
            "Mano de obra administrativa y de programación",
            "Protección y gestión del sitio",
            "Movilización y secuencia de oficios",
          ],
        },
      ],
    },
    portfolio: {
      title: "Revisión de recuperación de portafolio",
      description:
        "Claims Ninja revisa reclamaciones activas, cerradas y con pago insuficiente en la operación de un contratista para identificar deficiencias recurrentes en estimados, problemas de flujo de trabajo, brechas de suplementos y oportunidades de recuperación.",
      whatWeAnalyze: [
        "Calidad de estimados",
        "Frecuencia de suplementos",
        "Porcentajes de recuperación",
        "Tendencias de aseguradoras",
        "Deficiencias por oficio",
        "Oportunidades de fuga de ingresos",
      ],
      typicalOutcome:
        "Los contratistas descubren ingresos sistemáticos dejados atrás en docenas o cientos de reclamaciones, no solo en un expediente. La revisión de portafolio revela patrones invisibles cuando las reclamaciones se evalúan individualmente: brechas recurrentes de alcance, flujos de trabajo de suplementos inconsistentes y tendencias específicas de aseguradoras que se acumulan en un libro de negocios.",
    },
    recoveryExamplesSection: {
      eyebrow: "Puntos de prueba",
      title: "Ejemplos representativos de recuperación",
      description:
        "Referencias concisas de reclamaciones revisadas, ilustrativas de patrones de recuperación, no el foco principal de esta página.",
    },
    recoveryExamples: [
      {
        id: "commercial-roofing",
        title: "Portafolio de techado comercial",
        carrierEstimate: "$840,000",
        additionalRecovery: "$312,000",
        recoveryIncrease: "37%",
        keyFindings: [
          "Omisiones de accesorios y partidas de código en múltiples techos",
          "Precios de materiales por debajo de tarifas regionales de mercado",
          "Cargos de desperdicio y pendiente con alcance insuficiente en geometría compleja",
        ],
      },
      {
        id: "multi-family-water",
        title: "Pérdida por agua multifamiliar",
        carrierEstimate: "$485,000",
        additionalRecovery: "$178,000",
        recoveryIncrease: "37%",
        keyFindings: [
          "Días de equipo de mitigación y monitoreo con alcance insuficiente",
          "Alcance de reconstrucción desconectado de la documentación de secado",
          "Elegibilidad de O&P en alcance de coordinación multiunidad",
        ],
      },
      {
        id: "fire-restoration",
        title: "Proyecto de restauración por incendio",
        carrierEstimate: "$620,000",
        additionalRecovery: "$198,000",
        recoveryIncrease: "32%",
        keyFindings: [
          "Brechas de alcance en sellado de humo y HVAC",
          "Mano de obra multioficio con alcance insuficiente en reconstrucción estructural",
          "Partidas de actualización de código omitidas del estimado de aseguradora",
        ],
      },
    ],
  },
  reviews: {
    eyebrow: "Empresa",
    title: "Reseñas",
    description:
      "Lo que dicen los contratistas de restauración y techado sobre asociarse con Claims Ninja en operaciones de reclamaciones.",
    metaTitle: "Reseñas",
    metaDescription:
      "Lea lo que dicen los contratistas de restauración y techado sobre asociarse con Claims Ninja en operaciones de reclamaciones, plazos y resultados de recuperación.",
  },
};

const COMPANY_CONTENT: Record<Locale, CompanyContent> = { en: EN, es: ES };

export function getCompanyContent(locale: Locale): CompanyContent {
  return COMPANY_CONTENT[locale] ?? EN;
}
