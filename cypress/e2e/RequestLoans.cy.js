///  <reference types = "cypress" />

const validUsername = "viceko"
const validPassword = "abcde123"

describe('Validate for Account Opening', () => {
    it('Should be able to request for Loans', () => {
        cy.visit('/') //visit the url
        cy.get("input[name='username']").type(validUsername);
        cy.get("[name='password']").type(validPassword);
        cy.get('input[type="submit"]').click();
        cy.get('#leftPanel > ul > :nth-child(7) > a').click();
        cy.get('#amount').type(5000).should('be.visible');
        cy.get('#downPayment').type(2000).should('be.visible');
        cy.get('#fromAccountId').select(1).should('be.visible');
        cy.get('input[type="button"]').click()
        cy.get('body').should('include.text', "Loan Request Processed").and('be.visible')

    })
})