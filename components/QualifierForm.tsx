"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/config";

type Option = { label: string; dq?: boolean };
type Question = { key: "sell" | "revenue" | "obstacle" | "ready"; title: string; options: Option[] };

// Las opciones con `dq` descalifican de inmediato y llevan a la pantalla de salida.
const QUESTIONS: Question[] = [
  {
    key: "sell",
    title: "¿Qué vendes y a qué precio aproximado?",
    options: [
      { label: "Servicios, consultorías o mentorías ($200 - $1,000+)" },
      { label: "Cursos grabados, info-productos o guías ($20 - $100)" },
      { label: "Vendo de todo un poco y mi oferta está mezclada" },
      { label: "Aún no tengo nada concreto que vender", dq: true },
    ],
  },
  {
    key: "revenue",
    title: "¿Cuánto estás facturando actualmente al mes con tu negocio?",
    options: [
      { label: "Aún en $0 o iniciando" },
      { label: "$500 a $2,500 al mes" },
      { label: "Más de $2,500 al mes" },
    ],
  },
  {
    key: "obstacle",
    title: "¿Cuál es tu principal obstáculo hoy en día?",
    options: [
      { label: "Me llegan curiosos pidiendo precio que luego desaparecen" },
      { label: "Mis chats de WhatsApp están desordenados y pierdo ventas" },
      {
        label: "Quiero un sistema que venda, pero NO quiero grabar contenido ni aparecer en cámara",
        dq: true,
      },
    ],
  },
  {
    key: "ready",
    title:
      "El Diagnóstico Cero Caos es una sesión 1 a 1 de 60 min + Hoja de Ruta escrita por $79 USD (S/ 297), descontable si contratas el Setup. ¿Estás listo/a para agendar y abonar el cupo hoy?",
    options: [
      { label: "Sí, listo/a para agendar y pagar" },
      { label: "Solo estoy curioseando o no tengo presupuesto", dq: true },
    ],
  },
];

const TOTAL = QUESTIONS.length + 1;

type Answers = { name: string; link: string } & Partial<Record<Question["key"], string>>;
type Stage = "form" | "out" | "done";

// Acepta un usuario (@usuario) o un dominio/URL (instagram.com/usuario, https://mi-web.com).
const LINK_PATTERN = /^(@[\w.]{2,}|(https?:\/\/)?[^\s/@]+\.[^\s/@.]{2,}(\/\S*)?)$/i;

type Errors = Partial<Record<"name" | "link", string>>;

function validate({ name, link }: Answers): Errors {
  const errors: Errors = {};
  if (name.trim().length < 2) errors.name = "Escribe tu nombre (mínimo 2 letras).";
  if (!link.trim()) errors.link = "Este campo es obligatorio.";
  else if (!LINK_PATTERN.test(link.trim()))
    errors.link = "Escribe un enlace válido, por ejemplo instagram.com/usuario o @usuario.";
  return errors;
}

function calendlyHref(answers: Answers) {
  const params = new URLSearchParams({
    name: answers.name,
    a1: answers.link,
    a2: answers.sell ?? "",
    a3: answers.revenue ?? "",
    a4: answers.obstacle ?? "",
  });
  const sep = SITE.calendlyUrl.includes("?") ? "&" : "?";
  return `${SITE.calendlyUrl}${sep}${params}`;
}

export function QualifierForm({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [stage, setStage] = useState<Stage>("form");
  const [answers, setAnswers] = useState<Answers>({ name: "", link: "" });
  const [errors, setErrors] = useState<Errors>({});

  const href = SITE.calendlyUrl ? calendlyHref(answers) : "";

  useEffect(() => {
    if (stage !== "done" || !href) return;
    const t = setTimeout(() => window.location.assign(href), 1500);
    return () => clearTimeout(t);
  }, [stage, href]);

  const pick = (q: Question, option: Option) => {
    setAnswers((a) => ({ ...a, [q.key]: option.label }));
    if (option.dq) setStage("out");
    else if (step === QUESTIONS.length) setStage("done");
    else setStep(step + 1);
  };

  if (stage === "out") {
    return (
      <div className="qf qf-end">
        <h2>Gracias por tu honestidad</h2>
        <p>
          Por ahora el Diagnóstico no es el paso que más te conviene, y prefiero decírtelo antes de
          que pagues. Cuando tengas una oferta definida y estés lista para ejecutar, aquí estaré.
        </p>
        <button type="button" className="btn btn-md" onClick={onClose}>
          Cerrar
        </button>
      </div>
    );
  }

  if (stage === "done") {
    return (
      <div className="qf qf-end">
        <h2>Calificas para el Diagnóstico</h2>
        {href ? (
          <>
            <p>Te llevamos a la agenda para elegir tu horario y completar el pago de $79 USD.</p>
            <a className="btn btn-md" href={href}>
              Elegir mi horario
            </a>
          </>
        ) : (
          <p className="qf-note">
            La agenda aún no está conectada. Agrega el link de Calendly en
            <code> lib/config.ts → calendlyUrl</code>.
          </p>
        )}
      </div>
    );
  }

  const question = step > 0 ? QUESTIONS[step - 1] : null;

  return (
    <div className="qf">
      <div className="qf-progress" aria-hidden="true">
        <span style={{ width: `${((step + 1) / TOTAL) * 100}%` }} />
      </div>
      <p className="qf-step">
        Pregunta {step + 1} de {TOTAL}
      </p>

      {question ? (
        <fieldset className="qf-fieldset">
          <legend>
            {question.title} <span className="qf-req" aria-label="obligatorio">*</span>
          </legend>
          <div className="qf-options">
            {question.options.map((o) => (
              <button
                key={o.label}
                type="button"
                className="qf-option"
                aria-pressed={answers[question.key] === o.label}
                onClick={() => pick(question, o)}
              >
                {o.label}
              </button>
            ))}
          </div>
          <button type="button" className="qf-back" onClick={() => setStep(step - 1)}>
            ← Volver
          </button>
        </fieldset>
      ) : (
        <form
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            const found = validate(answers);
            setErrors(found);
            if (Object.keys(found).length > 0) return;
            setAnswers({ ...answers, name: answers.name.trim(), link: answers.link.trim() });
            setStep(1);
          }}
        >
          <h2 className="qf-title">Cuéntame quién eres</h2>
          <label className="qf-field">
            <span>
              ¿Cuál es tu nombre? <b className="qf-req" aria-label="obligatorio">*</b>
            </span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "qf-name-error" : undefined}
              value={answers.name}
              onChange={(e) =>
                setAnswers({ ...answers, name: e.target.value.replace(/[^\p{L}\s]/gu, "") })
              }
            />
            {errors.name && (
              <em id="qf-name-error" className="qf-error" role="alert">
                {errors.name}
              </em>
            )}
          </label>
          <label className="qf-field">
            <span>
              Enlace a tu red social principal o web <b className="qf-req" aria-label="obligatorio">*</b>
            </span>
            <input
              type="text"
              name="link"
              autoComplete="url"
              placeholder="instagram.com/usuario"
              aria-required="true"
              aria-invalid={!!errors.link}
              aria-describedby={errors.link ? "qf-link-error" : undefined}
              value={answers.link}
              onChange={(e) => setAnswers({ ...answers, link: e.target.value })}
            />
            {errors.link && (
              <em id="qf-link-error" className="qf-error" role="alert">
                {errors.link}
              </em>
            )}
          </label>
          <button type="submit" className="btn btn-md btn-block">
            Continuar
          </button>
        </form>
      )}
    </div>
  );
}
