///  <reference types = "cypress" />

//making use of variables 

const validUsername = "viceko"
const validPassword = "abcde123"
const invalidUsername = "juju"
const invalidPassword = "input"


describe('Test contact form', () => {
    beforeEach('visit the baseurl', () => {
        cy.visit('/'); //visit the url

    })
    it.only('Should Login a user with valid credentials', () => {
        
        cy.get("input[name='username']").type(validUsername)
        cy.get("[name='password']").type(validPassword)
        cy.get('input[type="submit"]').click()
        cy.get('body').should('include.text', "Accounts Overview").and('be.visible')
    });

    it('Should not Login a user with invalid username', () => {
       
        cy.get("input[name='username']").type(invalidUsername)
        cy.get("[name='password']").type(validPassword)
        cy.get('input[type="submit"]').click()
        cy.get('body').should('include.text', "Error!").and('be.visible')

    });
    it('Should not Login a user with invalid password', () => {
      
        cy.get("input[name='username']").type(validUsername)
        cy.get("[name='password']").type(invalidPassword)
        cy.get('input[type="submit"]').click()
        cy.get('body').should('include.text', "Error!").and('be.visible')

    });
    it('Should not Login a user with invalid credentials', () => {
       
        cy.get("input[name='username']").type(invalidUsername)
        cy.get("[name='password']").type(invalidPassword)
        cy.get('input[type="submit"]').click()
        cy.get('body').should('include.text', "Error!").and('be.visible')

    })

})