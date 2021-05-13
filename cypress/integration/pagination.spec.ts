context('Pagination', () => {
  beforeEach(() => {
    cy.intercept('/search/repositories*', { fixture: 'manyPages.json' }).as('getRepos');
    cy.visit('http://localhost:3000?q=react');
  });

  it('should correctly check page buttons and send correct request on page buttons click', () => {
    cy.wait('@getRepos');
    cy.get('.Mui-selected').should('have.text', '1');
    cy.get('[aria-label="Go to next page"]').click();
    cy.wait('@getRepos').then(({ request }) => {
      expect(request.url).to.equal(
        'https://api.github.com/search/repositories?q=react&page=1&per_page=25',
      );
    });
    cy.get('.Mui-selected').should('have.text', '2');
  });
});
