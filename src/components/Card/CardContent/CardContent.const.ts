import type { Transition } from 'motion/react'

const TEXT_EASE = [0.22, 1, 0.36, 1] as const

export const TEXT_ENTRANCE = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
} as const

export const TEXT_DELAYS = {
  badge: 0.18,
  title: 0.3,
  description: 0.42,
} as const

export const textTransition = (delay: number): Transition => ({
  opacity: { duration: 0.95, ease: TEXT_EASE, delay },
  y: { duration: 1.15, ease: TEXT_EASE, delay },
})
