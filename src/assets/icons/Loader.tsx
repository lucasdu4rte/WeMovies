import React from "react"

function Loader(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <radialGradient id="grad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style={{ stopColor: 'transparent' }} />
          <stop offset="100%" style={{ stopColor: 'gray' }} />
        </radialGradient>
      </defs>
      <circle
        cx="50"
        cy="50"
        r="46"
        fill="none"
        strokeWidth="4"
        stroke="url(#grad)"
        strokeDasharray="180 180"
        transform="rotate(90 50 50)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  )
}

export default Loader
