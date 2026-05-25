import type { ReactNode } from 'react'

export type TypographyVariant = 'inter-400' | 'inter-500' | 'newsreader-400-48'

export interface TypographyProps {
  variant: TypographyVariant
  children: ReactNode
  className?: string
  as?: 'span' | 'p' | 'h1'
}
