///  <reference types = "cypress" />

const validUsername = "viceko"
const validPassword = "abcde123"

describe('Validate for Account Opening', () => {
    it('Should be able to open an account', () => {
        cy.visit('/') //visit the url
        cy.get("input[name='username']").type(validUsername);
        cy.get("[name='password']").type(validPassword);
        cy.get('input[type="submit"]').click();
        cy.get('#leftPanel > ul > :nth-child(1) > a').click();
        cy.get('#type').select(1).and('be.visible');
        cy.get('#fromAccountId').select(0).and('be.visible');
        cy.get('input[type="button"]').click();
        cy.get('body').should('include.text', "Account Opened!").and('be.visible')

    })
})