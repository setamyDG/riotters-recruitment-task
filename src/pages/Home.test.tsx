import { screen } from '@testing-library/react'
import { renderWithRouter } from '@/test/test-utils'

describe('HomePage', () => {
  it('renders the solution badge', () => {
    renderWithRouter('/')

    expect(screen.getByText('Solution')).toBeInTheDocument()
  })

  it('renders the card title', () => {
    renderWithRouter('/')

    expect(screen.getByText(/change the way you approach risk/i)).toBeInTheDocument()
  })

  it('renders the card description', () => {
    renderWithRouter('/')

    expect(screen.getByText(/generate trading models/i)).toBeInTheDocument()
  })

  it('renders the illustration badges', () => {
    renderWithRouter('/')

    expect(screen.getByText('Evaluate Stock')).toBeInTheDocument()
    expect(screen.getByText('Optimize Risk')).toBeInTheDocument()
  })
})
