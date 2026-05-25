import { Badge } from '../../Badge'
import { Typography } from '../../Typography'
import type { CardContentProps } from './CardContent.types'

export const CardContent = ({ badge, title, description }: CardContentProps) => (
  <div className="max-w-card-mobile flex w-full flex-col items-center gap-12 xl:contents xl:max-w-none">
    <img src="/card-assets/logo-icon.svg" alt="logo icon" className="h-7 w-[30px] sm:hidden" />
    <div className="flex w-full flex-col items-center gap-5 xl:contents">
      <div className="flex flex-col items-center justify-center xl:mt-1">
        <Badge label={badge} />
      </div>
      <div className="max-w-card-content flex w-full flex-col gap-3 md:max-w-none xl:mt-[86px] xl:gap-4 xl:px-[130px]">
        <div className="xl:px-26">
          <Typography variant="newsreader-400-48" as="h1">
            {title}
          </Typography>
        </div>
        <div className="xl:px-56">
          <Typography variant="inter-400" className="whitespace-pre-line">
            {description}
          </Typography>
        </div>
      </div>
    </div>
  </div>
)
