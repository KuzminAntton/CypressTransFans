import helperAPI from "../../support/API/helper";
import fake from "fakerator";

describe('Tests for registration', () => {
    let userID; // Declare userID at a higher scope

    beforeEach(() => {
        // Initialization steps if any
    });

    describe('API tests', () => {
        it('User registration and retrieval of userID', () => {
            cy.fixture('users.json').then((user) => {
                helperAPI.getGuestToken().then(response => {
                    user.user_api.email = fake().internet.email();
                    user.user_api.username = fake().names.firstName();

                    expect(response.status).to.eq(200); // Replace 200 with the expected status code
                    helperAPI.signUp(user.user_api, response.body.data.accessToken).then((response) => {
                        userID = response.body.data.user._id; // Assign the userID
                        cy.log("User ID: " + userID);
                    });
                });
            });
        });

        // Other tests can go here

        afterEach(() => {
            if (userID) {
                helperAPI.deleteUserAdminByID(userID).then((delete_response) => {
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
