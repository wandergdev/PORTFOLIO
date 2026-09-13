import { projects } from "@/data/portfolio";
import { ArrowUpRightIcon, GitHubIcon } from "./icons";

const statusDot: Record<string, string> = {
  Completado: "bg-emerald-500",
  "En desarrollo": "bg-amber-500",
  Planeado: "bg-zinc-600",
};

export function Projects() {
  return (
    <section id="projects" className="border-t border-white/5">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">
          Proyectos
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="flex flex-col gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-7 transition-colors hover:border-white/10"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-medium text-zinc-100">{project.title}</h3>
                <span className="flex shrink-0 items-center gap-1.5 pt-1 text-xs text-zinc-500">
                  <span className={`h-1.5 w-1.5 rounded-full ${statusDot[project.status]}`} />
                  {project.status}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-zinc-400">{project.description}</p>

              <p className="text-xs text-zinc-600">{project.stack.join(" · ")}</p>

              <div className="mt-auto flex gap-5 pt-3 text-sm">
                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-zinc-300 transition-colors hover:text-indigo-400"
                  >
                    <GitHubIcon className="h-4 w-4" />
                    Código
                  </a>
                ) : null}
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-zinc-300 transition-colors hover:text-indigo-400"
                  >
                    Demo
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </a>
                ) : null}
                {!project.repo && !project.demo ? (
                  <span className="text-xs text-zinc-600">Repo próximamente</span>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
