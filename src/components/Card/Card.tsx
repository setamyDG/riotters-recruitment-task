import { motion } from 'motion/react'

import { CardContent } from './CardContent'
import { CardIllustration } from './CardIllustration'
import type { CardProps } from './Card.types'
import { ENTRANCE } from './Card.const'

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
