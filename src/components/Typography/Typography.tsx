import type { ReactNode } from 'react'

type TypographyVariant = 'inter-400' | 'inter-500' | 'newsreader-400-48'

interface TypographyProps {
  variant: TypographyVariant
  children: ReactNode
  className?: string
  as?: 'span' | 'p' | 'h1'
}

export const Typography = ({
  variant,
  children,
  className = '',
  as: Tag = 'p',
}: TypographyProps) => (
  <Tag className={`typography typography-${variant} ${className}`.trim()}>{children}</Tag>
)
