describe('Global elements', function() {

  it('has a footer with copyright', function() {
    cy.get('[data-cy="footer"]')
      .find('.o__footer__copyright') // Use selectors as in jQuery
      .closest('div')
      .should('have.class', 'container');
  });


});