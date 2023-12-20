import SignUpPage from "../signUpPage/signUpPage.cy";

class MyProfilePage {

    elements = {
        likedTab: () => cy.xpath('.//div[contains(text(), "Liked")]').should('be.visible'),
        purchasedTab: () => cy.xpath('.//div[contains(text(), "Purchased")]').should('be.visible'),
        collectionTab: () => cy.xpath('.//div[contains(text(), "Collection")]').should('be.visible'),
        followingButton: () => cy.xpath('.//div[contains(text(), "Following")]').should('be.visible'),
        profileNotLoggedUserButton: () => cy.get('div.cursorPtr').should('be.visible'),
        editProfileButton: () => cy.get('span:contains("Edit Profile")').should('be.visible')
    };

    clickOnEditProfileButton() {
        this.elements.editProfileButton().click();
    }

    verifyUserInfo(user) {
        cy.get(`.dv__profileEmail:contains("${user.username}")`).should('be.visible');
    }
}
export default new MyProfilePage();