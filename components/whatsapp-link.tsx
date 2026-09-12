import { whatsappLink } from '@/lib/site'

/** Lucide ships no brand marks, so the glyph lives here. */
export function WhatsappGlyph({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.83 2.41a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.25 8.24Zm4.52-6.17c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.06s.89 2.39 1.01 2.55c.12.17 1.74 2.66 4.22 3.73.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  )
}

export function WhatsappLink({
  message = 'Hi apphimalaya, I have a project in mind.',
  className = '',
  children = 'Message on WhatsApp',
}: {
  message?: string
  className?: string
  children?: React.ReactNode
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2.5 border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent ${className}`}
    >
      <WhatsappGlyph className="size-4" />
      {children}
    </a>
  )
}

/** Always-reachable "talk to us" button, pinned to the corner of the page. */
export function WhatsappBubble({ message = 'Hi apphimalaya, I would like to talk.' }: { message?: string }) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Talk to us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full bg-accent py-3.5 pl-4 pr-5 text-accent-foreground shadow-lg shadow-black/40 transition-transform hover:scale-105"
    >
      <WhatsappGlyph className="size-6" />
      <span className="hidden font-mono text-[10px] uppercase tracking-widest sm:inline">Talk to us</span>
    </a>
  )
}
