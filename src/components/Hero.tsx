import { profile } from "@/data/portfolio";
import { ArrowUpRightIcon } from "./icons";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-5xl flex-col gap-7 px-6 pt-24 pb-28 sm:pt-32 sm:pb-36"
    >
      <p className="text-sm text-indigo-400">
        Hola, soy {profile.name.split(" ")[0]}
      </p>

      <h1 className="max-w-3xl text-4xl font-medium leading-[1.1] tracking-tight text-zinc-50 sm:text-6xl">
        {profile.title}
        <span className="mt-2 block text-2xl font-normal text-zinc-500 sm:text-3xl">
          {profile.subtitle}
        </span>
      </h1>

      <p className="max-w-xl text-lg leading-relaxed text-zinc-400">
        {profile.bio[0]}
      </p>

      <div className="flex flex-wrap items-center gap-4 pt-4">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-400"
        >
          Ver proyectos
          <ArrowUpRightIcon className="h-4 w-4" />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:text-zinc-100"
        >
          Contactarme
        </a>
      </div>

      <p className="pt-8 text-sm text-zinc-600">{profile.location}</p>
    </section>
  );
}
