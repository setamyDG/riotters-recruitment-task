import { render, screen } from '@testing-library/react'
import { Typography } from '../Typography'

describe('Typography', () => {
  it('renders children', () => {
    render(<Typography variant="inter-400">Hello world</Typography>)

    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('renders as a paragraph by default', () => {
    render(<Typography variant="inter-400">Text</Typography>)

    expect(screen.getByText('Text').tagName).toBe('P')
  })

  it('renders as the specified tag', () => {
    render(
      <Typography variant="newsreader-400-48" as="h1">
        Heading
      </Typography>,
    )

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Heading')
  })

  it('applies the base typography class', () => {
    render(<Typography variant="inter-500">Text</Typography>)

    expect(screen.getByText('Text')).toHaveClass('typography')
  })

  it('applies the variant class', () => {
    render(<Typography variant="newsreader-400-48">Text</Typography>)

    expect(screen.getByText('Text')).toHaveClass('typography-newsreader-400-48')
  })

  it('forwards an extra className', () => {
    render(
      <Typography variant="inter-400" className="extra-class">
        Text
      </Typography>,
    )

    expect(screen.getByText('Text')).toHaveClass('extra-class')
  })
})
