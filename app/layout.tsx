import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { industries, services, site, siteUrl } from '@/lib/site'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' })

export const metadata: Metadata = {
  // Without this every canonical and social image resolves relative, which is
  // the single most common reason a Next.js site shares and indexes badly.
  metadataBase: new URL(siteUrl),
  title: {
    default: 'App Himalaya — Software Development Company in Kathmandu, Nepal',
    template: `%s | ${site.name}`,
  },
  description:
    'App Himalaya is a software development company in Kathmandu, Nepal. We modernize legacy enterprise systems, provide contract engineering teams that join yours, and build web, mobile and AI products for clients worldwide.',
  applicationName: site.name,
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  publisher: site.name,
  category: 'Software Development',
  keywords: [
    'App Himalaya',
    'apphimalaya',
    'App Himalaya Nepal',
    'software company in Nepal',
    'software development company Nepal',
    'software company in Kathmandu',
    'IT company in Nepal',
    'custom software development Nepal',
    'legacy software modernization',
    'software outsourcing Nepal',
    'offshore software development Nepal',
    'contract software engineers Nepal',
    'dedicated development team Nepal',
    'hire developers in Nepal',
    'web development company Nepal',
    'mobile app development Nepal',
    'SaaS development Nepal',
    'AI development Nepal',
    'MVP and proof of concept development',
    'enterprise software Nepal',
    'fintech software development Nepal',
    'healthcare software development Nepal',
  ],
  openGraph: {
    type: 'website',
    siteName: site.name,
    locale: 'en_NP',
    url: siteUrl,
    title: 'App Himalaya — Software Development Company in Kathmandu, Nepal',
    description:
      'Legacy modernization, contract engineering teams and new product builds, from a software company in Kathmandu working with teams worldwide.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'App Himalaya — Software Development Company in Nepal',
    description:
      'Legacy modernization, contract engineering teams and new product builds, from Kathmandu, for teams anywhere.',
  },
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  // Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in Vercel to the token Search
  // Console gives you, then redeploy. No code change needed.
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#050f0a',
}

const siteSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      // Organization rather than LocalBusiness: LocalBusiness expects a street
      // address, and inventing one to qualify would be worse than not claiming
      // it. Add the real street address and switch this to ProfessionalService
      // when you want to compete in the local map pack.
      '@type': 'Organization',
      '@id': `${siteUrl}#organization`,
      name: site.name,
      legalName: site.legalName,
      alternateName: ['apphimalaya', 'apphimalaya.com.np', 'App Himalaya Nepal'],
      url: siteUrl,
      slogan: site.tagline,
      email: site.email,
      telephone: `+${site.whatsapp}`,
      logo: `${siteUrl}/apple-icon.png`,
      description:
        'Software development company in Kathmandu, Nepal. Legacy system modernization, contract engineering teams, product engineering, proofs of concept and applied AI, for clients worldwide.',
      knowsLanguage: ['en', 'ne'],
      address: {
        '@type': 'PostalAddress',
        addressLocality: site.addressParts.locality,
        addressRegion: site.addressParts.region,
        addressCountry: site.addressParts.country,
      },
      areaServed: [
        { '@type': 'Place', name: 'Kathmandu' },
        { '@type': 'Country', name: 'Nepal' },
        { '@type': 'Place', name: 'Worldwide' },
      ],
      knowsAbout: industries,
      // Add LinkedIn / Facebook / Google Business Profile URLs to site.social.
      // Each one helps Google tie this site to the same real-world company.
      ...(site.social.length ? { sameAs: site.social } : {}),
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: site.email,
        telephone: `+${site.whatsapp}`,
        areaServed: 'Worldwide',
        availableLanguage: ['English', 'Nepali'],
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Software development services',
        itemListElement: services.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.name,
            description: service.description,
            provider: { '@id': `${siteUrl}#organization` },
            areaServed: { '@type': 'Country', name: 'Nepal' },
          },
        })),
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}#website`,
      url: siteUrl,
      name: site.name,
      inLanguage: 'en-NP',
      publisher: { '@id': `${siteUrl}#organization` },
    },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-NP" className="bg-background">
      <body className={`${geist.variable} ${geistMono.variable}`}>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }} />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
