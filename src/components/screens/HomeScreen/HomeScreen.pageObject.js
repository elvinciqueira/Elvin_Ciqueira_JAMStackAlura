export default class HomeScreenPageObject {
  constructor(cy) {
    this.cy = cy

    this.cy.visit('/')
  }

  openModal() {
    this.cy.get('button[type="button"]').contains('+').click()

    return this
  }

  fillContactForm({name, email, message}) {
    this.cy.get('input[name="name"]').type(name)
    this.cy.get('input[name="email"]').type(email)
    this.cy.get('textarea[name="message"]').type(message)

    return this
  }

  submitContactForm() {
    this.cy.get('button[type="submit"]').contains('>').click()

    return this
  }
}
