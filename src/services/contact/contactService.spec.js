import HttpClientModule from '../../infra/HttpClient'
import {contactService} from './contactService'

jest.mock('../../infra/HttpClient')

describe('contactService', () => {
  describe('execute()', () => {
    describe('when user try to contact', () => {
      describe('and succeed', () => {
        test('return response values properly', async () => {
          const url = 'https://contact-form-api-jamstack.herokuapp.com/message'
          const body = {
            name: 'John Doe',
            email: 'johndoe@example.com',
            message: 'somemessage',
          }
          const requestParameters = {
            body,
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
          }

          HttpClientModule.mockReturnValueOnce(() => ({
            ok: 200,
            data: {...body},
          }))

          const contactServiceResponse = await contactService.execute(
            body,
            HttpClientModule,
          )

          expect(contactServiceResponse().data).toEqual(body)
          expect(HttpClientModule).toHaveBeenCalledTimes(1)
          expect(HttpClientModule).toHaveBeenCalledWith(url, requestParameters)
        })
      })
    })
  })
})
