
class FitnessPage {

    elements = {
        fitnessTitle: () => cy.get('h3:contains("Fitness")')
    };

    isFitnessTitleVisible() {
        this.elements.fitnessTitle().should('be.visible');
    }

}
export default new FitnessPage();