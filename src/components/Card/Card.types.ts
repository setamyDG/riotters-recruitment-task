import type { Transition } from 'motion/react'

export interface CardProps {
  badge: string
  title: string
  description: string
  illustrationTopBadge: string
  illustrationBottomBadge: string
}

export interface EntranceAnimation {
  initial: { opacity: number; y: number }
  animate: { opacity: number; y: number }
  transition: Transition
}
