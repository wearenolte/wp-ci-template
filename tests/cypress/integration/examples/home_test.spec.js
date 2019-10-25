describe('Home page', function() {

  it('has a visible nav bar, logo and title', function() {
    cy.get('[data-cy="nav-bar"]').should('be.visible');
    cy.get('.m__primary-nav__brand').should('be.visible');
    cy.get('[data-cy="nav-title"]').should('be.visible');
  });

});