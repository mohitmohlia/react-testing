import { render, screen } from '@testing-library/react'
import { rest } from 'msw'
import { server } from '../../mocks/server'
import Users from './users'

describe('Users', () => {
  test('User Component renders', () => {
    render(<Users />)
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toBeInTheDocument()
  })

  test('Renders a list of users', async () => {
    render(<Users />)
    const users = await screen.findAllByRole('listitem')
    expect(users).toHaveLength(3)
  })

  test('Renders error', async () => {
    server.use(
      rest.get(
        'https://jsonplaceholder.typicode.com/users',
        (req, res, ctx) => {
          return res(ctx.status(500))
        }
      )
    )
    render(<Users />)
    const error = await screen.findByText('Error fetching users')
    expect(error).toBeInTheDocument()
  })
})
