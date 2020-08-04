describe('Home page', function () {
    it('loads properly', function () {
        cy.visit(Cypress.env('URL'));
        cy.wait(500)
        cy.get('body').happoScreenshot();
    });
});