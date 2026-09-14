"use client";

import { coreSkills, otherSkills, skillLevelLabel, skillLevelWidth } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageProvider";
import { techColor } from "@/lib/tech-colors";

export function Skills() {
  const { lang, t } = useLanguage();

  return (
    <section id="skills" className="border-t border-white/5">
      <div className="mx-auto max-w-5xl px-6 py-10 sm:py-14">
        <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">
          {t.sectionSkills}
        </h2>

        <div className="mt-6 grid gap-x-12 gap-y-5 sm:grid-cols-2">
          {coreSkills.map((skill) => (
            <div key={skill.name}>
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-medium text-zinc-200">{skill.name}</span>
                <span className="text-xs text-zinc-500">
                  {skillLevelLabel[skill.level][lang]}
                </span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${skillLevelWidth[skill.level]}%`,
                    backgroundColor: techColor(skill.name),
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t border-white/5 pt-5">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-600">
            {t.alsoWorkedWith}
          </p>
          <p className="mt-3 text-sm text-zinc-500">{otherSkills[lang].join(" · ")}</p>
        </div>
      </div>
    </section>
  );
}
