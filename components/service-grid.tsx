'use client'

import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

const services = [
  ['01', 'Legacy modernization', 'We take over the systems your business already runs on — undocumented, unloved, critical — and move them forward without stopping the business.'],
  ['02', 'Contract engineering teams', 'Senior engineers who join your standups, your repo and your standards, for a project or for as long as you need them.'],
  ['03', 'Product engineering', 'Web platforms, mobile apps, SaaS products, internal systems, and the infrastructure behind them.'],
  ['04', 'Idea validation & AI', 'A focused POC that puts your riskiest assumption in front of real users, and AI applied only where it earns its place.'],
]

export function ServiceGrid() {
  const [selected, setSelected] = useState(0)

  return (
    <div className="grid border-l border-t border-border md:grid-cols-2">
      {services.map(([number, title, description], index) => (
        <button
          key={number}
          onClick={() => setSelected(index)}
          aria-pressed={selected === index}
          className={`min-h-[260px] border-b border-r border-border p-7 text-left transition-colors sm:p-9 ${
            selected === index ? 'bg-primary text-primary-foreground' : 'hover:bg-card'
          }`}
        >
          <div className="flex justify-between font-mono text-xs opacity-60">
            <span>{number}</span>
            <ArrowUpRight size={18} />
          </div>
          <div className="mt-16">
            <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">{title}</h3>
            <p className="mt-4 max-w-md text-sm leading-6 opacity-70">{description}</p>
          </div>
        </button>
      ))}
    </div>
  )
}
