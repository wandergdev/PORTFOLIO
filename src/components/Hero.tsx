import { profile } from "@/data/portfolio";
import { ArrowUpRightIcon } from "./icons";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-5xl flex-col gap-6 px-6 pt-20 pb-24 sm:pt-28 sm:pb-32"
    >
      <p className="font-mono text-sm text-emerald-400">
        Hola, soy {profile.name.split(" ")[0]} 👋
      </p>

      <h1 className="text-4xl font-semibold tracking-tight text-neutral-50 sm:text-5xl">
        {profile.title}
        <span className="block text-neutral-400">{profile.subtitle}</span>
      </h1>

      <p className="max-w-2xl text-lg leading-relaxed text-neutral-400">
        {profile.bio[0]}
      </p>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-emerald-400"
        >
          Ver proyectos
          <ArrowUpRightIcon className="h-4 w-4" />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-2.5 text-sm font-medium text-neutral-200 transition-colors hover:bg-white/5"
        >
          Contactarme
        </a>
      </div>

      <p className="pt-6 font-mono text-xs text-neutral-500">
        {profile.location}
      </p>
    </section>
  );
}
