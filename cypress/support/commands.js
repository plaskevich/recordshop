Cypress.Commands.add('login', (email, password) => {
  cy.visit('http://localhost:8080/login');
  cy.get('[data-test-id="login-input"]').type(email);
  cy.get('[data-test-id="password-input"]').type(password);
  cy.get('[data-test-id="submit-button"]').click();
});
