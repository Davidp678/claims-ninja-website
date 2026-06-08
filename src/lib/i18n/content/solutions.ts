import type { Locale } from "@/lib/i18n/config";
import {
  CONTENTS_RESTORATION_FEATURES,
  CONTENTS_RESTORATION_HERO,
  CONTENTS_RESTORATION_HERO_IMAGE,
  CONTENTS_RESTORATION_MISSED_ITEMS,
  CONTENTS_RESTORATION_SEGMENTS,
  CONTENTS_RESTORATION_WORKFLOW,
} from "@/lib/contents-restoration-page";
import {
  FIRE_DAMAGE_FEATURES,
  FIRE_DAMAGE_HERO,
  FIRE_DAMAGE_HERO_IMAGE,
  FIRE_DAMAGE_MISSED_ITEMS,
  FIRE_DAMAGE_SEGMENTS,
  FIRE_DAMAGE_WORKFLOW,
} from "@/lib/fire-damage-page";
import {
  MOLD_FEATURES,
  MOLD_HERO,
  MOLD_HERO_IMAGE,
  MOLD_MISSED_ITEMS,
  MOLD_SEGMENTS,
  MOLD_WORKFLOW,
} from "@/lib/mold-page";
import {
  ROOFING_FEATURES,
  ROOFING_HERO,
  ROOFING_HERO_IMAGE,
  ROOFING_MISSED_ITEMS,
  ROOFING_SEGMENTS,
  ROOFING_WORKFLOW,
} from "@/lib/roofing-page";
import {
  WATER_DAMAGE_FEATURES,
  WATER_DAMAGE_HERO,
  WATER_DAMAGE_HERO_IMAGE,
  WATER_DAMAGE_MISSED_ITEMS,
  WATER_DAMAGE_SEGMENTS,
  WATER_DAMAGE_WORKFLOW,
} from "@/lib/water-damage-page";

type TitleDescription = { title: string; description: string };
type WorkflowStep = { step: string; title: string; description: string };

export type SolutionPageContent = {
  hero: { eyebrow: string; title: string; description: string };
  heroImage: { src: string; alt: string };
  segments: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly TitleDescription[];
  };
  features: {
    eyebrow: string;
    title: string;
    items: readonly TitleDescription[];
  };
  workflow: {
    eyebrow: string;
    title: string;
    steps: readonly WorkflowStep[];
  };
  missedItems: {
    title: string;
    description: string;
    items: readonly string[];
  };
};

type SolutionsContent = {
  roofing: SolutionPageContent;
  waterDamage: SolutionPageContent;
  fireDamage: SolutionPageContent;
  mold: SolutionPageContent;
  contents: SolutionPageContent;
};

const EN: SolutionsContent = {
  roofing: {
    hero: ROOFING_HERO,
    heroImage: ROOFING_HERO_IMAGE,
    segments: ROOFING_SEGMENTS,
    features: ROOFING_FEATURES,
    workflow: ROOFING_WORKFLOW,
    missedItems: ROOFING_MISSED_ITEMS,
  },
  waterDamage: {
    hero: WATER_DAMAGE_HERO,
    heroImage: WATER_DAMAGE_HERO_IMAGE,
    segments: WATER_DAMAGE_SEGMENTS,
    features: WATER_DAMAGE_FEATURES,
    workflow: WATER_DAMAGE_WORKFLOW,
    missedItems: WATER_DAMAGE_MISSED_ITEMS,
  },
  fireDamage: {
    hero: FIRE_DAMAGE_HERO,
    heroImage: FIRE_DAMAGE_HERO_IMAGE,
    segments: FIRE_DAMAGE_SEGMENTS,
    features: FIRE_DAMAGE_FEATURES,
    workflow: FIRE_DAMAGE_WORKFLOW,
    missedItems: FIRE_DAMAGE_MISSED_ITEMS,
  },
  mold: {
    hero: MOLD_HERO,
    heroImage: MOLD_HERO_IMAGE,
    segments: MOLD_SEGMENTS,
    features: MOLD_FEATURES,
    workflow: MOLD_WORKFLOW,
    missedItems: MOLD_MISSED_ITEMS,
  },
  contents: {
    hero: CONTENTS_RESTORATION_HERO,
    heroImage: CONTENTS_RESTORATION_HERO_IMAGE,
    segments: CONTENTS_RESTORATION_SEGMENTS,
    features: CONTENTS_RESTORATION_FEATURES,
    workflow: CONTENTS_RESTORATION_WORKFLOW,
    missedItems: CONTENTS_RESTORATION_MISSED_ITEMS,
  },
};

const ES: SolutionsContent = {
  roofing: {
    hero: {
      eyebrow: "Soluciones",
      title: "Reclamaciones de techado",
      description:
        "Maximice la recuperación en pérdidas de techado residencial y comercial con documentación, estrategia de suplementos y negociación con aseguradoras diseñadas para operaciones reales de techado.",
    },
    heroImage: {
      src: ROOFING_HERO_IMAGE.src,
      alt: "Contratista de techado documentando daños por tormenta en un techo residencial de pendiente pronunciada",
    },
    segments: {
      eyebrow: "Apoyo en reclamaciones de techado",
      title: "Diseñado para volumen de tormentas, techado retail y alcances complejos de aseguradoras",
      description:
        "Las reclamaciones de techado avanzan rápido. Claims Ninja ayuda a los contratistas a convertir fotos, estimados, mediciones, requisitos de código y documentación de campo en oportunidades de suplemento organizadas.",
      items: [
        {
          title: "Restauración por tormentas",
          description:
            "Apoyo para libros de alto volumen por tormentas, admisión repetida de reclamaciones y consistencia documental en múltiples pérdidas de techo.",
        },
        {
          title: "Techado residencial",
          description:
            "Estrategia de suplementos para tejas, accesorios, ventilación, partidas de código, desperdicio, cargos por pendiente pronunciada y brechas en el alcance de la aseguradora.",
        },
        {
          title: "Techado comercial",
          description:
            "Apoyo para techos planos, recubrimientos, membranas, sistemas metálicos, alcances mayores y revisiones documentales intensivas por parte de aseguradoras.",
        },
      ],
    },
    features: {
      eyebrow: "Lo que gestionamos",
      title: "Detalles de reclamaciones de techado que las aseguradoras suelen omitir",
      items: [
        {
          title: "Precisión del alcance",
          description:
            "Detalle de partidas alineado con especificaciones del fabricante, patrones de daño, componentes del sistema de techo y la forma real en que se construyó el techo.",
        },
        {
          title: "Partidas de código y cumplimiento",
          description:
            "Partidas como drip edge, barrera de hielo y agua, ventilación, requisitos de entablado y mejoras específicas de la jurisdicción pueden requerir revisión.",
        },
        {
          title: "Desperdicio y factores de medición",
          description:
            "La geometría del techo, factores de desperdicio, pendiente, capas, complejidad del corte y discrepancias de medición pueden afectar materialmente el alcance final.",
        },
        {
          title: "Flashing y penetraciones",
          description:
            "Step flashing, counter flashing, boots de tubería, ventilaciones, valles, tragaluces e intersecciones con muros a menudo merecen una revisión más detallada.",
        },
        {
          title: "Cargos por pendiente, altura y acceso",
          description:
            "La pendiente, altura, limitaciones de acceso, requisitos de seguridad y condiciones laborales pueden generar consideraciones legítimas de alcance.",
        },
        {
          title: "Accesorios de techado",
          description:
            "Curso inicial, ridge cap, hip cap, ventilaciones, drip edge, componentes de valle y otros accesorios pueden omitirse o quedar subestimados en el alcance.",
        },
      ],
    },
    workflow: {
      eyebrow: "Cómo funciona",
      title: "De la documentación del techo a la estrategia de suplementos",
      steps: [
        {
          step: "01",
          title: "Envíe los materiales de la reclamación",
          description:
            "Fotos, estimados, EagleView/mediciones, alcances, cartas de la aseguradora y detalles del trabajo entran en un proceso de revisión organizado.",
        },
        {
          step: "02",
          title: "Construimos el panorama de la reclamación",
          description:
            "Nuestro equipo revisa cantidades, componentes del techo, documentación de daños, consideraciones de código y brechas en el estimado.",
        },
        {
          step: "03",
          title: "Se identifican oportunidades de suplemento",
          description:
            "Marcamos partidas faltantes, problemas de precios, brechas de alcance y partidas que vale la pena perseguir con la aseguradora.",
        },
        {
          step: "04",
          title: "El contratista obtiene un camino claro",
          description:
            "Recibe próximos pasos organizados, orientación documental y apoyo en reclamaciones sin tener que crear un departamento interno de reclamaciones.",
        },
      ],
    },
    missedItems: {
      title: "Partidas comunes de techado que merecen una segunda revisión",
      description:
        "Estas partidas se omiten con frecuencia según el alcance, el código y la documentación. Cada una puede requerir revisión; no todas las partidas se deben en cada reclamación.",
      items: [
        "Drip edge y curso inicial",
        "Barrera de hielo y agua",
        "Metal de valle o revestimiento de valle",
        "Ridge cap y hip cap",
        "Step flashing y counter flashing",
        "Boots de tubería, ventilaciones y accesorios",
        "Cargos por pendiente y altura",
        "Demolición, desperdicio y factores laborales",
        "Mejoras requeridas por código",
        "O&P o supervisión cuando aplique",
      ],
    },
  },
  waterDamage: {
    hero: {
      eyebrow: "Soluciones",
      title: "Reclamaciones por daños de agua",
      description:
        "Convertimos documentación de mitigación, lecturas de humedad, alcances de reconstrucción y correspondencia con aseguradoras en apoyo organizado de reclamaciones diseñado para contratistas de restauración.",
    },
    heroImage: {
      src: WATER_DAMAGE_HERO_IMAGE.src,
      alt: "Contratista de restauración documentando lecturas de humedad y equipo de mitigación en una propiedad con daños por agua",
    },
    segments: {
      eyebrow: "Apoyo en reclamaciones por agua",
      title: "Diseñado para mitigación, reconstrucciones y pérdidas con documentación intensiva",
      description:
        "Las pérdidas por agua avanzan rápido y las aseguradoras escrutan cada detalle. Claims Ninja ayuda a los contratistas de restauración a organizar el expediente, conectar la mitigación con la reconstrucción e identificar oportunidades de suplemento.",
      items: [
        {
          title: "Mitigación de emergencia",
          description:
            "Apoyo documental para secado, equipo, mapeo de humedad, demolición, contención y revisión por parte de la aseguradora.",
        },
        {
          title: "Alcances de reconstrucción",
          description:
            "Desarrollo de alcance para drywall, pisos, gabinetes, molduras, pintura, manejo de contenidos y ensamblajes afectados.",
        },
        {
          title: "Pérdidas complejas por agua",
          description:
            "Apoyo para consideraciones de categoría/clase, daños en múltiples habitaciones, humedad oculta, problemas de acceso y reclamaciones con documentación intensiva.",
        },
      ],
    },
    features: {
      eyebrow: "Lo que gestionamos",
      title: "Detalles de reclamaciones por daños de agua que las aseguradoras suelen cuestionar",
      items: [
        {
          title: "Documentación de humedad",
          description:
            "Las lecturas de humedad, registros de secado, materiales afectados, uso de equipo y cronogramas de secado deben respaldar el alcance presentado.",
        },
        {
          title: "Alcance de mitigación",
          description:
            "Extracción de agua, contención, demolición, tratamiento antimicrobiano, equipo, monitoreo y detalles laborales pueden requerir revisión cuidadosa.",
        },
        {
          title: "Alineación del alcance de reconstrucción",
          description:
            "Drywall, aislamiento, pisos, molduras, pintura, gabinetes y ensamblajes afectados deben conectarse claramente con el expediente de mitigación.",
        },
        {
          title: "Consideraciones de categoría y clase",
          description:
            "La categoría del agua, la clase de la pérdida, las áreas afectadas y la porosidad de los materiales pueden dar forma a la documentación y la revisión del estimado.",
        },
        {
          title: "Contenidos y protección",
          description:
            "Pack-out, manipulación, protección, limpieza, almacenamiento y consideraciones de reinstalación pueden afectar la reclamación según el alcance.",
        },
        {
          title: "Documentación para la aseguradora",
          description:
            "Fotos, notas, registros, facturas, estimados y correspondencia deben contar una historia coherente antes del envío.",
        },
      ],
    },
    workflow: {
      eyebrow: "Cómo funciona",
      title: "Del expediente de mitigación a la estrategia de reclamación",
      steps: [
        {
          step: "01",
          title: "Envíe los materiales de la reclamación",
          description:
            "Cargue fotos, lecturas de humedad, estimados, registros de secado, registros de equipo, correspondencia con la aseguradora y detalles de reconstrucción.",
        },
        {
          step: "02",
          title: "Organizamos el panorama de la pérdida",
          description:
            "Nuestro equipo revisa áreas afectadas, documentación de secado, alcance de demolición, requisitos de reconstrucción y brechas en el estimado.",
        },
        {
          step: "03",
          title: "Se identifican oportunidades de suplemento",
          description:
            "Marcamos partidas faltantes, problemas de precios, brechas de alcance y necesidades documentales que pueden justificar revisión por parte de la aseguradora.",
        },
        {
          step: "04",
          title: "El contratista obtiene un camino claro",
          description:
            "Recibe próximos pasos organizados, orientación documental y apoyo en reclamaciones sin tener que crear un departamento interno de reclamaciones.",
        },
      ],
    },
    missedItems: {
      title: "Partidas comunes de daños por agua que merecen una segunda revisión",
      description:
        "No todas las partidas se deben en cada reclamación. Estas son áreas comunes que pueden requerir revisión según la documentación, la póliza, el alcance y las condiciones de la pérdida.",
      items: [
        "Mapeo de humedad y registros de secado",
        "Días de equipo y monitoreo",
        "Manipulación de contenidos o pack-out",
        "Zócalos, molduras y transiciones de pintura",
        "Cortes en drywall y aislamiento",
        "Desmontaje/reinstalación o reemplazo de gabinetes",
        "Remoción de pisos y preocupaciones de coincidencia",
        "Contención y protección contra polvo",
        "Tratamiento antimicrobiano",
        "Mano de obra de demolición y manejo de escombros",
        "Acceso, enmascaramiento y protección",
        "Alineación del alcance de reconstrucción tras la mitigación",
      ],
    },
  },
  fireDamage: {
    hero: {
      eyebrow: "Soluciones",
      title: "Reclamaciones por daños de incendio",
      description:
        "Ayudamos a los contratistas de restauración a organizar documentación de incendio, humo, estructura, contenidos y reconstrucción en apoyo de reclamaciones diseñado para revisiones complejas de aseguradoras.",
    },
    heroImage: {
      src: FIRE_DAMAGE_HERO_IMAGE.src,
      alt: "Contratista de restauración documentando daños por incendio y humo en un entorno de reconstrucción estructural",
    },
    segments: {
      eyebrow: "Apoyo en reclamaciones por incendio",
      title: "Diseñado para reconstrucciones complejas, pérdidas por humo y alcances multigremio",
      description:
        "Las reclamaciones por incendio rara vez involucran un alcance limpio y único. Claims Ninja ayuda a los contratistas a organizar la estructura, contenidos, mitigación, limpieza, código y documentación de reconstrucción necesaria para respaldar la reclamación.",
      items: [
        {
          title: "Reconstrucciones estructurales",
          description:
            "Apoyo para demolición, estructura, techado, oficios mecánicos, acabados y alineación del alcance de reconstrucción.",
        },
        {
          title: "Pérdidas por humo y olor",
          description:
            "Apoyo documental para limpieza, sellado, desodorización, preocupaciones de HVAC y revisión de materiales afectados.",
        },
        {
          title: "Coordinación de contenidos",
          description:
            "Ayuda para alinear flujos de estructura y propiedad personal cuando intervienen pack-out, limpieza, almacenamiento o reemplazo.",
        },
      ],
    },
    features: {
      eyebrow: "Lo que gestionamos",
      title: "Detalles de reclamaciones por incendio que las aseguradoras suelen cuestionar",
      items: [
        {
          title: "Alcance estructural",
          description:
            "Estructura, sistemas de techo, entablado, drywall, aislamiento y materiales de acabado deben alinearse con las condiciones de daño y los requisitos de reconstrucción.",
        },
        {
          title: "Tratamiento de humo y olor",
          description:
            "Limpieza, sellado, desodorización, consideraciones de HVAC y materiales porosos afectados pueden requerir documentación detallada.",
        },
        {
          title: "Partidas de código y ordenanza",
          description:
            "Eléctrico, mecánico, estructura, separación contra incendios, aislamiento y mejoras específicas de la jurisdicción pueden requerir revisión.",
        },
        {
          title: "Demolición y escombros",
          description:
            "Demolición, demolición selectiva, manejo de escombros, acceso, protección y condiciones laborales pueden afectar materialmente el alcance.",
        },
        {
          title: "Contenidos y pack-out",
          description:
            "Manipulación, inventario, limpieza, almacenamiento, disposición y consideraciones de reinstalación pueden afectar la reclamación según el alcance.",
        },
        {
          title: "Coordinación multigremio",
          description:
            "Las pérdidas por incendio a menudo involucran techado, estructura, eléctrico, HVAC, plomería, drywall, pisos, pintura y oficios especializados.",
        },
      ],
    },
    workflow: {
      eyebrow: "Cómo funciona",
      title: "Del expediente de incendio a la estrategia de reclamación",
      steps: [
        {
          step: "01",
          title: "Envíe los materiales de la reclamación",
          description:
            "Cargue fotos, estimados, registros de mitigación, notas de ingeniería, documentación de contenidos, cartas de la aseguradora y detalles de reconstrucción.",
        },
        {
          step: "02",
          title: "Construimos el panorama de la pérdida",
          description:
            "Nuestro equipo revisa áreas afectadas, daños por incendio y humo, consideraciones estructurales, alcances por oficio, partidas de código y brechas en el estimado.",
        },
        {
          step: "03",
          title: "Se identifican oportunidades de suplemento",
          description:
            "Marcamos partidas faltantes, problemas de precios, brechas de alcance, necesidades documentales y partidas que pueden justificar revisión por parte de la aseguradora.",
        },
        {
          step: "04",
          title: "El contratista obtiene un camino claro",
          description:
            "Recibe próximos pasos organizados, orientación documental y apoyo en reclamaciones a lo largo de un ciclo de recuperación más largo y complejo.",
        },
      ],
    },
    missedItems: {
      title: "Partidas comunes de daños por incendio que merecen una segunda revisión",
      description:
        "No todas las partidas se deben en cada reclamación. Estas son áreas comunes que pueden requerir revisión según la documentación, la póliza, el código, el alcance y las condiciones de la pérdida.",
      items: [
        "Sellado contra humo y tratamiento de olores",
        "Limpieza o evaluación de HVAC",
        "Alcance eléctrico y mecánico",
        "Estructura, entablado y reparaciones estructurales",
        "Reemplazo de aislamiento",
        "Drywall, textura y transiciones de pintura",
        "Techado y componentes exteriores",
        "Manipulación de contenidos o pack-out",
        "Remoción y disposición de escombros",
        "Protección temporal y tapiado",
        "Mejoras requeridas por código",
        "Coordinación de oficios y supervisión",
      ],
    },
  },
  mold: {
    hero: {
      eyebrow: "Soluciones",
      title: "Reclamaciones por moho",
      description:
        "Ayudamos a los contratistas de restauración a organizar remediación de moho, contención, clearance, reconstrucción y documentación para aseguradoras en apoyo de reclamaciones diseñado para pérdidas disputadas o guiadas por protocolo.",
    },
    heroImage: {
      src: MOLD_HERO_IMAGE.src,
      alt: "Contratista de restauración documentando contención de remediación de moho y alcance guiado por protocolo en un sitio de pérdida",
    },
    segments: {
      eyebrow: "Apoyo en reclamaciones por moho",
      title: "Diseñado para alcances de remediación, trabajo de contención y expedientes disputados",
      description:
        "Las reclamaciones por moho requieren documentación limpia, alineación cuidadosa del alcance y una conexión clara entre remediación, pruebas, trabajo de reconstrucción y revisión de la aseguradora. Claims Ninja ayuda a los contratistas a construir expedientes más fáciles de defender.",
      items: [
        {
          title: "Protocolos de remediación",
          description:
            "Apoyo para contención, demolición, limpieza, aspirado HEPA, tratamiento antimicrobiano y revisión de alcance guiada por protocolo.",
        },
        {
          title: "Clearance y documentación",
          description:
            "Ayuda para organizar fotos, registros de pruebas, datos de humedad, notas de remediación y documentación relacionada con clearance.",
        },
        {
          title: "Continuidad de reconstrucción",
          description:
            "Apoyo de alcance para drywall, aislamiento, molduras, pintura, pisos, gabinetes y ensamblajes afectados tras la remediación.",
        },
      ],
    },
    features: {
      eyebrow: "Lo que gestionamos",
      title: "Detalles de reclamaciones por moho que las aseguradoras suelen cuestionar",
      items: [
        {
          title: "Alcance de contención",
          description:
            "Barreras de contención, aire negativo, puertas con cremallera, protección y separación del área de trabajo deben alinearse con el protocolo y las áreas afectadas.",
        },
        {
          title: "Mano de obra de remediación",
          description:
            "Demolición, aspirado HEPA, limpieza, tratamiento antimicrobiano, mano de obra de detalle y manejo de materiales pueden requerir documentación cuidadosa.",
        },
        {
          title: "Pruebas y clearance",
          description:
            "Resultados de laboratorio, documentación de clearance, notas de inspección y requisitos de pruebas pueden dar forma al expediente de reclamación y la revisión del alcance.",
        },
        {
          title: "Documentación de humedad y fuente",
          description:
            "Lecturas de humedad, detalles de la fuente de filtración, ensamblajes afectados e historial de secado ayudan a conectar la condición de moho con la narrativa de la reclamación.",
        },
        {
          title: "Alineación del alcance de reconstrucción",
          description:
            "Drywall, aislamiento, molduras, pintura, pisos, gabinetes y acabados afectados deben conectarse claramente con el alcance de remediación.",
        },
        {
          title: "Expedientes listos para disputa",
          description:
            "Fotos, notas, protocolos, estimados, facturas, informes y correspondencia deben contar una historia coherente antes de la revisión de la aseguradora.",
        },
      ],
    },
    workflow: {
      eyebrow: "Cómo funciona",
      title: "Del expediente de moho a la estrategia de reclamación",
      steps: [
        {
          step: "01",
          title: "Envíe los materiales de la reclamación",
          description:
            "Cargue fotos, notas de inspección, estimados de remediación, información de pruebas, lecturas de humedad, cartas de la aseguradora y detalles de reconstrucción.",
        },
        {
          step: "02",
          title: "Organizamos el panorama de la pérdida",
          description:
            "Nuestro equipo revisa materiales afectados, necesidades de contención, alcance de remediación, documentación de clearance, requisitos de reconstrucción y brechas en el estimado.",
        },
        {
          step: "03",
          title: "Se identifican oportunidades de suplemento",
          description:
            "Marcamos partidas faltantes, problemas de precios, brechas documentales, desconexiones de reconstrucción y partidas que pueden justificar revisión por parte de la aseguradora.",
        },
        {
          step: "04",
          title: "El contratista obtiene un camino claro",
          description:
            "Recibe próximos pasos organizados, orientación documental y apoyo en reclamaciones para expedientes de moho que las aseguradoras suelen escrutar.",
        },
      ],
    },
    missedItems: {
      title: "Partidas comunes de reclamaciones por moho que merecen una segunda revisión",
      description:
        "No todas las partidas se deben en cada reclamación. Estas son áreas comunes que pueden requerir revisión según la documentación, la póliza, el protocolo, el alcance y las condiciones de la pérdida.",
      items: [
        "Barreras de contención y puertas con cremallera",
        "Equipo de aire negativo",
        "Aspirado HEPA y limpieza de detalle",
        "Tratamiento antimicrobiano",
        "Demolición selectiva",
        "Protección y enmascaramiento",
        "Lecturas de humedad y documentación de la fuente",
        "Documentación de pruebas o clearance",
        "Manejo y disposición de escombros",
        "Alcance de reconstrucción tras la remediación",
        "Manipulación o protección de contenidos",
        "Brechas documentales que provocan resistencia de la aseguradora",
      ],
    },
  },
  contents: {
    hero: {
      eyebrow: "Soluciones",
      title: "Reclamaciones de restauración de contenidos",
      description:
        "Apoyo en reclamaciones para pérdidas de contenidos con inventario y documentación intensivos. Ayudamos a empresas de pack-out, especialistas en inventario y firmas de restauración especializada a organizar registros de inventario, documentación de limpieza, registros de almacenamiento y envíos a aseguradoras en expedientes diseñados para revisión.",
    },
    heroImage: {
      src: CONTENTS_RESTORATION_HERO_IMAGE.src,
      alt: "Técnico de restauración de contenidos documentando inventario con código de barras y propiedad personal empacada en un entorno de almacén",
    },
    segments: {
      eyebrow: "Apoyo por industria",
      title: "Diseñado para empresas de pack-out, operaciones de inventario y restauración especializada",
      description:
        "Las pérdidas de contenidos dependen de la documentación. Claims Ninja ayuda a las empresas de restauración de contenidos a conectar inventario, limpieza, almacenamiento, cadena de custodia y precios en expedientes de reclamación que las aseguradoras pueden revisar de verdad.",
      items: [
        {
          title: "Operaciones de pack-out e inventario",
          description:
            "Apoyo para inventarios habitación por habitación, códigos de barras, etiquetado, embalaje, registros de transporte y documentación de recepción en almacén.",
        },
        {
          title: "Restauración textil y especializada",
          description:
            "Ayuda para organizar métodos de limpieza, documentación de procesos, notas de manejo especializado y apoyo de valuación para prendas, tapicería y artículos delicados.",
        },
        {
          title: "Electrónicos y contenidos de alto valor",
          description:
            "Apoyo documental para registros de pruebas, protocolos de restauración, números de serie, tasaciones y expedientes de artículos de alto valor que las aseguradoras escrutan de cerca.",
        },
      ],
    },
    features: {
      eyebrow: "Lo que gestionamos",
      title: "Detalles de reclamaciones de contenidos que las aseguradoras suelen cuestionar",
      items: [
        {
          title: "Documentación de inventario",
          description:
            "Inventarios por habitación, descripciones de artículos, cantidades, notas de condición, fotos y códigos de barras deben contar una historia completa desde el sitio de la pérdida hasta el almacén.",
        },
        {
          title: "Operaciones de pack-out",
          description:
            "Mano de obra, materiales, embalaje, etiquetado, transporte, protección y manejo en sitio a menudo necesitan documentación clara vinculada al expediente de inventario.",
        },
        {
          title: "Documentación de limpieza",
          description:
            "Métodos de limpieza, notas de proceso, manejo especializado, desodorización y mano de obra de restauración deben alinearse con el tipo de artículo y las expectativas de la aseguradora.",
        },
        {
          title: "Registros de almacenamiento",
          description:
            "Recepción en almacén, estantería, consideraciones climáticas, duración, registros de manejo y documentación de recuperación pueden dar forma a la revisión de la reclamación y disputas de precios.",
        },
        {
          title: "Restauración de electrónicos",
          description:
            "Registros de pruebas, protocolos de restauración, reemplazo de piezas, notas de recuperación de datos y seguimiento de números de serie ayudan a defender alcances especializados de electrónicos.",
        },
        {
          title: "Restauración textil",
          description:
            "La restauración de prendas, tapicería y telas a menudo requiere documentación de procesos, métodos de limpieza especializados y apoyo cuidadoso de valuación.",
        },
      ],
    },
    workflow: {
      eyebrow: "Cómo funciona",
      title: "Del expediente de contenidos a la estrategia de reclamación",
      steps: [
        {
          step: "01",
          title: "Envíe los materiales de la reclamación",
          description:
            "Cargue inventarios, registros de pack-out, fotos, documentación de limpieza, registros de almacenamiento, informes de pruebas, estimados, cartas de la aseguradora y detalles de restauración especializada.",
        },
        {
          step: "02",
          title: "Organizamos el panorama de contenidos",
          description:
            "Nuestro equipo revisa la integridad del inventario, cadena de custodia, registros de limpieza y almacenamiento, alcance de restauración especializada, precios y requisitos documentales de la aseguradora.",
        },
        {
          step: "03",
          title: "Se identifican oportunidades de suplemento",
          description:
            "Marcamos partidas faltantes, artículos de alto valor con documentación insuficiente, disputas de precios, brechas de almacenamiento o manejo, y partidas de contenidos que pueden justificar revisión por parte de la aseguradora.",
        },
        {
          step: "04",
          title: "Su equipo obtiene un camino claro",
          description:
            "Recibe próximos pasos organizados, orientación documental y apoyo en reclamaciones para expedientes con inventario intensivo que dependen de pruebas, no de suposiciones.",
        },
      ],
    },
    missedItems: {
      title: "Partidas comunes de reclamaciones de contenidos que merecen una segunda revisión",
      description:
        "No todas las partidas se deben en cada reclamación. Estas son áreas comunes que pueden requerir revisión según la documentación, la póliza, la integridad del inventario, las condiciones de almacenamiento y los requisitos de la aseguradora.",
      items: [
        "Cadena de custodia y documentación de recepción",
        "Brechas en códigos de barras, etiquetado o inventario",
        "Fotos de artículos de alto valor y registros de respaldo",
        "Documentación de método y proceso de limpieza",
        "Duración de almacenamiento y registros de manejo en almacén",
        "Registros de pruebas y restauración de electrónicos",
        "Documentación de procesos y limpieza especializada textil",
        "Mano de obra, materiales y transporte de pack-out",
        "Manipulación de contenidos y manejo en sitio",
        "Disputas de precios en artículos especializados o antiguos",
        "Requisitos de formato documental específicos de la aseguradora",
        "Brechas documentales que provocan resistencia de la aseguradora",
      ],
    },
  },
};

const SOLUTIONS: Record<Locale, SolutionsContent> = { en: EN, es: ES };

export function getSolutionsContent(locale: Locale): SolutionsContent {
  return SOLUTIONS[locale] ?? EN;
}
