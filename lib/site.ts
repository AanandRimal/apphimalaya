// Single place for the details that change. Swap these, nothing else.
export const site = {
  name: 'apphimalaya.com',
  email: 'hello@apphimalaya.com',
  // wa.me needs digits only: country code first, no + and no spaces.
  whatsapp: '9779849779958',
  phone: '+977 9849779958',
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
