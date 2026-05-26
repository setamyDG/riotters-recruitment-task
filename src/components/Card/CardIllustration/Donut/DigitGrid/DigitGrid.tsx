import { motion } from 'motion/react'

import { ROWS, COLS, STAGGER_STEP, STAGGER_RANGE } from './DigitGrid.const'
import { LightningIcon } from '../LightningIcon'

export const DigitGrid = () => {
  const grid = Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => (Math.random() > 0.5 ? '1' : '0')),
  )

  return (
    <div className="numbers-container flex items-center justify-center">
      <div
        className="pointer-events-none grid gap-x-3 gap-y-2.5 select-none"
        style={{ gridTemplateColumns: 'repeat(9, auto)' }}
      >
        {grid.flat().map((digit, i) => (
          <motion.span
            key={`${String(i)}-${digit}`}
            className="w-2 text-center font-mono text-xs leading-none text-[#9BBDE8]"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0, 1] }}
            transition={{
              duration: 0.5,
              ease: 'easeIn',
              repeat: Infinity,
              repeatType: 'loop',
              delay: ((i * 11) % STAGGER_RANGE) * STAGGER_STEP,
            }}
          >
            {digit}
          </motion.span>
        ))}
      </div>
      <img
        src="/card-assets/mask.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 block max-w-none -translate-x-1/2 -translate-y-1/2 select-none"
        width={242}
        height={242}
      />
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <div className="mt-6">
          <LightningIcon />
        </div>
      </div>
    </div>
  )
}
