"use client";

import { useRef, useState } from "react";

import { useLanguage } from "@/contexts/LanguageContext";

export function MusicToggle({ variant = "icon" }: { variant?: "icon" | "badge" }) {
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

  const audioElement = (
    <audio
      ref={audioRef}
      src="/music/wedding.mp3"
      preload="none"
      onEnded={() => setIsPlaying(false)}
    />
  );

  if (variant === "badge") {
    return (
      <div>
        {audioElement}
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={isPlaying ? t.musicPause : t.musicPlay}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/70 bg-coffeeDark/40 text-cream shadow-soft backdrop-blur-sm transition hover:bg-coffeeDark/60"
        >
          <span className="text-[10px] uppercase tracking-[0.15em]">
            {isPlaying ? t.musicBadgeStop : t.musicBadgePlay}
          </span>
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      {audioElement}
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
