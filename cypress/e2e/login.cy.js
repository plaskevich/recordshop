describe('Login', () => {
  beforeEach(() => {
    cy.clearLocalStorage();
  });
  it('logs in successfully', () => {
    cy.login('cypress-test@example.com', 'cypresstest');
    cy.url().should('include', 'collection');
  });

  it('shows error message when wrong credentials', () => {
    cy.login('cypress-test@example.com', 'wrongpass');
    cy.get('[data-test-id="error-message"').should('be.visible');
  });
});
