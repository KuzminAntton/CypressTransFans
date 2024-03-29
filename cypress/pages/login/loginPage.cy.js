require('cypress-xpath')
class LoginPage {

    constructor() {
        this.ERROR_EMAIL_MESSAGE = 'email must be a valid email';
        this.WRONG_EMAIL_OR_PASSWORD_MESSAGE = 'Wrong email or password';
        this.NOT_REGISTRATED_USER_MESSAGE = 'The email you have entered is not registered with us. Please sign up and try again.';

    }


    elements = {
        IDOfThePage: () => cy.get('#__next').should('be.visible'),
        loginField: () => cy.get('#input-field-email').should('be.visible'),
        passwordField: () => cy.get('#input-field-password').should('be.visible'),
        submitButton: () => cy.get('[type="submit"]').should('be.visible'),
        signUpButton: () => cy.get('[href="/registration"]').should('be.visible'),
        emailError: () =>  cy.get('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-filled css-zfjn7v"]').should('be.visible'),
        wrongEmailOrPassword: () => cy.get('[class="MuiAlert-message css-q3hi8p"]').should('be.visible')
    };

    logIn(loginName, password) {
        this.verifyThatIsLoginPage();
        this.elements.loginField().type(loginName);
        this.elements.passwordField().type(password);
        this.elements.submitButton().click();
    }
    logInButNotClickSubmitButton(loginName, password) {
        this.verifyThatIsLoginPage();
        this.elements.loginField().type(loginName);
        this.elements.passwordField().type(password);
    }
    clickOnSignUpButton() {
        this.elements.signUpButton().click();
    }

    verifyThatIsLoginPage() {
        this.elements.IDOfThePage();
    }

    verifyEmailErrorMessageIsVisible() {
        this.elements.emailError().should('be.visible')
        this.elements.emailError().should('contain', this.ERROR_EMAIL_MESSAGE)
    }

    verifyWrongEmailOrPasswordErrorMessageIsVisible() {
        this.elements.wrongEmailOrPassword().should('be.visible')
        this.elements.wrongEmailOrPassword().should('contain', this.WRONG_EMAIL_OR_PASSWORD_MESSAGE)
    }

    verifyNotRegistratedUserErrorMessageIsVisible() {
        this.elements.wrongEmailOrPassword().should('be.visible')
        this.elements.wrongEmailOrPassword().should('contain', this.NOT_REGISTRATED_USER_MESSAGE)
    }

}
export default new LoginPage();