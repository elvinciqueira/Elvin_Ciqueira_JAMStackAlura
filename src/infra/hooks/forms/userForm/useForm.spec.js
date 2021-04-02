import {renderHook, act} from '@testing-library/react-hooks'
import {useForm} from './'

describe('useForm()', () => {
  describe('when user types', () => {
    test('change the value', () => {
      const {result} = renderHook(() =>
        useForm({
          initialValues: {
            name: 'Elvin',
          },
        }),
      )

      const initialValues = {name: 'Elvin'}
      expect(result.current.values).toEqual(initialValues)

      const event = {
        target: {
          getAttribute: () => 'name',
          value: 'Ju',
        },
      }

      act(() => {
        result.current.handleChange(event)
      })

      // expect, to be a new value
      expect(result.current.values).toEqual({name: 'Ju'})
    })
  })

  describe('when user submit the form', () => {
    test('values should be returned properly', () => {
      const initialValues = {
        name: 'John Doe',
        message: 'some message',
        email: 'johndoe@example.com',
      }
      const onSubmitMock = jest.fn()

      const {result} = renderHook(() =>
        useForm({
          initialValues,
          onSubmit: onSubmitMock,
        }),
      )

      const event = {
        preventDefault: () => {},
      }

      act(() => {
        result.current.handleSubmit(event)
      })

      expect(onSubmitMock).toHaveBeenCalledTimes(1)
      expect(onSubmitMock).toBeCalledWith(initialValues)
    })
  })
})
