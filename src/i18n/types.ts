/** Supported UI languages. Spanish is the default. */
export type Lang = 'es' | 'en';

/** A string that exists in every supported language. */
export type Localized = Record<Lang, string>;
