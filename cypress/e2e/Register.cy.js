/// <reference types = "cypress"/>

describe("Validate for Register", () => {
    //The first test can only be ran once or you make slight changes to the test data
    it.only('Should register a new user with valid credentials', () => {
        cy.visit('/'); //visit the url
        cy.contains('Register').click();
        cy.url().should('include', "/parabank/register") //Assertion
        cy.get('#rightPanel').should('include.text', "Signing up is easy!"); //Assertion
        cy.validregister()


    })
    //negative scene
    it('Should not register a new user with blank username', () => {
        cy.visit('/'); //visit the url
        cy.contains('Register').click();
        cy.url().should('include', "/parabank/register") //Assertion
        cy.get('#rightPanel').should('include.text', "Signing up is easy!"); //Assertion
        cy.invalidregister3()
        
    })
    //negative scene
    it('Should not register a new user with blank password', () => {
        cy.visit('/'); //visit the url
        cy.contains('Register').click();
        cy.url().should('include', "/parabank/register") //Assertion
        cy.get('#rightPanel').should('include.text', "Signing up is easy!"); //Assertion
        cy.invalidregister2()
       
        
    })
    //negative scene
    it('Should not register a new user with conflicting password', () => {
        cy.visit('/'); //visit the url
        cy.contains('Register').click();
        cy.url().should('include', "/parabank/register") //Assertion
        cy.get('#rightPanel').should('include.text', "Signing up is easy!"); //Assertion
        cy.invalidregister1()
       
    })


})