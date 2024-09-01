///  <reference types = "cypress" />

const validUsername = "viceko"
const validPassword = "abcde123"

describe('Validate for Logout', () => {
    it('Should be able to log out a user', () => {
        cy.visit('/') //visit the url
        cy.get("input[name='username']").type(validUsername);
        cy.get("[name='password']").type(validPassword);
        cy.get('input[type="submit"]').click();
        cy.get('body').should('include.text', "Accounts Overview").and('be.visible')
        cy.contains('Log Out').click();
        cy.get('body').should('not.include.text', "Accounts Overview")
 

    });
})