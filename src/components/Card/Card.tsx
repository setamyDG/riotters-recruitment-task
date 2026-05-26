import { motion } from 'motion/react'

import { CardBackground } from './CardBackground'
import { CardMobileLine } from './CardMobileLine'
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
    <CardBackground />
    <div className="relative z-10 flex w-full flex-col items-center">
      <CardContent badge={badge} title={title} description={description} />
      <CardIllustration topBadge={illustrationTopBadge} bottomBadge={illustrationBottomBadge} />
    </div>
    <img
      src="/card-assets/mobile-line.svg"
      alt=""
      aria-hidden="true"
      className="mt-10 w-full xl:hidden"
    />
  </motion.div>
)
