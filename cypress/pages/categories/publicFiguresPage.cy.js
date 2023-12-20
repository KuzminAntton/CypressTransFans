
class PublicFiguresPage {

    elements = {
        publicFiguresTitle: () => cy.get('h3.jsx-3286866772:contains("Public Figures ")').should('be.visible')
    };

    isPublicFiguresTitleVisible() {
        return this.elements.publicFiguresTitle();
    }

}
export default new PublicFiguresPage();