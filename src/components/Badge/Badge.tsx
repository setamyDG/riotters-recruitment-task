import { Typography } from '../Typography'
import type { BadgeProps } from './Badge.types'

export const Badge = ({ label }: BadgeProps) => (
  <div className="badge">
    <Typography variant="inter-500">{label}</Typography>
  </div>
)
