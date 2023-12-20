import mainPage from "../../pages/mainPage.cy";
import baseTest from "../baseTest.cy";

describe('Tests for not logged user and verify footer social media links', () => {

    beforeEach(() => {
        cy.visit(baseTest.baseURL);
        cy.url().should('contain', baseTest.baseURL);
    });

    it('Verify Facebook link is available for not logged user', () => {
        mainPage.verifyThatIsMainPage();
        mainPage.clickOnFacebookFooterLink();
        cy.url().should('contain', "https://www.facebook.com/transfans");
    });

    it('Verify Instagram link is available for not logged user', () => {
        mainPage.verifyThatIsMainPage();
        mainPage.clickOnInstagramFooterLink();
        cy.url().should('contain', "https://www.instagram.com/transfans");
    });

    it('Verify TikTok link is available for not logged user', () => {
        mainPage.verifyThatIsMainPage();
        mainPage.clickOnTiktokFooterLink();
        cy.url().should('not.eq', "https://www.tiktok.com/404?fromUrl=/transfans");
        // TODO: When you have the correct URL, use this:
        // cy.url().should('eq', "here should be correct URL");
    });

    it('Verify YouTube link is available for not logged user', () => {
        mainPage.verifyThatIsMainPage();
        mainPage.clickOnYoutubeFooterLink();
        cy.get('span[jsname="V67aGc"]:contains("Accept all")').first().click();


        // This assumes that if there is an error, there is a specific error illustration. Adjust if necessary.
        cy.get('#error-page-hh-illustration').should('not.be.visible');
        // TODO: When you have the correct URL, use this:
        // cy.url().should('eq', "here should be correct URL");
    });

    after(() => {
        console.log("FINISH")
    });
});
