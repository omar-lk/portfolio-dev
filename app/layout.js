import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Omar portfolio',
  description: 'minimalist portfolio design'
}

export default function RootLayout({ children }) {
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
    </html>
  )
}
