import type { CSSProperties } from 'react'

/**
 * Renders a headline that assembles itself on load: letters rise out of the
 * baseline one after another, then the full stop travels in from the right and
 * settles. Pure CSS — the stagger is just an index handed to each span.
 */
export function HeroHeadline({
  lines,
  lastLineClassName = '',
  className = '',
}: {
  lines: string[]
  lastLineClassName?: string
  className?: string
}) {
  let index = 0

  return (
    <h1 className={`display ${className}`}>
      {lines.map((line, lineIndex) => {
        const isLast = lineIndex === lines.length - 1
        return (
          <span key={lineIndex} className={`block ${isLast ? lastLineClassName : ''}`}>
            {line.split(' ').map((word, wordIndex) => (
              <span key={wordIndex} className="hl-word">
                {[...word].map((character, characterIndex) => (
                  <span
                    key={characterIndex}
                    className="hl-letter"
                    style={{ '--i': index++ } as CSSProperties}
                  >
                    {character}
                  </span>
                ))}
              </span>
            ))}
            {isLast && (
              <span className="hl-dot" style={{ '--i': index } as CSSProperties} aria-hidden="true">
                .
              </span>
            )}
          </span>
        )
      })}
    </h1>
  )
}

/** Delay index for anything that should arrive after the headline finishes. */
export function letterCount(lines: string[]) {
  return lines.join('').replace(/ /g, '').length + 1
}
