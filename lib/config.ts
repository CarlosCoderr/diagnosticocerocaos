// Datos que el dueño debe completar antes de publicar. Todo lo demás vive en app/page.tsx.

export const SITE = {
  // PENDIENTE: link de tu evento de Calendly con el cobro de $79 USD (Stripe/PayPal) activado.
  // Quien califica en el formulario llega aquí con nombre y respuestas ya cargados.
  // En Calendly crea 4 preguntas personalizadas, en este orden, para recibir las respuestas:
  // 1) enlace a tu red o web, 2) qué vendes, 3) facturación mensual, 4) obstáculo principal.
  calendlyUrl: "",
  // ID del video de YouTube del VSL (lo que va después de "v=" en la URL).
  vslYoutubeId: "dMZ-n2KSlxE",
  // PENDIENTE: URLs legales. Meta rechaza landings sin términos y privacidad.
  termsUrl: "#",
  privacyUrl: "#",
  refundUrl: "#",
  contactUrl: "#",
};

export const CTA_TEXT = "Quiero mi Diagnóstico Cero Caos";
export const OPEN_FORM_EVENT = "open-qualifier-form";
