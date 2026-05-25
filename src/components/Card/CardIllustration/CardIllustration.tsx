import { DigitGrid } from '../DigitGrid'
import { Donut } from '../Donut'
import { LightningIcon } from '../LightningIcon'
import type { CardIllustrationProps } from './CardIllustration.types'

const CornerIcon = () => (
  <img src="/card-assets/close-icon.svg" alt="" aria-hidden="true" width={23} height={23} />
)

const CardCornerMarkers = () => (
  <>
    <div className="absolute top-3 right-3 left-3 z-10 flex items-center justify-between md:top-4 md:right-4 md:left-4">
      <CornerIcon />
      <CornerIcon />
    </div>
    <div className="absolute right-3 bottom-3 left-3 z-10 flex items-center justify-between md:right-4 md:bottom-4 md:left-4">
      <CornerIcon />
      <CornerIcon />
    </div>
  </>
)

export const CardIllustration = ({ topBadge, bottomBadge }: CardIllustrationProps) => (
  <div className="mt-10 flex justify-center xl:mt-18">
    <div className="card-illustration relative overflow-hidden">
      <div className="flex h-full w-full items-center justify-center">
        <div className="origin-center scale-[0.7] md:scale-100">
          <Donut topLabel={topBadge} bottomLabel={bottomBadge}>
            <DigitGrid>
              <div className="mt-6">
                <LightningIcon />
              </div>
            </DigitGrid>
          </Donut>
        </div>
      </div>
      <CardCornerMarkers />
    </div>
  </div>
)
