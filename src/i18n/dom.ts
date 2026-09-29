/**
 * Client-side language switching — runs entirely in the browser, no reload.
 *
 * Elements translated by `getText` are rendered server-side in the default
 * language and tagged with:
 *   data-i18n="key"          → element text (textContent)
 *   data-i18n-aria="key"     → element aria-label
 */
import {
  DEFAULT_LANG,
  getText,
  isLang,
  LANG_STORAGE_KEY,
  type Lang,
} from './index';

export interface ApplyOptions {
  /** Re-apply the viewport offset so the user stays where they were. */
  preserveScroll?: boolean;
}

/** Persisted preference, or Spanish when there is none. */
export function getStoredLang(): Lang {
  try {
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    return isLang(stored) ? stored : DEFAULT_LANG;
  } catch {
    return DEFAULT_LANG;
  }
}

function updateMetaTags(lang: Lang): void {
  const title = getText(lang, 'meta.title');
  const description = getText(lang, 'meta.description');

  document.title = title;

  const setMeta = (selector: string, content: string) => {
    const meta = document.head.querySelector(selector);
    if (meta) meta.setAttribute('content', content);
  };

  setMeta('meta[name="description"]', description);
  setMeta('meta[property="og:title"]', title);
  setMeta('meta[property="og:description"]', description);
}

/** Swap every translatable string (and the document language) to `lang`. */
export function applyLanguage(lang: Lang, options: ApplyOptions = {}): void {
  if (!isLang(lang)) return;

  const scrollY = window.scrollY;

  document.documentElement.lang = lang;

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (key) el.textContent = getText(lang, key);
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-aria]').forEach((el) => {
    const key = el.dataset.i18nAria;
    if (key) el.setAttribute('aria-label', getText(lang, key));
  });

  document.querySelectorAll<HTMLButtonElement>('[data-lang-option]').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.dataset.langOption === lang));
  });

  updateMetaTags(lang);

  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {
    /* storage unavailable (private mode) — the choice simply won't persist */
  }

  // Translated text can change the page height: restore the exact offset.
  if (options.preserveScroll) {
    requestAnimationFrame(() => window.scrollTo({ top: scrollY, behavior: 'instant' }));
  }
}
