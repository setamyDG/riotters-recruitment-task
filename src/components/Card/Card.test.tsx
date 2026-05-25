import { render, screen } from '@testing-library/react'
import { Card } from '../Card'

const defaultProps = {
  cardBadge: 'Solution',
  cardTitle: 'Test card title',
  cardDescription: 'Test card description',
  cardIllustrationTopBadge: 'Evaluate Stock',
  cardIllustrationBottomBadge: 'Optimize Risk',
}

describe('Card', () => {
  it('renders the badge', () => {
    render(<Card {...defaultProps} />)

    expect(screen.getByText('Solution')).toBeInTheDocument()
  })

  it('renders the title', () => {
    render(<Card {...defaultProps} />)

    expect(screen.getByText('Test card title')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<Card {...defaultProps} />)

    expect(screen.getByText('Test card description')).toBeInTheDocument()
  })

  it('renders the illustration labels', () => {
    render(<Card {...defaultProps} />)

    expect(screen.getByText('Evaluate Stock')).toBeInTheDocument()
    expect(screen.getByText('Optimize Risk')).toBeInTheDocument()
  })

  it('renders four close icon images', () => {
    const { container } = render(<Card {...defaultProps} />)
    const closeIcons = container.querySelectorAll('img[src="/card-assets/close-icon.svg"]')

    expect(closeIcons).toHaveLength(4)
  })
})
