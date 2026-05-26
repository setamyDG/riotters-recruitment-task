import { STROKE_COLOR } from '../svgDraw'
import type { DrawTiming, StrokePathConfig, SvgRectConfig } from '../svgDraw.types'

export const MOBILE_VIEWBOX = { width: 802, height: 57 } as const

export const MOBILE_DRAW: DrawTiming = {
  duration: 1.1,
  ease: [0.22, 1, 0.36, 1],
  rectDelay: 0.42,
  rectDuration: 0.5,
}

/** Left branch: from the left edge toward the center. */
export const MOBILE_LEFT_PATHS: StrokePathConfig[] = [
  {
    d: 'M400.5 46.6485L340.657 46.6485C308.698 46.6485 277.238 38.7203 249.096 23.5743C220.953 8.42822 189.493 0.500037 157.534 0.500034L0 0.500018',
    delay: 0,
    drawFrom: 'end',
  },
]

/** Right branch: from the right edge toward the center. */
export const MOBILE_RIGHT_PATHS: StrokePathConfig[] = [
  {
    d: 'M398 46.6482L461.378 46.6482C493.317 46.6482 524.76 38.7468 552.904 23.6482C581.049 8.5496 612.492 0.648231 644.431 0.648227L802 0.648211',
    delay: 0,
    drawFrom: 'end',
  },
]

export const MOBILE_RECTS: SvgRectConfig[] = [
  {
    x: 420.5,
    y: 56.1482,
    width: 43,
    height: 19,
    rx: 9.5,
    transform: 'rotate(-180 420.5 56.1482)',
    fill: '#F2F7FE',
    stroke: STROKE_COLOR,
  },
  {
    x: 416.5,
    y: 52.1482,
    width: 35,
    height: 11,
    rx: 5.5,
    transform: 'rotate(-180 416.5 52.1482)',
    fill: 'white',
    stroke: STROKE_COLOR,
  },
]
