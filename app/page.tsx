import type { CSSProperties } from 'react'
import type { Metadata } from 'next'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { HeroHeadline, letterCount } from '@/components/hero-headline'
import { RevealOnScroll } from '@/components/reveal'
import { Ridgeline } from '@/components/ridgeline'
import { ServiceGrid } from '@/components/service-grid'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { WhatsappLink } from '@/components/whatsapp-link'
import { industries } from '@/lib/site'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

const HERO = ['Build the', 'unbelievable']

export default function Home() {
  const afterHero = { '--i': letterCount(HERO) } as CSSProperties

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <RevealOnScroll />
      <SiteHeader />

      <section id="top" className="relative mx-auto max-w-[1440px] px-6 pb-12 pt-20 lg:px-10 lg:pt-28">
        <div className="hero-grid pointer-events-none absolute inset-x-0 top-0 h-[520px] opacity-40" />
        <div className="relative grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="eyebrow hl-before mb-8">A technology partner for ambitious people</p>
            <HeroHeadline lines={HERO} lastLineClassName="text-accent" className="hero-display" />
            <div style={afterHero}>
              <p className="hl-after lede mt-10 text-pretty text-muted-foreground">
                We design, validate and ship software for the people moving the world forward — from
                the first question to a product that lasts.
              </p>
              <div className="hl-after mt-10 flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="bg-accent px-5 py-3.5 font-mono text-[10px] uppercase tracking-widest text-accent-foreground transition-opacity hover:opacity-90"
                >
                  Tell us what you&apos;re solving
                  <ArrowUpRight className="ml-2 inline size-4" />
                </a>
                <a
                  href="/services"
                  className="border border-border px-5 py-3.5 font-mono text-[10px] uppercase tracking-widest transition-colors hover:border-accent hover:text-accent"
                >
                  Explore our work
                  <ArrowDownRight className="ml-2 inline size-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="reveal delay-2">
            <div className="border border-border bg-card p-5 font-mono text-xs">
              <div className="mb-10 flex justify-between border-b border-border pb-4 text-[10px] uppercase tracking-widest text-muted-foreground">
                <span>apphimalaya / 2026</span>
                <span className="text-accent">● Building</span>
              </div>
              <p className="text-muted-foreground">Our point of view</p>
              <p className="mt-2 font-sans text-2xl tracking-tight">
                The best technology
                <br />
                makes life more possible.
              </p>
              <div className="mt-8 border-t border-border pt-4 text-[10px] uppercase tracking-widest text-muted-foreground">
                From the Himalaya, for everywhere.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Ridgeline className="mb-2" />

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-6 py-10 sm:grid-cols-3 lg:px-10">
          <div className="reveal">
            <p className="eyebrow">01 / We deliver</p>
            <p className="mt-3 text-lg">Software that earns its place in the world.</p>
          </div>
          <div className="reveal delay-2">
            <p className="eyebrow">02 / We validate</p>
            <p className="mt-3 text-lg">Proof before polish. Evidence before scale.</p>
          </div>
          <div className="reveal delay-2">
            <p className="eyebrow">03 / We invent</p>
            <p className="mt-3 text-lg">Our own products for problems still waiting.</p>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="reveal mb-14 flex items-end justify-between gap-8">
          <div>
            <p className="eyebrow mb-5">What we do / 02</p>
            <h2 className="display max-w-3xl text-4xl sm:text-6xl">
              From first thought
              <br />
              <span className="text-muted-foreground">to lasting impact.</span>
            </h2>
          </div>
          <a
            href="/services"
            className="hidden font-mono text-[10px] uppercase tracking-widest underline underline-offset-8 sm:block"
          >
            All capabilities
            <ArrowUpRight className="ml-2 inline size-3" />
          </a>
        </div>
        <ServiceGrid />
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <div className="reveal">
            <p className="eyebrow mb-5">Who we build for / 03</p>
            <h2 className="display text-3xl sm:text-4xl">
              The industry is never
              <br />
              the hard part.
            </h2>
          </div>
          <div className="reveal delay-2">
            <p className="max-w-xl text-[0.95rem] leading-7 text-muted-foreground">
              Regulation, scale and vocabulary differ. The work of learning a domain and building
              something dependable inside it does not. We have shipped into:
            </p>
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {industries.map((industry) => (
                <li key={industry} className="border border-border px-3.5 py-2 font-mono text-[11px] uppercase tracking-widest">
                  {industry}
                </li>
              ))}
              <li className="px-3.5 py-2 font-mono text-[11px] uppercase tracking-widest text-accent">
                and whatever you bring next
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-deep text-primary-foreground">
        <div className="mx-auto grid max-w-[1440px] gap-16 px-6 py-24 text-foreground lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-32">
          <div className="reveal">
            <p className="eyebrow mb-6">Our ambition / 04</p>
            <h2 className="display text-5xl sm:text-7xl">
              Build what
              <br />
              the world needs.
            </h2>
          </div>
          <div className="reveal delay-2">
            <p className="max-w-xl text-xl leading-8 opacity-90">
              We are not only a delivery company. A handful of products changed how the world pays,
              moves and talks to itself — and every one of them started as something that did not
              exist yet, built by people who were not certain it would work.
            </p>
            <p className="mt-6 max-w-xl text-xl leading-8 opacity-70">
              So we run our own POCs, test a lot of ideas, and build the ones that hold. We are
              always learning. That is the job, not a slogan.
            </p>
            <a
              href="/products"
              className="mt-10 inline-block border-t border-accent/40 pt-6 font-mono text-[10px] uppercase tracking-widest text-accent"
            >
              What we are working on
              <ArrowUpRight className="ml-2 inline size-3" />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="reveal grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="eyebrow">A better starting point</p>
          <div>
            <h2 className="display max-w-3xl text-4xl sm:text-6xl">Have a problem worth solving?</h2>
            <p className="lede mt-7 text-muted-foreground">
              Bring us the question, the constraint, or the rough idea. We will tell you honestly
              whether we are the right people and what the clearest next move is.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="bg-accent px-5 py-3.5 font-mono text-[10px] uppercase tracking-widest text-accent-foreground transition-opacity hover:opacity-90"
              >
                Start the conversation
                <ArrowUpRight className="ml-2 inline size-4" />
              </a>
              <WhatsappLink className="font-mono text-[10px] uppercase tracking-widest" />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
