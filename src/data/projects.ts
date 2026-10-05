import type { Localized } from '../i18n/types'

export type Project = {
	title: Localized
	description: Localized
	/** Language-independent tech stack. */
	tech: string[]
	demo: string
	github: string
	/** Optional badge, e.g. "Destacado" / "Featured". */
	tag?: Localized
}

/**
 * Add a new object here to publish a new project — no component changes needed.
 * Text fields take `{ es, en }`; links and tech stacks are language-neutral.
 */
export const projects: Project[] = [
	{
		title: { es: 'Flowboard', en: 'Flowboard' },
		description: {
			es: 'Tablero Kanban para equipos de desarrollo, con actualizaciones en tiempo real, arrastrar y soltar, acceso por roles y búsqueda de texto completo entre miles de tareas.',
			en: 'Kanban board for engineering teams with real-time updates, drag-and-drop, role-based access and full-text search across thousands of tasks.',
		},
		tech: [
			'Next.js',
			'TypeScript',
			'PostgreSQL',
			'Prisma',
			'TailwindCSS',
			'Neon',
		],
		demo: 'https://project-flowboard-beryl.vercel.app/',
		github: 'https://github.com/Mvillegas18/project_flowboard',
		tag: { es: 'Destacado', en: 'Featured' },
	},
]
