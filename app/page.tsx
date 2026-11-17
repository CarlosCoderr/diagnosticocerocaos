import type { Metadata } from "next";
import Image from "next/image";
import { VslPlayer } from "@/components/VslPlayer";
import { CheckIcon, CrossIcon } from "@/components/Icons";
import "./landing.css";

export const metadata: Metadata = {
  title: "Diagnóstico Cero Caos · Carlos Coder",
  description:
    "Ordena tu oferta, arma el camino por donde te compran y enciende la pauta el día 15. Empieza con el Diagnóstico Cero Caos de S/ 297.",
};

// PENDIENTE: reemplazar por tu número de WhatsApp con código de país, sin + ni espacios (ej. 51999999999).
const WA_NUMBER = "TU_NUMERO";
const WA_URL = `https://wa.me/${WA_NUMBER}?text=CERO`;
const CTA = "Quiero mi Diagnóstico Cero Caos";

const MIRROR = [
  "Es domingo por la noche. Abres tu WhatsApp y los chats de la semana pasada siguen ahí, sin respuesta. Alguien preguntó el precio, nadie le contestó a tiempo, y ya no volvió.",
  "Un mes te va increíble. El siguiente casi no entra nada. Y no sabes de qué dependió ninguno de los dos.",
  "Le diste a “Promocionar” o contrataste a alguien barato para los anuncios. Te llegaron mensajes de curiosos que preguntaban precio y desaparecían. Y concluiste: “eso de los anuncios es botar plata.”",
  "Tu web es bonita. Pero no te vende nada.",
  "Alguien entra a tu perfil y te pregunta: “¿y tú qué vendes exactamente?” Y la respuesta honesta es: consultas sueltas, un programa, una guía… todo a la vez.",
  "Tu fin de semana se va viendo tutoriales de YouTube para entender un dominio, una pasarela de pago o una integración. Y no te queda tiempo para crear contenido.",
];

const FAILS = [
  { lead: "Cada una arregla una sola pieza.", text: "La web, los anuncios o el contenido. Ninguna ordena el negocio completo." },
  { lead: "Mandan tráfico a una oferta mezclada.", text: "Si quien llega no entiende qué comprar, se va." },
  { lead: "Nadie prepara qué pasa después del primer mensaje.", text: "Los chats se acumulan, respondes tarde o improvisas, y el prospecto se enfría." },
];

const STEPS = [
  {
    title: "Diagnóstico y Claridad de Oferta",
    text: "Separamos tus programas de tus servicios y definimos a quién le vendes. Antes de gastar un sol en anuncios.",
  },
  {
    title: "Infraestructura Técnica Integrada",
    text: "Tu landing page de conversión, tu captación automática por WhatsApp y correo, y el mensaje y contenido principal que no puede faltar.",
  },
  {
    title: "Capacitación e Independencia",
    text: "Te enseño (a ti o a quien atiende tu WhatsApp) qué responder, cuándo y cómo. Para no “matar” una conversación que el sistema ya calentó. Aquí es donde la mayoría pierde las ventas.",
  },
  {
    title: "Motor de Tráfico y Control Operativo",
    text: "Recién el día 15 enciendo tu pauta en Meta o Google, sobre una base que ya puede convertir. Yo la opero cada mes.",
  },
];

const RECEIVE = [
  { what: "Sesión estratégica 1 a 1", how: "60–90 minutos conmigo, en vivo" },
  { what: "Auditoría de tu situación actual", how: "Tu oferta, tu perfil y las fugas de tu WhatsApp" },
  { what: "Manual Cero Caos", how: "Un documento escrito, personalizado, con la ruta exacta de qué hacer y en qué orden" },
];

const CASE_STEPS = [
  "Ordené su oferta y su camino de compra.",
  "Construí su landing y su captación.",
  "Capacité a todo su equipo para responder.",
  "Activé su pauta en Meta Ads.",
];

const FOR_YOU = [
  "Tienes una audiencia y vendes un programa o servicio propio.",
  "Vendes “de casualidad”: un mes entra bien y el siguiente nada.",
  "Ya probaste una web, el botón “Promocionar” o un freelancer de anuncios.",
  "Estás dispuesta/o a aparecer con tu cara y tu voz y a cerrar las ventas que llegan. Esas dos tareas son tuyas: crear contenido y cerrar ventas.",
  "Puedes invertir al menos S/ 600 al mes en anuncios.",
];

const NOT_FOR_YOU = [
  "Quieres “solo la web”. (Si es así, no soy tu proveedor y te lo digo con respeto.)",
  "Quieres que el marketing lo haga todo sin que aparezcas.",
  "Buscas “100 prospectos al día” o resultados en 30 días.",
  "Todavía no tienes nada definido que vender, o no puedes invertir en pauta.",
];

const RISK = [
  {
    title: "Garantía del Diagnóstico",
    text: "Si no recibes tu Manual Cero Caos, te devuelvo lo que pagaste.",
    guarantee: true,
  },
  {
    title: "Tus S/ 297 no se pierden",
    text: "Si decides avanzar dentro de los 7 días, se descuentan completos de tu primer pago.",
  },
  {
    title: "Salida limpia",
    text: "Si algún día terminas tu plan, te llevas el archivo de tu landing, tu base de datos exportada en Excel (te la entrego en menos de 24 horas) y tu dominio si compraste uno propio. Nada queda de rehén.",
  },
  {
    title: "Sin promesas infladas",
    text: "No te prometo un número de ventas ni de prospectos. Te prometo que lo construyo bien y que lo opero.",
  },
];

const FAQ = [
  {
    q: "“Está muy caro.”",
    a: "Compáralo contra lo que hoy pierdes, no contra lo que costaría una web: anuncios quemados, chats sin responder y meses en cero. Por eso el primer paso son S/ 297, no el sistema completo, y se descuentan si avanzas.",
  },
  {
    q: "“Ya probé anuncios y no funcionan para mi negocio.”",
    a: "Probablemente no fallaron los anuncios. Fallaron porque no había una oferta clara ni un camino de compra detrás. En mi método la pauta va al final, el día 15, nunca al principio.",
  },
  {
    q: "“No tengo tiempo para grabar contenido. Quiero que lo hagan todo por mí.”",
    a: "El sistema se encarga de la captación, el seguimiento automático y la pauta. A ti te deja dos tareas: crear contenido y cerrar ventas. Tu cara y tu voz son lo que vende y nadie puede hacerlo por ti. Si no estás dispuesta/o a aparecer, esto no es para ti, y te lo digo desde ahora.",
  },
  {
    q: "“Mejor lo aprendo yo con tutoriales de YouTube.”",
    a: "Puedes. Pero cada fin de semana peleándote con un dominio o una integración es un fin de semana sin atender clientes ni crear contenido. Y armarlo es solo una parte: la pauta hay que operarla todos los meses sin quemar presupuesto.",
  },
  {
    q: "“¿15 días? Yo necesito vender ya.”",
    a: "Lanzar mañana sin preparar nada es exactamente lo que ya hiciste y no te funcionó. En 15 días se ordena tu oferta, se construye el sistema, se capacita a quien responde y recién entonces se lanza. Desde ahí, los resultados se miden.",
  },
  {
    q: "“¿Y si después dependo de ti para todo?”",
    a: "Te capacito para que entiendas la lógica del sistema y sepas responder a mano sin romper lo que la automatización ya avanzó. Y si terminas tu plan, te llevas tu landing y tu base de datos.",
  },
  {
    q: "“¿Me prometes resultados?”",
    a: "No. No prometo un número de ventas ni de prospectos. Prometo una oferta clara, un sistema que no deja prospectos perdidos en tu WhatsApp, alguien capacitado para responder y una pauta operada desde el día 15. Mi caso real es uno solo y te lo muestro como lo que es.",
  },
  {
    q: "“¿Qué pasa en el Diagnóstico si veo que no tengo lo necesario?”",
    a: "Para eso es el Diagnóstico: ver si hay encaje antes de que inviertas en el sistema completo. Si no lo hay, te lo digo.",
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
            Tu problema no es que te falten seguidores. Ya tienes gente que te escribe, y la estás{" "}
            <span className="highlight">perdiendo en tu WhatsApp.</span>
          </h1>
          <p className="hero-sub">
            El Método Cero Caos ordena tu oferta, arma el camino por donde te compran y enciende la pauta{" "}
            <span className="strong">recién el día 15</span>, sobre una base que ya puede convertir. Empiezas con un
            Diagnóstico de S/ 297 que se descuenta por completo si decides avanzar.
          </p>

          <VslPlayer />
          <div className="cta-stack" style={{ marginTop: 0 }}>
            <Cta />
            <p className="micro">Pago único de S/ 297 · Si no recibes tu Manual Cero Caos, te devuelvo lo que pagaste.</p>
          </div>
        </div>
      </section>

      {/* 3 · ESPEJO */}
      <section className="block">
        <div className="wrap">
          <h2 className="h2">
            ¿Te suena <span className="highlight">alguna de estas escenas?</span>
          </h2>
          <ul className="mirror-list">
            {MIRROR.map((m) => (
              <li key={m} className="card">
                {m}
              </li>
            ))}
          </ul>
          <p className="closing">
            Si te reconociste en dos o más, escucha esto: no es tu culpa, y tampoco es tu audiencia. Tienes un negocio
            que funciona por casualidad. <span className="highlight">Y eso se puede ordenar.</span>
          </p>
        </div>
      </section>

      {/* 4 · POR QUÉ NO FUNCIONÓ */}
      <section className="block tint">
        <div className="wrap">
          <h2 className="h2">Lo que te dijeron que hicieras, y por qué te dejó igual</h2>
          <p className="lead" style={{ marginBottom: 16 }}>
            El consenso del mercado dice: <em>“Necesitas una web más bonita, hacer reels virales y contratar una agencia
            que te traiga 100 prospectos al día.”</em>
          </p>
          <p className="lead" style={{ marginBottom: 0 }}>
            Probablemente ya probaste una o varias de esas. Y todas fallan por la misma razón:
          </p>
          <ol className="lp-list-n">
            {FAILS.map((f) => (
              <li key={f.lead} className="card" style={{ flex: 1 }}>
                <span>
                  <strong>{f.lead}</strong> {f.text}
                </span>
              </li>
            ))}
          </ol>
          <p className="lp-punch">
            Los anuncios no fallaron. <span className="highlight">Fallaron porque detrás no había nada.</span>
          </p>
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
              <li key={s.title} className="card step">
                <span className="step-n">{i + 1}</span>
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
            <h3>Una aclaración honesta</h3>
            <p>
              En mi rubro se vende “resultados mañana” porque lanzan sin preparar nada. Yo te cuento la verdad: primero
              se construye. Por eso no prometo resultados en 30 días ni 100 prospectos al día.
            </p>
          </div>
        </div>
      </section>

      {/* 7 · QUÉ RECIBES */}
      <section className="block">
        <div className="wrap">
          <h2 className="h2 text-center">
            Empiezas aquí: el <span className="highlight">Diagnóstico Cero Caos</span>
          </h2>
          <div className="lp-table-wrap">
            <table className="lp-table">
              <thead>
                <tr>
                  <th>Qué recibes</th>
                  <th>En concreto</th>
                </tr>
              </thead>
              <tbody>
                {RECEIVE.map((r) => (
                  <tr key={r.what}>
                    <th scope="row">{r.what}</th>
                    <td>{r.how}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="callouts" style={{ maxWidth: 720, marginInline: "auto" }}>
            <div className="callout callout-guarantee">
              <h3>Y si decides avanzar con el sistema</h3>
              <p>
                Los S/ 297 se descuentan al 100% de tu primer pago si contratas dentro de los 7 días siguientes a tu
                Diagnóstico.
              </p>
            </div>
          </div>

          <div className="lp-includes">
            <p>
              <strong>Si el Diagnóstico confirma que hay encaje, el siguiente paso es el Método Cero Caos Completo:</strong>{" "}
              oferta única, landing de conversión, captación automática a WhatsApp y correo, capacitación de respuesta, y
              tu pauta operada por mí desde el día 15. Todo corre sobre <strong>Coder App</strong>, mi plataforma de
              gestión incluida: tu base de clientes, tus métricas y tus mensajes automáticos en un solo lugar. Los
              detalles y la inversión los vemos en tu sesión.
            </p>
          </div>
        </div>
      </section>

      {/* 8 · PRUEBA */}
      <section className="block tint">
        <div className="wrap">
          <h2 className="h2">
            Un caso real. <span className="highlight">Uno solo, y te lo cuento como es.</span>
          </h2>
          <div className="lp-case">
            <div>
              <p>
                Apliqué el Método Cero Caos a un negocio de servicios de ticket alto que recibía curiosos y estaba en
                caos operativo.
              </p>
              <ul>
                {CASE_STEPS.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <div className="lp-result">
                <p>
                  <strong>Resultado:</strong> con <b>S/ 170 de pauta en la primera semana llegaron 17 leads</b>. En{" "}
                  <b>menos de 10 días</b>, contando el seguimiento por WhatsApp y una llamada,{" "}
                  <b>cerraron 1 cliente calificado de S/ 3,000</b>, que luego continuó con ellos en retención mensual. Sobre esa pauta:{" "}
                  <b>ROAS de 17.64, ROI de 1,664% y S/ 10.00 por lead</b>.
                </p>
              </div>
              <p className="lp-disclaimer">
                <strong>Aclaración importante:</strong> el cliente de S/ 3,000 fue de ese negocio, conseguido con el
                sistema que yo le armé y le enseñé a operar. Es <strong>un solo caso real, no una garantía</strong> de que
                a ti te pase lo mismo.
              </p>
            </div>

          </div>
          <p className="lp-joined">
            Después del proyecto, me sumaron a su equipo. No solo les funcionó: confiaron lo bastante como para dejarme
            adentro.
          </p>
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
                    <CheckIcon className="fit-icon" />
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
                    <CrossIcon className="fit-icon" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 10 · INVERSIÓN */}
      <section className="block tint">
        <div className="wrap">
          <h2 className="h2 text-center">
            Antes de hablar de precio, <span className="highlight">hagamos una cuenta</span>
          </h2>
          <p className="lp-sum" style={{ marginInline: "auto", textAlign: "center" }}>
            Suma cuánto ya gastaste en una web que no vende, en anuncios que no dieron resultado, y cuántos chats se
            quedaron sin respuesta este mes. Ese es el costo real de tu caos, y hoy lo estás pagando sin recibir nada a
            cambio.
          </p>

          <div className="ticket">
            <p className="price">
              S/ 297 <span>(pago único)</span>
            </p>
            <ul className="checklist">
              <li>
                <CheckIcon className="check" />
                <span>
                  <strong>Diagnóstico Cero Caos:</strong> sesión 1 a 1 + auditoría + Manual Cero Caos.
                </span>
              </li>
              <li>
                <CheckIcon className="check" />
                <span>Se descuenta al 100% si contratas la implementación dentro de los 7 días.</span>
              </li>
            </ul>
          </div>

          <div className="lp-after">
            <p>
              <strong>Y después:</strong> si el Diagnóstico confirma que hay encaje, el sistema completo es una
              inversión mensual que definimos juntos según tu alcance. Si no lo hay, te lo digo, y te quedas con tu
              Manual.
            </p>
            <p>
              <strong>Un dato que sí te digo desde ya:</strong> para que la pauta tenga sentido, necesitas poder invertir{" "}
              <strong>al menos S/ 600 al mes en anuncios</strong>, que pagas directo a Meta o Google. Si hoy no puedes,
              el sistema completo todavía no es para ti. Tu Diagnóstico sí puede ayudarte a ordenar lo demás.
            </p>
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
              Imagina el primer día del mes sabiendo cuánto vas a facturar, porque tu oferta se entiende al primer
              vistazo, tu WhatsApp no deja a nadie sin respuesta y tu pauta trae personas que ya saben qué vendes y
              cuánto cuesta. Tú solo creas contenido y cierras ventas. Tu negocio se siente, por fin, como un negocio de
              verdad: uno que puedes mostrarle a tu familia con números.
            </p>
            <p>
              Ahora imagina el mismo mes de siempre. Otro domingo con chats sin responder. Otra semana de tutoriales.
              Otro mes que vas a decidir “a ver si entra algo”.
            </p>
            <p className="closing">
              La diferencia entre un escenario y el otro es <span className="highlight">una sesión y un documento.</span>
            </p>
          </div>

          <ul className="lp-steps-final">
            <li>
              <strong>Qué hacer:</strong> pide tu Diagnóstico Cero Caos.
            </li>
            <li>
              <strong>Cómo:</strong> haz clic en el botón y escríbeme por WhatsApp.
            </li>
            <li>
              <strong>Cuándo:</strong> hoy; agendamos tu sesión en la fecha que elijas.
            </li>
            <li>
              <strong>Qué obtienes:</strong> una sesión 1 a 1 de 60–90 min, la auditoría de tu oferta, tu perfil y tu
              WhatsApp, y tu Manual Cero Caos con la ruta exacta.
            </li>
            <li>
              <strong>Qué pasa después:</strong> si avanzas dentro de 7 días, tus S/ 297 se descuentan por completo. Si
              no avanzas, te quedas con tu Manual.
            </li>
          </ul>

          <div className="cta-stack">
            <Cta>{CTA} — S/ 297</Cta>
            <p className="micro">Si no recibes tu Manual Cero Caos, te devuelvo lo que pagaste.</p>
          </div>

          <p className="lp-ps">
            <strong>P.D.</strong> Si lo que buscas es solo una página web, o que el marketing lo haga todo sin que
            aparezcas, esto no es para ti. Si tienes audiencia, estás cansada/o de un negocio que vende de casualidad y
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
