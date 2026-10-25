"use client";

import { useEffect, useRef, useState } from "react";
import { OPEN_FORM_EVENT } from "@/lib/config";
import { QualifierForm } from "./QualifierForm";
import { CrossIcon } from "./Icons";

export function QualifierModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const show = () => {
      setOpen(true);
      dialogRef.current?.showModal();
    };
    window.addEventListener(OPEN_FORM_EVENT, show);
    return () => window.removeEventListener(OPEN_FORM_EVENT, show);
  }, []);

  const close = () => dialogRef.current?.close();

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      aria-label="Formulario de calificación"
      onClose={() => setOpen(false)}
      onClick={(e) => {
        if (e.target === dialogRef.current) close();
      }}
    >
      <button type="button" className="modal-close" onClick={close} aria-label="Cerrar">
        <CrossIcon />
      </button>
      {/* Se monta solo con el modal abierto: cada apertura empieza el formulario desde cero. */}
      {open && <QualifierForm onClose={close} />}
    </dialog>
  );
}
