context('query params as a source of true', () => {
  beforeEach(() => {
    cy.intercept('/search/repositories*', { fixture: 'manyPages.json' }).as('getRepos');
  });

  it('should render correct input value', () => {
    cy.visit('http://localhost:3000');

    cy.get('input').type('angular');
    cy.get('[aria-label="search"]').click();

    cy.wait('@getRepos');

    cy.location().should((loc) => {
      expect(loc.search).to.eq('?q=angular');
    });
  });
});
