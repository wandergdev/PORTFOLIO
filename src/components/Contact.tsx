import { profile } from "@/data/portfolio";
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export function Contact() {
  return (
    <section id="contact" className="border-t border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-mono text-sm text-emerald-400">05. Contacto</h2>

        <h3 className="mt-6 max-w-xl text-2xl font-semibold text-neutral-50 sm:text-3xl">
          ¿Tienes un proyecto backend en mente? Hablemos.
        </h3>

        <p className="mt-4 max-w-xl text-neutral-400">
          Estoy abierto a oportunidades y colaboraciones. La forma más directa
          de contactarme es por correo.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-emerald-400"
          >
            <MailIcon className="h-4 w-4" />
            {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-2.5 text-sm font-medium text-neutral-200 transition-colors hover:bg-white/5"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-2.5 text-sm font-medium text-neutral-200 transition-colors hover:bg-white/5"
          >
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
