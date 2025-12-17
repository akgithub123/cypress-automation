// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('Login', (Username, Password) =>{
    cy.visit('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx')
    cy.get('input[id*="MainContent_username"]').type(Username)
    cy.get('input[id*="MainContent_password"]').type(Password)
    cy.get('input[id*="MainContent_login_button"]').click()
})