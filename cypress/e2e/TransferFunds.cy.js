///  <reference types = "cypress" />

const validUsername = "viceko"
const validPassword = "abcde123"

describe('Validate for Transfer funds', () => {
    it('Should be able to transfer funds', () => {
        cy.visit('/') //visit the url
        cy.get("input[name='username']").type(validUsername);
        cy.get("[name='password']").type(validPassword);
        cy.get('input[type="submit"]').click();
        cy.get('#leftPanel > ul > :nth-child(3) > a').click()
        cy.get('#amount').type(5500).and('be.visible')
        cy.get('#fromAccountId').select(1)
        cy.get('#toAccountId').select(1)
        cy.get('input[type="submit"]').click()
        cy.get('body').should('include.text', "Transfer Complete!").and('be.visible')


    })

})