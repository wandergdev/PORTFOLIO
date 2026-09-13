export const profile = {
  name: "Wander Genao",
  title: "Backend Developer",
  subtitle: "Node.js · C# / .NET · TypeScript",
  location: "Bonao, República Dominicana",
  email: "wanderg.dev@gmail.com",
  github: "https://github.com/wandergdev",
  linkedin: "https://www.linkedin.com/in/wanderg-dev/",
  cvUrlEs: "/Wander-Genao-CV-ES.pdf",
  cvUrlEn: "/Wander-Genao-CV-EN.pdf",
  /** Set to a real path (e.g. "/avatar.jpg" in /public) once the photo is added. */
  avatarUrl: null as string | null,
  bio: [
    "Soy Ingeniero en Sistemas de Computación, enfocado en construir backends robustos y confiables, con suficiente ojo de frontend para entregar productos completos y con buen diseño.",
    "He trabajado tanto en entornos corporativos regulados —desarrollando soluciones internas para un banco con C#, .NET, Entity Framework y Blazor— como en proyectos web más abiertos con WordPress. Esa mezcla me dio criterio para escribir código que resuelve problemas reales bajo reglas de negocio exigentes.",
    "Hoy sigo ampliando mi stack hacia Node.js, TypeScript, Next.js y Prisma, aplicando la misma disciplina backend a proyectos propios: autenticación segura, APIs con lógica de negocio real y buenas prácticas de datos.",
  ],
};

export const stats = [
  { value: "3+", label: "Años de experiencia" },
  { value: "3", label: "Proyectos reales construidos" },
  { value: "2", label: "Stacks principales (Node/TS y C#/.NET)" },
  { value: "100%", label: "Backend-first" },
];

export const techRow = [
  "Node.js",
  "C#",
  ".NET",
  "TypeScript",
  "Next.js",
  "PostgreSQL",
];

export type SkillLevel = "Avanzado" | "Intermedio" | "Básico";

export const skillLevelWidth: Record<SkillLevel, number> = {
  Avanzado: 90,
  Intermedio: 65,
  Básico: 40,
};

export const coreSkills: { name: string; level: SkillLevel }[] = [
  { name: "Node.js", level: "Avanzado" },
  { name: "C# / .NET", level: "Avanzado" },
  { name: "TypeScript", level: "Avanzado" },
  { name: "Entity Framework", level: "Avanzado" },
  { name: "SQL", level: "Avanzado" },
  { name: "Prisma", level: "Avanzado" },
  { name: "Next.js / React", level: "Intermedio" },
  { name: "Tailwind CSS", level: "Intermedio" },
];

export const otherSkills = [
  "WordPress",
  "Git",
  "Blazor / Razor",
  "Sistemas bancarios internos",
];

export const experience = [
  {
    company: "Abonap",
    role: "Desarrollador de Software",
    period: "Experiencia reciente",
    stack: ["C#", ".NET", "Entity Framework", "Blazor", "Razor"],
    description:
      "Desarrollo de soluciones internas para una entidad bancaria, resolviendo requerimientos de los equipos operativos: pantallas para consulta de clientes, generación e impresión de cartas, y procesos de pago a préstamos. Trabajo bajo estándares de seguridad y confidencialidad propios del sector financiero, por lo que el código y los datos de estos desarrollos son privados.",
  },
  {
    company: "AdzoneMarketing",
    role: "Desarrollador y Soporte Técnico",
    period: "Experiencia previa",
    stack: ["WordPress", "PHP", "HTML/CSS", "Soporte técnico"],
    description:
      "Creación y mantenimiento de sitios web para clientes utilizando WordPress, junto con soporte técnico general.",
  },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  status: "En desarrollo" | "Planeado" | "Completado";
  repo?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "auth-system",
    title: "Auth System",
    description:
      "Sistema de autenticación y autorización reutilizable: JWT con refresh tokens rotativos, roles y 2FA (TOTP). Pensado como base sólida de seguridad para aplicaciones reales (SaaS, e-commerce, sistemas internos).",
    stack: ["C#", ".NET", "EF Core", "JWT", "SQLite"],
    status: "Completado",
    repo: "https://github.com/wandergdev/auth-system-dotnet",
  },
  {
    slug: "finanzas-api",
    title: "API de Finanzas Personales",
    description:
      "API con lógica de negocio real: transacciones y categorías con aislamiento por usuario, presupuestos mensuales con alertas de sobregiro, y reportes de balance, gasto por categoría y resumen mensual.",
    stack: ["Node.js", "TypeScript", "Prisma", "PostgreSQL"],
    status: "Completado",
    repo: "https://github.com/wandergdev/finance-api",
  },
  {
    slug: "tucita",
    title: "TuCita",
    description:
      "Web app para agendar citas con profesionales: gestión de disponibilidad, reservas y usuarios sobre un backend en C#/.NET con frontend en TypeScript. Proyecto personal en repositorio privado.",
    stack: ["C#", ".NET", "TypeScript", "Docker"],
    status: "En desarrollo",
  },
];
