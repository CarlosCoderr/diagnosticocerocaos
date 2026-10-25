"use client";

import { useState } from "react";
import { PlayIcon } from "./Icons";

export function ShortPlayer({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="short">
      {playing ? (
        <iframe
          className="short-frame"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className="short-cover"
          onClick={() => setPlaying(true)}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://img.youtube.com/vi/${id}/hq720.jpg)`,
          }}
          aria-label={`Reproducir: ${title}`}
        >
          <span className="player-play">
            <PlayIcon />
          </span>
        </button>
      )}
    </div>
  );
}
