// Objeto del hero: tres mensajes sin responder que se enfrían. Contenido de
// demostración, no datos reales. La animación es solo CSS; el estado final es
// el que se renderiza sin movimiento.

const THREADS = [
  { who: "Nuevo contacto", text: "Hola, vi tu perfil. ¿Cuánto cuesta?", age: "hace 6 días" },
  { who: "Nuevo contacto", text: "¿Y tú qué vendes exactamente?", age: "hace 4 días" },
  { who: "Nuevo contacto", text: "Quiero información del programa", age: "hace 2 días" },
];

export function HeroInbox() {
  return (
    <div
      className="inbox"
      role="img"
      aria-label="Tres mensajes de WhatsApp sin responder, de hace dos a seis días"
    >
      <div className="inbox-head">
        <span>WhatsApp</span>
        <span className="inbox-count">3 sin responder</span>
      </div>
      <ul className="inbox-list">
        {THREADS.map((t, i) => (
          <li key={i} className="inbox-row" style={{ ["--i" as string]: i }}>
            <span className="inbox-dot" />
            <span className="inbox-body">
              <span className="inbox-who">{t.who}</span>
              <span className="inbox-text">{t.text}</span>
            </span>
            <span className="inbox-age">
              <span className="inbox-age-now">ahora</span>
              <span className="inbox-age-then">{t.age}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
