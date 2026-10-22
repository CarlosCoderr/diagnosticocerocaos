// Datos que el dueño debe completar antes de publicar. Todo lo demás vive en app/page.tsx.

export const SITE = {
  // Formato internacional sin "+" ni espacios, p. ej. "51987654321".
  // Perú (+51).
  whatsappNumber: "51921926452",
  // Texto precargado en el chat (copy del documento de la página de venta).
  whatsappMessage:
    "Hola Carlos, vi tu video del Diagnóstico Cero Caos. Soy [mi nombre] y vendo [lo que vendo]. Quiero reservar mi sesión.",
  // PENDIENTE: [PRECIO FINAL]. S/ 297 según el documento de bloques.
  price: "S/ 297",
  // PENDIENTE: [CÓMO SE COBRA] (Yape / transferencia / enlace de pago). Reemplazar este texto.
  paymentMethod: "[CÓMO SE COBRA: Yape / transferencia / enlace de pago]",
  // PENDIENTE: URL del video VSL (mp4). Vacío muestra el reproductor en espera.
  vslSrc: "",
  vslPoster: "",
  // PENDIENTE: [URL TÉRMINOS] y [URL PRIVACIDAD]. Meta rechaza landings sin ellos.
  termsUrl: "#",
  privacyUrl: "#",
};

export const whatsappHref = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
  SITE.whatsappMessage,
)}`;
