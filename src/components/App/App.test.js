import { render, screen } from '@testing-library/react'
import App from './App'

test('renders Appbar', () => {
  render(<App />)
  const linkElement = screen.getByText(/Movie Store/i)
  expect(linkElement).toBeInTheDocument()
})
