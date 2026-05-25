import { screen } from '@testing-library/react'
import { renderWithRouter } from '@/test/test-utils'

describe('Navigation', () => {
  it('renders navigation links', () => {
    renderWithRouter('/')

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
  })

  it('marks the active route link', () => {
    renderWithRouter('/')

    const homeLink = screen.getByRole('link', { name: /^home$/i })
    expect(homeLink).toHaveClass('font-semibold')
    expect(homeLink).toHaveClass('text-indigo-600')
  })
})
