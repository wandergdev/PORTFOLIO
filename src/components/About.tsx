import { profile } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="border-t border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-mono text-sm text-emerald-400">01. Sobre mí</h2>
        <div className="mt-6 flex flex-col gap-5">
          {profile.bio.map((paragraph) => (
            <p
              key={paragraph.slice(0, 20)}
              className="max-w-3xl text-base leading-relaxed text-neutral-400"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
