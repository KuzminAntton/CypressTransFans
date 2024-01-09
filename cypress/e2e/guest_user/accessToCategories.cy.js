import mainPage from "../../pages/mainPage.cy";
import athletePage from "../../pages/categories/athletePage.cy";
import fitnessPage from "../../pages/categories/fitnessPage.cy";
import modelsPage from "../../pages/categories/modelsPage.cy";
import publicFiguresPage from "../../pages/categories/publicFiguresPage.cy";
import relativeTVShowsPage from "../../pages/categories/relativeTVShowsPage.cy";
import baseTest from "../baseTest.cy";

describe('Tests for not logged user and verify Social, Explore and Chat tabs', () => {

    before(() => {
        // baseTest.setup();
    });

    beforeEach(() => {
        cy.visit(baseTest.baseURL);
        baseTest.acceptCookies();
    });

    it('Verify categories : Athletes', () => {
        mainPage.verifyThatIsMainPage();
        mainPage.clickOnAthletesTitle();
        athletePage.clickOnPriceHighLow();
        athletePage.isAthletesTitleVisible();
    });

    it('Verify categories : Fitness', () => {
        mainPage.verifyThatIsMainPage();
        mainPage.clickOnFitnessTitle();  // Corrected the title click based on category
        fitnessPage.isFitnessTitleVisible();
    });

    it('Verify categories : Models', () => {
        mainPage.verifyThatIsMainPage();
        mainPage.clickOnViewAllCategories()
        mainPage.clickOnModelsTitle();  // Corrected the title click based on category
        modelsPage.isModelsTitleVisible();
    });

    it('Verify categories : PublicFigures', () => {
        mainPage.verifyThatIsMainPage();
        mainPage.clickOnPublicFiguresTitle();  // Corrected the title click based on category
        publicFiguresPage.isPublicFiguresTitleVisible();
    });

    it('Verify categories : RelativeTVShows', () => {
        mainPage.verifyThatIsMainPage();
        mainPage.clickOnRealityTVTitle();  // Corrected the title click based on category
        relativeTVShowsPage.isRealityTVTitleVisible();
    });

    after(() => {
        console.log("FINISH")
    });
});
