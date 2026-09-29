/**
 * i18n core — translation dictionaries and the `getText` helper.
 *
 * Two sources are merged into one lookup tree per language:
 *   1. `src/locales/<lang>.json` → UI copy (labels, headings, meta…)
 *   2. `src/data/*.ts`           → content records whose text fields are
 *                                   declared as `{ es, en }` pairs
 *
 * Components never read a language themselves: they render the default
 * language at build time and mark the element with `data-i18n="<key>"`,
 * then `applyLanguage()` (see `./dom.ts`) swaps the text on the client.
 */
import type { Lang, Localized } from './types';
import es from '../locales/es.json';
import en from '../locales/en.json';
import { site } from '../data/site';
import { skillCategories } from '../data/skills';
import { projects } from '../data/projects';
import { experiences } from '../data/experience';

export type { Lang, Localized } from './types';

/** Spanish is always the initial language. */
export const DEFAULT_LANG: Lang = 'es';

export const LANGS: { code: Lang; label: string }[] = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
];

/** localStorage key holding the persisted language preference. */
export const LANG_STORAGE_KEY = 'lang';

type Tree = Record<string, unknown>;

export function isLang(value: string | null | undefined): value is Lang {
  return value === 'es' || value === 'en';
}

/**
 * Recursively collapses every `{ es, en }` node into the plain string for
 * `lang`, leaving the rest of the structure untouched.
 */
function localize(value: unknown, lang: Lang): unknown {
  if (Array.isArray(value)) return value.map((item) => localize(item, lang));

  if (value && typeof value === 'object') {
    const record = value as Record<string, unknown>;
    if (typeof record.es === 'string' && typeof record.en === 'string') {
      return (record[lang] as string) ?? record.es;
    }
    return Object.fromEntries(
      Object.entries(record).map(([key, child]) => [key, localize(child, lang)]),
    );
  }

  return value;
}

function build(lang: Lang): Tree {
  const dictionary = lang === 'es' ? es : en;
  return {
    ...dictionary,
    site: localize(site, lang),
    skills: localize(skillCategories, lang),
    projects: localize(projects, lang),
    experience: localize(experiences, lang),
  };
}

/** Full translation tree for every supported language. */
export const dictionaries: Record<Lang, Tree> = {
  es: build('es'),
  en: build('en'),
};

function resolve(tree: unknown, key: string): unknown {
  return key.split('.').reduce<unknown>((node, segment) => {
    if (!node || typeof node !== 'object') return undefined;
    return (node as Record<string, unknown>)[segment];
  }, tree);
}

/**
 * Translate a dot-separated key, e.g. `getText(lang, 'sections.skills.title')`
 * or `getText(lang, 'projects.0.description')`.
 * Falls back to Spanish, then to the key itself (and warns in dev).
 */
export function getText(lang: Lang, key: string): string {
  const value =
    resolve(dictionaries[lang], key) ??
    (lang === DEFAULT_LANG ? undefined : resolve(dictionaries[DEFAULT_LANG], key));

  if (typeof value === 'string') return value;

  if (import.meta.env.DEV) {
    console.warn(`[i18n] Missing translation for "${key}" (${lang})`);
  }
  return key;
}

/** Pick the right variant of a `{ es, en }` record. */
export function localizeValue(value: Localized, lang: Lang = DEFAULT_LANG): string {
  return value[lang] ?? value[DEFAULT_LANG];
}
