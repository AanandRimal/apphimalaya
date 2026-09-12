// Single place for the details that change. Swap these, nothing else.

/**
 * The live domain, no trailing slash. Everything that tells Google where a page
 * lives is built from this: canonical tags, the sitemap, robots.txt, social
 * previews and the structured data. If it is wrong, the site quietly
 * de-indexes itself.
 *
 * Override with NEXT_PUBLIC_SITE_URL in Vercel if the canonical host changes
 * (for example if the apex starts redirecting to www) — no code change needed.
 */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://apphimalaya.com.np').replace(/\/+$/, '')

export const site = {
  /** Brand name as it should read in search results, not the domain. */
  name: 'App Himalaya',
  legalName: 'App Himalaya',
  url: siteUrl,
  tagline: 'Build the unbelievable.',
  email: 'hello@apphimalaya.com',
  // wa.me needs digits only: country code first, no + and no spaces.
  whatsapp: '9779849779958',
  phone: '+977 9849779958',
  location: 'Kathmandu, Nepal',
  /** Search engines want the parts, not the sentence. */
  addressParts: {
    locality: 'Kathmandu',
    region: 'Bagmati Province',
    country: 'NP',
  },
  /**
   * Public profiles, for the sameAs signal that links this site to the same
   * real-world entity. Add LinkedIn, Facebook and the Google Business Profile
   * URL here as they exist — each one strengthens the brand match.
   */
  social: [] as string[],
  hours: 'Sunday to Friday, 9:00 – 18:00 Nepal Time',
}

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}

export const nav = [
  ['/services', 'Capabilities'],
  ['/products', 'Products'],
  ['/about', 'About'],
] as const

/** Every indexable route. The sitemap is generated from this, so adding a page here publishes it. */
export const routes = [
  { path: '/', priority: 1 },
  { path: '/services', priority: 0.9 },
  { path: '/products', priority: 0.7 },
  { path: '/about', priority: 0.7 },
  { path: '/contact', priority: 0.8 },
] as const

/** Mirrors the capabilities page, and feeds the service catalog in the structured data. */
export const services = [
  { name: 'Legacy software modernization', description: 'Taking ownership of undocumented enterprise systems and moving them forward without stopping the business.' },
  { name: 'Contract engineering teams', description: 'Senior engineers who join your team, your repo and your standards, for a project or ongoing.' },
  { name: 'Product engineering', description: 'Web platforms, SaaS products, mobile apps, internal tools and the infrastructure behind them.' },
  { name: 'Proof of concept and idea validation', description: 'The smallest honest version of an idea, tested with real users before the big commitment.' },
  { name: 'AI and automation', description: 'Applied AI for document and workflow automation, assistants over your own data, and evaluation before deployment.' },
]

export const industries = [
  'Healthcare', 'Fintech', 'E-commerce', 'Logistics',
  'Education', 'Travel', 'Real estate', 'Energy',
]
