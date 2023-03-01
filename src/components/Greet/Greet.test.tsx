import { render, screen } from '@testing-library/react'

import { Greet } from './Greet'
test('Greet runs successfully', () => {
  render(<Greet />)
  const textElement = screen.getByText('Hello')
  expect(textElement).toBeInTheDocument()
})

test('Greet renders with a name ', () => {
  render(<Greet name="Mohit" />)
  const textElement = screen.getByText('Hello Mohit')
  expect(textElement).toBeInTheDocument()
})
