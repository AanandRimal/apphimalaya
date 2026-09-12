/** The Himalaya drawn as a contour line rather than a picture of a mountain. */
export function Ridgeline({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 170"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`h-24 w-full sm:h-32 lg:h-40 ${className}`}
      fill="none"
    >
      <path
        className="ridge-faint"
        stroke="currentColor"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
        d="M0 158 L150 112 L250 134 L360 70 L430 98 L540 40 L620 86 L720 58 L830 120 L930 90 L1060 132 L1160 102 L1280 140 L1440 108"
      />
      <path
        className="ridge"
        stroke="currentColor"
        strokeWidth="1.25"
        vectorEffect="non-scaling-stroke"
        d="M0 168 L120 138 L230 156 L330 104 L410 128 L500 74 L580 112 L690 88 L800 146 L900 118 L1010 152 L1140 126 L1250 160 L1440 134"
      />
    </svg>
  )
}
