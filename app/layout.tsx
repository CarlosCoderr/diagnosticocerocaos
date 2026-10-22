import type { Metadata, Viewport } from "next";
import { Geist, Bodoni_Moda } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const bodoni = Bodoni_Moda({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Diagnóstico Cero Caos · Carlos Coder",
  description:
    "Una sesión de 60 a 90 minutos para ver por escrito dónde se te cae la gente, qué estás vendiendo realmente y qué armar primero, antes de gastar un sol más en anuncios.",
};

export const viewport: Viewport = {
  themeColor: "#f4f4f2",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-PE" className={`${geist.variable} ${bodoni.variable}`}>
      <body>{children}</body>
    </html>
  );
}
