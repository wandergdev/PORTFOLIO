export type Lang = "es" | "en";

export const profile = {
  name: "Wander Genao",
  title: { es: "Backend Developer", en: "Backend Developer" },
  subtitle: "Node.js · C# / .NET · TypeScript",
  location: "Bonao, República Dominicana",
  email: "wanderg.dev@gmail.com",
  github: "https://github.com/wandergdev",
  linkedin: "https://www.linkedin.com/in/wanderg-dev/",
  cvUrlEs: "/Wander-Genao-CV-ES.pdf",
  cvUrlEn: "/Wander-Genao-CV-EN.pdf",
  /** Set to a real path (e.g. "/avatar.jpg" in /public) once the photo is added. */
  avatarUrl: null as string | null,
  bio: {
    es: [
      "Soy Ingeniero en Sistemas de Computación, enfocado en construir backends robustos y confiables, con suficiente ojo de frontend para entregar productos completos y con buen diseño.",
      "He trabajado tanto en entornos corporativos regulados —desarrollando soluciones internas para un banco con C#, .NET, Entity Framework y Blazor— como en proyectos web más abiertos con WordPress. Esa mezcla me dio criterio para escribir código que resuelve problemas reales bajo reglas de negocio exigentes.",
      "Hoy sigo ampliando mi stack hacia Node.js, TypeScript, Next.js y Prisma, aplicando la misma disciplina backend a proyectos propios: autenticación segura, APIs con lógica de negocio real y buenas prácticas de datos.",
    ],
    en: [
      "I'm a Computer Systems Engineer focused on building robust, reliable backends, with enough frontend sense to ship complete, well-designed products.",
      "I've worked both in regulated corporate environments —building internal solutions for a bank with C#, .NET, Entity Framework and Blazor— and on more open web projects with WordPress. That mix gave me the judgment to write code that solves real problems under demanding business rules.",
      "Today I keep expanding my stack toward Node.js, TypeScript, Next.js and Prisma, applying that same backend discipline to my own projects: secure authentication, APIs with real business logic, and solid data practices.",
    ],
  },
};

export const stats = [
  { value: "3+", label: { es: "Años de experiencia", en: "Years of experience" } },
  { value: "3", label: { es: "Proyectos reales construidos", en: "Real projects built" } },
  {
    value: "2",
    label: { es: "Stacks principales (Node/TS y C#/.NET)", en: "Core stacks (Node/TS & C#/.NET)" },
  },
  { value: "100%", label: { es: "Backend-first", en: "Backend-first" } },
];

export const techRow = ["Node.js", "C#", ".NET", "TypeScript", "Next.js", "PostgreSQL"];

export type SkillLevelKey = "advanced" | "intermediate" | "basic";

export const skillLevelWidth: Record<SkillLevelKey, number> = {
  advanced: 90,
  intermediate: 65,
  basic: 40,
};

export const skillLevelLabel: Record<SkillLevelKey, { es: string; en: string }> = {
  advanced: { es: "Avanzado", en: "Advanced" },
  intermediate: { es: "Intermedio", en: "Intermediate" },
  basic: { es: "Básico", en: "Basic" },
};

export const coreSkills: { name: string; level: SkillLevelKey }[] = [
  { name: "Node.js", level: "advanced" },
  { name: "C# / .NET", level: "advanced" },
  { name: "TypeScript", level: "advanced" },
  { name: "Entity Framework", level: "advanced" },
  { name: "SQL", level: "advanced" },
  { name: "Prisma", level: "advanced" },
  { name: "Next.js / React", level: "intermediate" },
  { name: "Tailwind CSS", level: "intermediate" },
];

export const otherSkills = {
  es: ["WordPress", "Git", "Blazor / Razor", "Sistemas bancarios internos"],
  en: ["WordPress", "Git", "Blazor / Razor", "Internal banking systems"],
};

export const experience = [
  {
    company: "Abonap",
    role: { es: "Desarrollador de Software", en: "Software Developer" },
    period: { es: "Experiencia reciente", en: "Recent experience" },
    stack: ["C#", ".NET", "Entity Framework", "Blazor", "Razor"],
    description: {
      es: "Desarrollo de soluciones internas para una entidad bancaria, resolviendo requerimientos de los equipos operativos: pantallas para consulta de clientes, generación e impresión de cartas, y procesos de pago a préstamos. Trabajo bajo estándares de seguridad y confidencialidad propios del sector financiero, por lo que el código y los datos de estos desarrollos son privados.",
      en: "Building internal solutions for a bank, resolving requirements from operations teams: screens for customer lookup, letter generation and printing, and loan payment processes. Work follows the security and confidentiality standards of the financial sector, so the code and data behind these builds are private.",
    },
  },
  {
    company: "AdzoneMarketing",
    role: { es: "Desarrollador y Soporte Técnico", en: "Developer & Technical Support" },
    period: { es: "Experiencia previa", en: "Previous experience" },
    stack: ["WordPress", "PHP", "HTML/CSS", "Soporte técnico"],
    description: {
      es: "Creación y mantenimiento de sitios web para clientes utilizando WordPress, junto con soporte técnico general.",
      en: "Building and maintaining client websites with WordPress, alongside general technical support.",
    },
  },
];

export type ProjectStatusKey = "completed" | "in-progress" | "planned";

export const projectStatusLabel: Record<ProjectStatusKey, { es: string; en: string }> = {
  completed: { es: "Completado", en: "Completed" },
  "in-progress": { es: "En desarrollo", en: "In progress" },
  planned: { es: "Planeado", en: "Planned" },
};

export type Project = {
  slug: string;
  title: string;
  description: { es: string; en: string };
  stack: string[];
  status: ProjectStatusKey;
  repo?: string;
  /** Live production site — distinct from a throwaway "demo". */
  url?: string;
};

export const projects: Project[] = [
  {
    slug: "auth-system",
    title: "Auth System",
    description: {
      es: "Sistema de autenticación y autorización reutilizable: JWT con refresh tokens rotativos, roles y 2FA (TOTP). Pensado como base sólida de seguridad para aplicaciones reales (SaaS, e-commerce, sistemas internos).",
      en: "Reusable authentication and authorization system: JWT with rotating refresh tokens, roles, and TOTP-based 2FA. Built as a solid security foundation for real applications (SaaS, e-commerce, internal systems).",
    },
    stack: ["C#", ".NET", "EF Core", "JWT", "SQLite"],
    status: "completed",
    repo: "https://github.com/wandergdev/auth-system-dotnet",
  },
  {
    slug: "finanzas-api",
    title: "API de Finanzas Personales",
    description: {
      es: "API con lógica de negocio real: transacciones y categorías con aislamiento por usuario, presupuestos mensuales con alertas de sobregiro, y reportes de balance, gasto por categoría y resumen mensual.",
      en: "API with real business logic: per-user transactions and categories, monthly budgets with overspend alerts, and balance / by-category / monthly report endpoints.",
    },
    stack: ["Node.js", "TypeScript", "Prisma", "PostgreSQL"],
    status: "completed",
    repo: "https://github.com/wandergdev/finance-api",
  },
  {
    slug: "tucita",
    title: "TuCita",
    description: {
      es: "Web app para agendar citas con profesionales: gestión de disponibilidad, reservas y usuarios sobre un backend en C#/.NET con frontend en TypeScript. Código en repositorio privado.",
      en: "Web app for booking appointments with professionals: availability, bookings, and user management on a C#/.NET backend with a TypeScript frontend. Code in a private repository.",
    },
    stack: ["C#", ".NET", "TypeScript", "Docker"],
    status: "in-progress",
    url: "https://tucita.site/",
  },
];
