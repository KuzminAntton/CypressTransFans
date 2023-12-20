
class RelativeTVShowsPage {

    elements = {
        realityTVTitle: () => cy.get('h3.jsx-3286866772:contains("Reality TV ")').should('be.visible')
    };

    isRealityTVTitleVisible() {
        return this.elements.realityTVTitle();
    }

}
export default new RelativeTVShowsPage();