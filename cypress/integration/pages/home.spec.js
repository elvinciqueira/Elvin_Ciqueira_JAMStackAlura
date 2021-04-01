/// <reference types="cypress" />

describe('/pages/index/modal', () => {
  describe('when click on modal button and submit contact form', () => {
    it('should return success animation', () => {
      cy.intercept(
        'https://contact-form-api-jamstack.herokuapp.com/message',
      ).as('contactForm')

      cy.visit('/')

      cy.get('button[type="button"]').contains('+').click()

      cy.get('input[name="name"]').type('Elvin Ciqueira')
      cy.get('input[name="email"]').type('elvinciqueira@gmail.com')
      cy.get('textarea[name="message"]').type('mensagem de contato')

      cy.get('button[type="submit"]').contains('>').click()

      cy.wait('@contactForm').then((intercept) => {
        expect(intercept.response.body).to.haveOwnProperty('name')
        expect(intercept.response.body).to.haveOwnProperty('email')
        expect(intercept.response.body).to.haveOwnProperty('message')
      })
    })
  })
})
