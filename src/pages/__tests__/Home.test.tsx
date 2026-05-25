import { screen } from '@testing-library/react'
import { renderWithRouter } from '@/test/test-utils'

describe('HomePage', () => {
  it('renders the welcome heading', () => {
    renderWithRouter('/')

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Welcome to Vite + TS')
  })

  it('renders the description', () => {
    renderWithRouter('/')

    expect(screen.getByText(/A modern Vite \+ React 19 \+ TypeScript starter/i)).toBeInTheDocument()
  })

  it('renders the CTA link to /about', () => {
    renderWithRouter('/')

    const link = screen.getByRole('link', { name: /learn more/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/about')
  })
})
