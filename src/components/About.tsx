import { profile } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="border-t border-white/5">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">
          Sobre mí
        </h2>
        <div className="mt-8 flex flex-col gap-5">
          {profile.bio.map((paragraph) => (
            <p
              key={paragraph.slice(0, 20)}
              className="max-w-2xl text-base leading-relaxed text-zinc-400"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
