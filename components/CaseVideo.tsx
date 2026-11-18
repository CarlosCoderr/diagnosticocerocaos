"use client";

import { useState } from "react";
import { SITE } from "@/lib/config";
import { PlayIcon } from "./Icons";

export function CaseVideo() {
  const [playing, setPlaying] = useState(false);
  const id = SITE.caseVideoYoutubeId;

  return (
    <div className="case-video">
      {playing ? (
        <iframe
          className="case-video-frame"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title="Video del caso real"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className="case-video-cover"
          onClick={() => setPlaying(true)}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://img.youtube.com/vi/${id}/hqdefault.jpg)`,
          }}
          aria-label="Reproducir el video del caso real"
        >
          <span className="player-play">
            <PlayIcon />
          </span>
          <span className="player-meta">Mira el caso real</span>
        </button>
      )}
    </div>
  );
}
