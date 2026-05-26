import type { EntranceAnimation } from './Card.types'

const ENTRANCE_EASE = [0.22, 1, 0.36, 1] as const

export const ENTRANCE: EntranceAnimation = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: {
    opacity: { duration: 1.05, ease: ENTRANCE_EASE },
    y: { duration: 1.3, ease: ENTRANCE_EASE },
  },
}
