import { motion } from 'motion/react'

import type { DrawTiming, StrokePathConfig, SvgRectConfig } from './svgDraw.types'

export const STROKE_COLOR = '#C7DFFF'

export const AnimatedStrokePath = ({
  d,
  delay,
  drawFrom = 'start',
  timing,
}: StrokePathConfig & { timing: DrawTiming }) => (
  <motion.path
    d={d}
    fill="none"
    stroke={STROKE_COLOR}
    vectorEffect="non-scaling-stroke"
    initial={
      drawFrom === 'end' ? { pathLength: 0, pathOffset: 1 } : { pathLength: 0, pathOffset: 0 }
    }
    animate={{ pathLength: 1, pathOffset: 0 }}
    transition={{ duration: timing.duration, delay, ease: timing.ease }}
  />
)

export const AnimatedSvgRect = ({
  timing,
  ...rect
}: SvgRectConfig & { timing: DrawTiming }) => (
  <motion.rect
    {...rect}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      duration: timing.rectDuration,
      delay: timing.rectDelay,
      ease: timing.ease,
    }}
  />
)
