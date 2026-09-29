# Miguel Angel Villegas

Portafolio personal de **Miguel Angel Villegas**, desarrollador Full Stack de
Medellín, Colombia.

Es una sola página, minimalista y rápida, donde cuento quién soy, qué
tecnologías manejo, algunos proyectos, mi experiencia y cómo contactarme.
Arranca en español y se puede cambiar a inglés desde la barra superior, además
de tener modo oscuro y claro.

## Tecnologías

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- TypeScript

## Estructura de carpetas

```
portfolio-minimalista/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── scripts/
│   └── check-i18n.ts        # comprueba que existan todas las traducciones
├── src/
│   ├── components/          # un componente por sección de la página
│   │   ├── About.astro
│   │   ├── Skills.astro
│   │   ├── Projects.astro
│   │   ├── ProjectCard.astro
│   │   ├── Experience.astro
│   │   ├── Contact.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── SectionHeading.astro
│   │   ├── LanguageSwitcher.astro
│   │   ├── ThemeToggle.astro
│   │   └── T.astro          # texto traducible
│   ├── data/                # contenido: proyectos, experiencia, skills, enlaces
│   │   ├── site.ts
│   │   ├── skills.ts
│   │   ├── projects.ts
│   │   └── experience.ts
│   ├── i18n/                # getText() y el cambio de idioma en el navegador
│   │   ├── index.ts
│   │   ├── dom.ts
│   │   └── types.ts
│   ├── locales/             # textos de la interfaz
│   │   ├── es.json
│   │   └── en.json
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tsconfig.json
└── package.json
```
