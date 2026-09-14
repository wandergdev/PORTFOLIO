"use client";

import { experience } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageProvider";
import { techColor } from "@/lib/tech-colors";

export function Experience() {
  const { lang, t } = useLanguage();

  return (
    <section id="experience" className="border-t border-white/5">
      <div className="mx-auto max-w-5xl px-6 py-10 sm:py-14">
        <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">
          {t.sectionExperience}
        </h2>

        <div className="mt-6 flex flex-col divide-y divide-white/5">
          {experience.map((job) => (
            <div
              key={job.company}
              className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[1fr_2fr] sm:gap-8"
            >
              <div>
                <h3 className="text-base font-medium text-zinc-100">{job.role[lang]}</h3>
                <p className="text-sm text-zinc-500">{job.company}</p>
                <p className="mt-1 text-xs text-zinc-600">{job.period[lang]}</p>
              </div>

              <div>
                <p className="max-w-xl text-sm leading-relaxed text-zinc-400">
                  {job.description[lang]}
                </p>
                <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5">
                  {job.stack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 text-xs text-zinc-500"
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: techColor(tech) }}
                      />
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
