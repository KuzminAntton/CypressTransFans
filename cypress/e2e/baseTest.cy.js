class BaseTest {
    constructor() {
        // Check if an instance already exists and if so, return it
        if (BaseTest.instance) {
            return BaseTest.instance;
        }

        // If not, proceed to create a new instance
        this.baseDevURL = Cypress.env('DEV_BASE_URL');
        this.baseURL = Cypress.env('DEV_URL');
        this.adminURL = Cypress.env('ADMIN_URL');
        this.userName = Cypress.env('USER_NAME');
        this.userPassword = Cypress.env('USER_PASSWORD');
        this.adminName = Cypress.env('ADMIN_NAME');
        this.adminPassword = Cypress.env('ADMIN_PASSWORD');
        this.creatorName = Cypress.env('CREATOR_NAME');
        this.creatorPassword = Cypress.env('CREATOR_PASSWORD');

        // Save the instance
        BaseTest.instance = this;
    }

    acceptCookies() {
        cy.get('#rcc-confirm-button').then($btn => {
            if ($btn.is(':visible')) {
                $btn.click();
            }
        });
    }

    setUpVariables() {
        this.baseDevURL = Cypress.env('BASE_URL');
        this.adminURL = Cypress.env('ADMIN_URL');
        this.userName = Cypress.env('USER_NAME');
        this.userPassword = Cypress.env('USER_PASSWORD');
        this.adminName = Cypress.env('ADMIN_NAME');
        this.adminPassword = Cypress.env('ADMIN_PASSWORD');
        this.creatorName = Cypress.env('CREATOR_NAME');
        this.creatorPassword = Cypress.env('CREATOR_PASSWORD');
    }
}

const baseTest = new BaseTest(); // This will be the only instance created.

export default baseTest; // Export the singleton instance
