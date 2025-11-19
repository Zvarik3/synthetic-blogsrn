import type { Metadata } from 'next'
import { Geist as Geist_Sans } from 'next/font/google'
import { Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
import { CustomCursor } from '@/components/custom-cursor'
import './globals.css'

const geistSans = Geist_Sans({ 
  subsets: ["latin"],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'SYNTHETIC - Wetware meets Software',
  description: 'A digital garden exploring the intersection of psychology and data science.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${spaceGrotesk.variable}`}>
      <body className={`font-sans antialiased`}>
        <LanguageProvider>
          <CustomCursor />
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
