import type { Lang } from "@/data/portfolio";

export const dictionary = {
  es: {
    nav: {
      about: "Sobre mí",
      skills: "Skills",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
    },
    contactCta: "Contactarme",
    heroBadge: "Desarrollador de software · especializado en backend",
    heroGreetingPrefix: "Hola, soy",
    heroTagline: "Construyo software robusto y confiable, con foco en backend.",
    viewProjects: "Ver proyectos",
    downloadCv: "Descargar CV",
    otherCvVersion: "Versión en inglés",
    techLabel: "Tecnologías con las que trabajo",
    available: "disponible",
    sectionAbout: "Sobre mí",
    sectionSkills: "Skills",
    sectionExperience: "Experiencia",
    sectionProjects: "Proyectos",
    sectionContact: "Contacto",
    alsoWorkedWith: "También he trabajado con",
    contactHeadline: "¿Tienes un proyecto en mente? Hablemos.",
    contactSub:
      "Estoy abierto a colaborar en proyectos de cualquier tipo, no solo backend. La forma más directa de contactarme es por correo.",
    code: "Código",
    visitSite: "Visitar sitio",
    privateRepo: "Repositorio privado",
    madeWith: "Hecho con Next.js & Tailwind CSS",
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    contactCta: "Get in touch",
    heroBadge: "Software developer · backend specialist",
    heroGreetingPrefix: "Hi, I'm",
    heroTagline: "I build robust, reliable software, with a backend focus.",
    viewProjects: "View projects",
    downloadCv: "Download CV",
    otherCvVersion: "Versión en español",
    techLabel: "Technologies I work with",
    available: "available",
    sectionAbout: "About",
    sectionSkills: "Skills",
    sectionExperience: "Experience",
    sectionProjects: "Projects",
    sectionContact: "Contact",
    alsoWorkedWith: "I've also worked with",
    contactHeadline: "Have a project in mind? Let's talk.",
    contactSub:
      "I'm open to collaborating on all kinds of projects, not just backend. The most direct way to reach me is by email.",
    code: "Code",
    visitSite: "Visit site",
    privateRepo: "Private repository",
    madeWith: "Built with Next.js & Tailwind CSS",
  },
} satisfies Record<Lang, Record<string, unknown>>;

export function getDictionary(lang: Lang) {
  return dictionary[lang];
}
