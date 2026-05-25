import { render, screen } from '@testing-library/react'
import { Card } from '../Card'
import type { CardProps } from './Card.types'

const defaultProps: CardProps = {
  badge: 'Solution',
  title: 'Test card title',
  description: 'Test card description',
  illustrationTopBadge: 'Evaluate Stock',
  illustrationBottomBadge: 'Optimize Risk',
}

const renderCard = (overrides: Partial<CardProps> = {}) =>
  render(<Card {...defaultProps} {...overrides} />)

describe('Card', () => {
  it('renders the badge', () => {
    renderCard()

    expect(screen.getByText('Solution')).toBeInTheDocument()
  })

  it('renders the title', () => {
    renderCard()

    expect(screen.getByText('Test card title')).toBeInTheDocument()
  })

  it('renders the description', () => {
    renderCard()

    expect(screen.getByText('Test card description')).toBeInTheDocument()
  })

  it('renders the illustration labels', () => {
    renderCard()

    expect(screen.getByText('Evaluate Stock')).toBeInTheDocument()
    expect(screen.getByText('Optimize Risk')).toBeInTheDocument()
  })

  it('renders four close icon images', () => {
    const { container } = renderCard()
    const closeIcons = container.querySelectorAll('img[src="/card-assets/close-icon.svg"]')

    expect(closeIcons).toHaveLength(4)
  })
})
