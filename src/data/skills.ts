import type { Localized } from '../i18n/types';

export type SkillCategory = {
  title: Localized;
  /** One-line description of how this stack is used. */
  description: Localized;
  /** Framework-free tech names — keeps the component generic and fast. */
  skills: string[];
  /** Inline SVG path (lucide-style, 24x24, stroke) rendered on the card. */
  icon: string;
};

export const skillCategories: SkillCategory[] = [
  {
    title: { es: 'Frontend', en: 'Frontend' },
    description: {
      es: 'Interfaces accesibles y con tipos seguros, con foco en la experiencia de usuario.',
      en: 'Type-safe, accessible interfaces with a strong focus on UX.',
    },
    skills: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'],
    icon: 'M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M9 9l3 3 6-6M15 15l3-3-3-3',
  },
  {
    title: { es: 'Backend', en: 'Backend' },
    description: {
      es: 'APIs REST y servicios modulares, diseñados para la claridad y la escala.',
      en: 'REST and modular APIs designed for clarity and scale.',
    },
    skills: ['Node.js', 'Express', '.NET', 'REST APIs'],
    icon: 'M4 6h16M4 12h16M4 18h16M8 4v4M16 10v4M10 16v4',
  },
  {
    title: { es: 'Bases de datos', en: 'Databases' },
    description: {
      es: 'Modelado relacional, índices y consultas que siguen siendo rápidas.',
      en: 'Relational modelling, indexes and queries that stay fast.',
    },
    skills: ['PostgreSQL', 'SQL Server', 'Prisma', 'SQL'],
    icon: 'M4 7c0-1.657 3.582-3 8-3s8 1.343 8 3-3.582 3-8 3-8-1.343-8-3ZM4 7v10c0 1.657 3.582 3 8 3s8-1.343 8-3V7M4 12c0 1.657 3.582 3 8 3s8-1.343 8-3',
  },
  {
    title: { es: 'Herramientas', en: 'Tools' },
    description: {
      es: 'Entrega con confianza: control de versionos, integración continua y contenedores.',
      en: 'Confident delivery: version control, CI and containers.',
    },
    skills: ['Git', 'GitHub', 'Docker', 'Linux'],
    icon: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 8.6a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z',
  },
];
