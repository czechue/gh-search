context('Sorting', () => {
  beforeEach(() => {
    cy.intercept('/search/repositories*', { fixture: 'manyPages.json' }).as('getRepos');
    cy.visit('http://localhost:3000?q=react');
  });

  it('should sort data by "Name"', () => {
    cy.wait('@getRepos');
    cy.findAllByRole('cell').first().should('have.text', 'react-loadable');

    cy.findByText('Name').click();
    cy.findAllByRole('cell').first().should('have.text', 'ReactiveObjC');
  });

  it('should create correct query params when sorting', () => {
    cy.wait('@getRepos');

    cy.findByText('Name').click();

    cy.location().should((loc) => {
      expect(loc.search).to.eq('?q=react&sort=name&desc=false');
    });
  });

  it('should render correctly sorted arrays based on query params', () => {
    cy.visit('http://localhost:3000?q=react&sort=name&desc=true');
    cy.wait('@getRepos');

    cy.findByText('Name').siblings('span').should('have.text', ' 🔽');
  });
});
