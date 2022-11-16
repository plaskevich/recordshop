describe('Record', () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.login('cypress-test@example.com', 'cypresstest');
  });
  it('imports record data from Discogs and add to collection', () => {
    cy.get('[data-test-id="add-button"]').click();
    cy.url().should('include', 'add');
    cy.get('[data-test-id="release-input"]').type('4321');
    cy.get('[data-test-id="import-button"]').click();
    cy.get('[data-test-id="record-form-title"]').should(
      'have.value',
      'Sound Options'
    );
    cy.get('[data-test-id="save-button"]').click();
    cy.url().should('include', 'collection');
    cy.contains('Sound Options');
  });

  it('deletes record', () => {
    cy.contains('Sound Options')
      .parent('tr')
      .within(() => {
        cy.get('[data-test-id="menu-button"]').click();
        cy.get('[data-test-id="remove-button"]').click();
      });
    cy.contains('Sound Options').should('not.exist');
  });
});
