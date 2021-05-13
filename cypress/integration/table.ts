context('Table', () => {
  it('should render initial message when there is no search phrase exist', () => {
    cy.visit('http://localhost:3000');
    cy.findByText('Use search to find repository').should('exist');
  });

  context('success fetch list', () => {
    beforeEach(() => {
      cy.intercept('/search/repositories*', { fixture: 'success.json' }).as('getRepos');
      cy.visit('http://localhost:3000?q=react');
    });

    it('should render correct list of repositories', () => {
      cy.wait('@getRepos');

      cy.findAllByRole('row').should('have.length', 4);
    });

    it('should render correct headings of columns', () => {
      cy.wait('@getRepos');

      ['Name', 'Owner', 'Stars', 'Created At'].forEach((heading) => {
        cy.findByText(heading).should('exist');
      });
    });

    it('should have only 1 page for 3 search results', () => {
      cy.wait('@getRepos');

      cy.get('.MuiPagination-ul').children().should('have.length', 3);
    });
  });

  context('query params as a source of true', () => {
    beforeEach(() => {
      cy.intercept('/search/repositories*', { fixture: 'manyPages.json' }).as('getRepos');
    });

    it('should render correct input value', () => {
      cy.visit('http://localhost:3000?q=foo123');
      cy.wait('@getRepos');

      cy.get('input').should('have.value', 'foo123');
    });

    it('should render correct active page', () => {
      cy.visit('http://localhost:3000?q=foo123&p=5');
      cy.wait('@getRepos');

      cy.get('.Mui-selected').should('have.text', '5');
    });
  });
});
