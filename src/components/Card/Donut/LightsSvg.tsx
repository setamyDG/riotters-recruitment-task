import type { SVGProps } from 'react'

type SvgComponentProps = SVGProps<SVGSVGElement>

export const Blur = (props: SvgComponentProps) => (
  <svg
    preserveAspectRatio="none"
    width="100%"
    height="100%"
    overflow="visible"
    viewBox="0 0 392 392"
    fill="none"
    {...props}
  >
    <g filter="url(#donut-blur-filter)">
      <circle cx="196" cy="196" r="180" fill="white" fillOpacity="0.2" />
      <circle cx="196" cy="196" r="176" stroke="white" strokeWidth="8" />
    </g>
    <defs>
      <filter
        id="donut-blur-filter"
        x="0"
        y="0"
        width="392"
        height="392"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="8" result="effect1_foregroundBlur" />
      </filter>
    </defs>
  </svg>
)

export const Blur1 = (props: SvgComponentProps) => (
  <svg
    preserveAspectRatio="none"
    width="100%"
    height="100%"
    overflow="visible"
    viewBox="0 0 292 292"
    fill="none"
    {...props}
  >
    <g filter="url(#donut-blur1-filter)">
      <circle cx="146" cy="146" r="138" fill="#F0FFFF" />
    </g>
    <defs>
      <filter
        id="donut-blur1-filter"
        x="0"
        y="0"
        width="292"
        height="292"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur" />
      </filter>
    </defs>
  </svg>
)

export const Blur2 = (props: SvgComponentProps) => (
  <svg
    preserveAspectRatio="none"
    width="100%"
    height="100%"
    overflow="visible"
    viewBox="0 0 451.8 451.8"
    fill="none"
    {...props}
  >
    <g filter="url(#donut-blur2-filter)">
      <path
        d="M439.9 225.9C439.9 344.089 344.089 439.9 225.9 439.9C107.711 439.9 11.9 344.089 11.9 225.9C11.9 107.711 107.711 11.9 225.9 11.9C344.089 11.9 439.9 107.711 439.9 225.9ZM26.8056 225.9C26.8056 335.857 115.943 424.994 225.9 424.994C335.857 424.994 424.994 335.857 424.994 225.9C424.994 115.943 335.857 26.8056 225.9 26.8056C115.943 26.8056 26.8056 115.943 26.8056 225.9Z"
        fill="#FBFCFF"
      />
    </g>
    <defs>
      <filter
        id="donut-blur2-filter"
        x="0"
        y="0"
        width="451.8"
        height="451.8"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="5.95" result="effect1_foregroundBlur" />
      </filter>
    </defs>
  </svg>
)

export const Light = (props: SvgComponentProps) => (
  <svg
    preserveAspectRatio="none"
    width="100%"
    height="100%"
    overflow="visible"
    viewBox="0 0 293 293"
    fill="none"
    {...props}
  >
    <g filter="url(#donut-light-filter)">
      <circle cx="146.5" cy="146.5" r="138.5" fill="#FFECDD" />
    </g>
    <defs>
      <filter
        id="donut-light-filter"
        x="0"
        y="0"
        width="293"
        height="293"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur" />
      </filter>
    </defs>
  </svg>
)

export const Light1 = (props: SvgComponentProps) => (
  <svg
    preserveAspectRatio="none"
    width="100%"
    height="100%"
    overflow="visible"
    viewBox="0 0 547.947 416"
    fill="none"
    {...props}
  >
    <g filter="url(#donut-light1-filter)">
      <path
        d="M208 208H273.973H339.947"
        stroke="url(#donut-light1-gradient)"
        strokeWidth="240"
        strokeLinecap="round"
      />
    </g>
    <defs>
      <filter
        id="donut-light1-filter"
        x="0"
        y="0"
        width="547.947"
        height="416"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="44" result="effect1_foregroundBlur" />
      </filter>
      <linearGradient
        id="donut-light1-gradient"
        x1="296.663"
        y1="476.006"
        x2="407.443"
        y2="444.295"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopOpacity="0" />
        <stop offset="0.53" stopColor="white" />
        <stop offset="1" stopColor="white" />
      </linearGradient>
    </defs>
  </svg>
)

export const Light2 = (props: SvgComponentProps) => (
  <svg
    preserveAspectRatio="none"
    width="100%"
    height="100%"
    overflow="visible"
    viewBox="0 0 668.177 496"
    fill="none"
    {...props}
  >
    <g filter="url(#donut-light2-filter)">
      <path
        d="M248 248H334.089H420.177"
        stroke="url(#donut-light2-gradient)"
        strokeWidth="320"
        strokeLinecap="round"
      />
    </g>
    <defs>
      <filter
        id="donut-light2-filter"
        x="0"
        y="0"
        width="668.177"
        height="496"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="44" result="effect1_foregroundBlur" />
      </filter>
      <linearGradient
        id="donut-light2-gradient"
        x1="363.696"
        y1="516.006"
        x2="500.948"
        y2="464.738"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopOpacity="0" />
        <stop offset="0.53" stopColor="white" />
        <stop offset="1" stopColor="white" />
      </linearGradient>
    </defs>
  </svg>
)
