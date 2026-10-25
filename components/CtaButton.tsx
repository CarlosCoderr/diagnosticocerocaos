"use client";

import { CTA_TEXT, OPEN_FORM_EVENT } from "@/lib/config";

type Props = {
  children?: React.ReactNode;
  size?: "md" | "lg";
  block?: boolean;
};

// Todos los CTA disparan el mismo evento; <QualifierModal /> lo escucha.
export function CtaButton({ children = CTA_TEXT, size = "lg", block = false }: Props) {
  return (
    <button
      type="button"
      className={`btn btn-${size}${block ? " btn-block" : ""}`}
      onClick={() => window.dispatchEvent(new Event(OPEN_FORM_EVENT))}
    >
      {children}
    </button>
  );
}
