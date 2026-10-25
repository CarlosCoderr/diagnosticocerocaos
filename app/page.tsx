import Image from "next/image";
import { CtaButton } from "@/components/CtaButton";
import { QualifierModal } from "@/components/QualifierModal";
import { ShortPlayer } from "@/components/ShortPlayer";
import { VslPlayer } from "@/components/VslPlayer";
import { CheckIcon, CrossIcon } from "@/components/Icons";

const MIRROR = [
  {
    lead: "El domingo en la noche:",
    text: "abres WhatsApp y encuentras cinco chats fríos. Preguntan “¿cuánto cuesta?” y desaparecen. No sabes si fue tu precio, tu respuesta o que nunca iban a comprar.",
  },
  {
    lead: "Tu perfil es un menú sin plato fuerte:",
    text: "una mentoría, un curso, una asesoría y un taller. Quien llega no sabe qué elegir, así que no elige nada.",
  },
  {
    lead: "Pusiste dinero en anuncios",
    text: "y te llegaron likes, curiosos y gente que “solo quería ver”. Ventas, pocas o ninguna.",
  },
  {
    lead: "Un mes bueno te hace creer que ya lo lograste.",
    text: "Al siguiente vuelves a empezar de cero.",
  },
  {
    lead: "Haces todo tú:",
    text: "contestas, agendas, cobras y persigues. Cada venta depende de que tengas energía ese día.",
  },
];

const COST = [
  { label: "Tráfico sin filtro", value: "$150 a $300 quemados en anuncios o “promocionar” publicaciones sin retorno." },
  { label: "Prospectos enfriados", value: "Decenas de chats en visto que nunca llegaron a una llamada de ventas." },
  { label: "Ingresos a medias", value: "Meses de 0 o de sube y baja que te obligan a empezar de cero cada 30 días." },
  { label: "Tiempo perdido", value: "8 a 10 horas semanales respondiendo a curiosos en lugar de atender a clientes que sí pagan." },
];

const STEPS = [
  {
    title: "OFERTA",
    sub: "Una sola promesa clara.",
    text: "Dejamos una oferta principal, con precio, resultado y a quién va dirigida. Ya no tienes seis cosas en el perfil. Tienes una que se entiende en 5 segundos.",
  },
  {
    title: "INFRAESTRUCTURA",
    sub: "El camino que filtra por ti.",
    text: "Se arma el recorrido completo: anuncio → formulario de filtro → agenda → pago. Quien llega ya sabe qué vendes y cuánto cuesta. Los curiosos se descartan solos.",
  },
  {
    title: "CAPACITACIÓN DE WHATSAPP",
    sub: "Cómo responder y cerrar.",
    text: "Los mensajes que sí llegan se atienden con guiones y criterios claros. Sabes qué responder, cuándo dar seguimiento y cuándo soltar.",
  },
  {
    title: "PAUTA DESDE EL DÍA 15",
    sub: "Recién ahí se activa.",
    text: "La publicidad entra cuando los tres pasos anteriores están listos. Si empiezas a pautar antes, pagas por tráfico que cae en un sistema roto.",
  },
];

const DELIVERABLES = [
  {
    lead: "Sesión estratégica 1 a 1 de 60 minutos por Google Meet,",
    text: "solo sobre tu negocio, no una clase grupal.",
  },
  {
    lead: "Auditoría de fugas.",
    text: "Revisamos tu perfil, tu oferta, tu forma de atender y tu pauta (si ya inviertes). Salimos con la lista de dónde se te escapa el dinero.",
  },
  {
    lead: "Tu oferta reestructurada.",
    text: "Queda definida: qué vendes, a quién, a qué precio y con qué promesa.",
  },
  {
    lead: "Hoja de ruta técnica a 15 días.",
    text: "Paso a paso, con orden de prioridades, para que sepas qué hacer cada semana.",
  },
  {
    lead: "Manual Cero Caos del Cliente (documento escrito y personalizado).",
    text: "Todo lo anterior queda por escrito, para que lo ejecutes tú, tu equipo o quien elijas.",
  },
];

const TESTIMONIALS = [
  {
    quote: "Salí de la sesión sabiendo exactamente qué quitar de mi perfil y qué vender primero.",
    who: "Cliente 1, Coach de Hábitos",
    video: "S2-DAZrmW4k",
  },
  {
    quote: "Por primera vez entendí por qué mis anuncios anteriores solo traían curiosos.",
    who: "Cliente 2, Consultor",
    video: "19ZBLm1rwbI",
  },
];

const FOR_YOU = [
  "Tienes audiencia (más o menos de 5k a 200k seguidores) y ya vendiste algo antes.",
  "Tu facturación sube y baja, y quieres previsibilidad.",
  "Estás dispuesta a ajustar tu oferta y a ejecutar la hoja de ruta.",
  "Quieres un sistema, no una solución rápida.",
  "Estás pensando en pauta, o ya inviertes y no ves retorno.",
];

const NOT_FOR_YOU = [
  "Buscas resultados sin aparecer, sin responder mensajes ni tomar decisiones.",
  "Esperas un milagro de ventas sin cambiar nada de tu oferta.",
  "Quieres una página web barata y nada más. Esto no es diseño web.",
  "No tienes ningún producto o servicio definido que vender.",
  "Quieres garantía de ventas. Garantizo claridad y un plan, no tus ingresos.",
];

const FAQ = [
  {
    q: "¿$79 no es mucho para una sesión?",
    a: "Piensa en lo que te cuesta cada mes el desorden: anuncios que no convierten, chats que no cierran y horas perdidas. Además, tienes garantía de reembolso del 100%, y si luego contratas el setup, los $79 se descuentan.",
  },
  {
    q: "¿Los anuncios sí funcionan en mi nicho?",
    a: "Depende de tu oferta y del sistema detrás, no del anuncio solo. Por eso el diagnóstico revisa primero si tu oferta y tu camino están listos. Si pautar todavía no te conviene, te lo digo.",
  },
  {
    q: "¿Por qué no aprendo todo esto en YouTube?",
    a: "Puedes, y hay buen contenido. Pero un tutorial es genérico y tu negocio no. Aquí trabajamos sobre tu oferta, tu perfil y tus números, con un plan escrito en el orden correcto, sin que pierdas semanas probando.",
  },
  {
    q: "Ya tengo una página web. ¿Con eso basta?",
    a: "Una web suelta no es un sistema. Si no está conectada a una oferta clara, un filtro, una agenda y una atención ordenada, es solo una vitrina. El diagnóstico revisa cómo conectar todo.",
  },
  {
    q: "¿Cómo pago?",
    a: "Tras el formulario, si calificas, eliges tu horario en Calendly y pagas $79 USD con tarjeta (Stripe/PayPal). Desde Perú también puedes pagar por transferencia o Yape (S/ 297).",
  },
  {
    q: "¿Me garantizas resultados de ventas?",
    a: "No, y desconfía de quien lo haga. Lo que garantizo es que sales de la sesión con tus fugas identificadas, tu oferta reestructurada y una ruta escrita. Si no es así, te devuelvo el 100%. Los resultados dependen de tu ejecución.",
  },
];

function CtaStack() {
  return (
    <div className="cta-stack">
      <CtaButton />
      <p className="micro">$79 USD · Sesión 1 a 1 de 60 min · Garantía de reembolso del 100%</p>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <main id="inicio">
        {/* BLOQUE 1: HERO */}
        <section className="block hero">
          <div className="wrap">
            <h1 className="display">
              Dejas la piel creando contenido, pero cuando miras tu cuenta a fin de mes... <span className="highlight">los números no tienen sentido.</span>
            </h1>
            <p className="hero-sub">
              Tu problema no es la falta de seguidores ni el algoritmo. Es que estás intentando vender en medio de un caos operativo sin un camino de compra claro. <span className="strong">Mira este video antes de gastar en anuncios.</span>
            </p>
            <VslPlayer />
            <CtaStack />
          </div>
        </section>

        {/* BLOQUE 2: EL ESPEJO DE LA FRUSTRACIÓN */}
        <section className="block tint">
          <div className="wrap">
            <h2 className="h2">No necesitas más <span className="highlight">“reels virales”</span>. Necesitas dejar de perder los clientes que ya te escriben.</h2>
            <p className="lead">Sé exactamente lo que se siente lo veo en muchos expertos que están al borde del colapso operativo:</p>
            <ul className="mirror-list">
              {MIRROR.map((m) => (
                <li key={m.lead} className="card">
                  <strong>{m.lead}</strong> {m.text}
                </li>
              ))}
            </ul>
            <p className="closing">
              No es porque te falte talento o ganas. Es porque cada solución que probaste arreglaba una pieza suelta, pero nadie se sentó a construir la máquina completa.
            </p>
          </div>
        </section>

        {/* BLOQUE 3: EL COSTO DE SEGUIR EN EL CAOS */}
        <section className="block">
          <div className="wrap">
            <h2 className="h2">Lo que el caos te cuesta cada mes <span className="highlight">(haz la cuenta)</span></h2>
            <p className="lead">No se trata de trabajar más duro. Se trata de ver dónde se está evaporando tu dinero:</p>
            <dl className="cost-grid">
              {COST.map((c) => (
                <div key={c.label} className="card cost-item">
                  <dt>➔ {c.label}</dt>
                  <dd>{c.value}</dd>
                </div>
              ))}
            </dl>
            <p className="body-text">
              Invertir en publicidad sin un sistema detrás es tirar más de $1,000 en seis meses atrayendo curiosos que no compran. A ese desperdicio económico se suma el desgaste de perseguir interesados y la incertidumbre financiera. El caos es el impuesto más alto que paga una marca personal, y se repite cada mes hasta que se pone orden.
            </p>
            <p className="anchor">Cada mes sin sistema es dinero quemado en tráfico que no convierte.</p>
          </div>
        </section>

        {/* BLOQUE 4: LA SOLUCIÓN */}
        <section className="block tint">
          <div className="wrap">
            <h2 className="h2">
              Primer se ordena la casa. <span className="highlight">Después se enciende el motor.</span>
            </h2>
            <p className="lead">
              La mayoría empieza por el paso 4 (poner anuncios) y por eso falla. Aquí el orden es
              estricto:
            </p>
            <ol className="steps">
              {STEPS.map((s, i) => (
                <li key={s.title} className="card step">
                  <span className="step-n">{i + 1}</span>
                  <h3>
                    {s.title}: <span>{s.sub}</span>
                  </h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
            <p className="closing">Este orden evita que tu inversión en anuncios se pierda.</p>
          </div>
        </section>

        {/* BLOQUE 5: LO QUE TE LLEVAS */}
        <section className="block">
          <div className="wrap">
            <h2 className="h2 text-center">Qué incluye el <span className="highlight">Diagnóstico Cero Caos</span></h2>
            <div className="ticket">
              <p className="price">
                $79 USD <span>(Perú: S/ 297)</span>
              </p>
              <ul className="checklist">
                {DELIVERABLES.map((d) => (
                  <li key={d.lead}>
                    <CheckIcon className="check" />
                    <span>
                      <strong>{d.lead}</strong> {d.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="callouts">
              <div className="callout callout-guarantee">
                <h3>Garantía de riesgo cero</h3>
                <p>
                  Si al terminar los 60 minutos no sales con tus fugas identificadas y tu ruta
                  escrita, te devuelvo el 100% de tu dinero. Sin preguntas ni trámites.
                </p>
              </div>
              <div className="callout">
                <h3>¿Quieres que lo construyamos por ti?</h3>
                <p>
                  Si contratas el Setup completo dentro de los 7 días posteriores al diagnóstico,
                  los $79 USD se descuentan íntegros de la tarifa del setup. El diagnóstico se paga
                  solo.
                </p>
              </div>
            </div>
            <CtaStack />
          </div>
        </section>

        {/* BLOQUE 6: PRUEBA SOCIAL EN VIDEO */}
        <section className="block tint">
          <div className="wrap">
            <h2 className="h2 text-center">Escúchalo de quienes ya <span className="highlight">pasaron por el diagnóstico</span></h2>
            <p className="lead text-center">Sin guion y sin edición. Esto es lo que dicen después de la sesión.</p>
            <div className="testi-grid">
              {TESTIMONIALS.map((t) => (
                <figure key={t.who} className="testi">
                  <ShortPlayer id={t.video} title={`Testimonio: ${t.who}`} />
                  <figcaption>
                    <q>{t.quote}</q>
                    <span>— {t.who}</span>
                  </figcaption>
                </figure>
              ))}
              <div className="testi testi-cta">
                <h3>Tú puedes ser el próximo caso de éxito.</h3>
                <CtaButton size="md" block>
                  Reservar mi Diagnóstico
                </CtaButton>
              </div>
            </div>
          </div>
        </section>

        {/* BLOQUE 7: SOBRE CARLOS CODER */}
        <section className="block">
          <div className="wrap about">
            <figure className="portrait">
              <Image
                src="/carlos.jpg"
                alt="Carlos Coder"
                fill
                sizes="(max-width: 720px) 100vw, 340px"
                className="portrait-img"
              />
            </figure>
            <div className="about-copy">
              <h2 className="h2">Quién está detrás del diagnóstico</h2>
              <p>
                En marzo de 2023 yo era un programador frustrado. Sabía construir cosas, pero no
                sabía hacer que alguien las comprara. Tenía el producto, el código y las horas, pero
                no tenía ventas.
              </p>
              <p>
                Ahí entendí algo que hoy aplico con mis clientes: las ventas no se improvisan, se
                arquitectan. Me metí de lleno en los embudos, en la atención por WhatsApp y en la
                publicidad pagada, probando con dinero propio y de clientes.
              </p>
              <p>
                Hoy diseño sistemas de ventas para creadores, coaches y consultores
                la oferta, el camino de conversión y la pauta, todo conectado.
              </p>
              <p>
                No te voy a vender magia. Te voy a mostrar con claridad qué está roto y cómo
                arreglarlo, en orden.
              </p>
              <p className="signature">Carlos Coder, arquitecto de sistemas de ventas y pauta.</p>
            </div>
          </div>
        </section>

        {/* BLOQUE 8: FILTRO DE CALIDAD */}
        <section className="block">
          <div className="wrap">
            <h2 className="h2 text-center"><span className="highlight">Esto es para ti…</span> o no lo es</h2>
            <div className="fit-grid">
              <div className="fit-col fit-yes">
                <h3>Es para ti si:</h3>
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
                <h3>No es para ti si:</h3>
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
            <p className="closing">
              Mejor saberlo ahora que descubrirlo después de pagar. Si te reconoces en la segunda
              lista, te agradezco que no reserves.
            </p>
          </div>
        </section>

        {/* BLOQUE 9: FAQ */}
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

        {/* BLOQUE 10: CTA FINAL */}
        <section className="block final">
          <div className="wrap narrow">
            <h2 className="h2">Tienes la audiencia. Solo te falta el sistema.</h2>
            <p className="lead">
              Deja de quemar presupuesto y depender de la suerte. En 60 minutos detectamos tus fugas, estructuramos tu oferta y trazamos tu ruta por escrito. Garantía de devolución total.
            </p>
            <CtaStack />
          </div>
        </section>

        <footer className="footer text-center">
          <div className="wrap narrow">
            <p>
              <strong>Descargo de resultados:</strong> Los resultados de casos reales; no son típicos ni garantizan ingresos. El Diagnóstico Cero Caos entrega claridad y estrategia; el éxito depende de tu ejecución.
            </p>
            <p>
              Este sitio no es parte del sitio web de Facebook, Meta Platforms, Inc. ni de Google
              LLC. Este sitio no está respaldado por Facebook ni Google de ninguna manera.
            </p>
            <p className="copyright">© 2026 Carlos Coder. Todos los derechos reservados.</p>
          </div>
        </footer>
      </main>
      <QualifierModal />
    </>
  );
}
