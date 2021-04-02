import React from 'react'
import user from '@testing-library/user-event'
import {render, screen, waitFor} from '../../../infra/test/testUtils'
import {FormContent} from './'

const onSubmit = jest.fn()
onSubmit.mockImplementation((event) => {
  event.preventDefault()
})

describe('<FormContent />', () => {
  describe('when form fields are valid', () => {
    test('complete the submission', async () => {
      render(<FormContent onSubmit={onSubmit} />)

      const name = 'John Doe'
      const email = 'johndoe@example'
      const message = 'somemessage'

      const submitButton = screen.getByText(/>/i)
      expect(submitButton).toBeDisabled()

      const inputName = screen.getByLabelText(/seu nome/i)
      user.type(inputName, name)
      await waitFor(() => expect(inputName).toHaveValue(name))

      const inputEmail = screen.getByLabelText(/seu email/i)
      user.type(inputEmail, email)
      await waitFor(() => expect(inputEmail).toHaveValue(email))

      const inputMessage = screen.getByLabelText(/sua mensage/i)
      user.type(inputMessage, message)
      await waitFor(() => expect(inputMessage).toHaveValue(message))

      expect(submitButton).toBeEnabled()

      user.click(submitButton)

      expect(onSubmit).toHaveBeenCalledTimes(1)
    })
  })
})
