import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/next';
import { createLocalizedMetadata } from '../i18n/metadata';
import '../globals.css';

export const metadata = createLocalizedMetadata('en', 'home', '/');

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Open+Sans:wght@400;700&family=Lato:wght@400;700&family=Montserrat:wght@400;700&family=Work+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
