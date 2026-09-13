import { profile, stats } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="border-t border-white/5">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">
          Sobre mí
        </h2>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-5">
            {profile.bio.map((paragraph) => (
              <p
                key={paragraph.slice(0, 20)}
                className="max-w-xl text-base leading-relaxed text-zinc-400"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/5 bg-white/[0.02] p-5"
              >
                <p className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-indigo-400">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
