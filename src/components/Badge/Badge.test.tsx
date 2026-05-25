import { render, screen } from '@testing-library/react'
import { Badge } from '../Badge'

describe('Badge', () => {
  it('renders the label', () => {
    render(<Badge label="Solution" />)

    expect(screen.getByText('Solution')).toBeInTheDocument()
  })

  it('renders different labels', () => {
    render(<Badge label="Evaluate Stock" />)

    expect(screen.getByText('Evaluate Stock')).toBeInTheDocument()
  })
})
