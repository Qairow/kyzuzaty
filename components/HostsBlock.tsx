"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function HostsBlock() {
  const { t } = useLanguage();

  return (
    <div className="rounded-[2rem] bg-cream px-6 py-12 text-center shadow-soft sm:px-10">
      <p className="font-script text-4xl text-gold sm:text-5xl">{t.hostsTitle}</p>

      <div className="mx-auto mt-8 flex max-w-md flex-col gap-4">
        {t.hostsNames.map((name, index) => (
          <p key={`${name}-${index}`} className="font-display text-2xl text-creamForeground">
            {name}
          </p>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-creamForeground/75">
        {t.hostsClosing}
      </p>
    </div>
  );
}
