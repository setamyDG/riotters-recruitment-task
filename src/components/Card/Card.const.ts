import type { EntranceAnimation } from './Card.types'

export const ENTRANCE: EntranceAnimation = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
}
