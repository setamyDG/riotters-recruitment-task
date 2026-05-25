import { Typography } from '../Typography'

interface BadgeProps {
  label: string
}

export const Badge = ({ label }: BadgeProps) => (
  <div className="badge">
    <Typography variant="inter-500">{label}</Typography>
  </div>
)
