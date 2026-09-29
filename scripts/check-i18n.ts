/**
 * i18n sanity check.
 *
 * Verifies that every translation key actually rendered into `dist/index.html`
 * exists in BOTH dictionaries (ES and EN) — catching typos and keys that were
 * only added to one locale.
 *
 * Run with: npm run check:i18n
 */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { dictionaries, type Lang } from '../src/i18n/index';

const LANGS: Lang[] = ['es', 'en'];
const html = readFileSync(resolve(process.cwd(), 'dist/index.html'), 'utf8');

function lookup(tree: unknown, key: string): unknown {
  return key.split('.').reduce<unknown>((node, segment) => {
    if (!node || typeof node !== 'object') return undefined;
    return (node as Record<string, unknown>)[segment];
  }, tree);
}

const keys = new Set<string>();
for (const match of html.matchAll(/data-i18n(?:-aria)?="([^"]+)"/g)) {
  keys.add(match[1]);
}

const missing: string[] = [];

for (const key of [...keys].sort()) {
  for (const lang of LANGS) {
    if (typeof lookup(dictionaries[lang], key) !== 'string') {
      missing.push(`${lang} ← "${key}"`);
    }
  }
}

console.log(`Checked ${keys.size} rendered keys × ${LANGS.length} languages.`);

if (missing.length) {
  console.error(`\nMissing translations (${missing.length}):`);
  for (const entry of missing) console.error(`  ✗ ${entry}`);
  process.exit(1);
}

console.log('✓ Every rendered key resolves in es.json and en.json.');
