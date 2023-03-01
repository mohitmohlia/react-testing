import { render, screen } from '@testing-library/react'
import { Application } from './Application'

describe('Application', () => {
  test('Renders correctly', () => {
    render(<Application />)

    const pageHeading = screen.getByRole('heading', {
      name: 'Job Application Form',
      level: 1,
    })
    expect(pageHeading).toBeInTheDocument()

    const sectionHeading = screen.getByRole('heading', {
      name: 'Section 1',
      level: 2,
    })
    expect(sectionHeading).toBeInTheDocument()

    const paragraphElement = screen.getByText(
      (content) => content.startsWith('All fields are mandatory'),
      {
        selector: 'p',
      }
    )

    expect(paragraphElement).toBeInTheDocument()

    const closeElement = screen.getByTitle('close')
    expect(closeElement).toBeInTheDocument()

    const customElement = screen.getByTestId('custom-element')
    expect(customElement).toBeInTheDocument()

    const nameElement = screen.getByRole('textbox', { name: 'Name' })
    expect(nameElement).toBeInTheDocument()

    const nameElement2 = screen.getByLabelText('Name', {
      selector: 'input',
    })
    expect(nameElement2).toBeInTheDocument()

    const nameElement3 = screen.getByPlaceholderText('Enter your name')
    expect(nameElement3).toBeInTheDocument()

    const nameElement4 = screen.getByDisplayValue('mohit')
    expect(nameElement4).toBeInTheDocument()

    const nameElement5 = screen.getByAltText('random alt text')
    expect(nameElement5).toBeInTheDocument()

    const bioElement = screen.getByRole('textbox', { name: 'Bio' })
    expect(bioElement).toBeInTheDocument()

    const jobLocationElement = screen.getByRole('combobox')
    expect(jobLocationElement).toBeInTheDocument()

    const termsElement = screen.getByRole('checkbox')
    expect(termsElement).toBeInTheDocument()

    const termsElement2 = screen.getByLabelText(
      'I agree to accept terms and condition'
    )
    expect(termsElement2).toBeInTheDocument()

    const submitButtonElement = screen.getByRole('button')
    expect(submitButtonElement).toBeInTheDocument()
    expect(submitButtonElement).toBeDisabled()
  })
})
