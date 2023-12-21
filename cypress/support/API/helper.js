const APITransUrl = "https://api.dev.transfans.com";
const adminToken = "Bearer eyJhbGciOiJSU0EtT0FFUCIsImN0eSI6IkpXVCIsImVuYyI6IkExMjhHQ00iLCJ0eXAiOiJKV1QifQ.KMBZ9Anzt1LTfO0KkWZd_pxIDhr88xsUtWm72IWhyPnhXOyWHPt2jL6tn1CfRA45iRJ0_Xum8W2nwkuxfaW6zm_frglo9z4iAIY_SwIa47ZJAnHK9GlJEPjlekLlOsm9QvBKkF2R9zHsp6l-RPVvxaKS7YqcDS2fDsK4ozA8hOE.IgBxPTDK8F60rwyy.BPFDq3TcvWGNysx05AkPY9Ornjr7oY1AZ7yxYnRKr1ohaRJtzKFsl8L2E-ucdaU7eX-lisIk0ico5JgGiNMHE93IViFFHYbEU1Dm40S7jwc1KG_T2Pg3UORtm2QfAap5e8mAeIo8BPtAEmS2TLO29t9_PMPaaCJNRmT2cOzVLLPuSvXp5IA0JQvaTJkwtoSscvL_6K2GSeHTbjQLe6PjhCP2KDpCyl4dSXrQZsFpcAxdZPWxhcTdmDVdCTYe5gRzeRVwEFmFPQ2szL6lEXPx1ph8zLQEgPeUf_CveqmUjkU3VdPLxgSh3oQnv3DHXu_gF_fQY1oIfhoaO5HcZapPpB2mK5M57HN919eduS75wLL3KOqsn1mcE1deNfTlFgKAe8hFZ3CX-Icv6XPYfOkJy2ZbNWT48-B7Tfs2cvHMGZUzpTSzdiOajJCHIgwSbYuYrii2TZKfaIEKy8YEYvtvuwU704_R7dYchQd0CzyoZv3a_kC7GhG24RpDC_Vc3j5VfSmwytnhSr-W1RPXA87amLW7F-B885bXfGidMXbU4WOE686VdSNgjivyFSfOXzegkb1bCY4W6MTiUEcdYjdIXmAe73y6OnQFkFupnDJzU8w1e60jKMJdVw6oL0Y0cOCa89OnKSFaR6d3d6xVi3FbsivQvHDR9pPFbq38t6wp-5XwFgYS2XEXjK-DbK_HQwmfJLH3haxURy8kNyw4_q4vpl475ERmJfmOeiRSigIxmkeREXe_8AYzg07MVvlKToLxNRIE2YR3P7hN5xFCpeXHfIRwFzLuFPDsfnzBAuUvog.zXm0RlLX8eNE4GeDSeyYaQ"
const succsessVerifiedMessage = "successfully verified."
const succsessBecameCreator = "Success"
class LoginAPI {

    constructor() {
        this.loginUrl = Cypress.env("loginUrl");
    }

    makeUserApprovable(token, phoneNumber, userID, username) {
        return this.sendVerificationCode(token, phoneNumber, userID).then((verification_response) => {
            let verificationId = verification_response.body.data.verificationId
            this.validateVerificationCode(token, phoneNumber, verificationId).then((validation_response) => {
                expect(validation_response.body.message).equal(succsessVerifiedMessage)
                this.becomeCreator(token, phoneNumber, verificationId, username).then((become_creator_response) => {
                    expect(become_creator_response.body.message).equal(succsessBecameCreator)
                })
            })
        })
    }

    approveDocsAndUser(userId) {
        return this.loginToAdmin().then((admin_login_response) => {
            let adminToken = admin_login_response.body.result[0].token
            this.approveUser(adminToken, userId).then((approve_user_response) => {
                this.approveDocs(adminToken, userId).then((approve_docs_response) => {
                    return {
                        userApprovalResponse: approve_user_response,
                        docsApprovalResponse: approve_docs_response
                    };
                })
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
                    username: username,
                    dateOfBirth:"0994-11-10T22:36:00.000Z",
                    groupIds:["638f0ed659965b00170b4e50"],
                    phoneNumber: phoneNumber,
                    countryCode: "1",
                    verificationId: verificationID,
                },
            failOnStatusCode: false
        })
    }

    loginToAdmin() {
        return cy.request({
            url: `${APITransUrl}/v1/python/login/`,
            method: "POST",
            headers: {
                'lan': "en",
                'platform': 3
            },
            body: {
                data:[{
                        email:"admin2@gmail.com",
                        password:"M0VtYmVk",
                        appName:"fanzly"}
                ]},
            failOnStatusCode: false
        })
    }


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

    deleteUserAdminByID(userID) {
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