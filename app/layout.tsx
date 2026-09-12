import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'apphimalaya.com — Build the unbelievable',
  description:
    'A software company in Nepal. We modernize the systems enterprises depend on, provide contract engineering teams that join yours, and build products of our own.',
  keywords: ['legacy modernization', 'software outsourcing', 'contract engineering teams', 'product development', 'AI engineering', 'Nepal software company', 'apphimalaya'],
  generator: 'apphimalaya.com',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#050f0a',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${geist.variable} ${geistMono.variable}`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
