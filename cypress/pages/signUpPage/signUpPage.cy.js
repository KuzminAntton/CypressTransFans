class SignUpPage {
    elements = {
        userTab: () => cy.get('div:contains("User")').should('be.visible'),
        usernameField: () => cy.get('#input-field-username').should('be.visible'),
        emailField: () => cy.get('#input-field-email').should('be.visible'),
        passwordField: () => cy.get('#input-field-password').should('be.visible'),
        confirmPasswordField: () => cy.get('#input-field-password2').should('be.visible'),
        signUpButton: () => cy.xpath('.//*[contains(text(),"Sign up")]').should('be.visible'),
        referalCode: () => cy.get('input[placeholder="Enter Referral code"]').should('be.visible')
    };

    fillUsernameField(username) {
        this.elements.usernameField().type(username);
    }

    fillEmailField(email) {
        this.elements.emailField().type(email);
    }

    fillPasswordField(password) {
        this.elements.passwordField().type(password);
    }

    fillConfirmPasswordField(password) {
        this.elements.confirmPasswordField().type(password);
    }

    clickSignUpButton() {
        this.elements.signUpButton().click();
    }

    fillUserForm(user) {
        this.fillUsernameField(user.username);
        cy.wait(2000);
        this.fillEmailField(user.email);
        cy.wait(2000);
        this.fillPasswordField(user.password);
        this.fillConfirmPasswordField(user.password)

    }

}

export default new SignUpPage();
