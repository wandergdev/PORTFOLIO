"use client";

import { profile } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageProvider";
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="border-t border-white/5">
      <div className="mx-auto max-w-5xl px-6 py-10 sm:py-16">
        <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">
          {t.sectionContact}
        </h2>

        <h3 className="mt-6 max-w-lg text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl">
          {t.contactHeadline}
        </h3>

        <p className="mt-4 max-w-md text-zinc-400">{t.contactSub}</p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-400"
          >
            <MailIcon className="h-4 w-4" />
            {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:text-zinc-100"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:text-zinc-100"
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
