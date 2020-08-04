Cypress.Commands.add('addPageHeader', ( type ) => {

  // Check if "Page: Header" accordion is expanded, else click to expand.
  cy.get( '#acf-group_5e583d41c3a0b > button' ).invoke('attr', 'aria-expanded').then( ( isExpanded ) => {
    if ( ! isExpanded ) {
      cy.get( '#acf-group_5e583d41c3a0b > button' ).click()
    }

    switch ( type ) {
      case 'media':
        cy.get( '#acf-field_5e583d67fe11f-media' ).click()
        // Add image to the header gallery.
        cy.get( '#acf-field_5e5978fbd6727 a.acf-gallery-add' ).click()
        cy.selectImageFromMediaLibrary()
        break

      default:
        cy.get( '#acf-field_5e583d67fe11f' ).click()
    }
  })
})

Cypress.Commands.add('testPageHeader', ( type ) => {
  switch ( type ) {
    case 'media':
      cy.log( 'Find the home hero Background Image' )
      cy.get('[data-type="molecule/slider/image-fade"] div[data-type="atoms/overlay/gradient"]')

      cy.log( 'Find the home hero H1 title' )
      cy.get( 'h1' ).should( 'have.class', 'font-secondary' )
      break

    default:
  }
})
