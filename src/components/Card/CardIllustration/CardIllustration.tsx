import { Donut } from './Donut'
import type { CardIllustrationProps } from './CardIllustration.types'
import { CornerMarks } from './CornerMarks'

export const CardIllustration = ({ topBadge, bottomBadge }: CardIllustrationProps) => (
  <div className="mt-10 flex justify-center xl:mt-18">
    <div className="card-illustration relative overflow-hidden">
      <div className="flex h-full w-full items-center justify-center">
        <div className="origin-center scale-[0.7] md:scale-100">
          <Donut topLabel={topBadge} bottomLabel={bottomBadge} />
        </div>
      </div>
      <CornerMarks />
    </div>
  </div>
)
