import type { TypographyProps } from './Typography.types'

export const Typography = ({
  variant,
  children,
  className = '',
  as: Tag = 'p',
}: TypographyProps) => (
  <Tag className={`typography typography-${variant} ${className}`.trim()}>{children}</Tag>
)
