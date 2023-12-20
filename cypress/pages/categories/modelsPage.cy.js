
class ModelsPage {

    elements = {
        modelsTitle: () => cy.get('h3.jsx-3286866772:contains("Models")').should('be.visible')
    };

    isModelsTitleVisible() {
        return this.elements.modelsTitle();
    }

}
export default new ModelsPage();