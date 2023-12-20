import baseTest from "../baseTest.cy"
import loginPage from "../../pages/login/loginPage.cy"
import mainPage from "../../pages/mainPage.cy"
import adminLoginPage from "../../pages/admin/login/adminLoginPage.cy"
import mainAdminPage from "../../pages/admin/mainAdminPage.cy"



describe('Tests for login', () => {
  before(() => {
    baseTest.setUpVariables();
  })

  it('login as user', () => {
    cy.visit(baseTest.baseURL + "/login")
    cy.url().should('eq', baseTest.baseURL + '/login')

    loginPage.logIn(baseTest.userName, baseTest.userPassword)
    mainPage.verifyThatIsMainPage()
  });

  it('login as admin', () => {
    cy.visit(baseTest.adminURL + '/login')

    adminLoginPage.logIn(baseTest.adminName, baseTest.adminPassword)
    mainAdminPage.verifyThatIsMainAdminPage(baseTest.adminName)
  });

  it('login as creator', () => {
    cy.visit(baseTest.baseURL + '/login')
    cy.url().should('eq', baseTest.baseURL + '/login')

    loginPage.logIn(baseTest.creatorName, baseTest.creatorPassword)
    mainPage.verifyThatIsMainPage()
  });

  it('login with invalid email', () => {
    cy.visit(baseTest.baseURL + "/login")
    cy.url().should('eq', baseTest.baseURL + '/login')

    loginPage.logIn("blablaincorrectUserName", baseTest.userPassword)
    loginPage.verifyEmailErrorMessageIsVisible()
  });

  it('login with invalid password', () => {
    cy.visit(baseTest.baseURL + "/login")
    cy.url().should('eq', baseTest.baseURL + '/login')

    loginPage.logIn(baseTest.userName, "bla")
    loginPage.verifyWrongEmailOrPasswordErrorMessageIsVisible()
  });

  it('login as not registrated user', () => {
    cy.visit(baseTest.baseURL + "/login")
    cy.url().should('eq', baseTest.baseURL + '/login')

    loginPage.logIn("someCorrectEmailButNotRegistrated@gmail.com", "bla123123123")
    loginPage.verifyNotRegistratedUserErrorMessageIsVisible()
  });

  after(() => {
    console.log("FINISH")
  })
});
