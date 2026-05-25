import { render } from '@testing-library/react'
import { LightningIcon } from '.'

describe('LightningIcon', () => {
  it('renders an SVG element', () => {
    const { container } = render(<LightningIcon />)

    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders at the correct dimensions', () => {
    const { container } = render(<LightningIcon />)
    const svg = container.querySelector('svg')

    expect(svg).toHaveAttribute('width', '136')
    expect(svg).toHaveAttribute('height', '142')
  })
})
