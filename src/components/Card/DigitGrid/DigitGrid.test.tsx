import { render, screen } from '@testing-library/react'
import { DigitGrid } from '../DigitGrid'

describe('DigitGrid', () => {
  it('renders 90 digit cells (10 rows × 9 cols)', () => {
    const { container } = render(<DigitGrid />)

    expect(container.querySelectorAll('span')).toHaveLength(90)
  })

  it('each cell contains only 0 or 1', () => {
    const { container } = render(<DigitGrid />)

    container.querySelectorAll('span').forEach((span) => {
      expect(['0', '1']).toContain(span.textContent)
    })
  })

  it('renders children', () => {
    render(
      <DigitGrid>
        <div>child content</div>
      </DigitGrid>,
    )

    expect(screen.getByText('child content')).toBeInTheDocument()
  })
})
