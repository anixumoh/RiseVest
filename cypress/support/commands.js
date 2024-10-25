
// Added this custom command login for  reusability and compatibility
Cypress.Commands.add('login', (emailAddress, password) => {

    cy.visit('/');
    cy.clearAllSessionStorage()
    cy.clearCookies()
    cy.clearAllLocalStorage()
    cy.url().should('include','/login')
    cy.get('#email').type(emailAddress);
    cy.get('#password').type(password);
    cy.get('button[type="submit"]').click();
});
