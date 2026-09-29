import type { Localized } from '../i18n/types';

export type Project = {
  title: Localized;
  description: Localized;
  /** Language-independent tech stack. */
  tech: string[];
  demo: string;
  github: string;
  /** Optional badge, e.g. "Destacado" / "Featured". */
  tag?: Localized;
};

/**
 * Add a new object here to publish a new project — no component changes needed.
 * Text fields take `{ es, en }`; links and tech stacks are language-neutral.
 */
export const projects: Project[] = [
  {
    title: { es: 'DevTasks', en: 'DevTasks' },
    description: {
      es: 'Tablero Kanban para equipos de desarrollo, con actualizaciones en tiempo real, arrastrar y soltar, acceso por roles y búsqueda de texto completo entre miles de tareas.',
      en: 'Kanban board for engineering teams with real-time updates, drag-and-drop, role-based access and full-text search across thousands of tasks.',
    },
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'TailwindCSS'],
    demo: 'https://example.com/devtasks',
    github: 'https://github.com/miguelvillegas/devtasks',
    tag: { es: 'Destacado', en: 'Featured' },
  },
  {
    title: { es: 'Invoice API', en: 'Invoice API' },
    description: {
      es: 'API de facturación construida con Node.js y Express: autenticación JWT, generación automática de PDF y despliegue continuo con Docker, con un 90% de cobertura de pruebas.',
      en: 'REST API for invoicing built with Node.js and Express, featuring JWT auth, automated PDF generation and a Dockerised CI pipeline with 90% test coverage.',
    },
    tech: ['Node.js', 'Express', 'SQL Server', 'Docker', 'Jest'],
    demo: 'https://example.com/invoice-api',
    github: 'https://github.com/miguelvillegas/invoice-api',
  },
  {
    title: { es: 'Storefront .NET', en: 'Storefront .NET' },
    description: {
      es: 'Back office de comercio electrónico desarrollado en .NET 8, con arquitectura modular y limpia, integración de pagos resiliente y un panel de administración hecho en React.',
      en: 'E-commerce back office developed in .NET 8 with a modular clean architecture, resilient payment integration and a React admin dashboard.',
    },
    tech: ['.NET', 'C#', 'React', 'SQL Server', 'Azure'],
    demo: 'https://example.com/storefront',
    github: 'https://github.com/miguelvillegas/storefront',
  },
];
