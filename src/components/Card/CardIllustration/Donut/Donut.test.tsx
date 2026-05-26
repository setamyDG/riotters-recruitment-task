import { render, screen } from '@testing-library/react'
import { Donut } from '../Donut'

describe('Donut', () => {
  it('renders the top label', () => {
    render(<Donut topLabel="Evaluate Stock" bottomLabel="Optimize Risk" />)

    expect(screen.getByText('Evaluate Stock')).toBeInTheDocument()
  })

  it('renders the bottom label', () => {
    render(<Donut topLabel="Evaluate Stock" bottomLabel="Optimize Risk" />)

    expect(screen.getByText('Optimize Risk')).toBeInTheDocument()
  })

  it('omits the top badge when topLabel is empty', () => {
    render(<Donut topLabel="" bottomLabel="Bottom" />)

    expect(screen.getByText('Bottom')).toBeInTheDocument()
    expect(screen.getAllByRole('paragraph')).toHaveLength(1)
  })
})
