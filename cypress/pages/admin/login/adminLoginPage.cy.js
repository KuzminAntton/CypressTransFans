
class AdminLoginPage {

    elements = {
        loginField: () => cy.get('#email'),
        passwordField: () => cy.get('#password-field'),
        submitButton: () => cy.get('button[type="submit"]')
    };

    logIn(loginName, password) {
        this.elements.loginField().type(loginName);
        this.elements.passwordField().type(password);
        this.elements.submitButton().click();
    }
}
export default new AdminLoginPage();