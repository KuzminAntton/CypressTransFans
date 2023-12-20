
class MainAdminPage {

    elements = {
        profileNameText: (profileName) => cy.get(`div:contains("${profileName.split('@')[0]}")`)
    };

    verifyThatIsMainAdminPage(profileName) {
        this.elements.profileNameText(profileName).should('be.visible');
    }
}
export default new MainAdminPage();