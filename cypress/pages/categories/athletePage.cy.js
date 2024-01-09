
class AthletePage {

    elements = {
        athletesTitle: () => cy.get('h3.jsx-1291067284:contains("Athletes")'),
        priceHighLowRadioButton: () => cy.get("input[type='radio'][value='HIGH_TO_LOW']")
    };

    isAthletesTitleVisible() {
        this.elements.athletesTitle().should('be.visible');
    }

    clickOnPriceHighLow() {
        this.elements.priceHighLowRadioButton().click();
    }

}
export default new AthletePage();