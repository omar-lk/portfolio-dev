import type { Metadata } from 'next';
import { dictionaries, localizedPath } from './index';
import type { Locale, PagePath } from './types';

type MetadataPage = 'home' | 'about' | 'gallery';

function getMetadataBase(): URL {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const url = configuredUrl || (vercelUrl ? `https://${vercelUrl}` : 'http://localhost:3000');

  return new URL(url);
}

export function createLocalizedMetadata(
  locale: Locale,
  page: MetadataPage,
  path: PagePath,
): Metadata {
  const copy = dictionaries[locale].metadata[page];
  const canonical = localizedPath(locale, path);
  const alternate = locale === 'en' ? 'fr_FR' : 'en_US';

  return {
    metadataBase: getMetadataBase(),
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical,
      languages: {
        'en-US': localizedPath('en', path),
        'fr-FR': localizedPath('fr', path),
        'x-default': localizedPath('en', path),
      },
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      siteName: 'Omar Lekouch',
      images: ['/image-about.jpg'],
      locale: locale === 'en' ? 'en_US' : 'fr_FR',
      alternateLocale: [alternate],
      type: 'website',
      url: canonical,
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.title,
      description: copy.description,
      images: ['/image-about.jpg'],
    },
  };
}
