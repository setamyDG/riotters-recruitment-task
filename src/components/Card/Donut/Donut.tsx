import { motion } from 'motion/react'

import { Badge } from '../../Badge'
import type { DonutProps } from './Donut.types'

const ILLUSTRATION_WIDTH = 448
const ILLUSTRATION_HEIGHT = 452
const LIGHTS_GROUP_SIZE = 480
const BEAM_ROTATION_SECONDS = 12

export const Donut = ({ topLabel, bottomLabel, children }: DonutProps) => (
  <div
    className="relative overflow-hidden"
    style={{
      width: ILLUSTRATION_WIDTH,
      height: ILLUSTRATION_HEIGHT,
    }}
  >
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none">
      <div
        className="absolute top-1/2 left-1/2"
        style={{
          width: 440,
          height: 436,
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#c7dfff',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2"
        style={{
          width: LIGHTS_GROUP_SIZE,
          height: LIGHTS_GROUP_SIZE,
          transform: 'translate(-50%, -50%)',
          filter: 'brightness(1.1) saturate(1.05)',
        }}
      >
        <div className="relative size-full">
          <img
            src="/card-assets/lights/blur.svg"
            alt=""
            className="absolute block max-w-none"
            style={{ left: 44, top: 44, width: 392, height: 392 }}
          />
          <img
            src="/card-assets/lights/blur1.svg"
            alt=""
            className="absolute block max-w-none"
            style={{
              left: 98,
              top: 92,
              width: 292,
              height: 292,
              mixBlendMode: 'plus-lighter',
            }}
          />
          <img
            src="/card-assets/lights/blur2.svg"
            alt=""
            className="absolute block max-w-none"
            style={{ left: 14.1, top: 14.1, width: 451.8, height: 451.8 }}
          />
          <img
            src="/card-assets/lights/light.svg"
            alt=""
            className="absolute block max-w-none"
            style={{
              left: 97,
              top: 91,
              width: 293,
              height: 293,
              mixBlendMode: 'plus-lighter',
            }}
          />
          <motion.div
            className="absolute inset-0"
            style={{ mixBlendMode: 'screen' }}
            animate={{ rotate: 360 }}
            transition={{ duration: BEAM_ROTATION_SECONDS, repeat: Infinity, ease: 'linear' }}
          >
            <div
              className="absolute flex items-center justify-center"
              style={{ left: 183, top: 17, width: 57, height: 119 }}
            >
              <div className="flex-none" style={{ transform: 'rotate(-64.41deg)' }}>
                <div className="relative" style={{ width: 131.947, height: 0 }}>
                  <img
                    src="/card-assets/lights/light1.svg"
                    alt=""
                    className="absolute block max-w-none"
                    style={{ left: -208.04, top: -208, width: 547.947, height: 416 }}
                  />
                </div>
              </div>
            </div>
            <div
              className="absolute flex items-center justify-center"
              style={{ left: 201, top: 336, width: 77, height: 154 }}
            >
              <div className="flex-none" style={{ transform: 'rotate(116.57deg)' }}>
                <div className="relative" style={{ width: 172.177, height: 0 }}>
                  <img
                    src="/card-assets/lights/light2.svg"
                    alt=""
                    className="absolute block max-w-none"
                    style={{ left: -248.04, top: -248, width: 668.177, height: 496 }}
                  />
                </div>
              </div>
            </div>
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
