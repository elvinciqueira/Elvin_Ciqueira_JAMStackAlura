import React from 'react'
import user from '@testing-library/user-event'
import {render, screen} from '../../../infra/test/testUtils'
import TextField from './'

describe('<TextField />', () => {
  describe('when compononent renders', () => {
    test('should renders as an input', () => {
      render(
        <TextField
          id="name"
          tag="input"
          label="Seu nome"
          name="name"
          placeholder="Nome"
          type="text"
          value="Elvin"
          onChange={() => {}}
        />,
      )

      const textField = screen.getByPlaceholderText(/nome/i)

      expect(textField).toMatchSnapshot()
    })

    test('should renders as an textarea', () => {
      render(
        <TextField
          id="message"
          tag="textarea"
          label="Sua mensagem"
          name="message"
          placeholder="Mensagem"
          type="text"
          value="Elvin"
          onChange={() => {}}
        />,
      )

      const textField = screen.getByPlaceholderText(/mensagem/i)

      expect(textField).toMatchSnapshot()
    })

    test('should renders an input with type email', () => {
      render(
        <TextField
          id="email"
          tag="input"
          label="Seu E-mail"
          name="email"
          placeholder="Email"
          type="email"
          value="elvinciqueira@gmail.com"
          onChange={() => {}}
        />,
      )

      const textField = screen.getByPlaceholderText(/email/i)

      expect(textField).toMatchSnapshot()
    })

    test('should render an input with a label', () => {
      render(
        <TextField
          id="name"
          tag="input"
          label="Seu nome"
          name="name"
          placeholder="Nome"
          type="text"
          value="Elvin"
          onChange={() => {}}
        />,
      )

      const inputLabel = screen.getByLabelText(/seu nome/i)

      expect(inputLabel).toMatchSnapshot()
    })
  })

  describe('when field is valid', () => {
    describe('and user is typing', () => {
      test('the value must be updated', () => {
        const onChangeMock = jest.fn()

        render(
          <TextField
            id="name"
            tag="input"
            label="Seu nome"
            name="name"
            placeholder="Nome"
            type="text"
            value=""
            onChange={onChangeMock}
          />,
        )

        const inputNome = screen.getByPlaceholderText(/nome/i)
        user.type(inputNome, 'Elvin')

        expect(onChangeMock).toBeCalledTimes(5)
      })
    })
  })
})
