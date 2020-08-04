describe('Test for navigate main header menu items', function(){
    it ('Clicks on each menu item on header, not sub menus', function(){
        cy.visit(Cypress.env('URL'))
        cy.wait(500)
    })
})