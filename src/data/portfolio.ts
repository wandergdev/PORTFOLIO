export type Lang = "es" | "en";

export const profile = {
  name: "Wander Genao",
  title: { es: "Desarrollador de Software", en: "Software Developer" },
  subtitle: "Node.js · C# / .NET · TypeScript",
  location: "Bonao, República Dominicana",
  email: "wanderg.dev@gmail.com",
  github: "https://github.com/wandergdev",
  linkedin: "https://www.linkedin.com/in/wanderg-dev/",
  cvUrlEs: "/Wander-Genao-CV-ES.pdf",
  cvUrlEn: "/Wander-Genao-CV-EN.pdf",
  avatarUrl: "/avatar.jpg" as string | null,
  bio: {
    es: [
      "Soy Ingeniero en Sistemas de Computación y desarrollador de software con especialización en backend, enfocado en construir soluciones robustas y confiables, con suficiente ojo de frontend para entregar productos completos y con buen diseño.",
      "He trabajado tanto en entornos corporativos regulados —desarrollando APIs y microservicios para una entidad financiera con .NET, C# y AWS— como en aplicaciones web dinámicas con Node.js y JavaScript. Esa mezcla me dio criterio para escribir código que resuelve problemas reales bajo reglas de negocio exigentes.",
      "Hoy sigo ampliando mi stack hacia Node.js, TypeScript, Next.js y Prisma, aplicando la misma disciplina backend a proyectos propios: autenticación segura, APIs con lógica de negocio real y buenas prácticas de datos.",
    ],
    en: [
      "I'm a Computer Systems Engineer and software developer specialized in backend, focused on building robust, reliable solutions, with enough frontend sense to ship complete, well-designed products.",
      "I've worked both in regulated corporate environments —building APIs and microservices for a financial company with .NET, C# and AWS— and on dynamic web applications with Node.js and JavaScript. That mix gave me the judgment to write code that solves real problems under demanding business rules.",
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
  { value: "100%", label: { es: "Enfoque en backend", en: "Backend-focused" } },
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
    role: { es: "Desarrollador Backend", en: "Backend Developer" },
    period: { es: "Julio 2024 – Actualidad", en: "July 2024 – Present" },
    stack: [".NET", "C#", "AWS Lambda", "AWS Cognito", "SQL", "NoSQL"],
    description: {
      es: [
        "Desarrollé APIs y microservicios escalables utilizando .NET, C# y AWS Lambda.",
        "Bases de datos SQL y NoSQL optimizadas, mejorando los tiempos de respuesta del sistema hasta en un 40%.",
        "Autenticación y autorización integradas con AWS Cognito e IAM para acceso seguro.",
        "Contribuí a las decisiones de arquitectura para garantizar alta disponibilidad y bajo acoplamiento.",
      ],
      en: [
        "Developed APIs and scalable microservices using .NET, C#.",
        "Optimized SQL and NoSQL databases, improving system response times by up to 40%.",
        "Integrated authentication and authorization for secure access.",
        "Contributed to architecture decisions to ensure high availability and low coupling.",
      ],
    },
  },
  {
    company: "Adzone Marketing",
    role: { es: "Desarrollador Web y de Aplicaciones", en: "Web and App Developer" },
    period: { es: "Septiembre 2022 – Junio 2024", en: "September 2022 – June 2024" },
    stack: ["Node.js", "JavaScript", "HTML", "CSS"],
    description: {
      es: [
        "Desarrollo de aplicaciones web dinámicas utilizando Node.js, JavaScript, HTML y CSS.",
        "Implementación de arquitecturas de backend escalables y API RESTful integradas.",
        "Mejora de la experiencia de usuario y SEO en los sitios web de múltiples clientes.",
        "Participación en la planificación de estrategias alineadas con las mejores prácticas para maximizar el éxito del proyecto.",
      ],
      en: [
        "Developed dynamic web applications using Node.js, JavaScript, HTML, and CSS.",
        "Implemented scalable backend architectures and integrated RESTful APIs.",
        "Enhanced user experience and SEO across multiple client websites.",
        "Participated in strategy planning aligned with best practices to maximize project success.",
      ],
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
