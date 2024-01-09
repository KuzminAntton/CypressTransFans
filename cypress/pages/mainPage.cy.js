class MainPage {

    elements = {
        homePageID: () => cy.get('#home-page'),
        socialTab: () => cy.xpath('.//div[contains(text(), "Social")]'),
        exploreTab: () => cy.xpath('.//div[contains(text(), "Explore")]'),
        chatTab: () => cy.xpath('.//div[contains(text(),"Chat")]'),
        profileNotLoggedUserButton: () => cy.get('div.cursorPtr'),
        profileButtonImg: () => cy.get('img[alt="logoUser"]'),
        profileButton: () => cy.get('span:contains("Profile")'),
        searchInput: () => cy.get('input[name="search"][type="text"].myInput'),
        noRecentSearchesText: () => cy.get('p.bold:contains("No Recent Searches Found")'),
        rightArrowButton: () => cy.get('[alt="rightArrow"]'),
        viewAllCategories: () => cy.get('[class="jsx-878561631 mb-3 mt-3 position-absolute fntSz18 font-weight-700 primaryTextColor cursorPtr"]'),
        notLoggedProfileButton: () => cy.xpath("//*[local-name()='use' and @*[local-name()='href']='/TransFans/images/desktop/icons/profile-white.svg#profile_icon']"),


        // Categories banners
        athletesTitle: () => cy.get('span.title:contains("Athletes")'),
        fitnessTitle: () => cy.get('span.title:contains("Fitness")'),
        realityTVTitle: () => cy.get('span.title:contains("Reality TV ")'),
        publicFiguresTitle: () => cy.get('span.title:contains("Public Figures ")'),
        modelsTitle: () => cy.xpath('.//div[contains(text(),"Models")]'),

        // Footer links
        faceBookFooterLink: () => cy.get('img[src="/TransFans/images/icons/social-facebook.svg"]'),
        instagramFooterLink: () => cy.get('img[src="/TransFans/images/icons/social-insta.svg"]'),
        tiktokFooterLink: () => cy.get('img[src="/TransFans/images/icons/social-tiktok.svg"]'),
        youtubeFooterLink: () => cy.get('div.jsx-473409187 a[href="https://www.youtube.com/transfans"] img[src="/TransFans/images/icons/social-youtube.svg"]')
    };

    clickOnNotLoggedProfileButton() {
        this.elements.notLoggedProfileButton().click();
    }

    clickOnAthletesTitle() {
        this.elements.athletesTitle().click();
    }

    clickOnFitnessTitle() {
        this.elements.fitnessTitle().click();
    }

    clickOnRealityTVTitle() {
        this.elements.realityTVTitle().click();
    }

    clickOnPublicFiguresTitle() {
        this.elements.publicFiguresTitle().click();
    }

    clickOnModelsTitle() {
        this.elements.modelsTitle().click();
    }

    clickOnViewAllCategories() {
        this.elements.viewAllCategories().click()
        this.elements.modelsTitle().should('be.visible');
    }

    verifyThatSerachHistoryIsEmpty() {
        this.elements.searchInput().click();
        this.elements.noRecentSearchesText().should('be.visible');
    }

    clickOnFacebookFooterLink() {
        this.elements.faceBookFooterLink().click();
    }

    clickOnInstagramFooterLink() {
        this.elements.instagramFooterLink().click();
    }

    clickOnTiktokFooterLink() {
        this.elements.tiktokFooterLink().click();
    }

    clickOnYoutubeFooterLink() {
        this.elements.youtubeFooterLink().click();
    }

    clickOnProfileNotLoggedUserButton() {
        this.elements.profileNotLoggedUserButton().click();
    }

    clickOnProfileButtonIMG() {
        this.elements.profileButtonImg().click();
    }

    clickOnProfileButton() {
        this.elements.profileButton().click();
    }

    moveToProfile() {
        this.clickOnProfileButtonIMG();
        this.clickOnProfileButton();
    }

    clickOnSocialTab() {
        this.elements.socialTab().click();
    }

    clickOnExploreTab() {
        this.elements.exploreTab().click();
    }

    clickOnChatTab() {
        this.elements.chatTab().click();
    }

    clickOnSearchInput() {
        this.elements.searchInput().click();
    }

    verifyThatIsMainPage() {
        this.elements.homePageID().should('be.visible') ;
    }

    verifyThatSearchHistoryIsEmpty() {
        this.elements.noRecentSearchesText().should("be.visible")
    }

}
export default new MainPage();