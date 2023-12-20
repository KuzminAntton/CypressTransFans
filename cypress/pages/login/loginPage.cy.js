require('cypress-xpath')
class LoginPage {

    constructor() {
        this.ERROR_EMAIL_MESSAGE = 'email must be a valid email';
        this.WRONG_EMAIL_OR_PASSWORD_MESSAGE = 'Wrong email or password';
        this.NOT_REGISTRATED_USER_MESSAGE = 'Oops ! Seems like you are not registered with us , please click on Sign up to with new user or try again with a different email address';

    }


    elements = {
        IDOfThePage: () => cy.get('#login_cont').should('be.visible'),
        loginField: () => cy.get('#dv_email_usr').should('be.visible'),
        passwordField: () => cy.xpath('//input[@type="password"]').should('be.visible'),
        submitButton: () => cy.get('#logIn1').should('be.visible'),
        signUpButton: () => cy.xpath('.//a[contains(text(), "Sign Up Now")]').should('be.visible'),
        emailError: () => cy.get('#dv_email_usr-helper-text'),
        wrongEmailOrPassword: () => cy.xpath('.//p[@id="pwd_usr1 forgotPassDiv-helper-text"]')
    };

    logIn(loginName, password) {
        this.verifyThatIsLoginPage();
        this.elements.loginField().type(loginName);
        this.elements.passwordField().type(password);
        this.elements.submitButton().click();
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