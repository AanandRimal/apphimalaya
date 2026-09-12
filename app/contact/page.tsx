import type { Metadata } from 'next'
import { ContactPage } from '@/components/contact-page'

export const metadata: Metadata = {
  title: 'Contact — Book a Call or Message on WhatsApp',
  description:
    'Talk to App Himalaya about a software project. Book a free 30-minute discovery call, message us on WhatsApp, or call +977 9849779958. Based in Kathmandu, Nepal, working worldwide.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact App Himalaya — Kathmandu, Nepal',
    description:
      'Book a free 30-minute discovery call, or reach us on WhatsApp at +977 9849779958.',
    url: '/contact',
  },
}

export default function Contact() {
  return <ContactPage />
}
