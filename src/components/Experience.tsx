import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="border-t border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-mono text-sm text-emerald-400">03. Experiencia</h2>

        <div className="mt-8 flex flex-col gap-10">
          {experience.map((job) => (
            <div
              key={job.company}
              className="grid gap-2 border-l-2 border-white/10 pl-6 sm:grid-cols-[1fr_2fr] sm:gap-8"
            >
              <div>
                <h3 className="text-base font-medium text-neutral-100">
                  {job.role}
                </h3>
                <p className="text-sm text-neutral-400">{job.company}</p>
                <p className="mt-1 font-mono text-xs text-neutral-600">
                  {job.period}
                </p>
              </div>

              <div>
                <p className="text-sm leading-relaxed text-neutral-400">
                  {job.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-xs text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
