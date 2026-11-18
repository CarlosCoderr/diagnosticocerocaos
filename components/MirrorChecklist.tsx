"use client";

import { useState } from "react";

type Item = { text: string; quote?: string };

export function MirrorChecklist({ items }: { items: Item[] }) {
  const [checked, setChecked] = useState<boolean[]>(() => items.map(() => false));
  const toggle = (i: number) => setChecked((c) => c.map((v, idx) => (idx === i ? !v : v)));

  return (
    <ul className="mirror-grid">
      {items.map((m, i) => (
        <li key={m.text}>
          <button
            type="button"
            role="checkbox"
            aria-checked={checked[i]}
            className={`mirror-card${checked[i] ? " is-checked" : ""}`}
            onClick={() => toggle(i)}
          >
            <span className="mirror-box" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
            </span>
            <span className="mirror-body">
              <span className="mirror-text">{m.text}</span>
              {m.quote && <span className="mirror-quote">{m.quote}</span>}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}
