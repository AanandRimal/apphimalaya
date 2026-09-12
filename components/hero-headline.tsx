import { Fragment, type CSSProperties } from 'react'

/**
 * Renders a headline that assembles itself on load: letters rise out of the
 * baseline one after another, then the full stop travels in from the right and
 * settles. Pure CSS — the stagger is just an index handed to each span.
 *
 * Word gaps are real space characters rather than CSS margins, so the headline
 * still reads as a sentence to crawlers and screen readers walking the DOM.
 * Spacing it with margins instead makes every h1 on the site index as one
 * run-on token ("Buildtheunbelievable").
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
          <Fragment key={lineIndex}>
            {/* Collapses to nothing between two blocks, but keeps the lines
                from running together as one word in the text content. */}
            {lineIndex > 0 && ' '}
            <span className={`block ${isLast ? lastLineClassName : ''}`}>
              {line.split(' ').map((word, wordIndex, words) => {
                const carriesDot = isLast && wordIndex === words.length - 1
                // Built first so the letters claim their stagger indices before
                // the full stop takes the next one.
                const letters = (
                  <span className="hl-word">
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
                )
                return (
                  <Fragment key={wordIndex}>
                    {wordIndex > 0 && ' '}
                    {carriesDot ? (
                      // The last word and the full stop are one unbreakable
                      // unit. Left loose, the dot wraps onto a line of its own
                      // whenever the headline is wider than its column.
                      <span className="hl-tail">
                        {letters}
                        <span className="hl-dot" style={{ '--i': index } as CSSProperties}>
                          .
                        </span>
                      </span>
                    ) : (
                      letters
                    )}
                  </Fragment>
                )
              })}
            </span>
          </Fragment>
        )
      })}
    </h1>
  )
}

/** Delay index for anything that should arrive after the headline finishes. */
export function letterCount(lines: string[]) {
  return lines.join('').replace(/ /g, '').length + 1
}
