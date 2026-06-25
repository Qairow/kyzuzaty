"use client";

import { useEffect, useMemo, useState } from "react";

import { eventDetails } from "@/data/siteContent";
import { useLanguage } from "@/contexts/LanguageContext";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(): TimeLeft {
  const now = new Date().getTime();
  const target = new Date(eventDetails.dateIso).getTime();
  const difference = Math.max(target - now, 0);

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const items = useMemo(
    () => [
      { value: timeLeft.days, label: t.days },
      { value: timeLeft.hours, label: t.hours },
      { value: timeLeft.minutes, label: t.minutes },
      { value: timeLeft.seconds, label: t.seconds },
    ],
    [t, timeLeft]
  );

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-[1.75rem] border border-gold/20 bg-white/80 px-5 py-6 text-center shadow-soft"
        >
          <div className="font-display text-3xl text-gold sm:text-4xl">
            {String(item.value).padStart(2, "0")}
          </div>
          <div className="mt-2 text-xs uppercase tracking-[0.3em] text-foreground/60">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}
