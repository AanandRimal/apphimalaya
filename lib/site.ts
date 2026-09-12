// Single place for the details that change. Swap these, nothing else.
export const site = {
  name: 'apphimalaya.com',
  email: 'hello@apphimalaya.com',
  // TODO: replace with the real number — digits only, country code first, no + or spaces.
  whatsapp: '9779800000000',
  location: 'Kathmandu, Nepal',
}

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}

export const nav = [
  ['/services', 'Capabilities'],
  ['/products', 'Products'],
  ['/about', 'About'],
] as const

export const industries = [
  'Healthcare', 'Fintech', 'E-commerce', 'Logistics',
  'Education', 'Travel', 'Real estate', 'Energy',
]
