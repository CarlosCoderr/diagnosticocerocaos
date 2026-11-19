import type { Metadata } from "next";
import Image from "next/image";
import { VslPlayer } from "@/components/VslPlayer";
import { CaseVideo } from "@/components/CaseVideo";
import { MirrorChecklist } from "@/components/MirrorChecklist";
import { CheckIcon, CrossIcon } from "@/components/Icons";
import "./landing.css";

export const metadata: Metadata = {
  title: "Diagnóstico Cero Caos · Carlos Coder",
  description:
    "Ordena tu oferta, arma el camino por donde te compran y enciende la pauta el día 15. Empieza con el Diagnóstico Cero Caos de S/ 297.",
};

const WA_NUMBER = "51921926452";
const WA_URL = `https://wa.me/${WA_NUMBER}?text=Hola%20Carlos%2C%20quiero%20ordenar%20mi%20negocio.%20Escribo%20desde%20la%20landing%20por%20el%20Diagn%C3%B3stico%20Cero%20Caos%20de%20S%2F%20297.`;
const CTA = "Quiero mi Diagnóstico Cero Caos";

const MIRROR = [
  {
    text: "Es domingo por la noche. Abres tu WhatsApp y los chats de la semana pasada siguen ahí, sin respuesta. Alguien preguntó el precio, nadie le contestó a tiempo, y ya no volvió.",
    quote: "“Me dejan en visto.”",
  },
  {
    text: "Un mes te va increíble. El siguiente casi no entra nada. Y no sabes de qué dependió ninguno de los dos.",
    quote: "“Meses flojos.”",
  },
  {
    text: "Le diste a “Promocionar” o contrataste a alguien barato para los anuncios. Te llegaron mensajes de curiosos que preguntaban precio y desaparecían. Y concluiste:",
    quote: "“Eso de los anuncios es botar plata.”",
  },
  {
    text: "Tu web es bonita. Pero no te vende nada.",
  },
  {
    text: "Alguien entra a tu perfil y te pregunta: “¿y tú qué vendes exactamente?”. Y la respuesta honesta es: consultas sueltas, un programa, una guía… todo a la vez.",
  },
  {
    text: "Tus seguidores comentan y te dan like, pero eso no se convierte en ventas.",
    quote: "“El algoritmo me odia.”",
  },
];

const MIRROR_MODELS = [
  {
    lead: "Si vendes programas o mentorías",
    text: "Calificas a mano cada chat interminable y las llamadas se agendan a puro pulso.",
  },
  {
    lead: "Si vendes infoproductos o cursos",
    text: "Tienes visitas en tu web, carritos abandonados a medias y nadie que rescate esas ventas automáticamente.",
  },
  {
    lead: "Si vendes servicios profesionales",
    text: "Tu agenda se llena a tirones, y las confirmaciones y recordatorios manuales consumen tus horas.",
  },
];

const ADAPT = [
  {
    icon: "target",
    sell: "Si vendes programas o mentorías de ticket alto:",
    ends: "El camino termina en una calificación previa por WhatsApp (o chat inteligente) para agendar una llamada directa contigo.",
  },
  {
    icon: "card",
    sell: "Si vendes cursos, infoproductos o membresías:",
    ends: "El camino conecta directamente con tu pasarela de pago o plataforma de cursos, con seguimiento y recuperación automática de carritos.",
  },
  {
    icon: "calendar",
    sell: "Si vendes servicios profesionales:",
    ends: "El camino desemboca en una página de agendamiento conectada a tu calendario, con confirmaciones y recordatorios automáticos.",
  },
  {
    icon: "settings",
    sell: "Si ya tienes infraestructura creada:",
    ends: "El sistema se acopla perfectamente a lo que ya usas. No venimos a romper ni rehacer lo que ya te funciona.",
  },
];

const ADAPT_ICONS: Record<string, string[]> = {
  target: ["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z", "M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z", "M12 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"],
  card: ["M3 5h18v14H3z", "M3 10h18", "M7 15h4"],
  calendar: ["M3 5h18v16H3z", "M3 10h18", "M8 3v4", "M16 3v4"],
  settings: ["M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", "M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5h0a1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"],
};

function AdaptIcon({ name }: { name: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {(ADAPT_ICONS[name] ?? []).map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}


const FAIL_ICONS: Record<string, string[]> = {
  pieces: ["M3 3h8v8H3z", "M13 3h8v8h-8z", "M3 13h8v8H3z"],
  shuffle: ["M16 3h5v5", "M4 20L21 3", "M21 16v5h-5", "M15 15l6 6", "M4 4l5 5"],
  inbox: ["M22 12h-6l-2 3h-4l-2-3H2", "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"],
};

function FailIcon({ name }: { name: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {(FAIL_ICONS[name] ?? []).map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

const FAILS = [
  {
    icon: "pieces",
    lead: "Cada intento arreglaba una sola pieza",
    text: "Mandaste a diseñar la web, luego probaste con los anuncios o te obsesionaste con el contenido. Ninguna de esas piezas sueltas ordenaba el negocio por completo.",
  },
  {
    icon: "shuffle",
    lead: "Tráfico hacia una oferta mezclada",
    text: "Llevaste gente a un perfil o landing donde ofrecías de todo a la vez (asesorías, cursos, guías). Si el cliente potencial no entiende qué comprar al primer vistazo, simplemente se va.",
  },
  {
    icon: "inbox",
    lead: "Nadie preparó el después del mensaje",
    text: "Los chats de WhatsApp se acumularon, respondiste tarde o improvisaste cuando el prospecto ya se había enfriado. El embudo se rompió en el último paso.",
  },
];

const STEPS = [
  {
    icon: "search",
    title: "Diagnóstico y Claridad de Oferta",
    text: "Separamos tus programas de tus servicios y definimos exactamente a quién le vendes. Antes de gastar dinero en anuncios.",
  },
  {
    icon: "layout",
    title: "Infraestructura Técnica Integrada",
    text: "Construimos tu landing page de conversión y un camino de compra adaptado a tu negocio como pasarela de pago, agenda de citas o calificación por WhatsApp, más el mensaje y contenido principal que no puede faltar.",
  },
  {
    icon: "chat",
    title: "Capacitación e Independencia",
    text: "Te enseño (a ti o a quien atiende tu WhatsApp) qué responder, cuándo y cómo. Para no “matar” una conversación que el sistema ya calentó. Aquí es donde la mayoría pierde las ventas.",
  },
  {
    icon: "trend",
    title: "Motor de Tráfico y Control Operativo",
    text: "Recién el día 15 encendemos tu pauta publicitaria en Meta o Google, sobre una base que ya está lista para convertir. Yo la opero y optimizo cada mes.",
  },
];

const STEP_ICONS: Record<string, string[]> = {
  search: ["M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z", "M21 21l-4.3-4.3"],
  layout: ["M3 4h18v16H3z", "M3 9h18", "M9 20V9"],
  chat: ["M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.2A8.4 8.4 0 1 1 21 11.5z"],
  trend: ["M3 7l6 6 4-4 8 8", "M15 17h6v-6"],
};

function StepIcon({ name }: { name: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {(STEP_ICONS[name] ?? []).map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

const OFFER_INCLUDES = [
  {
    icon: "session",
    title: "Sesión estratégica 1 a 1",
    text: "De 60 a 90 minutos por videollamada, conmigo en vivo.",
  },
  {
    icon: "audit",
    title: "Auditoría completa",
    text: "De tu oferta actual, tu perfil de Instagram y las fugas operativas en tu WhatsApp.",
  },
  {
    icon: "doc",
    title: "Manual Cero Caos",
    text: "Documento escrito y personalizado con la ruta exacta de acción para tu negocio.",
  },
  {
    icon: "shield",
    title: "Garantía de entrega",
    text: "Si no recibes tu Manual Cero Caos máximo 2 días hábiles (lunes a sábado) después de tu sesión, se te devuelve el 100% de tu dinero.",
  },
  {
    icon: "credit",
    title: "Beneficio clave",
    text: "El pago de los S/ 297 se descuenta al 100% si decides contratar la implementación del Método Cero Caos Completo dentro de los 7 días siguientes.",
  },
];

const VS_ICONS: Record<string, string[]> = {
  session: ["M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.2A8.4 8.4 0 1 1 21 11.5z"],
  audit: ["M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z", "M21 21l-4.3-4.3"],
  doc: ["M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z", "M14 3v5h5", "M9 13h6", "M9 17h6"],
  layout: ["M3 4h18v16H3z", "M3 9h18", "M9 20V9"],
  chat: ["M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.2A8.4 8.4 0 1 1 21 11.5z"],
  trend: ["M3 7l6 6 4-4 8 8", "M15 17h6v-6"],
  shield: ["M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6z", "M8.5 12l2.5 2.5 4.5-5"],
  credit: ["M3 5h18v14H3z", "M3 10h18", "M7 15h4"],
};

function VsIcon({ name }: { name: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {(VS_ICONS[name] ?? []).map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

const CASE_STEPS = [
  { icon: "check", text: "Ordené su oferta y su camino de compra." },
  { icon: "layout", text: "Construí su landing y su captación." },
  { icon: "users", text: "Capacité a todo su equipo para responder." },
  { icon: "trend", text: "Activé su pauta en Meta Ads." },
];

const CASE_ICONS: Record<string, string[]> = {
  check: ["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z", "M8 12.5l3 3 5-6"],
  layout: ["M3 4h18v16H3z", "M3 9h18", "M9 20V9"],
  users: ["M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", "M2 21a7 7 0 0 1 14 0", "M16 3.2a4 4 0 0 1 0 7.6", "M22 21a7 7 0 0 0-4.5-6.5"],
  trend: ["M3 7l6 6 4-4 8 8", "M15 17h6v-6"],
};

function CaseIcon({ name }: { name: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {(CASE_ICONS[name] ?? []).map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

const FOR_YOU = [
  "Tienes una audiencia y vendes un programa o servicio propio.",
  "Tu oferta es de ticket medio-alto.",
  "Vendes “de casualidad”: un mes entra bien y el siguiente nada.",
  "Ya probaste una web, el botón “Promocionar” o un freelancer de anuncios.",
  "Estás dispuesto a seguir un proceso ordenado y concretar las ventas o citas que llegan. Crear contenido y cerrar ventas es tuyo; el sistema y la pauta son míos.",
  "Puedes destinar un presupuesto mínimo de S/ 400 al mes en anuncios (pagados directo a la plataforma).",
];

const NOT_FOR_YOU = [
  "Quieres “solo la web”. (Si es así, no soy tu proveedor y te lo digo con respeto.)",
  "Quieres que el marketing lo haga todo sin que aparezcas ni sigas el proceso.",
  "Buscas “100 prospectos al día” o resultados en 30 días.",
  "No tienes definido qué vender o no puedes destinar al menos S/ 400 al mes en anuncios.",
  "Vendes algo de ticket bajo y no tienes el volumen de ventas que lo compense. (Se evalúa en el Diagnóstico.)",
];

const RISK = [
  {
    title: "Garantía del Diagnóstico",
    text: "Si no recibes tu Manual Cero Caos máximo 2 días hábiles después de tu sesión, te devuelvo lo que pagaste.",
    guarantee: true,
  },
  {
    title: "Tus S/ 297 no se pierden",
    text: "Si decides avanzar dentro de los 7 días, se descuentan completos de tu primer pago.",
  },
  {
    title: "Salida limpia",
    text: "Si algún día terminas tu plan mensual, te llevas el archivo de tu landing page, tu base de datos exportada en Excel (te la entrego en menos de 24 horas) y tu dominio si compraste uno propio. Solo se da de baja tu acceso a Coder App. Nada queda de rehén.",
  },
  {
    title: "Sin promesas infladas",
    text: "No te prometo un número de ventas ni de prospectos. Te prometo que lo construyo bien y que lo opero.",
  },
];

const FAQ = [
  {
    q: "¿Qué incluye exactamente el Diagnóstico Cero Caos?",
    a: "Una sesión estratégica 1 a 1 de 60-90 minutos, auditoría completa de tu oferta y fugas en WhatsApp, y la entrega del Manual Cero Caos (tu ruta exacta de acción en máximo 2 días hábiles).",
  },
  {
    q: "¿Por qué el Diagnóstico tiene un costo y no es gratis?",
    a: "Porque lo gratuito atrae curiosos que no valoran el tiempo ni implementan. Este filtro asegura que trabajemos exclusivamente con expertos comprometidos. Además, el 100% de lo pagado se te descuenta si contratas la implementación dentro de los 7 días siguientes.",
  },
  {
    q: "¿Cuál es la garantía de entrega del Diagnóstico Cero Caos?",
    a: "Tienes garantía total de entrega: si no recibes tu Manual Cero Caos en el plazo máximo de 2 días hábiles (lunes a sábado) después de tu sesión, se te devuelve el 100% de tu dinero.",
  },
  {
    q: "¿Necesito tener una web o pasarela lista antes de empezar?",
    a: "No. Justamente para eso es el diagnóstico. Si ya tienes herramientas, las auditamos; si parten de cero, diseñamos el camino de compra adecuado para ti (pasarela, agenda o WhatsApp).",
  },
  {
    q: "¿Cuánto tiempo toma ver resultados con el método?",
    a: "El sistema se construye en una base de 15 días de trabajo estructurado. La pauta publicitaria se enciende recién el día 15, y desde ahí los resultados se miden con números reales y predecibles.",
  },
  {
    q: "¿Cómo se realiza la reserva y el pago?",
    a: "Haces clic en el botón, conversas con el asistente para apartar tu fecha y realizas el pago seguro a través de Mercado Pago (que acepta tarjetas y transferencias). Pago confirmado = fecha reservada.",
  },
];

function Cta({ children = CTA }: { children?: React.ReactNode }) {
  return (
    <a className="btn btn-lg" href={WA_URL} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function LandingWhatsappPage() {
  return (
    <main id="inicio">
      {/* BARRA SUPERIOR · marquee en bucle */}
      <div className="lp-marquee" role="note" aria-label="Para creadores, coaches y consultores que ya tienen audiencia">
        <div className="lp-marquee-track" aria-hidden="true">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="lp-marquee-item">
              Para creadores, coaches y consultores que ya tienen audiencia
            </span>
          ))}
        </div>
      </div>

      {/* 1 · HERO */}
      <section className="block hero lp-hero">
        <div className="wrap">
          <h1 className="display">
            Tu negocio no sufre por falta de tráfico, sino por falta de
            <span className="highlight"> un sistema que convierta la atención en dinero predecible.</span>
          </h1>
          <p className="hero-sub">
            El Método Cero Caos ordena tu oferta, arma tu camino de compra y enciende tu pauta{" "}
            <span className="strong">recién el día 15</span>, sobre una base que ya puede convertir. Empiezas con un Diagnóstico de S/ 297 que se descuenta por completo si decides avanzar.
          </p>

          <VslPlayer />
          <div className="cta-stack" style={{ marginTop: 0 }}>
            <Cta />
            <p className="micro">Pago único de S/ 297 · Recibes tu Manual Cero Caos máximo 2 días hábiles después de tu sesión, o te devuelvo lo que pagaste.</p>
          </div>
        </div>
      </section>

      {/* 3 · ESPEJO */}
      <section className="block">
        <div className="wrap">
          <h2 className="h2">
            ¿Cuántas de estas cosas <span className="highlight">te pasan a ti?</span>
          </h2>
          <p className="lead mirror-sub">Marca mentalmente (o con un toque) las que te pasan a ti.</p>
          <MirrorChecklist items={MIRROR} />
          <div className="mirror-models">
            <h3 className="mirror-models-title">
              Y se ve distinto según cómo vendas, pero es el mismo caos:
            </h3>
            <ul className="mirror-models-list">
              {MIRROR_MODELS.map((m) => (
                <li key={m.lead}>
                  <strong>{m.lead}</strong>
                  <span>{m.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mirror-close">
            <p className="closing">
              <strong>No es tu culpa, y tampoco es tu audiencia.</strong> Tienes un
              negocio que funciona por casualidad. <span className="highlight">Y eso se puede ordenar.</span>
            </p>
            <p className="mirror-next">
              Si te reconociste, sigue leyendo: te cuento por qué nada de lo que probaste te funcionó. ↓
            </p>
          </div>
        </div>
      </section>

      {/* 4 · POR QUÉ NO FUNCIONÓ */}
      <section className="block tint">
        <div className="wrap">
          <h2 className="h2">
            Lo que te dijeron que hicieras, <span className="highlight">y por qué te dejó igual</span>
          </h2>
          <p className="lead" style={{ marginBottom: 16 }}>
            El mercado dice: <em>“Necesitas una web más bonita, hacer reels virales y contratar una agencia
            que te traiga 100 prospectos al día.”</em>
          </p>
          <p className="lead" style={{ marginBottom: 0 }}>
            Probablemente ya probaste una o varias de esas. Y todas fallan por la misma razón:
          </p>
          <ol className="fail-grid">
            {FAILS.map((f) => (
              <li key={f.lead} className="fail-card">
                <span className="fail-num">
                  <FailIcon name={f.icon} />
                </span>
                <h3>{f.lead}</h3>
                <p>{f.text}</p>
              </li>
            ))}
          </ol>
          <div className="fail-punch">
            <p>
              Los anuncios no fallaron. <span className="highlight">Fallaron porque detrás no había absolutamente nada que sostuviera la venta.</span>
            </p>
          </div>
        </div>
      </section>

      {/* 5 · HISTORIA */}
      <section className="block">
        <div className="wrap about">
          <figure className="portrait">
            {/* Foto referencial: reemplazar por la foto de Carlos mirando a cámara, sonriendo */}
            <Image
              src="/carlos.jpg"
              alt="Carlos Coder"
              fill
              sizes="(max-width: 720px) 100vw, 340px"
              className="portrait-img"
            />
            <figcaption className="lp-photo-note">Foto referencial</figcaption>
          </figure>
          <div className="about-copy">
            <h2 className="h2">Yo estuve del otro lado</h2>
            <p>
              En marzo de 2023 yo entregaba hasta 4 páginas web al mes. Pasaba más de 10 horas diarias frente a la
              pantalla, cobraba poco por proyecto y no tenía ni un solo cliente recurrente. Cada mes empezaba de cero,
              buscando el siguiente contrato.
            </p>
            <p>
              Era “el chico de las webs”. Un ejecutante, no un socio. Y lo peor era darme cuenta de que las webs que
              entregaba eran escaparates: bonitas, pero sin nada detrás que vendiera.
            </p>
            <p>
              Dejé de aceptar proyectos de solo diseño. Me formé en sistemas de conversión (el camino que recorre
              alguien hasta comprar), psicología de ventas y pauta en Meta Ads y Google Ads. Uní lo técnico con lo
              comercial. De ahí nació el <strong>Método Cero Caos</strong>.
            </p>
            <p>
              Hoy hago yo solo lo que normalmente reparten tres personas: construyo tu landing, armo tu captación
              automática y opero tu pauta. No coordinas a un diseñador, un programador y un trafficker. Tratas directo
              conmigo.
            </p>
            <p >Carlos Coder <br/> <span className="signature">Arquitecto de Sistemas de Venta Digital</span></p>
          </div>
        </div>
      </section>

      {/* 6 · MÉTODO */}
      <section className="block tint">
        <div className="wrap">
          <h2 className="h2">
            4 pasos, en este orden. <span className="highlight">La pauta va al final, no al principio.</span>
          </h2>
          <ol className="steps" style={{ marginTop: 32 }}>
            {STEPS.map((s, i) => (
              <li key={s.title} className="method-card">
                <div className="method-head">
                  <span className="step-n">{i + 1}</span>
                  <span className="method-icon">
                    <StepIcon name={s.icon} />
                  </span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>

          <ol className="lp-timeline" aria-label="Línea de tiempo">
            <li>
              <span>Días 1–15</span>
              Construcción
            </li>
            <li>
              <span>Día 15</span>
              Se enciende la pauta
            </li>
            <li>
              <span>Desde el día 15</span>
              Medimos con números
            </li>
          </ol>

          <div className="lp-note">
            <h3>Una aclaración necesaria</h3>
            <p>
              En mi rubro se vende “resultados mañana” porque lanzan campañas sin preparar nada. Yo te cuento la verdad:
              primero se construye. Por eso no prometo resultados mágicos en 30 días ni listas masivas de prospectos
              vacíos. Primero ordenamos la casa.
            </p>
          </div>
        </div>
      </section>

      {/* 7 · SE ADAPTA A CÓMO VENDES */}
      <section className="block">
        <div className="wrap">
          <h2 className="h2 text-center">
            No te obligo a vender por WhatsApp.{" "}
            <span className="highlight">Diseño el camino por donde tu cliente paga con menos fricción.</span>
          </h2>
          <p className="lead text-center" style={{ marginInline: "auto", maxWidth: 980 }}>
            WhatsApp es una herramienta excelente, pero no es el único destino. La estructura de conversión se adapta a ti:
          </p>
          <ul className="adapt-grid">
            {ADAPT.map((a) => (
              <li key={a.sell} className="adapt-card">
                <span className="method-icon">
                  <AdaptIcon name={a.icon} />
                </span>
                <h3>{a.sell}</h3>
                <p>{a.ends}</p>
              </li>
            ))}
          </ul>
          <div className="adapt-close">
            <h3>¿Y si no usas WhatsApp?</h3>
            <p>
              Perfecto. El sistema se acopla a tu pasarela o agenda. Lo importante es que el tráfico que llegue a
              pagar o agendar esté respaldado por una oferta ordenada y una pauta que no queme dinero.
            </p>
            <p className="adapt-note">
              El camino de TU negocio lo diseñamos según cómo vendes tú.
            </p>
          </div>
        </div>
      </section>

      {/* 8 · PRUEBA */}
      <section className="block tint">
        <div className="wrap">
          <div className="lp-case">
            <div>
              <h2 className="h2">
                Un caso real. <span className="highlight">Uno solo, y te lo cuento como es.</span>
              </h2>
              <p>
                Apliqué el Método Cero Caos a un negocio de servicios de ticket alto que recibía curiosos y estaba en
                caos operativo.
              </p>
              <ul>
                {CASE_STEPS.map((c) => (
                  <li key={c.text}>
                    <span className="case-icon">
                      <CaseIcon name={c.icon} />
                    </span>
                    <span>{c.text}</span>
                  </li>
                ))}
              </ul>
              <div className="lp-result">
                <p>
                  <strong>Resultado:</strong> con una inversión de dinero en anuncios,{" "}
                  <b>en la primera semana llegaron 17 personas interesadas</b>. En <b>menos de 10 días</b>, contando el
                  seguimiento por WhatsApp y una llamada, <b>cerraron un cliente de ticket alto</b>, que luego continuó
                  con ellos en retención mensual.
                </p>
              </div>
              <p className="lp-disclaimer">
                <strong>Aclaración importante:</strong> El caso real obtenido con el sistema implementado y operado por el cliente. <strong>Los resultados varían según cada negocio.</strong>
              </p>
            </div>

            <CaseVideo />
          </div>
        </div>
      </section>

      {/* 9 · PARA QUIÉN */}
      <section className="block">
        <div className="wrap">
          <h2 className="h2 text-center">
            <span className="highlight">Esto es para ti…</span> o no lo es
          </h2>
          <div className="fit-grid">
            <div className="fit-col fit-yes">
              <h3>Esto SÍ es para ti si:</h3>
              <ul>
                {FOR_YOU.map((t) => (
                  <li key={t}>
                    <span className="fit-badge">
                      <CheckIcon size={16} />
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="fit-col fit-no">
              <h3>Esto NO es para ti si:</h3>
              <ul>
                {NOT_FOR_YOU.map((t) => (
                  <li key={t}>
                    <span className="fit-badge">
                      <CrossIcon size={16} />
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 10 · OFERTA ÚNICA: DIAGNÓSTICO CERO CAOS */}
      <section className="block tint" id="oferta">
        <div className="wrap">
          <h2 className="h2 text-center">
            Deja de adivinar qué falla en tu negocio.{" "}
            <span className="highlight">Empecemos por el principio.</span>
          </h2>
          <p className="lp-sum" style={{ marginInline: "auto", textAlign: "center" }}>
            Suma lo que ya gastaste en una web que no vende, en anuncios sin resultado y en chats que quedaron sin
            respuesta. Ese es el costo real de tu caos. En tu sesión lo calculamos juntos, con tus números reales.
          </p>

          <div className="ticket offer-ticket">
            <p className="offer-name">Diagnóstico Cero Caos</p>
            <p className="price">
              S/ 297 <span>(pago único)</span>
            </p>
            <ul className="offer-list">
              {OFFER_INCLUDES.map((o) => (
                <li key={o.title}>
                  <span className="method-icon">
                    <VsIcon name={o.icon} />
                  </span>
                  <span>
                    <strong>{o.title}</strong>
                    {o.text}
                  </span>
                </li>
              ))}
            </ul>
            <div className="offer-cta">
              <Cta>Quiero agendar mi Diagnóstico Cero Caos</Cta>
              <p className="micro">Pago único de S/ 297 · Recibes tu Manual Cero Caos máximo 2 días hábiles después de tu sesión, o te devuelvo lo que pagaste.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 11 · REDUCCIÓN DE RIESGO */}
      <section className="block">
        <div className="wrap">
          <h2 className="h2 text-center">
            Lo que está <span className="highlight">de tu lado</span>
          </h2>
          <div className="lp-risk">
            {RISK.map((r, i) => (
              <div key={r.title} className={`callout${r.guarantee ? " callout-guarantee" : ""}`}>
                <h3>
                  {i + 1}. {r.title}
                </h3>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12 · FAQ */}
      <section className="block tint">
        <div className="wrap narrow">
          <h2 className="h2 text-center">Preguntas frecuentes</h2>
          <div className="faq-list">
            {FAQ.map((f) => (
              <details key={f.q}>
                <summary>
                  <span>{f.q}</span>
                  <i aria-hidden="true" />
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 13 · CTA FINAL */}
      <section className="block final">
        <div className="wrap narrow">
          <div className="lp-future">
            <p>
              Imagina arrancar el mes con tu oferta ordenada, cero chats al aire y pauta trayendo prospectos calificados que ya saben cuánto cuesta tu servicio. Sin suposiciones, solo métricas claras y control de tu negocio. ¿La alternativa? Otro domingo respondiendo chats a ciegas y otro mes intentando adivinar a ver si entra algo.
            </p>
            <p>
              Ahora imagina el mismo mes de siempre. Otro domingo con chats sin responder. Otra semana de tutoriales.
              Otro mes que vas a decidir “a ver si entra algo”.
            </p>
            <p className="closing">
              La diferencia entre un escenario y el otro es <span className="highlight">una sesión y un documento.</span>
            </p>
          </div>

          <div className="cta-stack final-cta">
            <h3 className="final-cta-title">¿Listo para apagar el caos y ordenar tu negocio de verdad?</h3>
            <p className="final-cta-text">
              Empezamos por el principio. Reserva tu Diagnóstico Cero Caos y llévate tu ruta exacta de acción máximo 2
              días hábiles después de tu sesión.
            </p>
            <Cta>Quiero agendar mi Diagnóstico Cero Caos</Cta>
          </div>

          <p className="lp-ps">
            <strong>P.D.</strong> Si lo que buscas es solo una página web, o que el marketing lo haga todo sin que
            aparezcas, esto no es para ti. Si tienes audiencia, estás cansado de un negocio que vende de casualidad y
            quieres ordenarlo de verdad, empecemos por el Diagnóstico.
          </p>

        </div>
      </section>

      <footer className="footer text-center">
        <div className="wrap narrow">
          <p>
            <strong>Descargo de resultados:</strong> Los resultados corresponden a un caso real; no son típicos ni
            garantizan ingresos. El Diagnóstico Cero Caos entrega claridad y estrategia; el éxito depende de tu
            ejecución.
          </p>
          <p>
            Este sitio no es parte del sitio web de Facebook, Meta Platforms, Inc. ni de Google LLC. Este sitio no está
            respaldado por Facebook ni Google de ninguna manera.
          </p>
          <p className="copyright">© 2026 Carlos Coder. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
