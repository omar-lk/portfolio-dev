import { en } from './en';
import { fr } from './fr';
import type { Locale, PagePath, SiteDictionary } from './types';

export const dictionaries: Record<Locale, SiteDictionary> = { en, fr };

export function localizedPath(locale: Locale, path: PagePath): string {
  if (locale === 'en') {
    return path;
  }

  return path === '/' ? '/fr' : `/fr${path}`;
}

export function alternateLocale(locale: Locale): Locale {
  return locale === 'en' ? 'fr' : 'en';
}

export type { Locale, PagePath, SiteDictionary } from './types';
