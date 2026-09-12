import type { CSSProperties } from 'react'
import type { Metadata } from 'next'
import { HeroHeadline, letterCount } from '@/components/hero-headline'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { WhatsappLink } from '@/components/whatsapp-link'

export const metadata: Metadata = {
  title: 'Our Products',
  description:
    'Alongside client work, App Himalaya runs proofs of concept, validates ideas against real users, and builds the ones that hold. Our first products are coming soon.',
  alternates: { canonical: '/products' },
  openGraph: {
    title: 'Products | App Himalaya',
    description:
      'Proofs of concept, validated ideas, and the products we are building of our own. Coming soon.',
    url: '/products',
  },
}

const pipeline = [
  ['A question worth asking', 'Every idea starts as an annoyance someone has learned to live with. We collect them, argue about them, and pick the ones that would matter to a lot of people.'],
  ['The smallest honest test', 'We build a proof of concept in weeks, not quarters, and put it in front of people who have the problem. No pitch deck, no waiting list, just: does this help?'],
  ['Most of them stop here', 'Most ideas do not survive real users, and that is the point of testing them cheaply. We write down what we learned and move on without sentiment.'],
  ['The ones that hold', 'When an idea keeps proving itself, we build it properly — the way we build for clients, with the same standards and none of the deadlines.'],
]

const HERO = ['We build for', 'the problems ahead']

export default function Products() {
  const afterHero = { '--i': letterCount(HERO) } as CSSProperties

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-[1440px] px-6 pb-16 pt-20 lg:px-10 lg:pb-24 lg:pt-28">
        <p className="eyebrow hl-before mb-8">The lab / 02</p>
        <HeroHeadline lines={HERO} lastLineClassName="text-muted-foreground" className="max-w-4xl text-[2.75rem] sm:text-6xl lg:text-7xl" />
        <p style={afterHero} className="hl-after lede mt-10 text-pretty text-muted-foreground">
          Client work pays for the studio. This is what we do with the rest of our attention: run
          experiments, validate ideas against reality, and build the ones that keep proving
          themselves.
        </p>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="border border-border bg-card px-6 py-20 text-center sm:px-12 sm:py-28">
          <p className="display text-4xl text-accent sm:text-6xl lg:text-7xl">Coming soon…</p>
          <p className="mx-auto mt-8 max-w-md text-pretty text-[1.05rem] leading-8 text-muted-foreground">
            Two ideas are past the proof-of-concept stage and in front of early users. We would
            rather show you something finished than something announced.
          </p>
          <a
            href="/contact"
            className="mt-10 inline-block border-b border-accent pb-1 text-sm font-semibold text-accent"
          >
            Tell us to get in touch when they land
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        <p className="eyebrow mb-5">The pipeline / 03</p>
        <h2 className="display max-w-2xl text-4xl sm:text-5xl">How an idea becomes a product here</h2>
        <ol className="mt-14 grid gap-px bg-border sm:grid-cols-2">
          {pipeline.map(([title, body], index) => (
            <li key={title} className="bg-background p-8 lg:p-10">
              <span className="text-sm font-semibold text-accent">Stage {index + 1}</span>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">{title}</h3>
              <p className="mt-4 max-w-md text-[0.95rem] leading-7 text-muted-foreground">{body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-deep">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:px-10 lg:py-32">
          <div>
            <p className="eyebrow mb-6">Our belief / 04</p>
            <h2 className="display text-4xl sm:text-5xl">Useful beats impressive</h2>
          </div>
          <div>
            <p className="max-w-xl text-xl leading-9">
              The products that changed how the world pays, moves and talks to itself were not the
              most impressive software of their moment. They were the most useful, and they arrived
              when someone finally built the first version.
            </p>
            <p className="mt-6 max-w-xl text-xl leading-9 opacity-75">
              We are a small team in Nepal with that ambition and no illusions about the distance.
              So we keep learning, keep testing, and keep the bar at: does this make something
              genuinely easier for a lot of people?
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <h2 className="display text-4xl sm:text-5xl">Have an idea that needs proving?</h2>
          <div>
            <p className="lede text-muted-foreground">
              We do the same thing for clients that we do for ourselves: build the smallest honest
              version, test it properly, and tell you what we found.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                Book a call
              </a>
              <WhatsappLink message="Hi apphimalaya, I have an idea I would like to validate." />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
