import { AnimatedStrokePath, AnimatedSvgRect } from '../svgDraw'
import {
  MOBILE_DRAW,
  MOBILE_LEFT_PATHS,
  MOBILE_RECTS,
  MOBILE_RIGHT_PATHS,
  MOBILE_VIEWBOX,
} from './CardMobileLine.const'

interface CardMobileLineProps {
  className?: string
}

export const CardMobileLine = ({ className }: CardMobileLineProps) => (
  <div className={className} aria-hidden="true">
    <svg
      viewBox={`0 0 ${String(MOBILE_VIEWBOX.width)} ${String(MOBILE_VIEWBOX.height)}`}
      className="h-auto w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {MOBILE_LEFT_PATHS.map((path) => (
        <AnimatedStrokePath key={path.d} {...path} timing={MOBILE_DRAW} />
      ))}
      {MOBILE_RIGHT_PATHS.map((path) => (
        <AnimatedStrokePath key={path.d} {...path} timing={MOBILE_DRAW} />
      ))}
      {MOBILE_RECTS.map((rect) => (
        <AnimatedSvgRect
          key={`${String(rect.x)}-${String(rect.y)}-${rect.transform}`}
          {...rect}
          timing={MOBILE_DRAW}
        />
      ))}
    </svg>
  </div>
)
