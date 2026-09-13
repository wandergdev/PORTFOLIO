import Link from "next/link";
import { profile } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

const links = [
  { href: "#about", label: "Sobre mí" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experiencia" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link
          href="#top"
          className="font-[family-name:var(--font-heading)] text-base font-medium tracking-tight text-zinc-100"
        >
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

        <div className="flex items-center gap-5 text-zinc-500">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-zinc-100"
          >
            <GitHubIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-zinc-100"
          >
            <LinkedInIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="transition-colors hover:text-zinc-100"
          >
            <MailIcon className="h-[18px] w-[18px]" />
          </a>
        </div>
      </div>
    </header>
  );
}
