
class RelativeTVShowsPage {

    elements = {
        realityTVTitle: () => cy.get('h3.jsx-1291067284:contains("Reality TV")').should('be.visible')
    };

    isRealityTVTitleVisible() {
        return this.elements.realityTVTitle();
    }

}
export default new RelativeTVShowsPage();