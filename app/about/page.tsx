import type { CSSProperties } from 'react'
import type { Metadata } from 'next'
import { Ridgeline } from '@/components/ridgeline'
import { HeroHeadline, letterCount } from '@/components/hero-headline'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { WhatsappLink } from '@/components/whatsapp-link'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About — apphimalaya.com',
  description:
    'A software company in Kathmandu working with teams worldwide: legacy modernization, contract engineering, and products of our own.',
}

const beliefs = [
  ['We would rather be right than quick to agree', 'If we think your plan has a problem, you will hear it early, while it is still cheap to change. Agreeable contractors are expensive.'],
  ['Understanding comes before code', 'The costly mistakes are almost never technical. They come from building the wrong thing carefully.'],
  ['We are always learning', 'The tools change every year. We spend real time on things that have no immediate client attached, because that is how you are ready when they do.'],
  ['Leave it maintainable', 'The measure of our work is whether your team can keep going without us. We write for the person who reads this code in three years.'],
]

const HERO = ['We are not just', 'an outsourcing partner']

export default function About() {
  const afterHero = { '--i': letterCount(HERO) } as CSSProperties

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-[1440px] px-6 pb-12 pt-20 lg:px-10 lg:pt-28">
        <p className="eyebrow hl-before mb-8">Who we are / 01</p>
        <HeroHeadline lines={HERO} lastLineClassName="text-accent" className="max-w-4xl text-[2.75rem] sm:text-6xl lg:text-7xl" />
        <p style={afterHero} className="hl-after lede mt-10 text-pretty text-muted-foreground">
          We are engineers in {site.location} building for teams anywhere. We look after the systems
          large companies depend on, we join teams that need people who care — and we build products
          of our own.
        </p>
      </section>

      <Ridgeline className="mb-6" />

      <section className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow mb-5">Where we came from / 02</p>
            <h2 className="display text-3xl sm:text-4xl">Two halves of the same company</h2>
          </div>
          <div className="max-w-2xl space-y-6 text-[1.05rem] leading-8 text-muted-foreground">
            <p>
              apphimalaya started the way most small studios do: a few engineers who kept getting
              asked to fix what other people had given up on. Undocumented systems, migrations that
              had stalled, products half-built and out of budget. That work taught us the thing this
              company is built around — the hardest part is almost never the technology.
            </p>
            <p>
              So one half of what we do is exactly that: we take on other people&apos;s hardest
              software, as an outsourcing partner for enterprises and as a contract team inside
              companies that need real engineers. We are good at it and we are proud of it.
            </p>
            <p className="text-foreground">
              But we are not just an outsourcing shop. The other half is our own: we run a lot of
              POCs, chase a lot of ideas, and build the ones that survive real users. We want to
              make products that serve the whole world — software that solves a problem for millions
              of people, not just for one client.
            </p>
            <p>
              A handful of products changed how the world pays, moves and talks to itself. We are
              not pretending we are there. We are saying that is the direction we are walking in,
              and that we are always learning on the way.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10 lg:py-28">
          <p className="eyebrow mb-5">What we hold to / 03</p>
          <h2 className="display max-w-2xl text-4xl sm:text-5xl">Four things we do not bend on</h2>
          <div className="mt-14 grid gap-12 sm:grid-cols-2">
            {beliefs.map(([title, body]) => (
              <div key={title}>
                <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-3 max-w-md text-[0.95rem] leading-7 text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow mb-5">How we work / 04</p>
            <h2 className="display text-3xl sm:text-4xl">Working with us from another timezone</h2>
          </div>
          <div className="max-w-2xl space-y-6 text-[1.05rem] leading-8 text-muted-foreground">
            <p>
              We are in Nepal Time, which overlaps comfortably with Europe, the Gulf, India and
              Australia, and leaves a working window with the east coast of the US. We plan around
              your calendar, not ours.
            </p>
            <p>
              Everything happens in writing as well as in calls — decisions, trade-offs, the reason
              something was built the way it was. It means you are never dependent on one person
              remembering, and neither are we.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-deep">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-20 lg:grid-cols-[1fr_1fr] lg:items-end lg:px-10 lg:py-28">
          <h2 className="display text-4xl sm:text-5xl">Come and find out if we fit</h2>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a
              href="/contact"
              className="bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Book a call
            </a>
            <WhatsappLink
              message="Hi apphimalaya, I would like to know more about working with you."
              className="hover:border-accent"
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
