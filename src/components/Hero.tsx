"use client";

import { profile, techRow } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageProvider";
import { withBasePath } from "@/lib/base-path";
import { ArrowUpRightIcon } from "./icons";

export function Hero() {
  const { lang, t } = useLanguage();
  const firstName = profile.name.split(" ")[0];
  const bio = profile.bio[lang];
  const primaryCv = lang === "es" ? profile.cvUrlEs : profile.cvUrlEn;
  const secondaryCv = lang === "es" ? profile.cvUrlEn : profile.cvUrlEs;

  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-14 pb-16 sm:pt-20 sm:pb-24">
      <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-indigo-400">
            {t.heroBadge}
          </span>

          <h1 className="text-4xl font-medium leading-[1.1] tracking-tight text-zinc-50 sm:text-5xl">
            {t.heroGreetingPrefix} <span className="text-indigo-400">{firstName}</span>
            <span className="mt-2 block text-zinc-50">{t.heroTagline}</span>
          </h1>

          <p className="max-w-md text-lg leading-relaxed text-zinc-400">{bio[0]}</p>

          <p className="text-sm text-zinc-600">{profile.location}</p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-400"
            >
              {t.viewProjects}
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
            <a
              href={withBasePath(primaryCv)}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:text-zinc-100"
            >
              {t.downloadCv}
            </a>
            <a
              href={withBasePath(secondaryCv)}
              download
              className="text-sm text-zinc-500 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-zinc-300"
            >
              {t.otherCvVersion}
            </a>
          </div>

          <div className="pt-8">
            <p className="text-xs font-medium uppercase tracking-widest text-zinc-600">
              {t.techLabel}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {techRow.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/5 bg-white/[0.02] px-3 py-1.5 text-xs text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-indigo-500/20 blur-3xl" />

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900 to-zinc-950">
            {profile.avatarUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={withBasePath(profile.avatarUrl)}
                alt={profile.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <span className="font-[family-name:var(--font-heading)] text-6xl font-semibold text-white/10">
                  WG
                </span>
              </div>
            )}
          </div>

          <div className="absolute -bottom-6 -left-6 hidden w-56 rounded-xl border border-white/10 bg-zinc-900/90 p-4 font-mono text-[11px] leading-relaxed text-zinc-400 shadow-xl backdrop-blur sm:block">
            <div className="mb-2 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-zinc-500">{t.available}</span>
            </div>
            <p>
              <span className="text-indigo-400">const</span> dev = {"{"}
            </p>
            <p className="pl-3">
              stack: <span className="text-emerald-400">&quot;Node · .NET&quot;</span>,
            </p>
            <p className="pl-3">
              focus: <span className="text-emerald-400">&quot;APIs & auth&quot;</span>,
            </p>
            <p>{"}"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
