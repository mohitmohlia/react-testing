import { render, screen, logRoles } from '@testing-library/react'
import Skills from './Skills'

describe('Skills', () => {
  const skills = ['nextjs', 'js', 'css']

  test('render correclty', () => {
    render(<Skills skills={skills} />)
    const element = screen.getByRole('list')
    expect(element).toBeInTheDocument()
  })

  test('render a list of skills', () => {
    render(<Skills skills={skills} />)
    const listItemElements = screen.getAllByRole('listitem')
    expect(listItemElements).toHaveLength(skills.length)
  })

  test('Renders login button', () => {
    render(<Skills skills={skills} />)
    const loginButton = screen.getByRole('button', {
      name: 'Login',
    })
    expect(loginButton).toBeInTheDocument()
  })

  test('Start learning button not rendered', () => {
    const view = render(<Skills skills={skills} />)
    logRoles(view.container)
    const startLearningButton = screen.queryByRole('button', {
      name: 'Start Learning',
    })
    expect(startLearningButton).not.toBeInTheDocument()
  })

  test('Start learning is eventually displayed', async () => {
    render(<Skills skills={skills} />)
    //screen.debug();
    const startLearningButton = await screen.findByRole(
      'button',
      {
        name: 'Start Learning',
      },
      {
        timeout: 2000,
      }
    )
    // screen.debug();
    expect(startLearningButton).toBeInTheDocument()
  })
})
