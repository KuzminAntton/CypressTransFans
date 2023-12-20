import loginPage from "../../pages/login/loginPage.cy";
import mainPage from "../../pages/mainPage.cy";
import baseTest from "../baseTest.cy";
import signUpPage from "../../pages/signUpPage/signUpPage.cy";
import myProfilePage from "../../pages/profile/myProfilePage.cy";
import editProfilePage from "../../pages/profile/editProfilePage.cy";

describe('Tests for registration', () => {


    beforeEach(() => {
        cy.visit(baseTest.baseURL + '/login');
        cy.url().should('contain', baseTest.baseURL + '/login');
    });

    it('Verify Sign up for User', () => {
        loginPage.clickOnSignUpButton();

        cy.fixture('users.json').then((user) => {
            cy.generateRandomGmail().then((randomGmail) => {
                user.user_default.email = randomGmail;
                cy.generateRandomString().then((randomString) => {
                    user.user_default.username = randomString

                    cy.log("email : " + user.user_default.email)
                    cy.log("username : " + user.user_default.username)


                    signUpPage.fillUserForm(user.user_default);
                    signUpPage.clickSignUpButton();
                    cy.wait(2000);
                    //
                    mainPage.moveToProfile();
                    myProfilePage.verifyUserInfo(user.user_default);
                    myProfilePage.clickOnEditProfileButton();

                    editProfilePage.verifyUserInfo(user.user_default);
                });
                })

        });

    });

    after(() => {
        console.log("FINISH")
    })
});
