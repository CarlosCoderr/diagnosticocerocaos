import { WaButton } from "@/components/WaButton";
import { HeroInbox } from "@/components/HeroInbox";
import { VslPlayer } from "@/components/VslPlayer";
import { DayRuler } from "@/components/DayRuler";
import { ArrowIcon, CheckIcon, CrossIcon } from "@/components/Icons";
import { SITE } from "@/lib/config";

const MIRROR = [
  "WhatsApp lleno de chats fríos: decenas de personas que preguntaron precio, no volvieron a responder y quedaron en el olvido.",
  "Si la gente entra a tu perfil y ve mil servicios distintos, no entiende qué vendes. Y audiencia confundida, no compra.",
  "Invertiste en pauta o en un freelancer barato y solo conseguiste curiosos pidiendo precio. ¿Tu conclusión? “Los anuncios no me funcionan.”",
  "Fin de semana perdido viendo tutoriales y arreglando automatizaciones rotas, en lugar de vender o descansar.",
];

const COST_QUESTIONS = [
  "El presupuesto que quemaste en anuncios que solo trajeron curiosos.",
  "Lo que pagaste por esa página web bonita que hoy solo sirve de tarjeta de presentación digital.",
  "Las ventas de $300, $500 o $1,000 que se enfriaron en tu WhatsApp porque no tenías una secuencia de seguimiento.",
  "La ansiedad de cerrar un mes sin saber si el próximo vas a facturar.",
];

const STEPS = [
  {
    title: "Diagnóstico y Oferta:",
    text: "Ordenamos tu oferta y definimos qué vendes y a quién, antes de invertir un solo dólar en anuncios.",
  },
  {
    title: "Infraestructura Integrada:",
    text: "Landing de conversión y captación automatizada a WhatsApp/correo para no perder ningún prospecto.",
  },
  {
    title: "Capacitación e Independencia:",
    text: "Entrenamos a tu equipo comercial en WhatsApp para que cierren ventas sin depender de mí a ciegas.",
  },
  {
    title: "Motor de Tráfico:",
    text: "El DÍA 15, con la casa en orden y el sistema listo, encendemos la pauta para escalar.",
  },
];

const DELIVERABLES = [
  {
    name: "Sesión conmigo (60–90 min)",
    text: "Revisamos tu marca, tu oferta y por dónde entra y se cae la gente.",
  },
  {
    name: "Análisis de marca, avatar y dolores",
    text: "Por escrito: a quién le vendes de verdad y qué le duele con sus propias palabras.",
  },
  {
    name: "Tu oferta definida",
    text: "Tus programas separados de tus servicios, con nombre y precio de cada uno.",
  },
  {
    name: "Ruta recomendada",
    text: "Qué armar primero, en qué orden y qué no tocar todavía.",
  },
  {
    name: "Documento escrito",
    text: "Todo lo anterior en un archivo tuyo. Lo puedes ejecutar con quien quieras.",
  },
];

const FOR_YOU = [
  "Tienes una marca personal con audiencia y vendes tus conocimientos (consultas, programas, servicios).",
  "Tu facturación sube y baja y no sabes de qué depende.",
  "Estás dispuesta a aparecer con tu cara y tu voz, y a cerrar las ventas que el sistema te traiga.",
  "Quieres entender la lógica de lo que se arma, no solo recibir un archivo.",
];

const NOT_FOR_YOU = [
  "Quieres que el marketing lo haga todo sin que tú aparezcas. Tu cara y tu voz son lo que vende, y eso nadie lo hace por ti.",
  "Solo quieres una web. Yo no vendo webs sueltas.",
  "Buscas que te prometa cien leads al día o resultados en treinta días.",
];

const FAQ = [
  {
    q: "¿Está muy caro?",
    a: "Compáralo con lo que ya perdiste: la plata que quemaste en anuncios, los chats que se enfriaron y los meses en cero. Y si decides armar el sistema conmigo, el diagnóstico se descuenta del setup dentro de los 7 días.",
  },
  {
    q: "Ya probé anuncios y no funcionaron.",
    a: "Los anuncios no fallaron. Fallaron porque atrás había una oferta mezclada, un link que lleva a cualquier lado y un WhatsApp sin respuesta a tiempo. Por eso en el Método Cero Caos la pauta va al final, el día 15, nunca al principio.",
  },
  {
    q: "No tengo tiempo para grabar contenido. Quiero que lo hagan todo por mí.",
    a: "El sistema se encarga de la captación, el seguimiento automático y la pauta. A ti te deja dos tareas: crear contenido y cerrar ventas. Tu cara y tu voz son lo que vende y nadie lo hace por ti. Si no estás dispuesta a aparecer, esto no es para ti, y te lo digo desde el inicio.",
  },
  {
    q: "¿No puedo aprenderlo yo con tutoriales de YouTube?",
    a: "Puedes. Pero cada fin de semana peleándote con un dominio o una integración es un fin de semana sin atender a tu gente ni crear contenido. Y armarlo es solo una parte: la pauta hay que operarla todos los meses sin quemar presupuesto.",
  },
  {
    q: "¿Quince días? Yo necesito vender ya.",
    a: "Lanzar mañana sin preparar nada es exactamente lo que ya hiciste y no te funcionó. En 15 días se ordena la oferta, se construye el sistema, se capacita a quien responde y recién entonces se lanza. Desde ahí los resultados se pueden medir.",
  },
  {
    q: "¿Y si después dependo de ti para todo?",
    a: "Te enseño la lógica del sistema y cómo responder a mano sin romper lo que la automatización ya avanzó. La independencia del cliente es uno de los cuatro pasos.",
  },
  {
    q: "¿Qué pasa si solo quiero una web?",
    a: "Entonces este diagnóstico te va a decir con claridad qué falta detrás de esa web. Si aun así solo quieres la web, no soy el indicado y te lo digo con respeto.",
  },
  {
    q: "¿Cómo pago y cuándo?",
    // PENDIENTE: [CÓMO SE COBRA] (Yape / transferencia / enlace de pago).
    a: `${SITE.paymentMethod}. Pagas para confirmar tu lugar en la sesión. Después recibes el documento escrito.`,
  },
  {
    q: "¿Esto garantiza resultados?",
    a: "No. Es un solo caso real y así lo presento. El diagnóstico te da claridad y una ruta; los resultados dependen de ejecutarla y de que aparezcas.",
  },
];

export default function Page() {
  return (
    <>
      <main className="sheet" id="inicio">
        {/* 1 · Hero */}
        <section className="hero">
          <h1 className="display hero-title">
            Te dejas la piel creando contenido, pero cuando miras tu cuenta a fin de mes... {" "}
            <span className="sage">
            los números no tienen sentido.
            </span>
          </h1>

          <p className="hero-sub">
            Tu problema no son los seguidores ni el algoritmo: es vender en caos y sin un camino claro.<br /> <span className="negrita">Mira este video antes de gastar en anuncios.</span>
          </p>
          <VslPlayer />
          {/*<HeroInbox />*/}


          <WaButton size="lg">ordenar mi sistema de ventas →</WaButton>
          <p className="micro">
            Sesión de diagnóstico 1 a 1 + Hoja de ruta por escrito. Sin compromisos de permanencia.
          </p>

        </section>

        {/* 3 · Espejo */}
        <section className="section mirror">
          <h2 className="h2">No necesitas más <span className="sage">"reels virales".</span> Necesitas dejar de perder los clientes que ya te escriben.</h2>
          
          <p className="lead">Lo sé porque lo veo cada semana: expertos brillantes al borde del colapso operativo.</p>
          
          <ul className="mirror-list">
            {MIRROR.map((t) => {
              const emphasis = ["WhatsApp lleno de chats fríos:", "“Los anuncios no me funcionan.”"];
              const parts = t.split(new RegExp(`(${emphasis.join("|")})`));
              return (
                <li key={t}>
                  {parts.map((p, i) =>
                    emphasis.includes(p) ? (
                      <span key={i} style={{ fontWeight: 500 }}>{p}</span>
                    ) : (
                      p
                    ),
                  )}
                </li>
              );
            })}
          </ul>
          <p className="mirror-close">
            <span className="sage">No te falta talento ni ganas.</span> Tu estancamiento de ingresos ocurre porque probaste parches sueltos en vez de construir la máquina completa. {/*<em>Nadie ordenó el negocio completo.</em>*/}
          </p>
        </section>

        {/* 4 · Costo */}
        <section className="section cost">
          <div className="cost-head">
            <h2 className="h2">
              Hagamos la cuenta que <span className="sage">nadie quiere hacer.</span>
            </h2>
            <p className="lead">Suma mentalmente por un segundo:</p>
          </div>
          <ol className="cost-sheet">
            {COST_QUESTIONS.map((q) => (
              <li key={q}>
                <span>{q}</span>
                <i aria-hidden="true" />
              </li>
            ))}
          </ol>
          <div className="cost-body">
            <p className="mirror-close">Seguir operando en el caos <span className="sage">ya te está costando miles de dólares al mes.</span> Mandar pauta a una casa desordenada solo hace que te quemes más rápido.</p>
          </div>
        </section>

        {/* 5 · Método */}
        <section className="section method">
          <h2 className="h2">
            Primero se ordena la casa. <span className="sage">Después se enciende el motor.</span>
          </h2>
          <p className="lead method-lead">
            No te voy a vender una web para que se vea bonita ni te voy a prometer 100 leads al día. El Método Cero Caos es una arquitectura técnica en 4 pasos lógicos:
          </p>
          <ol className="steps">
            {STEPS.map((s, i) => (
              <li key={s.title} className={i === 0 ? "step step-first" : "step"}>
                <span className="step-n">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
          <DayRuler />
          <p className="method-close">
            La pauta va al final. Y yo no la enciendo sin diagnóstico.{" "}
            <em>Aunque me lo pidas. Aunque me pagues.</em>
          </p>
          <p className="method-note">
            Esta página te vende solo el paso 1. Los otros pasos vienen después, si tú quieres y si
            el diagnóstico dice que hace falta.
          </p>
        </section>

        {/* 6 · Oferta */}
        <section className="section offer" id="oferta">
          <div className="offer-grid">
            <div className="offer-copy">
              <h2 className="h2">
                Lo que <em>te llevas</em>
              </h2>
              <p className="lead">
                Una sesión conmigo de 60 a 90 minutos, y un documento escrito.
              </p>
              <h3 className="mini-h">Lo que pasa con el pago</h3>
              <p>
                Si después del diagnóstico decides que armemos el sistema juntos y contratas dentro
                de los 7 días, lo que pagaste se descuenta del setup. Si prefieres ejecutarlo con
                otra persona, el documento es tuyo.
              </p>
              <h3 className="mini-h">¿Por qué no es gratis?</h3>
              <p>
                Porque lo gratis atrae a quien solo pregunta el precio y se va. Quiero trabajar con
                quien va en serio.
              </p>
            </div>

            <article className="ticket" aria-label="Diagnóstico Cero Caos">
              <div className="ticket-top">
                <p className="ticket-name">Diagnóstico Cero Caos</p>
                <ul className="ticket-list">
                  {DELIVERABLES.map((d) => (
                    <li key={d.name}>
                      <strong>{d.name}</strong>
                      <span>{d.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ticket-cut" aria-hidden="true" />
              <div className="ticket-bottom">
                <div className="ticket-price">
                  <span>Precio</span>
                  <strong>{SITE.price}</strong>
                </div>
                <WaButton>Reservar mi diagnóstico por WhatsApp</WaButton>
              </div>
            </article>
          </div>
        </section>

        {/* 7 · Caso */}
        <section className="section case">
          <h2 className="h2">
            Lo que pasó cuando lo apliqué <span className="sage">completo</span>
          </h2>
          <p className="lead">Una agencia de marketing que vende a centros estéticos.</p>

          <div className="case-grid">
            <div className="case-story">
              <h3 className="mini-h">Cómo llegó</h3>
              <p>
                Tenían estructura de agencia, pero sus ventas eran un caos. Campañas sin un camino
                de compra claro.
              </p>
              <h3 className="mini-h">Qué hicimos, en 3 pasos</h3>
              <ol className="case-steps">
                <li>Ordené su oferta y su proceso comercial.</li>
                <li>Construí la landing y el camino de compra.</li>
                <li>
                  Activé y optimicé las campañas en Meta. Además, capacité a todo el equipo.
                </li>
              </ol>
            </div>

            <div className="case-proof">
              <figure className="capture capture-a">
                {/* PENDIENTE: [CAPTURA REAL] panel de Meta */}
                <figcaption>Captura real: panel de Meta</figcaption>
              </figure>
              <figure className="capture capture-b">
                {/* PENDIENTE: [CAPTURA REAL] WhatsApp confirmando el cierre */}
                <figcaption>Captura real: WhatsApp confirmando el cierre</figcaption>
              </figure>
              <figure className="capture capture-c">
                {/* PENDIENTE: [VIDEO DUEÑA] */}
                <figcaption>Video de la dueña</figcaption>
              </figure>
            </div>
          </div>

          <p className="case-chain" aria-label="Resultado: 300 soles de pauta, 11 mensajes, 1 cliente calificado, 3,000 soles">
            <span>
              <span>
                <em>S/ 300</em> de pauta
              </span>
            </span>
            <span>
              <ArrowIcon className="chain-arrow" size={28} />
              <span>
                <em>11</em> mensajes
              </span>
            </span>
            <span>
              <ArrowIcon className="chain-arrow" size={28} />
              <span>
                <em>1</em> cliente calificado
              </span>
            </span>
            <span>
              <ArrowIcon className="chain-arrow" size={28} />
              <span>
                <em>S/ 3,000</em> pagados
              </span>
            </span>
          </p>
          <p className="lead">
            En la primera semana. La agencia lo fidelizó con retención mensual. Después del
            proyecto, me sumaron a su equipo.
          </p>

          <p className="notice">
            <strong>Es un solo caso.</strong> No te garantiza que a ti te vaya igual. Lo que
            muestra es que cuando hay oferta, camino de compra y alguien que responde bien, un
            presupuesto chico puede traer gente que paga lo que vale tu servicio.
          </p>
        </section>

        {/* 8 · Sobre mí */}
        <section className="section about">
          <figure className="portrait">
            {/* PENDIENTE: [FOTO CARLOS] */}
            <figcaption>Foto de Carlos</figcaption>
          </figure>
          <div className="about-copy">
            <h2 className="h2">
              No soy una agencia de marketing tradicional. Soy el arquitecto técnico que apaga el fuego en tu negocio.
            </h2>
            <p className="lead">
              En marzo de 2023 yo estaba en el mismo lugar frustrante: entregaba hasta 4 páginas web al mes, cobrando poco y pasando más de 10 horas diarias frente a la pantalla. Me veían como "el chico de las webs".   Entendí que el mercado estaba lleno de diseñadores que hacen cosas bonitas y de "marketeros" que venden humo, pero nadie sabía unir la infraestructura técnica con la adquisición real de clientes.   Me especialicé en arquitectura de sistemas, psicología de ventas y pauta publicitaria. Hoy, la landing, la automatización, el entrenamiento de atención y la pauta los diseño y los ejecuto yo mismo. No tienes que estar coordinando a tres proveedores distintos que se echan la culpa entre sí cuando algo no vende.
            </p>
          </div>
        </section>

        {/* 9 · Para quién es / no es */}
        <section className="section fit">
          <h2 className="h2 fit-title">
            Te lo digo <em>desde ya</em>
          </h2>
          <div className="fit-grid">
            <div className="fit-col">
              <h3 className="fit-h">Es para ti si</h3>
              <ul>
                {FOR_YOU.map((t) => (
                  <li key={t}>
                    <CheckIcon className="fit-icon fit-yes" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="fit-col">
              <h3 className="fit-h">No es para ti si</h3>
              <ul>
                {NOT_FOR_YOU.map((t) => (
                  <li key={t}>
                    <CrossIcon className="fit-icon fit-no" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 10 · Transparencia */}
        <section className="section honest">
          <h2 className="h2">
            Lo que te digo <span className="sage">con honestidad</span>
          </h2>
          {/* PENDIENTE: [GARANTÍA]. Se agrega aquí solo si el dueño decide ofrecerla. */}
          <dl className="honest-list">
            <div>
              <dt>Transparencia de tiempos</dt>
              <dd>
                El sistema se construye primero. Los anuncios se encienden el día 15 y desde ahí se
                miden los resultados. No hay “resultados mañana”.
              </dd>
            </div>
            <div>
              <dt>Transparencia de presupuesto</dt>
              <dd>
                No prometo un número de ventas ni de leads. Prometo orden, un sistema armado y
                números claros para decidir.
              </dd>
            </div>
          </dl>
        </section>

        {/* 11 · FAQ */}
        <section className="section faq">
          <h2 className="h2">Preguntas frecuentes</h2>
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
        </section>

        {/* 12 · CTA final */}
        <section className="final">
          <h2 className="display final-title">
            La gente ya la tienes. <span className="sage">Te falta el sistema.</span>
          </h2>
          <p className="lead">
            Escríbeme por WhatsApp con tu nombre y qué vendes hoy. Yo te respondo con los horarios
            disponibles y reservas tu sesión de diagnóstico. En la sesión ordenamos tu oferta y tu
            ruta. Después recibes el documento escrito, y tú decides qué sigue.
          </p>
          <WaButton size="lg">Quiero mi Diagnóstico Cero Caos</WaButton>
        </section>

        <footer className="footer">
          <p>
            © Carlos Coder · Todos los derechos reservados ·{" "}
            <a href={SITE.termsUrl}>Términos</a> · <a href={SITE.privacyUrl}>Privacidad</a>
          </p>
          <p className="footer-legal">
            <strong>Aviso de resultados:</strong> Los resultados mostrados corresponden a un caso
            real y no garantizan resultados futuros. Los resultados dependen del negocio, la
            oferta, la inversión en anuncios, la ejecución y el contenido de cada persona. Este
            sitio no es parte de Meta ni de Google. Facebook, Instagram y Google son marcas de sus
            respectivos dueños.
          </p>
        </footer>
      </main>
    </>
  );
}
