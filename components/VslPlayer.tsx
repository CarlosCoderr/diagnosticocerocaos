"use client";

import { useState } from "react";
import { SITE } from "@/lib/config";
import { PlayIcon } from "./Icons";

export function VslPlayer() {
  const [playing, setPlaying] = useState(false);
  const id = SITE.vslYoutubeId;

  return (
    <div className="player">
      {playing ? (
        <iframe
          className="player-video"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title="Video Diagnóstico Cero Caos"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className="player-cover"
          onClick={() => setPlaying(true)}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(https://img.youtube.com/vi/${id}/maxresdefault.jpg)`,
          }}
          aria-label="Reproducir el video"
        >
          <span className="player-play">
            <PlayIcon />
          </span>
          <span className="player-meta">Dale play</span>
        </button>
      )}
    </div>
  );
}
