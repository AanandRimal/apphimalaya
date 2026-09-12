'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav } from '@/lib/site'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="border-b border-border bg-primary px-6 py-2 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-primary-foreground sm:text-left lg:px-10">
        Software for people moving the world forward · Nepal / Worldwide
      </div>
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 lg:px-10">
        <a href="/" className="text-[0.95rem] font-semibold tracking-tight">
          apphimalaya<span className="text-muted-foreground">.com.np</span>
        </a>
        <nav className="hidden gap-8 font-mono text-[10px] uppercase tracking-widest text-muted-foreground lg:flex">
          {nav.map(([href, label]) => (
            <a key={href} href={href} className="transition-colors hover:text-foreground">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="/contact"
            className="hidden bg-accent px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-accent-foreground transition-opacity hover:opacity-90 sm:block"
          >
            Start a project
          </a>
          <button
            className="grid size-10 place-items-center border border-border lg:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col border-t border-border px-6 font-mono text-xs uppercase tracking-widest lg:hidden">
          {nav.map(([href, label]) => (
            <a key={href} href={href} className="border-b border-border py-4">
              {label}
            </a>
          ))}
          <a href="/contact" className="py-4 text-accent">
            Start a project
          </a>
        </nav>
      )}
      </header>
    </>
  )
}
