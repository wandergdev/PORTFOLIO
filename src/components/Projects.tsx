"use client";

import { projectStatusLabel, projects } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageProvider";
import { ArrowUpRightIcon, GitHubIcon } from "./icons";

const statusDot: Record<string, string> = {
  completed: "bg-emerald-500",
  "in-progress": "bg-amber-500",
  planned: "bg-zinc-600",
};

export function Projects() {
  const { lang, t } = useLanguage();

  return (
    <section id="projects" className="border-t border-white/5">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">
          {t.sectionProjects}
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="flex flex-col overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] transition-colors hover:border-white/10"
            >
              <div className="relative flex h-28 items-center justify-center bg-gradient-to-br from-indigo-500/15 via-zinc-900 to-zinc-950">
                <span className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-white/10">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base font-medium text-zinc-100">{project.title}</h3>
                  <span className="flex shrink-0 items-center gap-1.5 pt-1 text-xs text-zinc-500">
                    <span className={`h-1.5 w-1.5 rounded-full ${statusDot[project.status]}`} />
                    {projectStatusLabel[project.status][lang]}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-zinc-400">
                  {project.description[lang]}
                </p>

                <p className="text-xs text-zinc-600">{project.stack.join(" · ")}</p>

                <div className="mt-auto flex gap-5 pt-1 text-sm">
                  {project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-zinc-300 transition-colors hover:text-indigo-400"
                    >
                      <GitHubIcon className="h-4 w-4" />
                      {t.code}
                    </a>
                  ) : null}
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-zinc-300 transition-colors hover:text-indigo-400"
                    >
                      {t.visitSite}
                      <ArrowUpRightIcon className="h-3.5 w-3.5" />
                    </a>
                  ) : null}
                  {!project.repo && !project.url ? (
                    <span className="text-xs text-zinc-600">{t.privateRepo}</span>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
