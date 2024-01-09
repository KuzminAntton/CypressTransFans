
class PublicFiguresPage {

    elements = {
        publicFiguresTitle: () => cy.get('h3.jsx-1291067284:contains("Public Figures")').should('be.visible')
    };

    isPublicFiguresTitleVisible() {
        return this.elements.publicFiguresTitle();
    }

}
export default new PublicFiguresPage();