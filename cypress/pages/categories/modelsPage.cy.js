
class ModelsPage {

    elements = {
        modelsTitle: () => cy.xpath('.//div[contains(text(),"Models")]').should('be.visible')
    };

    isModelsTitleVisible() {
        return this.elements.modelsTitle();
    }

}
export default new ModelsPage();