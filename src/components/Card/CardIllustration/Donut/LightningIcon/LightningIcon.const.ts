import type { Transition } from 'motion/react'

/** After card text (~1.57s) and background strokes (~1.79s). */
export const LIGHTNING_DELAY = 1.8

const LIGHTNING_EASE = [0.22, 1, 0.36, 1] as const

export const LIGHTNING_ENTRANCE = {
  initial: { opacity: 0, scale: 0.88 },
  animate: { opacity: 1, scale: 1 },
} as const

export const lightningTransition: Transition = {
  opacity: { duration: 0.7, ease: LIGHTNING_EASE, delay: LIGHTNING_DELAY },
  scale: { duration: 0.75, ease: LIGHTNING_EASE, delay: LIGHTNING_DELAY },
}
