import type { CSSProperties } from 'react'

export interface LightLayer {
  src: string
  left: number
  top: number
  width: number
  height: number
  mixBlendMode?: CSSProperties['mixBlendMode']
}

export interface Beam {
  src: string
  container: { left: number; top: number; width: number; height: number }
  rotationDeg: number
  track: { width: number; height: number }
  image: { left: number; top: number; width: number; height: number }
}

export interface DonutProps {
  topLabel: string
  bottomLabel: string
}
