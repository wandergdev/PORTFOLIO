import { skills } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="border-t border-white/5">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">
          Skills
        </h2>

        <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-medium text-zinc-300">{group.category}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                {group.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
