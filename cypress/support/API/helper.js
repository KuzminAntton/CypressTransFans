const APITransUrl = "https://api.dev.transfans.com";
const succsessVerifiedMessage = "successfully verified."
const succsessBecameCreator = "Success"
class LoginAPI {

    constructor() {
        this.loginUrl = Cypress.env("loginUrl");
    }

    makeUserApprovable(token, phoneNumber, userID, username) {
        // return this.sendVerificationCode(token, phoneNumber, userID).then((verification_response) => {
        //     let verificationId = verification_response.body.data.verificationId
        //     this.validateVerificationCode(token, phoneNumber, verificationId).then((validation_response) => {
        //         expect(validation_response.body.message).equal(succsessVerifiedMessage)
                return this.becomeCreator(token, phoneNumber).then((become_creator_response) => {
                    expect(become_creator_response.body.message).equal(succsessBecameCreator)
                })
        //     })
        // })
    }

    approveDocsAndUser(userId, adminToken) {
            return this.approveUser(adminToken, userId).then((approve_user_response) => {
                this.approveDocs(adminToken, userId).then((approve_docs_response) => {
                    return {
                        userApprovalResponse: approve_user_response,
                        docsApprovalResponse: approve_docs_response
                    };
                })
            })
    }

    approveDocs(token, userId) {
        return cy.request({
            url: `${APITransUrl}/v1/user/account`,
            method: "PUT",
            headers: {
                'lan': "en",
                'platform': 3,
                "Authorization" : token
            },
            body:
                {
                    status: 7,
                    reason: "ok",
                    userIds: [userId],
                },
            failOnStatusCode: false
        })
    }


    approveUser(token, userId) {
        return cy.request({
            url: `${APITransUrl}/v1/user/account`,
            method: "PUT",
            headers: {
                'lan': "en",
                'platform': 3,
                "Authorization" : token
            },
            body:
                {
                    status: 5,
                    reason: "ok",
                    userIds: [userId],
                },
            failOnStatusCode: false
        })
    }

    sendVerificationCode(token, phoneNumber, userID) {
        return cy.request({
            url: `${APITransUrl}/v1/sendVerificationCode`,
            method: "POST",
            headers: {
                'lan': "en",
                'platform': 3,
                "Authorization" : token
            },
            body:
        {
            phoneNumber: phoneNumber,
            countryCode: "1",
            trigger: 1,
            userId: userID,
            country: "USA",
            fingerprint: "Sss"
        },
            failOnStatusCode: false
        })
    }

    validateVerificationCode(token, phoneNumber, verificationID) {
        return cy.request({
            url: `${APITransUrl}/v1/validateVerificationCode`,
            method: "POST",
            headers: {
                'lan': "en",
                'platform': 3,
                "authorization" : token
            },
            body:
                {
                    code: "1111",
                    phoneNumber: phoneNumber,
                    countryCode: "1",
                    trigger: 1,
                    verificationId: verificationID,
                },
            failOnStatusCode: false
        })
    }

    becomeCreator(token, phoneNumber, verificationID, username) {
        return cy.request({
            url: `${APITransUrl}/v1/becomeCreator`,
            method: "POST",
            headers: {
                'lan': "en",
                'platform': 3,
                "authorization" : token
            },
            body:
                {
                    profilePic:"6541211da87650b0774012c8/profile__1698767133097.jpg",
                    // username: username,
                    dateOfBirth:"1994-11-10T22:36:00.000Z",
                    locationId: "651a70f2e86df10007ee1044",
                    groupIds:["638f0ed659965b00170b4e50"],
                    phoneNumber: phoneNumber,
                    countryCode: "1",
                    //TODO return back verification ID when it will work
                    verificationId: "",
                },
            failOnStatusCode: false
        })
    }

    // loginToAdmin() {
    //     return cy.request({
    //         url: `${APITransUrl}/v1/python/login/`,
    //         method: "POST",
    //         headers: {
    //             'lan': "en",
    //             'platform': 3
    //         },
    //         body: {
    //             data:[{
    //
    //                     appName:"fanzly"}
    //             ]},
    //         failOnStatusCode: false
    //     })
    // }


    signUp(user, token) {
        return cy.request({
            url: `${APITransUrl}/v1/signUp`,
            method: "POST",
            headers: {
                'lan': "en",
                'authorization': token,
                'platform': 3
            },
            body: user,
        failOnStatusCode: false
    })
    }

    deleteUserAdminByID(userID, adminToken) {
        return cy.request({
            url: `${APITransUrl}/v1/user/account`,
            method: "PUT",
            headers: {
                'lan': "en",
                'authorization': adminToken
            },
            body: {
                status:"4",
                userIds:[userID],
                reason:"some_reason"
            },
            failOnStatusCode: false
        })
    }

    getAdminToken() {
        return cy.request({
            url: `${APITransUrl}/v1/python/login/`,
            method: "POST",
            headers: {
                'lan': "en",
                'platform': 3
            },
            body: {
                data:[{
                    email: Cypress.env("ADMIN_API_EMAIL"),
                    password:Cypress.env("ADMIN_API_PASS"),
                    appName:"fanzly"
                }]
            },
            failOnStatusCode: false
        })
    }

    getGuestToken() {
        return cy.request({
            url: `${APITransUrl}/v1/guestLogin`,
            method: "POST",
            headers: {
                'lan': "en",
                'authorization':"Basic dHJhbnNmYW5zOmFkbWluQHRyYW5zZmFucy5jb20="
            },
            body: {
                deviceId:"cb31df240b528c563f59d7d8cf86548b",
                deviceMake:"web",
                deviceModel:"web",
                deviceTypeCode:3,
                deviceOs:"Linux-null-web",
                browserVersion:"119.0.0.0"
            },
            failOnStatusCode: false
        })
    }

}

export default new LoginAPI();