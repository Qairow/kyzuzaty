"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex items-center rounded-full border border-gold/40 bg-white/80 p-1 text-xs font-medium uppercase tracking-[0.35em] text-foreground shadow-soft backdrop-blur sm:text-sm">
      <button
        type="button"
        onClick={() => setLanguage("kz")}
        className={`rounded-full px-4 py-2 transition ${
          language === "kz"
            ? "bg-gold text-white"
            : "text-foreground/65 hover:text-foreground"
        }`}
        aria-pressed={language === "kz"}
      >
        Қаз
      </button>
      <button
        type="button"
        onClick={() => setLanguage("ru")}
        className={`rounded-full px-4 py-2 transition ${
          language === "ru"
            ? "bg-gold text-white"
            : "text-foreground/65 hover:text-foreground"
        }`}
        aria-pressed={language === "ru"}
      >
        Рус
      </button>
    </div>
  );
}
