import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MM Digital Solutions | Your Digital Partner',
  description: 'Websites, custom software, digital marketing and dependable IT support for South African businesses.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/mm-digital-banner.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/mm-digital-banner.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/mm-digital-banner.png.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f4f1eb',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
