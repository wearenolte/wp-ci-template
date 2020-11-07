
const uiComponents = {
  // UI components, 'name': 'styleguide/component/url' ie:
  // 'Buttons': atoms/buttons/button,
}
 
for ( let component in uiComponents ) {
  describe( component, function () {
    it('look good', function () {
      cy.visit(`/styleguide?component=${uiComponents[component]}`);
      cy.get('body').happoScreenshot();
    });
  });
}
