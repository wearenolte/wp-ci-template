// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('adminLogin', ( user, password ) => {
    cy.visit('/wp-login.php')
    cy.get( '#user_login' ).type( user )
    cy.get( '#user_pass' ).type( password )
    cy.get('#wp-submit').click()
})

Cypress.Commands.add('publishPost', ( assertUrl ) => {
    cy.get( '.edit-post-header__settings button.editor-post-publish-panel__toggle' ).click()
    cy.get( 'button.editor-post-publish-button' ).click()
    cy.wait(2000)
    cy.get( '#inspector-text-control-0' ).should( 'have.value', assertUrl )
    cy.get( '.editor-post-publish-panel__header button[aria-label="Close panel"]' ).click()
    cy.get( '.editor-post-publish-button' ).click();
})

Cypress.Commands.add('updatePost', () => {
    cy.get( '.edit-post-header__settings button.editor-post-publish-button' ).click()
    cy.wait(2000)
})

Cypress.Commands.add('createPost', ( type, title ) => {
    cy.visit( `/wp/wp-admin/post-new.php?post_type=${type}` )
    cy.get( '#post-title-0' ).type( title )
})

Cypress.Commands.add('deletePost', ( url ) => {
    cy.visit( url ).then(( contentWindow ) => {
        if( contentWindow ) {
            cy.get( '#wp-admin-bar-edit a' ).click()
            cy.get( 'button.editor-post-trash' ).click()
            cy.url().should('include', '/wp/wp-admin/edit.php')
        }
    })
})

Cypress.Commands.add('addBlock', ( name, slug ) => {
    cy.get( '.edit-post-header__toolbar .block-editor-inserter__toggle' ).click()
    cy.get( '#block-editor-inserter__search-0' ).type( name )
    cy.get( `.editor-block-list-item-${slug}` ).click()
    cy.get( '.editor-block-list__block.is-selected' )
})

Cypress.Commands.add('previewCurrentPage', () => {
    cy.get( '.edit-post-sidebar [data-label=Document]' ).click()
    cy.get( '.edit-post-sidebar .components-panel .components-panel__body:nth-child(2) button' ).click()
    cy.get( 'a.edit-post-post-link__link' ).invoke('removeAttr', 'target').click()
})

Cypress.Commands.add('hide', { prevSubject: 'element' }, (subject) => {
    subject.css('visibility', 'hidden');
})

Cypress.Commands.add('selectImageFromMediaLibrary', () => {
    cy.get( '.media-modal-content #menu-item-browse' ).click()
    cy.get( '.media-modal-content ul.attachments [aria-label=test-image]:first' ).click()
    cy.get( '.media-modal-content button.media-button-select' ).click()
})

Cypress.Commands.add('expandAllACFBlocks', () => {
    cy.get( '.acf-postbox > button' ).then( ( expandButton ) => {
        if( 'false' == expandButton.attr( 'aria-expanded' ) ) {
            cy.get( expandButton ).click()
        }
    })
})

Cypress.Commands.add('fillACFField', (scope, name, type, value) => {
    switch ( type ) {
        case 'radio':
            cy.get( `${scope} [data-name="${name}"] input[value="${value}"]` ).click( {force: true} )
            cy.get( `${scope} [data-name="${name}"] .selected input[value="${value}"]` )
            break

        case 'link':
            cy.get( `${scope} [data-name="${name}"] a.button` ).click()
            cy.get( '#wp-link-url' ).type( value.url )
            cy.get( '#wp-link-text' ).type( value.text )
            cy.get( '#wp-link-submit' ).click()
            cy.get( `${scope} [data-name="${name}"] .link-url` )
                .should( 'contain.text', value.url )
                .and( 'have.attr', 'href', value.url )
            cy.get( `${scope} [data-name="${name}"] .link-title` )
                .should( 'contain.text', value.text )
            break

        case 'select':
            cy.get( `${scope} [data-name="${name}"] .select2-selection__arrow` ).click()
            cy.get( '.select2-container--open input' ).type( `${value}{enter}` , {delay: 500} )
            cy.get( `${scope} [data-name="${name}"] .select2-selection__rendered` )
                .should( 'contain.text', value )
            break

        case 'image':
            cy.get( `${scope} [data-name="${name}"] a.button` ).click()
            cy.get( '#menu-item-browse' ).click()
            cy.get( '#media-search-input' ).type( value )
            cy.wait( 1000 )
            cy.get( `li.attachment[aria-label="${value}"`).click()
                .should( 'have.class', 'selected' )
            cy.get( '.media-button-select' ).click()
            cy.get( '.js-acf-image-aspect-ratio-crop-crop' ).click()
            cy.wait( 15000 )
            cy.get( `${scope} [data-name="${name}"] img` ).should('be.visible') 
            break
    
        default:
            cy.get( `${scope} [data-name="${name}"] ${type}` )
                .type( value )
                .should( 'have.value', value )
      }
})

Cypress.Commands.add('switchToEdit', ( scope ) => {
    cy.get( `${scope} button[aria-label="Switch to Edit"]` ).click()
        .should( 'have.attr', 'aria-label', 'Switch to Preview' )
})
