import HttpClient from '../../infra/HttpClient'

export const contactService = {
  async execute({name, email, message}, HttpClientModule = HttpClient) {
    // eslint-disable-next-line babel/new-cap
    const response = await HttpClientModule(
      'https://contact-form-api-jamstack.herokuapp.com/message',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {name, email, message},
      },
    )

    return response
  },
}
