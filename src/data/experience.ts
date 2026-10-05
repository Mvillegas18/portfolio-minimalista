import type { Localized } from '../i18n/types'

export type Experience = {
	role: Localized
	company: string
	location: Localized
	period: Localized
	type: Localized
	summary: Localized
	achievements: Localized[]
	/** Language-independent tech stack. */
	tech: string[]
}

export const experiences: Experience[] = [
	{
		role: { es: 'Desarrollador Web Junior', en: 'Junior Web Developer' },
		company: 'Freelance',
		location: { es: 'Remoto', en: 'Remote' },
		period: { es: 'Mar 2025 — Sep 2025', en: 'Mar 2025 — Sep 2025' },
		type: { es: 'Contrato', en: 'Contract' },
		summary: {
			es: 'Entregué sitios web y herramientas internas para pequeños negocios de Colombia.',
			en: 'Delivered websites and internal tools for small businesses across Colombia.',
		},
		achievements: [
			{
				es: 'Llevé a producción más de 5 proyectos de extremo a extremo, desde la recopilación de requisitos hasta el despliegue.',
				en: 'Shipped 5+ production projects end to end, from requirements gathering to deployment.',
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
	{
		role: { es: 'Desarrollador Frontend', en: 'Frontend Developer' },
		company: 'Frisby S.A BIC',
		location: { es: 'Medellín, Colombia', en: 'Medellín, Colombia' },
		period: { es: 'ene 2023 — ene 2024', en: 'Jan 2023 — Jan 2024' },
		type: { es: 'Contrato de aprendizaje', en: 'Apprenticeship contract' },
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
				es: 'Apliqué buenas prácticas de desarrollo frontend, mejorando la mantenibilidad del código y reduciendo la deuda técnica.',
				en: 'Applied best practices for frontend development, improving code maintainability and reducing technical debt.',
			},
			{
				es: 'Colaboré en equipo bajo metodologías ágiles para cumplir entregas en tiempos establecidos.',
				en: 'Collaborated in a team under agile methodologies to meet delivery deadlines.',
			},
		],
		tech: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
	},
]
