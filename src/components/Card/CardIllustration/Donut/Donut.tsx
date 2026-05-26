import { motion } from 'motion/react'

import { Badge } from '../../../Badge'
import type { Beam, DonutProps } from './Donut.types'
import { DigitGrid } from './DigitGrid'
import {
  ILLUSTRATION_WIDTH,
  ILLUSTRATION_HEIGHT,
  HALO_WIDTH,
  HALO_HEIGHT,
  HALO_COLOR,
  LIGHTS_GROUP_SIZE,
  BEAM_ROTATION_SECONDS,
  LIGHT_LAYERS,
  BEAMS,
} from './Donut.const'

const RotatingBeam = ({ src, container, rotationDeg, track, image }: Beam) => (
  <div className="absolute flex items-center justify-center" style={container}>
    <div className="flex-none" style={{ transform: `rotate(${String(rotationDeg)}deg)` }}>
      <div className="relative" style={track}>
        <img src={src} alt="" className="absolute block max-w-none" style={image} />
      </div>
    </div>
  </div>
)

export const Donut = ({ topLabel, bottomLabel }: DonutProps) => (
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
    <div className="absolute inset-0 flex items-center justify-center">
      <DigitGrid />
    </div>
  </div>
)
