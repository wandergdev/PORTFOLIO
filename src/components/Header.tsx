"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageProvider";
import { BracketsIcon } from "./icons";
import { LanguageToggle } from "./LanguageToggle";

export function Header() {
  const { t } = useLanguage();

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="#top"
          className="flex items-center gap-2 font-[family-name:var(--font-heading)] text-base font-medium tracking-tight text-zinc-100"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-400">
            <BracketsIcon className="h-4 w-4" />
          </span>
          Wander Genao
        </Link>

        <nav className="hidden gap-8 text-sm text-zinc-400 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-zinc-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageToggle />
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-400"
          >
            {t.contactCta}
          </a>
        </div>
      </div>
    </header>
  );
}
