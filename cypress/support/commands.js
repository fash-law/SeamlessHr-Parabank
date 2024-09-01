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
Cypress.Commands.add('invalidregister1', () => {

    cy.get('input[name="customer.firstName"]').type('victor');
    cy.get('input[name="customer.lastName"]').type('eko');
    cy.get('input[name="customer.address.street"]').type('abc street, ikeja');
    cy.get('input[name="customer.address.city"]').type('lagos');
    cy.get('input[name="customer.address.state"]').type('lagos');
    cy.get('input[name="customer.address.zipCode"]').type('911');
    cy.get('input[name="customer.phoneNumber"]').type('123456');
    cy.get('input[name="customer.ssn"]').type('9876');
    cy.get('input[name="customer.username"]').type('viceko');
    cy.get('input[name="customer.password"]').type('abc223');
    cy.get('input[name="repeatedPassword"]').type('xyz888');
    cy.get('input[value="Register"]').click();
    cy.get('body').should('include.text', "Passwords did not match.") //Assertion

})
Cypress.Commands.add('invalidregister2', () => {
    cy.get('input[name="customer.firstName"]').type('victor');
    cy.get('input[name="customer.lastName"]').type('eko');
    cy.get('input[name="customer.address.street"]').type('abc street, ikeja');
    cy.get('input[name="customer.address.city"]').type('lagos');
    cy.get('input[name="customer.address.state"]').type('lagos');
    cy.get('input[name="customer.address.zipCode"]').type('911');
    cy.get('input[name="customer.phoneNumber"]').type('123456');
    cy.get('input[name="customer.ssn"]').type('9876');
    cy.get('input[name="customer.username"]').type('viceko');
    cy.get('input[name="customer.password"]')
    cy.get('input[name="repeatedPassword"]').type('abc123');
    cy.get('input[value="Register"]').click();
    cy.get('.form2').should('include.text', "Password is required.") //Assertion
})
Cypress.Commands.add('invalidregister3', () => {
    cy.get('input[name="customer.firstName"]').type('victor');
    cy.get('input[name="customer.lastName"]').type('eko');
    cy.get('input[name="customer.address.street"]').type('abc street, ikeja');
    cy.get('input[name="customer.address.city"]').type('lagos');
    cy.get('input[name="customer.address.state"]').type('lagos');
    cy.get('input[name="customer.address.zipCode"]').type('911');
    cy.get('input[name="customer.phoneNumber"]').type('123456');
    cy.get('input[name="customer.ssn"]').type('9876');
    cy.get('input[name="customer.username"]')
    cy.get('input[name="customer.password"]').type('abc123');
    cy.get('input[name="repeatedPassword"]').type('abc123');
    cy.get('input[value="Register"]').click();
    cy.get('.form2').should('include.text', "Username is required.") //Assertion
})
Cypress.Commands.add('validregister', () => {
    cy.get('input[name="customer.firstName"]').type('victor');
    cy.get('input[name="customer.lastName"]').type('eko');
    cy.get('input[name="customer.address.street"]').type('abc strt, ikeja');
    cy.get('input[name="customer.address.city"]').type('lagos');
    cy.get('input[name="customer.address.state"]').type('lagos');
    cy.get('input[name="customer.address.zipCode"]').type('911');
    cy.get('input[name="customer.phoneNumber"]').type('123456');
    cy.get('input[name="customer.ssn"]').type('9876');
    cy.get('input[name="customer.username"]').type('viceko');
    cy.get('input[name="customer.password"]').type('abcde123');
    cy.get('input[name="repeatedPassword"]').type('abcde123');
    cy.get('input[value="Register"]').click(); //submit button
    //cy.get('body').should('include.text', "Welcome viceko") //Assertion
    cy.get('body').should('include.text', "This username already exists.")


})



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