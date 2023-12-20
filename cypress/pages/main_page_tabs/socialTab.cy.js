import SignUpPage from "../signUpPage/signUpPage.cy";

class SocialTab {

    elements = {
        popularTab: () => cy.xpath('.//a[contains(text(), "Popular")]').should('be.visible'),
        latestTab: () => cy.get('a:contains("Latest")'),
        popularContent: () => cy.get('#Popular').should('be.visible')
    };

    verifyThatIsSocialTab(URL) {
        cy.url().should('contain', URL);
        cy.wait(4000)
        this.elements.popularTab().should('be.visible');
        this.elements.latestTab().should('be.visible');
        this.elements.popularContent().should('be.visible');
    }
    clickOnLatest() {
        this.elements.latestTab().scrollIntoView().click();
    }

}
export default new SocialTab();