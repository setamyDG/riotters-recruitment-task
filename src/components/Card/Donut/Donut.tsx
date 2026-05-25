import { motion } from 'motion/react'
import type { CSSProperties } from 'react'

import { Badge } from '../../Badge'
import type { DonutProps } from './Donut.types'

const ILLUSTRATION_WIDTH = 448
const ILLUSTRATION_HEIGHT = 452
const LIGHTS_GROUP_SIZE = 480
const BEAM_ROTATION_SECONDS = 12

const HALO_WIDTH = 440
const HALO_HEIGHT = 436
const HALO_COLOR = '#c7dfff'

interface LightLayer {
  src: string
  left: number
  top: number
  width: number
  height: number
  mixBlendMode?: CSSProperties['mixBlendMode']
}

const LIGHT_LAYERS: LightLayer[] = [
  { src: '/card-assets/lights/blur.svg', left: 44, top: 44, width: 392, height: 392 },
  {
    src: '/card-assets/lights/blur1.svg',
    left: 98,
    top: 92,
    width: 292,
    height: 292,
    mixBlendMode: 'plus-lighter',
  },
  { src: '/card-assets/lights/blur2.svg', left: 14.1, top: 14.1, width: 451.8, height: 451.8 },
  {
    src: '/card-assets/lights/light.svg',
    left: 97,
    top: 91,
    width: 293,
    height: 293,
    mixBlendMode: 'plus-lighter',
  },
]

interface Beam {
  src: string
  container: { left: number; top: number; width: number; height: number }
  rotationDeg: number
  track: { width: number; height: number }
  image: { left: number; top: number; width: number; height: number }
}

const BEAMS: Beam[] = [
  {
    src: '/card-assets/lights/light1.svg',
    container: { left: 183, top: 17, width: 57, height: 119 },
    rotationDeg: -64.41,
    track: { width: 131.947, height: 0 },
    image: { left: -208.04, top: -208, width: 547.947, height: 416 },
  },
  {
    src: '/card-assets/lights/light2.svg',
    container: { left: 201, top: 336, width: 77, height: 154 },
    rotationDeg: 116.57,
    track: { width: 172.177, height: 0 },
    image: { left: -248.04, top: -248, width: 668.177, height: 496 },
  },
]

const RotatingBeam = ({ src, container, rotationDeg, track, image }: Beam) => (
  <div className="absolute flex items-center justify-center" style={container}>
    <div className="flex-none" style={{ transform: `rotate(${String(rotationDeg)}deg)` }}>
      <div className="relative" style={track}>
        <img src={src} alt="" className="absolute block max-w-none" style={image} />
      </div>
    </div>
  </div>
)

export const Donut = ({ topLabel, bottomLabel, children }: DonutProps) => (
  <div
    className="relative overflow-hidden"
    style={{ width: ILLUSTRATION_WIDTH, height: ILLUSTRATION_HEIGHT }}
  >
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none">
      <div
        className="absolute top-1/2 left-1/2"
        style={{
          width: HALO_WIDTH,
          height: HALO_HEIGHT,
          transform: 'translate(-50%, -50%)',
          backgroundColor: HALO_COLOR,
        }}
      />
      <div
        className="absolute top-1/2 left-1/2"
        style={{
          width: LIGHTS_GROUP_SIZE,
          height: LIGHTS_GROUP_SIZE,
          transform: 'translate(-50%, -50%)',
          filter: 'brightness(1.1)',
        }}
      >
        <div className="relative size-full">
          {LIGHT_LAYERS.map(({ src, mixBlendMode, ...rect }) => (
            <img
              key={src}
              src={src}
              alt=""
              className="absolute block max-w-none"
              style={{ ...rect, mixBlendMode }}
            />
          ))}
          <motion.div
            className="absolute inset-0"
            style={{ mixBlendMode: 'screen' }}
            animate={{ rotate: 360 }}
            transition={{ duration: BEAM_ROTATION_SECONDS, repeat: Infinity, ease: 'linear' }}
          >
            {BEAMS.map((beam) => (
              <RotatingBeam key={beam.src} {...beam} />
            ))}
          </motion.div>
        </div>
      </div>

      <img
        src="/card-assets/ellipse81.svg"
        alt=""
        className="absolute block max-w-none"
        style={{ left: -106.87, top: -105.87, width: 661.8, height: 661.8 }}
      />
    </div>
    {topLabel && (
      <div className="absolute top-6 left-1/2 z-10 -translate-x-1/2">
        <Badge label={topLabel} />
      </div>
    )}
    {bottomLabel && (
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <Badge label={bottomLabel} />
      </div>
    )}
    <div className="absolute inset-0 flex items-center justify-center">{children}</div>
  </div>
)
