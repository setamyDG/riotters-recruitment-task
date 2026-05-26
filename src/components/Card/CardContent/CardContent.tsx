import { motion } from 'motion/react'

import { Badge } from '../../Badge'
import { Typography } from '../../Typography'
import { TEXT_DELAYS, TEXT_ENTRANCE, textTransition } from './CardContent.const'
import type { CardContentProps } from './CardContent.types'

export const CardContent = ({ badge, title, description }: CardContentProps) => (
  <div className="max-w-card-mobile flex w-full flex-col items-center gap-12 xl:contents xl:max-w-none">
    <img src="/card-assets/logo-icon.svg" alt="logo icon" className="h-7 w-[30px] sm:hidden" />
    <div className="flex w-full flex-col items-center gap-5 xl:contents">
      <motion.div
        className="flex flex-col items-center justify-center xl:mt-1"
        initial={TEXT_ENTRANCE.initial}
        animate={TEXT_ENTRANCE.animate}
        transition={textTransition(TEXT_DELAYS.badge)}
      >
        <Badge label={badge} />
      </motion.div>
      <div className="max-w-card-content flex w-full flex-col gap-3 md:max-w-none xl:mt-[86px] xl:gap-4 xl:px-[130px]">
        <motion.div
          className="xl:px-26"
          initial={TEXT_ENTRANCE.initial}
          animate={TEXT_ENTRANCE.animate}
          transition={textTransition(TEXT_DELAYS.title)}
        >
          <Typography variant="newsreader-400-48" as="h1">
            {title}
          </Typography>
        </motion.div>
        <motion.div
          className="xl:px-56"
          initial={TEXT_ENTRANCE.initial}
          animate={TEXT_ENTRANCE.animate}
          transition={textTransition(TEXT_DELAYS.description)}
        >
          <Typography variant="inter-400" className="whitespace-pre-line">
            {description}
          </Typography>
        </motion.div>
      </div>
    </div>
  </div>
)
