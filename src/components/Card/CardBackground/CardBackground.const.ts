import { STROKE_COLOR } from '../svgDraw'
import type { DrawTiming, StrokePathConfig, SvgRectConfig } from '../svgDraw.types'

export const BG_VIEWBOX = { width: 1191, height: 884 } as const

export const BG_DRAW: DrawTiming = {
  duration: 1.15,
  ease: [0.22, 1, 0.36, 1],
  rectDelay: 0.85,
  rectDuration: 0.5,
}

/** Paths drawn from the left edge toward the center. */
export const LEFT_PATHS: StrokePathConfig[] = [
  { d: 'M0.5 53L0.500034 828', delay: 0 },
  {
    d: 'M594.5 22.6413L508.852 22.6413C485.943 22.6413 463.219 26.7533 441.762 34.7817C420.305 42.8101 397.582 46.9221 374.672 46.9221L71.6176 46.9221C64.5105 46.9221 57.6071 44.5479 52.0034 40.1766L37.4968 28.8603C22.4548 17.1264 0.500007 27.8447 0.5 46.922L0.500004 77',
    delay: 0.12,
    drawFrom: 'end',
  },
  {
    d: 'M594.5 874L341.157 874C309.198 874 277.738 866.072 249.596 850.926C221.453 835.78 189.993 827.852 158.034 827.852L0.5 827.852',
    delay: 0.28,
    drawFrom: 'end',
  },
  {
    d: 'M262.5 527V559.598C262.5 569.273 265.424 578.722 270.887 586.706L293.113 619.184C298.576 627.168 301.5 636.617 301.5 646.292V704.333C301.5 708.463 299.376 712.303 295.878 714.498L257.945 738.299C249.737 743.449 250.703 755.702 259.617 759.503L331.66 790.216C332.874 790.733 334.18 791 335.5 791',
    delay: 0.4,
    drawFrom: 'end',
  },
  {
    d: 'M335.5 527L232.912 527C218.225 527 204.346 533.724 195.243 545.25L161.678 587.75C152.575 599.276 138.697 606 124.009 606L0.499993 606',
    delay: 0.52,
    drawFrom: 'end',
  },
  { d: 'M335.5 527H594.5', delay: 0.58 },
  { d: 'M335.5 791H594.5', delay: 0.64 },
]

/** Paths drawn from the right edge toward the center. */
export const RIGHT_PATHS: StrokePathConfig[] = [
  { d: 'M1188.5 53L1188.5 828', delay: 0 },
  {
    d: 'M594.5 22.6413L680.148 22.6413C703.057 22.6413 725.781 26.7533 747.238 34.7817C768.695 42.8101 791.418 46.9221 814.328 46.9221L1117.38 46.9221C1124.49 46.9221 1131.39 44.5479 1137 40.1766L1151.5 28.8603C1166.55 17.1264 1188.5 27.8447 1188.5 46.922L1188.5 77',
    delay: 0.12,
    drawFrom: 'end',
  },
  {
    d: 'M593.5 874L847.878 874C879.817 874 911.26 866.099 939.404 851C967.549 835.901 998.992 828 1030.93 828L1188.5 828',
    delay: 0.28,
    drawFrom: 'end',
  },
  {
    d: 'M924.5 527V559.598C924.5 569.273 921.576 578.722 916.113 586.706L893.887 619.184C888.424 627.168 885.5 636.617 885.5 646.292V704.333C885.5 708.463 887.624 712.303 891.122 714.498L928.949 738.232C937.178 743.396 936.181 755.687 927.228 759.457L853.5 790.5L853.394 790.553C852.806 790.847 852.158 791 851.5 791',
    delay: 0.4,
    drawFrom: 'end',
  },
  {
    d: 'M855.5 527L958.088 527C972.775 527 986.654 533.724 995.757 545.25L1029.32 587.75C1038.42 599.276 1052.3 606 1066.99 606L1190.5 606',
    delay: 0.52,
    drawFrom: 'end',
  },
  { d: 'M594.5 527H855.5', delay: 0.58, drawFrom: 'end' },
  { d: 'M594.5 791H851.5', delay: 0.64, drawFrom: 'end' },
]

export const BACKGROUND_RECTS: SvgRectConfig[] = [
  {
    x: 616,
    y: 883.5,
    width: 43,
    height: 19,
    rx: 9.5,
    transform: 'rotate(-180 616 883.5)',
    fill: '#F2F7FE',
    stroke: STROKE_COLOR,
  },
  {
    x: 612,
    y: 879.5,
    width: 35,
    height: 11,
    rx: 5.5,
    transform: 'rotate(-180 612 879.5)',
    fill: 'white',
    stroke: STROKE_COLOR,
  },
  {
    x: 102.5,
    y: 615.5,
    width: 43,
    height: 19,
    rx: 9.5,
    transform: 'rotate(-180 102.5 615.5)',
    fill: '#F2F7FE',
    stroke: STROKE_COLOR,
  },
  {
    x: 98.5,
    y: 611.5,
    width: 35,
    height: 11,
    rx: 5.5,
    transform: 'rotate(-180 98.5 611.5)',
    fill: 'white',
    stroke: STROKE_COLOR,
  },
  {
    x: 0.5,
    y: -0.5,
    width: 43,
    height: 19,
    rx: 9.5,
    transform: 'matrix(1 -8.74228e-08 -8.74228e-08 -1 1086 615)',
    fill: '#F2F7FE',
    stroke: STROKE_COLOR,
  },
  {
    x: 0.5,
    y: -0.5,
    width: 35,
    height: 11,
    rx: 5.5,
    transform: 'matrix(1 -8.74228e-08 -8.74228e-08 -1 1090 611)',
    fill: 'white',
    stroke: STROKE_COLOR,
  },
]
