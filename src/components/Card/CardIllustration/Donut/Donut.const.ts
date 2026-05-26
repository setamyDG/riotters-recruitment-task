import type { Beam, LightLayer } from './Donut.types'

export const ILLUSTRATION_WIDTH = 448
export const ILLUSTRATION_HEIGHT = 452
export const LIGHTS_GROUP_SIZE = 480
export const BEAM_ROTATION_SECONDS = 12

export const HALO_WIDTH = 440
export const HALO_HEIGHT = 436
export const HALO_COLOR = '#c7dfff'

export const LIGHT_LAYERS: LightLayer[] = [
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

export const BEAMS: Beam[] = [
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
