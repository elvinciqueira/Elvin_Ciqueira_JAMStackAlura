export default class HomeScreenPageObject {
  constructor(cy) {
    this.cy = cy

    this.cy.visit('/')
  }

  openModal() {
    this.cy.get('button[type="button"]').contains('+').click()

    return this
  }

  fillContactForm() {
    this.cy.get('input[name="name"]').type('Elvin Ciqueira')
    this.cy.get('input[name="email"]').type('elvinciqueira@gmail.com')
    this.cy.get('textarea[name="message"]').type('mensagem de contato')

    return this
  }

  submitContactForm() {
    this.cy.get('button[type="submit"]').contains('>').click()

    return this
  }
}
