import { motion } from 'motion/react'

import { CardContent } from './CardContent'
import { CardIllustration } from './CardIllustration'
import type { CardProps } from './Card.types'

const ENTRANCE = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
}

export const Card = ({
  badge,
  title,
  description,
  illustrationTopBadge,
  illustrationBottomBadge,
}: CardProps) => (
  <motion.div
    className="card-root flex flex-col items-center"
    initial={ENTRANCE.initial}
    animate={ENTRANCE.animate}
    transition={ENTRANCE.transition}
  >
    <CardContent badge={badge} title={title} description={description} />
    <CardIllustration topBadge={illustrationTopBadge} bottomBadge={illustrationBottomBadge} />
    <img
      src="/card-assets/mobile-line.svg"
      alt=""
      aria-hidden="true"
      className="mt-10 w-full xl:hidden"
    />
  </motion.div>
)
