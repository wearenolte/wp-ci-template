describe('Viewport', function() {

  it('cy.viewport() - set the viewport size and dimension', function() {
    // Default viewport is 1000x660
    cy.get('[data-cy="navbar-toggler"]').should('not.be.visible')
    cy.viewport(320, 480)
    cy.get('[data-cy="navbar-toggler"]').should('be.visible')
  })

});