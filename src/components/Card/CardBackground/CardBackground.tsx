import { AnimatedStrokePath, AnimatedSvgRect } from '../svgDraw'
import {
  BACKGROUND_RECTS,
  BG_DRAW,
  BG_VIEWBOX,
  LEFT_PATHS,
  RIGHT_PATHS,
} from './CardBackground.const'

export const CardBackground = () => (
  <div className="pointer-events-none absolute inset-0 hidden xl:block" aria-hidden="true">
    <svg
      viewBox={`0 0 ${String(BG_VIEWBOX.width)} ${String(BG_VIEWBOX.height)}`}
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {LEFT_PATHS.map((path) => (
        <AnimatedStrokePath key={path.d} {...path} timing={BG_DRAW} />
      ))}
      {RIGHT_PATHS.map((path) => (
        <AnimatedStrokePath key={path.d} {...path} timing={BG_DRAW} />
      ))}
      {BACKGROUND_RECTS.map((rect) => (
        <AnimatedSvgRect
          key={`${String(rect.x)}-${String(rect.y)}-${rect.transform}`}
          {...rect}
          timing={BG_DRAW}
        />
      ))}
    </svg>
  </div>
)
