"use client";

import { useRef, useState } from "react";
import { SITE } from "@/lib/config";
import { PlayIcon } from "./Icons";

export function VslPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const hasVideo = SITE.vslSrc !== "";

  const start = () => {
    if (!hasVideo) return;
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <div className="player">
      {hasVideo && (
        <video
          ref={videoRef}
          className="player-video"
          src={SITE.vslSrc}
          poster={SITE.vslPoster || undefined}
          controls={playing}
          playsInline
          preload="metadata"
        />
      )}
      {!playing && (
        <button
          type="button"
          className="player-cover"
          onClick={start}
          disabled={!hasVideo}
          aria-label={hasVideo ? "Reproducir el video de 10 minutos" : "Video pendiente de cargar"}
        >
          <span className="player-play">
            <PlayIcon />
          </span>
          <span className="player-meta">
            {hasVideo ? "10 minutos" : "El video se carga aquí"}
          </span>
        </button>
      )}
    </div>
  );
}
