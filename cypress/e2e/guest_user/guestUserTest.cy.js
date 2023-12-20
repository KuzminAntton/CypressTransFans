import mainPage from "../../pages/mainPage.cy";
import loginPage from "../../pages/login/loginPage.cy";
import socialTab from "../../pages/main_page_tabs/socialTab.cy";
import baseTest from "../baseTest.cy";

describe('Tests for not logged user and verify Social, Explore and Chat tabs', () => {

    before(() => {
        // baseTest.setup();
    });

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    beforeEach(() => {
        cy.visit(baseTest.baseURL);
        cy.url().should('contain', baseTest.baseURL);
    });

    it('Verify Social tab + popular is available for not logged user', () => {
        mainPage.verifyThatIsMainPage();
        mainPage.clickOnSocialTab();
        socialTab.verifyThatIsSocialTab(baseTest.baseURL + '/social');
    });

    it('Verify Social tab + Latest is not available for not logged user', () => {
        mainPage.verifyThatIsMainPage();
        mainPage.clickOnSocialTab();
        socialTab.clickOnLatest();
        loginPage.verifyThatIsLoginPage();
    });

    it('Verify Explore tab is not available for not logged user', () => {
        mainPage.verifyThatIsMainPage();
        mainPage.clickOnExploreTab();
        loginPage.verifyThatIsLoginPage();
    });

    it('Verify Chat tab is not available for not logged user', () => {
        mainPage.verifyThatIsMainPage();
        mainPage.clickOnChatTab();
        loginPage.verifyThatIsLoginPage();
    });

    it('Verify click on profile button redirect to login page', () => {
        mainPage.verifyThatIsMainPage();
        mainPage.clickOnNotLoggedProfileButton();
        loginPage.verifyThatIsLoginPage();
    });

    it('Verify click on search input shows empty history', () => {
        mainPage.verifyThatIsMainPage();
        mainPage.clickOnSearchInput();
        mainPage.verifyThatSearchHistoryIsEmpty();
    });

    after(() => {
        console.log("FINISH")
    });
});
