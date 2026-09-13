import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="border-t border-white/5">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">
          Experiencia
        </h2>

        <div className="mt-10 flex flex-col divide-y divide-white/5">
          {experience.map((job) => (
            <div
              key={job.company}
              className="grid gap-3 py-8 first:pt-0 sm:grid-cols-[1fr_2fr] sm:gap-8"
            >
              <div>
                <h3 className="text-base font-medium text-zinc-100">{job.role}</h3>
                <p className="text-sm text-zinc-500">{job.company}</p>
                <p className="mt-1 text-xs text-zinc-600">{job.period}</p>
              </div>

              <div>
                <p className="max-w-xl text-sm leading-relaxed text-zinc-400">
                  {job.description}
                </p>
                <p className="mt-3 text-xs text-zinc-600">{job.stack.join(" · ")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
