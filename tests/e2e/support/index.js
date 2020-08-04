// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './components/page-header'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// beforeEach(function() {
//   cy.visit( 'http://gcc-website.lndo.site/' ); // Hook that runs before all tests in the block
// });

// Whitelist a set of Cookies which will always be preserved across tests.
Cypress.Cookies.defaults({
    whitelist: /wordpress_.*/
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test on an app error
    return false
})

Cypress.env( 'hash', '20200330' )
