import { motion } from 'motion/react'

import { Badge } from '../Badge'
import { Typography } from '../Typography'
import { DigitGrid } from './DigitGrid'
import { Donut } from './Donut'
import { LightningIcon } from './LightningIcon'
import { CloseIcon } from './CloseIcon'

const ENTRANCE = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
}

interface CardProps {
  cardBadge: string
  cardTitle: string
  cardDescription: string
  cardIllustrationTopBadge: string
  cardIllustrationBottomBadge: string
}

export const Card = ({
  cardBadge,
  cardTitle,
  cardDescription,
  cardIllustrationTopBadge,
  cardIllustrationBottomBadge,
}: CardProps) => (
  <motion.div
    className="flex w-[1190px] flex-col items-center xl:h-[884px] xl:bg-[url('/card-assets/bg.svg')]"
    initial={ENTRANCE.initial}
    animate={ENTRANCE.animate}
    transition={ENTRANCE.transition}
  >
    <div className="flex w-full max-w-[480px] flex-col items-center gap-12 xl:contents xl:max-w-none">
      <img src="/card-assets/logo-icon.svg" alt="" className="h-7 w-[30px] sm:hidden" />
      <div className="flex w-full flex-col items-center gap-5 xl:contents">
        <div className="flex flex-col items-center justify-center xl:mt-1">
          <Badge label={cardBadge} />
        </div>
        <div className="flex w-full max-w-[342px] flex-col gap-3 md:max-w-none xl:mt-[86px] xl:gap-4 xl:px-[130px]">
          <Typography variant="newsreader-400-48">{cardTitle}</Typography>
          <Typography variant="inter-400">{cardDescription}</Typography>
        </div>
      </div>
    </div>
    <div className="mt-10 flex justify-center xl:mt-18">
      <div className="card-illustration relative overflow-hidden">
        <div className="flex h-full w-full items-center justify-center">
          <div className="origin-center scale-[0.7148] md:scale-100">
            <Donut topLabel={cardIllustrationTopBadge} bottomLabel={cardIllustrationBottomBadge}>
              <DigitGrid>
                <div className="mt-6">
                  <LightningIcon />
                </div>
              </DigitGrid>
            </Donut>
          </div>
        </div>
        <div className="absolute top-3 right-3 left-3 z-10 flex items-center justify-between md:top-4 md:right-4 md:left-4">
          <CloseIcon />
          <CloseIcon />
        </div>
        <div className="absolute right-3 bottom-3 left-3 z-10 flex items-center justify-between md:right-4 md:bottom-4 md:left-4">
          <CloseIcon />
          <CloseIcon />
        </div>
      </div>
    </div>
    <img
      src="/card-assets/mobile-line.svg"
      alt=""
      aria-hidden="true"
      className="mt-10 w-full xl:hidden"
    />
  </motion.div>
)
