import {contactService} from './contactService'

const body = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  message: 'somemessage',
}

function HttpClientModule() {
  return {
    data: {
      ...body,
    },
  }
}

describe('contactService', () => {
  describe('execute()', () => {
    describe('when user try to contact', () => {
      describe('and succeed', () => {
        test('return response values properly', async () => {
          const contactServiceResponse = await contactService.execute(
            body,
            HttpClientModule,
          )

          expect(contactServiceResponse.data).toEqual(body)
        })
      })
    })
  })
})
