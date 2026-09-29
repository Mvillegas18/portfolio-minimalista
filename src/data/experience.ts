import type { Localized } from '../i18n/types';

export type Experience = {
  role: Localized;
  company: string;
  location: Localized;
  period: Localized;
  type: Localized;
  summary: Localized;
  achievements: Localized[];
  /** Language-independent tech stack. */
  tech: string[];
};

export const experiences: Experience[] = [
  {
    role: { es: 'Desarrollador Frontend', en: 'Frontend Developer' },
    company: 'Nova Digital Studio',
    location: { es: 'Medellín, Colombia', en: 'Medellín, Colombia' },
    period: { es: 'ene 2023 — actualidad', en: 'Jan 2023 — Present' },
    type: { es: 'Tiempo completo', en: 'Full-time' },
    summary: {
      es: 'Responsable del sistema de diseño y del panel principal, usado por más de 12 000 personas cada mes.',
      en: 'Own the design system and the client-facing dashboard used by 12k+ monthly users.',
    },
    achievements: [
      {
        es: 'Reconstruí el panel principal en Next.js y TypeScript y reduje el primer pintado de contenido de 3,1 s a 0,9 s.',
        en: 'Rebuilt the core dashboard in Next.js + TypeScript, cutting first contentful paint from 3.1s to 0.9s.',
      },
      {
        es: 'Creé una biblioteca de componentes reutilizables con Tailwind que hoy usan 3 equipos de producto, eliminando cerca del 40% del código de interfaz duplicado.',
        en: 'Introduced a reusable Tailwind component library adopted by 3 product squads, removing ~40% of duplicated UI code.',
      },
      {
        es: 'Implementé pruebas de regresión visual automatizadas con Playwright, reduciendo a la mitad los errores de interfaz en producción.',
        en: 'Implemented automated visual regression tests with Playwright, dropping shipped UI bugs by roughly half.',
      },
      {
        es: 'Acompañé a dos desarrolladores junior mediante revisiones de código y sesiones de programación en pareja.',
        en: 'Mentored two junior developers through code reviews and pair programming sessions.',
      },
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Playwright'],
  },
  {
    role: { es: 'Desarrollador Web Junior', en: 'Junior Web Developer' },
    company: 'Freelance',
    location: { es: 'Remoto', en: 'Remote' },
    period: { es: 'jun 2021 — dic 2022', en: 'Jun 2021 — Dec 2022' },
    type: { es: 'Contrato', en: 'Contract' },
    summary: {
      es: 'Entregué sitios web y herramientas internas para pequeños negocios de Colombia.',
      en: 'Delivered websites and internal tools for small businesses across Colombia.',
    },
    achievements: [
      {
        es: 'Llevé a producción más de 8 proyectos de extremo a extremo, desde la recopilación de requisitos hasta el despliegue.',
        en: 'Shipped 8+ production projects end to end, from requirements gathering to deployment.',
      },
      {
        es: 'Construí APIs REST con Node.js y Express sobre PostgreSQL, que alimentan paneles de administración y clientes móviles.',
        en: 'Built REST APIs with Node.js and Express backed by PostgreSQL, serving admin panels and mobile clients.',
      },
      {
        es: 'Contenedoricé los despliegues con Docker, estandarizando las liberaciones y reduciendo la configuración a minutos.',
        en: 'Containerised deployments with Docker, standardising releases and cutting setup time to minutes.',
      },
    ],
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Docker'],
  },
];
