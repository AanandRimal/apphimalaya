'use client'

import type { CSSProperties } from 'react'
import { FormEvent, useEffect, useState } from 'react'
import { Check, ChevronLeft, ChevronRight } from 'lucide-react'
import { HeroHeadline, letterCount } from '@/components/hero-headline'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { WhatsappBubble, WhatsappLink } from '@/components/whatsapp-link'
import { site, whatsappLink } from '@/lib/site'

const times = ['09:00', '10:30', '13:00', '15:30']

/** The next five working days, starting tomorrow. Nepal's weekend is Saturday only. */
function weekdays(weeksAhead: number) {
  const cursor = new Date()
  cursor.setHours(0, 0, 0, 0)
  cursor.setDate(cursor.getDate() + 1 + weeksAhead * 7)
  const result: Date[] = []
  while (result.length < 5) {
    if (cursor.getDay() !== 6) result.push(new Date(cursor))
    cursor.setDate(cursor.getDate() + 1)
  }
  return result
}

const short = (date: Date, option: Intl.DateTimeFormatOptions) =>
  date.toLocaleDateString('en-US', option)

const HERO = ['Bring us the', 'hard problem']

export function ContactPage() {
  const afterHero = { '--i': letterCount(HERO) } as CSSProperties

  const [week, setWeek] = useState(0)
  const [days, setDays] = useState<Date[]>([])
  const [dayIndex, setDayIndex] = useState(0)
  const [time, setTime] = useState(times[1])
  const [sent, setSent] = useState(false)

  // Computed after mount so the server and the browser never disagree on today.
  useEffect(() => setDays(weekdays(week)), [week])

  const chosen = days[dayIndex]
  const slot = chosen
    ? `${short(chosen, { weekday: 'long' })} ${chosen.getDate()} ${short(chosen, { month: 'long' })} at ${time} Nepal Time`
    : `${time} Nepal Time`

  function details(form: HTMLFormElement) {
    const data = new FormData(form)
    return `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nPreferred slot: ${slot}\n\nWhat they are building:\n${data.get('message')}`
  }

  // ponytail: mailto hand-off keeps this honest with no backend. Swap for a real
  // endpoint when you want the requests stored rather than emailed.
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const body = details(event.currentTarget)
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Discovery call request')}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  function sendOnWhatsapp(event: React.MouseEvent<HTMLButtonElement>) {
    const form = event.currentTarget.form
    if (!form?.reportValidity()) return
    window.open(whatsappLink(`Hi apphimalaya, I would like to book a call.\n\n${details(form)}`), '_blank', 'noopener')
    setSent(true)
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-[1440px] px-6 pb-16 pt-20 lg:px-10 lg:pt-28">
        <p className="eyebrow hl-before mb-8">Start a conversation / 03</p>
        <HeroHeadline lines={HERO} lastLineClassName="text-muted-foreground" className="max-w-4xl text-[2.75rem] sm:text-6xl lg:text-7xl" />
        <p style={afterHero} className="hl-after lede mt-10 text-pretty text-muted-foreground">
          Tell us what you are trying to change. We will bring the right people, the useful
          questions, and a practical next step — whether or not it ends up involving us.
        </p>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Reach us directly</h2>
            <p className="mt-3 text-[0.95rem] leading-7 text-muted-foreground">
              WhatsApp is fastest. We usually answer the same working day.
            </p>
            <div className="mt-6 flex flex-col items-start gap-4">
              <WhatsappLink className="bg-card" />
              <a
                href={`tel:+${site.whatsapp}`}
                className="border-b border-border pb-1 text-[0.95rem] transition-colors hover:border-accent hover:text-accent"
              >
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="border-b border-border pb-1 text-[0.95rem] transition-colors hover:border-accent hover:text-accent"
              >
                {site.email}
              </a>
            </div>
            <dl className="mt-12 space-y-5 border-t border-border pt-8 text-[0.95rem]">
              <div>
                <dt className="text-muted-foreground">Where we are</dt>
                <dd className="mt-1">{site.location}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Working hours</dt>
                <dd className="mt-1">Sunday to Friday, 9:00 – 18:00 Nepal Time</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Right now</dt>
                <dd className="mt-1 text-accent">Taking on new projects</dd>
              </div>
            </dl>
          </div>

          <form onSubmit={submit} className="border border-border bg-card p-6 sm:p-10">
            <h2 className="display text-2xl sm:text-3xl">Book a discovery call</h2>
            <p className="mt-2 text-[0.95rem] text-muted-foreground">30 minutes, no charge, no pitch deck.</p>

            <div className="mt-10 flex items-center justify-between">
              <h3 className="text-lg font-semibold tracking-tight">Pick a day</h3>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous week"
                  disabled={week === 0}
                  onClick={() => setWeek(week - 1)}
                  className="grid size-9 place-items-center border border-border transition-colors hover:border-accent disabled:opacity-35 disabled:hover:border-border"
                >
                  <ChevronLeft size={15} />
                </button>
                <button
                  type="button"
                  aria-label="Next week"
                  onClick={() => setWeek(week + 1)}
                  className="grid size-9 place-items-center border border-border transition-colors hover:border-accent"
                >
                  <ChevronRight size={15} />
                </button>
              </div>
            </div>
            <div className="mt-4 grid min-h-[92px] grid-cols-5 gap-2">
              {days.map((date, index) => (
                <button
                  type="button"
                  key={date.toISOString()}
                  onClick={() => setDayIndex(index)}
                  aria-pressed={dayIndex === index}
                  className={`border p-3 text-left transition-colors ${
                    dayIndex === index
                      ? 'border-accent bg-accent text-accent-foreground'
                      : 'border-border hover:border-accent/50'
                  }`}
                >
                  <span className="block text-xs opacity-70">{short(date, { weekday: 'short' })}</span>
                  <span className="mt-2 block text-xl font-semibold">{date.getDate()}</span>
                  <span className="mt-0.5 block text-xs opacity-70">{short(date, { month: 'short' })}</span>
                </button>
              ))}
            </div>

            <h3 className="mt-9 text-lg font-semibold tracking-tight">
              Pick a time <span className="font-normal text-muted-foreground">(Nepal Time)</span>
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {times.map((option) => (
                <button
                  type="button"
                  key={option}
                  onClick={() => setTime(option)}
                  aria-pressed={time === option}
                  className={`border px-3 py-3 text-sm font-semibold transition-colors ${
                    time === option
                      ? 'border-accent bg-accent text-accent-foreground'
                      : 'border-border hover:border-accent/50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-muted-foreground">
                Your name
                <input
                  required
                  name="name"
                  autoComplete="name"
                  className="mt-2 w-full border border-border bg-background px-3.5 py-3 text-[0.95rem] text-foreground outline-none transition-colors focus:border-accent"
                  placeholder="Jane Smith"
                />
              </label>
              <label className="text-sm text-muted-foreground">
                Work email
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="mt-2 w-full border border-border bg-background px-3.5 py-3 text-[0.95rem] text-foreground outline-none transition-colors focus:border-accent"
                  placeholder="jane@company.com"
                />
              </label>
            </div>
            <label className="mt-4 block text-sm text-muted-foreground">
              What are you building?
              <textarea
                required
                name="message"
                rows={4}
                className="mt-2 w-full resize-none border border-border bg-background px-3.5 py-3 text-[0.95rem] text-foreground outline-none transition-colors focus:border-accent"
                placeholder="A short description of the problem, the system, or the idea."
              />
            </label>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="flex-1 bg-accent px-5 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                {sent ? (
                  <>
                    <Check className="mr-2 inline size-4" /> Request prepared
                  </>
                ) : (
                  'Send booking request'
                )}
              </button>
              <button
                type="button"
                onClick={sendOnWhatsapp}
                className="border border-border px-5 py-3.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
              >
                Send on WhatsApp
              </button>
            </div>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              {sent
                ? 'We have opened your email or WhatsApp with the details filled in — send it and we will confirm the slot.'
                : `Both options open a message with ${slot} already filled in, so you can check it before it reaches us.`}
            </p>
          </form>
        </div>
      </section>

      <SiteFooter />
      <WhatsappBubble message="Hi apphimalaya, I would like to talk about a project." />
    </main>
  )
}
