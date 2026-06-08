import type { Locale } from "@/lib/i18n/config";
import type { FaqItem, FaqRelatedLink } from "@/lib/faq-page";
import { getFaqItemsByIds } from "@/lib/faq-page";

/** Spanish topic labels keyed by the English topic string used in SITE_FAQ. */
const ES_TOPIC_BY_EN: Record<string, string> = {
  "Claims Ninja": "Claims Ninja",
  "the Claims Ninja platform": "la plataforma de Claims Ninja",
  "Claims Ninja pricing and billing": "los precios y la facturación de Claims Ninja",
  "contacting Claims Ninja": "cómo contactar a Claims Ninja",
};

export function translateFaqTopic(topic: string, locale: Locale): string {
  if (locale === "en") return topic;
  return ES_TOPIC_BY_EN[topic] ?? topic;
}

/** Spanish labels for related-link CTAs that appear in Wave 1 FAQ entries. */
const ES_RELATED_LABELS: Record<string, string> = {
  "Contact us": "Contáctenos",
  "Platform overview": "Resumen de la plataforma",
  Pricing: "Precios",
  "Billing & Payments": "Facturación y pagos",
  "Roofing claims": "Reclamaciones de techado",
  "Communication hub": "Centro de comunicación",
  "Claim tracking": "Seguimiento de reclamaciones",
  "Client portal": "Portal del cliente",
  "AI claim analysis": "Análisis de reclamaciones con IA",
};

type EsFaqOverride = { question: string; answer: string };

const ES_FAQ: Record<string, EsFaqOverride> = {
  "getting-started-onboarding": {
    question: "¿Cómo funciona la incorporación con Claims Ninja?",
    answer:
      "La incorporación comienza con la admisión: revisamos su operación, su volumen de reclamaciones y su flujo de trabajo actual. Su equipo recibe acceso a la plataforma, estándares de documentación y un proceso de entrega claro para las primeras reclamaciones. La mayoría de los contratistas presentan reclamaciones dentro de la primera semana, según el tipo y el alcance de la reclamación.",
  },
  "getting-started-field-vs-support": {
    question: "¿Qué queda a cargo de mi equipo de campo y qué de Claims Ninja?",
    answer:
      "Su cuadrilla se encarga de la producción: mitigación, reparaciones, techado, manejo de contenidos y la comunicación con el cliente en el sitio. Claims Ninja apoya la revisión de estimados, la estrategia de suplementos, la organización de la documentación y la comunicación con la aseguradora. Usted mantiene el control del trabajo; nosotros fortalecemos el expediente de la reclamación detrás de usted.",
  },
  "getting-started-who-for": {
    question: "¿Para quién está hecho Claims Ninja?",
    answer:
      "Claims Ninja está hecho para contratistas, empresas de restauración y profesionales de reclamaciones de propiedad que manejan trabajo de seguros en volumen. Si su equipo atiende pérdidas por tormenta, agua, fuego, moho o contenidos y necesita documentación y apoyo de suplementos más sólidos sin formar un departamento de reclamaciones interno, la plataforma está diseñada para usted.",
  },
  "contact-response-time": {
    question: "¿Qué tan rápido responderá alguien?",
    answer:
      "La mayoría de las consultas enviadas a través de nuestro formulario de contacto o correo electrónico reciben respuesta dentro de un día hábil. Las revisiones de reclamaciones complejas o las evaluaciones de asociación pueden tomar un poco más mientras revisamos sus detalles; le confirmaremos los tiempos cuando respondamos.",
  },
  "contact-multiple-claims": {
    question: "¿Puedo enviar varias reclamaciones?",
    answer:
      "Sí. Los contratistas y socios trabajan habitualmente con Claims Ninja en múltiples expedientes activos. Use el formulario de contacto para describir su situación, o inicie el ingreso de reclamaciones para expedientes individuales a través de nuestro proceso de incorporación estándar.",
  },
  "contact-carrier-estimate": {
    question: "¿Necesito un estimado de la aseguradora antes de contactar a Claims Ninja?",
    answer:
      "No. Puede comunicarse antes de que exista un estimado de la aseguradora; le ayudaremos a entender los próximos pasos según el tipo de reclamación y su documentación. Si hay un estimado disponible, compartirlo acelera la revisión, pero no es obligatorio para iniciar una conversación.",
  },
  "pricing-fee-structure": {
    question: "¿Cómo se estructuran las tarifas de asociación?",
    answer:
      "Las tarifas se estructuran por tipo de servicio, no como una tarifa única para cada expediente. La redacción de estimados usa tarifas escalonadas según el valor del estimado. La negociación con la aseguradora usa un mínimo de $150 más el 15% del aumento documentado del acuerdo cuando existe un estimado de la aseguradora, o el 4% del RCV final cuando no se ha proporcionado un estimado de la aseguradora. El apoyo de suplementos es el 15% del aumento documentado aprobado a partir del alcance suplementario presentado. Servicios adicionales como apoyo de tasación o informes EagleView se cotizan según la complejidad de la reclamación.",
  },
  "pricing-estimate-writing": {
    question: "¿Cómo se calculan las tarifas de redacción de estimados?",
    answer:
      "Las tarifas de redacción de estimados se escalonan según el valor del estimado: $100 mínimo para un valor de estimado menor a $12,500; 1.25% para $12,500–$100,000; 0.75% para $100,001–$200,000; y 0.50% para un valor de estimado superior a $200,000. Las facturas de estimados se emiten al completarse y con la aprobación del cliente a través del Portal del Cliente.",
  },
  "pricing-minimum-fees": {
    question: "¿Existen tarifas mínimas?",
    answer:
      "Sí. La redacción de estimados tiene un mínimo de $100 para un valor de estimado menor a $12,500. La negociación con la aseguradora tiene una tarifa mínima de $150. Estos mínimos se aplican antes de los cálculos basados en porcentaje sobre alcances mayores.",
  },
  "pricing-15-percent": {
    question: "¿Cuándo se aplica la tarifa del 15% sobre el aumento documentado?",
    answer:
      "La tarifa del 15% se aplica al aumento documentado del acuerdo por encima del estimado original de la aseguradora cuando hay un estimado de la aseguradora disponible — mediante la negociación con la aseguradora. También se aplica al apoyo de suplementos: 15% del aumento documentado aprobado por la aseguradora a partir del alcance suplementario presentado. La tarifa está ligada a los aumentos aprobados por la aseguradora, no a los totales brutos de la factura.",
  },
  "pricing-4-percent-rcv": {
    question: "¿Cuándo se aplica la tarifa del 4% del RCV?",
    answer:
      "La tarifa del 4% del acuerdo de RCV final se aplica a la negociación con la aseguradora cuando la aseguradora no ha proporcionado un estimado. Esta estructura se usa en los escenarios calificados sin estimado para que su equipo entienda la base de la tarifa antes de que avance el trabajo.",
  },
  "pricing-when-charged": {
    question: "¿Cuándo se facturan las tarifas?",
    answer:
      "Las facturas de estimados se emiten al completarse y con la aprobación del cliente a través del Portal del Cliente. Las facturas de negociación y suplementos se emiten tras una negociación exitosa y la aprobación final. Las facturas vencen de inmediato una vez aprobadas.",
  },
  "pricing-payment-processing": {
    question: "¿Existen tarifas de procesamiento de pagos?",
    answer:
      "El ACH está disponible como opción de procesamiento de pagos gratuita, sin tarifa de procesamiento. Los pagos con tarjeta de crédito incluyen una tarifa de conveniencia del 3%. El pago se procesa mediante el método registrado tras la aprobación de la factura.",
  },
  "pricing-additional-services": {
    question: "¿Qué tarifas de servicios adicionales pueden aplicar?",
    answer:
      "Los servicios de tasación suelen costar entre $500 y $1,200 según la complejidad y el alcance de la reclamación. Los informes EagleView, cuando se requieren para documentación de techado, cuestan $60 por proyecto. Estas son tarifas cotizadas o de traspaso, separadas de las tarifas básicas de estimado, negociación y suplementos.",
  },
  "supplements-whats-included": {
    question: "¿Qué incluye el apoyo de suplementos?",
    answer:
      "El apoyo de suplementos incluye revisión del alcance, análisis línea por línea, orientación de documentación y presentaciones de suplementos listas para la aseguradora. Los equipos expertos identifican partidas faltantes, brechas de precios y oportunidades relacionadas con códigos, y luego organizan el expediente para que los ajustadores puedan revisarlo con eficiencia.",
  },
  "carrier-how-handled": {
    question: "¿Cómo maneja Claims Ninja las negociaciones con la aseguradora?",
    answer:
      "Los equipos expertos interactúan con los ajustadores mediante documentación organizada, resúmenes de cambios claros y respaldo del alcance con fotos y estimados. Hacemos seguimiento de las respuestas, revisamos las presentaciones cuando es necesario y escalamos por los canales apropiados, siempre alineados con su autorización.",
  },
  "carrier-public-adjuster": {
    question: "¿Es Claims Ninja un ajustador público?",
    answer:
      "Claims Ninja es una plataforma de apoyo a reclamaciones enfocada en contratistas que incluye acceso a ajustadores públicos licenciados, estimadores, especialistas en suplementos y otros profesionales de reclamaciones cuando se necesitan. Ayudamos a los contratistas a maximizar la recuperación de la reclamación mediante documentación, revisión de estimados, suplementos y comunicación con la aseguradora, apoyando el proceso de reclamación en su conjunto.",
  },
  "platform-data-secure": {
    question: "¿Están seguros mis datos de reclamaciones en la plataforma?",
    answer:
      "Los expedientes de reclamaciones se almacenan con controles de acceso cifrados y permisos basados en roles. El manejo de documentos sigue prácticas alineadas con los flujos de trabajo de contratistas y aseguradoras. Su equipo controla quién ve qué dentro de su organización.",
  },
  "platform-access-controls": {
    question: "¿Podemos controlar quién de nuestro equipo accede a los expedientes de reclamaciones?",
    answer:
      "Sí. El acceso basado en roles le permite limitar la visibilidad por usuario, oficina o función. Los propietarios y gerentes normalmente ven el historial completo de la reclamación; los usuarios de campo pueden ver solo los expedientes asignados.",
  },
  "platform-claim-tracking": {
    question: "¿Cómo seguimos el estado de las reclamaciones en la plataforma?",
    answer:
      "El módulo de seguimiento de reclamaciones muestra el estado del expediente, el historial de suplementos, las respuestas de la aseguradora y los próximos pasos. Su oficina obtiene visibilidad sin perseguir cadenas de correos ni actualizaciones en hojas de cálculo.",
  },
  "platform-communication": {
    question: "¿La plataforma centraliza la comunicación con la aseguradora e interna?",
    answer:
      "Sí. El centro de comunicación mantiene la correspondencia, las notas y las actualizaciones de estado vinculadas a cada reclamación. El historial centralizado reduce los malentendidos cuando varios miembros del equipo trabajan en el mismo expediente.",
  },
  "ai-how-helps": {
    question: "¿Cómo ayuda el análisis de reclamaciones con IA a mi operación?",
    answer:
      "La revisión asistida por IA examina los estimados y la documentación en busca de brechas de alcance, inconsistencias de precios y oportunidades de suplementos. Los equipos expertos validan los hallazgos antes de que algo llegue a una aseguradora: la IA acelera la revisión, las personas toman la decisión.",
  },
};

function translateRelatedLinks(
  links: readonly FaqRelatedLink[] | undefined,
  locale: Locale,
): readonly FaqRelatedLink[] | undefined {
  if (!links || locale === "en") return links;
  return links.map((link) => ({
    ...link,
    label: ES_RELATED_LABELS[link.label] ?? link.label,
  }));
}

/** Resolve FAQ items for a locale, overlaying Spanish copy where available. */
export function getLocalizedFaqItems(
  ids: readonly string[],
  locale: Locale,
): FaqItem[] {
  const items = getFaqItemsByIds(ids);
  if (locale === "en") return items;

  return items.map((item) => {
    const override = ES_FAQ[item.id];
    return {
      ...item,
      question: override?.question ?? item.question,
      answer: override?.answer ?? item.answer,
      relatedLinks: translateRelatedLinks(item.relatedLinks, locale),
    };
  });
}
