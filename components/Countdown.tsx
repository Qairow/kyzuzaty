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

const INITIAL_TIME_LEFT: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

export function Countdown() {
  // Start from a static value so server and first client render match exactly;
  // the real, time-dependent value is only computed after mount.
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(INITIAL_TIME_LEFT);
  const { t } = useLanguage();

  useEffect(() => {
    setTimeLeft(getTimeLeft());

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
          className="rounded-[1.75rem] border border-gold/30 bg-white/10 px-5 py-6 text-center shadow-soft backdrop-blur-sm"
        >
          <div className="font-display text-3xl text-gold sm:text-4xl">
            {String(item.value).padStart(2, "0")}
          </div>
          <div className="mt-2 text-xs uppercase tracking-[0.3em] text-muted">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}
