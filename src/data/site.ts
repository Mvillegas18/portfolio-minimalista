/**
 * Single source of truth for the site's factual content.
 * Values that need translating are declared as `{ es, en }` pairs and are
 * read through `getText(lang, key)` (see `src/i18n/index.ts`).
 */
export const site = {
	name: 'Miguel Angel Villegas',
	location: 'Medellín, Colombia',
	email: 'miguelvillegas.dev19@outlook.com',
	social: {
		github: 'https://github.com/Mvillegas18',
		linkedin: 'https://www.linkedin.com/in/migue-villegas-dev',
	},
} as const

export type NavLink = {
	/** Matches `id="…"` on the section and the `nav.<id>` translation key. */
	id: string
}

export const navLinks: NavLink[] = [
	{ id: 'about' },
	{ id: 'skills' },
	{ id: 'projects' },
	{ id: 'experience' },
	{ id: 'contact' },
]
