import { coreSkills, otherSkills, skillLevelWidth } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="border-t border-white/5">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">
          Skills
        </h2>

        <div className="mt-10 grid gap-x-12 gap-y-6 sm:grid-cols-2">
          {coreSkills.map((skill) => (
            <div key={skill.name}>
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-medium text-zinc-200">{skill.name}</span>
                <span className="text-xs text-zinc-500">{skill.level}</span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full rounded-full bg-indigo-500"
                  style={{ width: `${skillLevelWidth[skill.level]}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-white/5 pt-8">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-600">
            También he trabajado con
          </p>
          <p className="mt-3 text-sm text-zinc-500">{otherSkills.join(" · ")}</p>
        </div>
      </div>
    </section>
  );
}
