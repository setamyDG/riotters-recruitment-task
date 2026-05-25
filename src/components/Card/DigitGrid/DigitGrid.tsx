import { motion } from 'motion/react'
import type { ReactNode } from 'react'

const ROWS = 10
const COLS = 9

const STAGGER_STEP = 0.05
const STAGGER_RANGE = 16

const makeGrid = () =>
  Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => (Math.random() > 0.5 ? '1' : '0')),
  )

export const DigitGrid = ({ children }: { children?: ReactNode }) => {
  const grid = makeGrid()

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
      {children && (
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  )
}
