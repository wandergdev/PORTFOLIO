"use client";

import { profile, stats } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageProvider";

const statColors = ["text-indigo-400", "text-fuchsia-400", "text-cyan-400", "text-emerald-400"];

export function About() {
  const { lang, t } = useLanguage();
  const bio = profile.bio[lang];

  return (
    <section id="about" className="border-t border-white/5">
      <div className="mx-auto max-w-5xl px-6 py-10 sm:py-14">
        <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">
          {t.sectionAbout}
        </h2>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-4">
            {bio.map((paragraph) => (
              <p
                key={paragraph.slice(0, 20)}
                className="max-w-xl text-base leading-relaxed text-zinc-400"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label.en}
                className="rounded-xl border border-white/5 bg-white/[0.02] p-5"
              >
                <p
                  className={`font-[family-name:var(--font-heading)] text-3xl font-semibold ${statColors[index % statColors.length]}`}
                >
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-zinc-500">{stat.label[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
