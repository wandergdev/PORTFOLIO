import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/5">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Hecho con Next.js &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
