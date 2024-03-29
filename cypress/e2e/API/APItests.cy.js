import helperAPI from "../../support/API/helper";
import fake from "fakerator";
import user from "../../fixtures/users.json"

describe('Tests for registration', () => {
    let userID;
    let guestToken;
    let adminToken;

    before(() => {
        helperAPI.getGuestToken().then(response => {
            // guestToken = response.body.data.accessToken
            guestToken = response.body.data.accessToken
        });

        helperAPI.getAdminToken().then(response => {
            adminToken = response.body.result[0].token
        });

    })

    beforeEach(() => {
        // Initialization steps if any
    });

    describe('API tests', () => {
        it('User registration and retrieval of userID', () => {
                user.user_api.email = fake().internet.email();
                user.user_api.username = fake().names.firstName();

                    helperAPI.signUp(user.user_api, guestToken).then((response) => {
                    userID = response.body.data.user._id; // Assign the userID
                    cy.log("User ID: " + userID);
                });
        });

        it('User registration As creator', () => {
            user.user_api.email = fake().internet.email();
            user.user_api.username = fake().names.firstName();
            cy.generateRandomUSAPhoneNumber().then(usaPhoneNumber => {
                helperAPI.signUp(user.user_api, guestToken).then((response) => {
                    userID = response.body.data.user._id; // Assign the userID
                    let userToken = response.body.data.token.accessToken
                    cy.log("user token : " + userToken)
                    helperAPI.makeUserApprovable(userToken, usaPhoneNumber, userID, user.user_api.username).then((response) => {
                        helperAPI.approveDocsAndUser(userID, adminToken).then((response) => {
                            cy.log(response.userApprovalResponse.body)
                        })
                    })
                });
            });

        });

        // Other tests can go here

        afterEach(() => {
            if (userID) {
                helperAPI.deleteUserAdminByID(userID, adminToken).then((delete_response) => {
                    cy.log("User deleted: " + userID);
                    userID = null; // Reset userID after deletion
                });
            }
        });
    });

    after(() => {
        console.log("FINISH");
    });
});
