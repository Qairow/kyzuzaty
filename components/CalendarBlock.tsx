"use client";

import { useMemo } from "react";

import { useLanguage } from "@/contexts/LanguageContext";
import { eventDetails } from "@/data/siteContent";

type CalendarCell = number | null;

function buildMonthMatrix(year: number, month: number): CalendarCell[][] {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstWeekday = (new Date(year, month, 1).getDay() + 6) % 7; // Monday-first

  const cells: CalendarCell[] = Array(firstWeekday).fill(null);
  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push(day);
  }
  while (cells.length % 7 !== 0) {
    cells.push(null);
  }

  const weeks: CalendarCell[][] = [];
  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7));
  }
  return weeks;
}

export function CalendarBlock() {
  const { t } = useLanguage();

  const eventDate = useMemo(() => new Date(eventDetails.dateIso), []);
  const year = eventDate.getFullYear();
  const month = eventDate.getMonth();
  const day = eventDate.getDate();
  const weekdayIndex = (eventDate.getDay() + 6) % 7; // Monday-first

  const weeks = useMemo(() => buildMonthMatrix(year, month), [year, month]);

  return (
    <div className="overflow-hidden rounded-[2rem] bg-cream px-6 py-10 shadow-soft sm:px-10">
      <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-stretch sm:justify-between sm:text-left">
        <div>
          <p className="font-script text-3xl text-gold sm:text-4xl">{t.calendarMonths[month]}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.3em] text-creamForeground/60">
            {t.calendarWeekdaysLong[weekdayIndex]}
          </p>
        </div>

        <p className="font-display text-6xl text-creamForeground sm:text-7xl">{day}</p>

        <div className="sm:text-right">
          <p className="text-lg text-creamForeground/85">{eventDetails.time}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.3em] text-creamForeground/50">{year}</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-7 gap-1 text-center text-[11px] uppercase tracking-[0.15em] text-creamForeground/45">
        {t.calendarWeekdaysShort.map((weekday) => (
          <div key={weekday}>{weekday}</div>
        ))}
      </div>

      <div className="mt-2 grid grid-cols-7 gap-y-2">
        {weeks.flat().map((cell, index) => (
          <div key={index} className="flex items-center justify-center py-0.5">
            {cell && (
              <span
                className={
                  cell === day
                    ? "flex h-8 w-8 items-center justify-center rounded-full border-2 border-gold bg-gold/15 text-sm font-semibold text-gold"
                    : "flex h-8 w-8 items-center justify-center text-sm text-creamForeground/70"
                }
              >
                {cell}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
