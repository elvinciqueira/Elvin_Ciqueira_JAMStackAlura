/// <reference types="cypress" />

import HomeScreenPageObject from '../../../src/components/screens/HomeScreen/HomeScreen.pageObject'

describe('/pages/index/modal', () => {
  describe('when click on modal button and submit contact form', () => {
    it('should return success animation', () => {
      cy.intercept(
        'https://contact-form-api-jamstack.herokuapp.com/message',
      ).as('contactForm')

      const homeScreen = new HomeScreenPageObject(cy)
      homeScreen.openModal().fillContactForm().submitContactForm()

      cy.wait('@contactForm').then(({response}) => {
        expect(response.body).to.haveOwnProperty('name')
        expect(response.body).to.haveOwnProperty('email')
        expect(response.body).to.haveOwnProperty('message')
      })
    })
  })
})
