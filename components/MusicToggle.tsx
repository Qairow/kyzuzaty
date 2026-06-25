"use client";

import { useRef, useState } from "react";

import { useLanguage } from "@/contexts/LanguageContext";

export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { t } = useLanguage();

  const togglePlayback = async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Audio playback failed", error);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <audio
        ref={audioRef}
        src="/music/wedding.mp3"
        preload="none"
        onEnded={() => setIsPlaying(false)}
      />
      <button
        type="button"
        onClick={togglePlayback}
        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-white text-gold shadow-soft transition hover:-translate-y-0.5 hover:bg-blush/20"
        aria-label={isPlaying ? t.musicPause : t.musicPlay}
      >
        {isPlaying ? (
          <span className="flex gap-1">
            <span className="h-4 w-1 rounded-full bg-gold" />
            <span className="h-4 w-1 rounded-full bg-gold" />
          </span>
        ) : (
          <span className="ml-0.5 h-0 w-0 border-y-[10px] border-l-[15px] border-y-transparent border-l-gold" />
        )}
      </button>
    </div>
  );
}
