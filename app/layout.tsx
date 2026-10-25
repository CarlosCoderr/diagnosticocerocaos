import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Diagnóstico Cero Caos · Carlos Coder",
  description:
    "Sesión 1 a 1 de 60 minutos y un manual escrito para ver dónde se fuga tu dinero y cómo cerrarlo en 15 días. $79 USD con garantía de reembolso.",
  icons: {
    icon: { url: "/carlos-coder.svg", type: "image/svg+xml" },
    shortcut: "/carlos-coder.svg",
    apple: "/carlos-coder.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-PE" className={jakarta.variable}>
      <body>{children}</body>
    </html>
  );
}
