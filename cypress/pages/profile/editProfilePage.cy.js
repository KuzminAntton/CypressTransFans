import SignUpPage from "../signUpPage/signUpPage.cy";

class EditProfilePage {

    elements = {
        firstNameInput: () =>  cy.get('input#firstName'),
        lastNameInput: () =>  cy.get(`input#lastName`),
        usernameInput: () =>  cy.get('input[placeholder="Username"]'),
        emailInput: () =>  cy.get('input[label="Email"]'),
        editProfileButton: () => cy.get('span:contains("Edit Profile")').should('be.visible')
    };

    clickOnEditProfileButton() {
        this.elements.editProfileButton().click();
    }

    verifyUserInfo(user) {
       // this.elements.firstNameInput().should('have.value', user.first_name);
       //  this.elements.lastNameInput().should('have.value', user.last_name);
        this.elements.usernameInput().should('have.value', user.username);
        this.elements.emailInput().should('have.value', user.email);
    }
}
export default new EditProfilePage();