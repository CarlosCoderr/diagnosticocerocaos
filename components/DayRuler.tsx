"use client";

import { useEffect, useRef, useState } from "react";

const DAYS = 15;

// Regla de 15 días: la pauta se enciende en el día 15. El marcador recorre la
// regla una vez al entrar en pantalla. Sin JS o con movimiento reducido se ve
// el estado final.
export function DayRuler() {
  const ref = useRef<HTMLDivElement>(null);
  const [day, setDay] = useState(DAYS);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let started = false;
    setDay(1);

    const run = () => {
      const t0 = performance.now();
      const dur = 2400;
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 4);
        setDay(Math.max(1, Math.round(eased * DAYS)));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          run();
          io.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  const pct = ((day - 1) / (DAYS - 1)) * 100;

  return (
    <div className="ruler" ref={ref}>
      <div className="ruler-track" aria-hidden="true">
        {Array.from({ length: DAYS }, (_, i) => (
          <span key={i} className={`tick${i + 1 === DAYS ? " tick-end" : ""}`} />
        ))}
        <div className="ruler-pill" style={{ left: `${pct}%`, transform: `translateX(-${pct}%)` }}>
          <span className="ruler-pill-label">Día</span>
          <span className="ruler-pill-num">{day}</span>
        </div>
      </div>
      <p className="ruler-caption">
        <span>Diagnóstico, parte técnica y capacitación primero.</span>
        <strong>La pauta se enciende el día 15.</strong>
      </p>
    </div>
  );
}
