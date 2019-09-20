/// <reference types="Cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })

    it('.type() - type into a DOM element', () => {
      // https://on.cypress.io/type
      cy.get('#app-name-input')
        .type('My new app').should('have.value', 'My new app')
    
      cy.get('#app-icon-input').click()

    })
})