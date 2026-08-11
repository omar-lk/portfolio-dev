import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import { Analytics } from "@vercel/analytics/next";
const inter = Inter({ subsets: ['latin'] })

const title = 'Omar Lekouch — Senior Full-Stack Engineer | Billing, Payments & AI'
const description =
  'Senior Full-Stack Engineer with 9+ years of experience building production systems for billing, payments, integrations, SaaS, and AI-powered products.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: 'Omar Lekouch',
    images: ['/image-about.jpg'],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/image-about.jpg']
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
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
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  )
}
