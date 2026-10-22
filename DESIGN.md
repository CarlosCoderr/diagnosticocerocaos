---
name: Diagnóstico Cero Caos
description: Una hoja blanca sobre fondo gris cálido, tipografía grotesca ajustada, acentos en serif itálica y objetos oscuros táctiles.
colors:
  ground: "#f4f4f2"
  sheet: "#ffffff"
  tint: "#f7f7f5"
  ink: "#262626"
  ink-2: "#565656"
  sage: "#6f8584"
  line: "#e7e7e4"
  line-strong: "#d4d4d0"
  coral: "#ff5b5b"
  night: "#1a1a1c"
  night-2: "#2a2a2d"
  whatsapp-green: "#128c4a"
typography:
  display:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(2.3rem, 5.6vw, 4.6rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.2vw, 3.4rem)"
    fontWeight: 300
    lineHeight: 1.06
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(1.3rem, 2.2vw, 1.75rem)"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.01em"
  accent-serif:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "1.06em"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.01em"
rounded:
  sheet: "36px"
  object: "28px"
  panel: "20px"
  row: "20px"
  notice: "18px"
  pill: "999px"
spacing:
  page-pad: "clamp(20px, 5vw, 64px)"
  section-gap: "clamp(72px, 10vw, 136px)"
  content-max: "1040px"
  sheet-max: "1240px"
components:
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
    rounded: "{rounded.pill}"
    padding: "15px 26px"
  button-dark-hover:
    backgroundColor: "{colors.whatsapp-green}"
  button-dark-lg:
    padding: "18px 32px"
  button-dark-sm:
    padding: "11px 20px"
  topbar:
    backgroundColor: "{colors.sheet}"
    rounded: "{rounded.pill}"
    padding: "8px 8px 8px 24px"
  inbox-object:
    backgroundColor: "{colors.night}"
    textColor: "#f1f1f0"
    rounded: "{rounded.object}"
    padding: "8px"
  inbox-row:
    backgroundColor: "{colors.night-2}"
    rounded: "{rounded.row}"
    padding: "10px 16px"
  ticket:
    backgroundColor: "{colors.sheet}"
    rounded: "{rounded.object}"
  note-panel:
    backgroundColor: "{colors.tint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.notice}"
    padding: "20px 24px"
  placeholder-capture:
    backgroundColor: "{colors.tint}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.panel}"
    padding: "18px"
---

# Design System: Diagnóstico Cero Caos

## Overview

**Creative North Star: "El escritorio en orden"**

Una hoja blanca grande, con esquinas muy redondeadas, descansa sobre un fondo gris cálido. Dentro de ella el orden es el mensaje: tipografía grotesca enorme y ajustada, divisiones de una línea fina, mucho aire, y un solo objeto oscuro y táctil (la bandeja de WhatsApp) que concentra la atención. La página es en sí misma el "cero caos" que promete.

La densidad es baja y la voz es serena. Los titulares se parten en dos tonos (tinta y gris salvia) y llevan palabras sueltas en serif itálica como acento. Los objetos oscuros, la ficha perforada y la regla de días son los únicos elementos con volumen; todo lo demás es plano y se separa con líneas.

Rechazos confirmados en el contrato de la superficie: el andamiaje de vendedor de cursos (degradado oscuro, cuenta regresiva, pila de bonos) y la plantilla SaaS de tarjetas iguales.

**Key Characteristics:**
- Hoja blanca única sobre fondo gris cálido, líneas de 1px como estructura.
- Geist ligero y medio con tracking negativo; Bodoni Moda itálica solo en palabras de acento.
- Botones píldora negros; el hover los vuelve verde WhatsApp.
- Objetos oscuros con sombras suaves y reales; la ficha blanca perforada para la oferta.
- Coral reservado a señales sin responder.

## Colors

Paleta neutra cálida con un gris salvia para la segunda mitad de los titulares, un coral de señal y un verde de WhatsApp que solo aparece en la acción.

### Primary
- **Tinta carbón** (#262626): texto principal, botones píldora, números del caso, marca del logotipo.

### Secondary
- **Salvia apagada** (#6f8584): segunda mitad de los titulares (`.sage`) y los números itálicos de los pasos. Texto grande solamente.

### Tertiary
- **Coral de señal** (#ff5b5b): punto y cursor de texto; en la bandeja marca un mensaje sin responder y se enfría a gris. Solo para lo no respondido.
- **Verde WhatsApp** (#128c4a): hover del botón principal y el icono de "sí" en la lista de encaje.

### Neutral
- **Fondo piedra** (#f4f4f2): el suelo detrás de la hoja y color de tema del navegador.
- **Hoja blanca** (#ffffff): la hoja principal, la barra superior y la ficha.
- **Tinte de sección** (#f7f7f5): secciones alternas (video, costo, oferta, encaje), avisos y marcadores.
- **Tinta secundaria** (#565656): párrafos y texto de apoyo.
- **Línea** (#e7e7e4) y **Línea fuerte** (#d4d4d0): divisiones, perforación de la ficha, flechas de cadena.
- **Noche** (#1a1a1c) y **Noche 2** (#2a2a2d): superficies de los objetos oscuros (bandeja, reproductor, pastilla de la regla).

### Named Rules
**The Coral Means Unanswered Rule.** El coral aparece solo donde algo está sin responder (el punto de cada mensaje y el contador de la bandeja). No es color de énfasis ni de botón.

**The Two-Tone Headline Rule.** Un titular largo se divide en tinta y salvia; la salvia nunca se usa en texto pequeño.

## Typography

**Display Font:** Geist (con system-ui, sans-serif), expuesta como `--font-sans`
**Body Font:** Geist
**Accent Font:** Bodoni Moda itálica (con Georgia, serif), expuesta como `--font-serif`

**Character:** Una grotesca neutra de tracking ajustado lleva todo; la Bodoni itálica entra como una palabra subrayada a mano, nunca como bloque.

### Hierarchy
- **Display** (400, clamp(2.3rem, 5.6vw, 4.6rem), 1.02, -0.04em): titulares de sección; el hero baja a clamp(2.2rem, 4.7vw, 4.25rem) y el cierre sube a clamp(2.4rem, 6.4vw, 5.4rem).
- **Headline** (300, clamp(2rem, 4.2vw, 3.4rem), 1.06, -0.035em): titulares secundarios en peso ligero.
- **Title** (500, clamp(1.3rem, 2.2vw, 1.75rem), 1.25, -0.025em): líneas fuertes dentro del cuerpo; las citas largas usan peso 300 con tamaños similares.
- **Body** (400, 1.0625rem, 1.6): párrafos en tinta secundaria, máximo 68ch; el lead usa clamp(1.1rem, 1.6vw, 1.3rem) a 62ch.
- **Label** (500, 0.78 a 0.95rem, 0.01em): metadatos de la bandeja, notas de microtexto, pies; sin mayúsculas forzadas.
- **Accent** (Bodoni Moda itálica 400, 1.06em, -0.01em): palabras sueltas dentro de titulares y los números de pasos (2.6rem).

### Named Rules
**The One Word Rule.** La serif itálica marca una palabra o una frase corta dentro de un titular de Geist; nunca un párrafo.

## Layout

Un contenedor de hoja de 1240px máximo, centrado, con 76px de margen superior para la barra flotante. Dentro, cada sección tiene relleno horizontal fluido (`clamp(20px, 5vw, 64px)`) y vertical de `clamp(72px, 10vw, 136px)`, y su contenido se limita a 1040px. Las secciones se separan con una línea de 1px; algunas alternan al tinte `#f7f7f5` en lugar de usar tarjetas.

Rejillas: oferta 1fr/1fr, caso 1fr/1.1fr, acerca 0.8fr/1.2fr, método de 4 columnas con divisores de línea, encaje y honestidad de 2 columnas. A 960px las rejillas de dos paneles pasan a una columna y el método a 2; a 640px todo es una columna, la hoja se acerca al borde (8px) y los botones grandes ocupan todo el ancho. El hero está centrado; los títulos y la bandeja no se solapan.

## Elevation & Depth

Híbrido: la hoja y las secciones son planas y se separan con líneas de 1px; solo los objetos tienen profundidad, y es suave y realista. Una luz interior de 1px (`inset 0 0 0 1px rgba(255,255,255,0.08)`) acompaña a los objetos oscuros.

### Shadow Vocabulary
- **Sheet** (`box-shadow: 0 1px 0 rgba(0,0,0,0.03)`): apenas un borde de la hoja.
- **Floating bar** (`0 0 0 1px var(--line), 0 6px 24px -10px rgba(0,0,0,0.12)`): barra superior.
- **Dark object** (`0 30px 60px -22px rgba(0,0,0,0.5), 0 12px 22px -12px rgba(0,0,0,0.35)` más luz interior): bandeja; el reproductor usa 40px/70px/-28px.
- **Ticket** (`0 0 0 1px var(--line), 0 40px 60px -32px rgba(0,0,0,0.28), 0 12px 22px -14px rgba(0,0,0,0.16)`): ficha de oferta.
- **Button** (`0 10px 22px -12px rgba(0,0,0,0.55)`; en hover, verde `0 16px 28px -14px rgba(18,140,74,0.6)`): botón oscuro.

### Named Rules
**The Object Alone Rule.** Solo los objetos (bandeja, reproductor, ficha, píldoras, botón) llevan sombra difusa y desplazada hacia abajo. Las secciones y filas se definen con líneas.

## Shapes

Esquinas generosas y consistentes: hoja 36px (26px en móvil), objetos 28px (22px en móvil), paneles 18 a 20px, filas internas 20px, botones y barra superior en píldora completa (999px), puntos e iconos circulares. Los bordes son líneas de 1px; la ficha usa una perforación discontinua de 2px con dos muescas circulares del color de la sección. Los espacios por rellenar usan un borde discontinuo de 1.5px sobre tinte.

## Components

### Buttons
- **Shape:** píldora completa (999px).
- **Primary (`btn-dark`):** fondo tinta carbón, texto blanco, icono de WhatsApp, peso 500, tracking -0.01em. Tamaños: sm 11px 20px, md 15px 26px, lg 18px 32px.
- **Hover / Focus:** sube 2px y cambia a verde WhatsApp en 0.3s con la curva `cubic-bezier(0.16, 1, 0.3, 1)`; el estado activo vuelve a 0. El foco visible es un contorno de 2px en tinta con 3px de separación. En móvil lg y los botones de video y cierre ocupan todo el ancho.

### Cards / Containers
- **Ficha de oferta:** blanca, radio 28px, línea de perforación discontinua que separa lista (arriba) y precio con botón (abajo); precio en Geist 400 de hasta 3.4rem.
- **Hoja de costo:** blanca, radio 20px, filas con guías punteadas y relleno de 28px.
- **Aviso:** tinte, radio 18px, anillo de 1px, hasta 68ch.

### Navigation
Barra flotante en píldora blanca, 12px bajo el borde superior, logotipo a la izquierda (600, -0.03em) y botón sm a la derecha. En móvil se acorta (el texto `hide-sm` desaparece).

### Inputs / Fields
No hay campos de formulario; la acción es un enlace a WhatsApp.

### Bandeja (objeto del hero)
Objeto oscuro de 480px máximo, radio 28px, con tres filas de mensajes en Noche 2. Cada punto nace coral y se enfría a gris (#5d5d5f) en 2.4s; la edad pasa de "ahora" a "hace N días". Con movimiento reducido se muestra el estado final.

### Regla de días
Marcas de 1px cada día de los 15, más alta y oscura cada cinco, la final de 2px; una pastilla oscura con el número del día corre sobre ella. El pie se reparte en dos extremos.

### Preguntas frecuentes
Líneas de 1px, resumen en 1.1 a 1.35rem peso 400, con un botón circular de 32px y un más que rota a menos al abrir y se vuelve tinta.

### Reproductor
Marco 16/9 oscuro con radio 28px y un botón circular blanco de 84px que crece 8% en hover.

## Do's and Don'ts

### Do:
- **Do** mantener una sola hoja blanca sobre #f4f4f2 y separar secciones con líneas de 1px (#e7e7e4) o con el tinte #f7f7f5.
- **Do** usar Geist con tracking negativo para display y Bodoni Moda itálica solo en palabras sueltas de acento.
- **Do** dividir los titulares largos en tinta y salvia (#6f8584), y reservar la salvia para texto grande.
- **Do** dar volumen solo a objetos oscuros y a la ficha, con sombras suaves y desplazadas hacia abajo.
- **Do** usar el coral (#ff5b5b) únicamente para señales sin responder.
- **Do** usar botones píldora negros con el icono de WhatsApp, que cambian a verde #128c4a en hover.

### Don't:
- **Don't** usar degradados oscuros de página, cuentas regresivas ni pilas de bonos.
- **Don't** repetir rejillas de tarjetas iguales; prefiere filas separadas por líneas.
- **Don't** usar el coral como color de énfasis, de botón o de decoración.
- **Don't** usar la salvia en texto pequeño.
- **Don't** poner la serif itálica en párrafos completos.
