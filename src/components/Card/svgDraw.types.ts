export type DrawFrom = 'start' | 'end'

export interface StrokePathConfig {
  d: string
  delay: number
  drawFrom?: DrawFrom
}

export interface DrawTiming {
  duration: number
  ease: readonly [number, number, number, number]
  rectDelay: number
  rectDuration: number
}

export interface SvgRectConfig {
  x: number
  y: number
  width: number
  height: number
  rx: number
  transform: string
  fill: string
  stroke: string
}
