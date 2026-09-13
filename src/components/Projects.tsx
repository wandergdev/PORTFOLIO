import { projects } from "@/data/portfolio";
import { ArrowUpRightIcon, GitHubIcon } from "./icons";

const statusStyles: Record<string, string> = {
  Completado: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  "En desarrollo": "text-amber-400 border-amber-400/30 bg-amber-400/10",
  Planeado: "text-neutral-400 border-neutral-500/30 bg-neutral-500/10",
};

export function Projects() {
  return (
    <section id="projects" className="border-t border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-mono text-sm text-emerald-400">04. Proyectos</h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="flex flex-col gap-4 rounded-lg border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-medium text-neutral-100">
                  {project.title}
                </h3>
                <span
                  className={`shrink-0 rounded-full border px-2.5 py-0.5 font-mono text-xs ${statusStyles[project.status]}`}
                >
                  {project.status}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-neutral-400">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-xs text-neutral-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-4 pt-2 text-sm">
                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-neutral-300 transition-colors hover:text-emerald-400"
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
                    className="inline-flex items-center gap-1.5 text-neutral-300 transition-colors hover:text-emerald-400"
                  >
                    Demo
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </a>
                ) : null}
                {!project.repo && !project.demo ? (
                  <span className="font-mono text-xs text-neutral-600">
                    Repo próximamente
                  </span>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
