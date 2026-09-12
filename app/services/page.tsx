import type { CSSProperties } from 'react'
import type { Metadata } from 'next'
import { HeroHeadline, letterCount } from '@/components/hero-headline'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { WhatsappLink } from '@/components/whatsapp-link'
import { industries } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Capabilities — apphimalaya.com',
  description:
    'Legacy modernization, contract engineering teams, new product builds, and applied AI — for companies in any industry.',
}

const offers = [
  {
    title: 'Legacy modernization',
    summary: 'For enterprises carrying software older than most of the team.',
    body: 'The system works, nobody wants to touch it, and every change costs weeks. We take ownership of code we did not write: read it properly, document what it actually does, get tests around the risky parts, then modernize in slices while it keeps serving customers. No rewrite-and-pray.',
    points: ['Taking over undocumented systems', 'Cloud and platform migration', 'Untangling the database', 'Replacing pieces without downtime'],
  },
  {
    title: 'Contract engineering teams',
    summary: 'For teams that need senior people, not more headcount.',
    body: 'Engineers who join your standups, your repo and your standards, and work as part of your team rather than behind a wall. You get people who push back when something is a bad idea, and who leave good documentation behind when the contract ends.',
    points: ['Dedicated squads or single specialists', 'Your process, your tools, your timezone overlap', 'Monthly or per-project', 'Handover built in from day one'],
  },
  {
    title: 'New product builds',
    summary: 'For an idea that has to become real.',
    body: 'From the first conversation to something people can use: web platforms, mobile apps, internal tools, the infrastructure underneath. We start by narrowing the problem until it is small enough to build well, then build it.',
    points: ['Web platforms and SaaS', 'iOS and Android', 'Internal and operations tooling', 'APIs and infrastructure'],
  },
  {
    title: 'Proofs of concept',
    summary: 'For the assumption your plan depends on.',
    body: 'Before anyone commits a year, we build the smallest honest version and put it in front of real users. Sometimes it proves the idea. Sometimes it saves you the year. Both are a good outcome.',
    points: ['Feasibility spikes', 'Prototypes with real users', 'Technical due diligence', 'A clear recommendation either way'],
  },
  {
    title: 'AI where it earns its place',
    summary: 'For work that is genuinely repetitive or genuinely hard.',
    body: 'We use AI where it removes real friction — extracting meaning from documents, answering questions over your own data, automating the work nobody wants — and we say so plainly when a simpler system would do the job better.',
    points: ['Assistants over your own data', 'Document and workflow automation', 'Evaluation before deployment', 'An honest no when it does not fit'],
  },
]

const process = [
  ['Understand', 'We spend the first weeks learning your domain, your constraints and what has already been tried. Most bad software comes from skipping this.'],
  ['Prove', 'We build the smallest thing that tests the riskiest assumption, and we show you the result even when it is not what either of us hoped for.'],
  ['Build', 'Working software in front of you continuously, not a reveal at the end. You always know where it stands.'],
  ['Keep it alive', 'Software is not finished when it ships. We stay for as long as it is useful to have us, and we leave it maintainable when we go.'],
]

const HERO = ['We make difficult', 'things possible']

export default function Services() {
  const afterHero = { '--i': letterCount(HERO) } as CSSProperties

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-[1440px] px-6 pb-16 pt-20 lg:px-10 lg:pb-20 lg:pt-28">
        <p className="eyebrow hl-before mb-8">Capabilities / 01</p>
        <HeroHeadline lines={HERO} lastLineClassName="text-muted-foreground" className="max-w-4xl text-[2.75rem] sm:text-6xl lg:text-7xl" />
        <p style={afterHero} className="hl-after lede mt-10 text-pretty text-muted-foreground">
          One team for the whole journey: understand the problem, prove the opportunity is real, and
          build something that lasts longer than the contract.
        </p>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid gap-px bg-border">
          {offers.map((offer) => (
            <article key={offer.title} className="grid gap-8 bg-background py-12 md:grid-cols-[1fr_1.4fr] md:gap-16 lg:py-16">
              <div>
                <h2 className="display text-3xl sm:text-4xl">{offer.title}</h2>
                <p className="mt-4 text-[0.95rem] leading-7 text-accent">{offer.summary}</p>
              </div>
              <div>
                <p className="max-w-xl text-[1.05rem] leading-8 text-muted-foreground">{offer.body}</p>
                <ul className="mt-7 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                  {offer.points.map((point) => (
                    <li key={point} className="flex gap-3 text-[0.95rem] leading-7">
                      <span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-24 border-y border-border bg-card lg:mt-32">
        <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10 lg:py-28">
          <p className="eyebrow mb-5">The process / 02</p>
          <h2 className="display max-w-2xl text-4xl sm:text-5xl">How the work actually goes</h2>
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {process.map(([title, body], index) => (
              <li key={title}>
                <span className="text-sm font-semibold text-accent">Step {index + 1}</span>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-3 text-[0.95rem] leading-7 text-muted-foreground">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow mb-5">Who we build for / 03</p>
            <h2 className="display text-3xl sm:text-4xl">We work across industries</h2>
          </div>
          <div>
            <p className="max-w-xl text-[0.95rem] leading-7 text-muted-foreground">
              We have built for regulated healthcare data and for online stores that just need to be
              fast on a bad connection. What carries over is the habit of learning a domain before
              writing code for it.
            </p>
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {industries.map((industry) => (
                <li key={industry} className="border border-border px-3.5 py-2 text-sm">
                  {industry}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-deep">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-20 lg:grid-cols-[1fr_1fr] lg:items-end lg:px-10 lg:py-28">
          <h2 className="display text-4xl sm:text-5xl">Tell us what you are trying to change</h2>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a
              href="/contact"
              className="bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Book a call
            </a>
            <WhatsappLink
              message="Hi apphimalaya, I read your capabilities page and would like to talk."
              className="hover:border-accent"
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
