"use client";

import { useLanguage } from "@/context/LanguageProvider";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center rounded-full border border-zinc-800 p-0.5 text-xs font-medium">
      <button
        type="button"
        onClick={() => setLang("es")}
        aria-pressed={lang === "es"}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          lang === "es" ? "bg-zinc-800 text-zinc-100" : "text-zinc-500 hover:text-zinc-300"
        }`}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          lang === "en" ? "bg-zinc-800 text-zinc-100" : "text-zinc-500 hover:text-zinc-300"
        }`}
      >
        EN
      </button>
    </div>
  );
}
