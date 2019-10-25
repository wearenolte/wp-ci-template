describe('Navigate within site', function() {

  it('.each() - iterate over an array of elements', function () {
    cy.get('.m__primary-nav__menu > li.page_item')
      .each( function ($el, index, $list ) {
        cy.log($el, index, $list) // Command that will output to the Cypress UI console
      })
  });

  it('should only show a nav item as active when on that page', function() {
    cy.get('.m__primary-nav__menu > li.page_item')
      .first().find('a')
      .first().as('firstNav') // Alias first nav link object as @firstNav
      .then( () => {
      cy.get('@firstNav').click();
    cy.get('@firstNav').closest('li').should('have.class', 'current_page_item')
    cy.go('back');
    cy.get('@firstNav').closest('li').should('not.have.class', 'current_page_item')
  })
  });


});