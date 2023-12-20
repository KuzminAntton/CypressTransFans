const APITransUrl = "https://api.dev.transfans.com";
const adminToken = "Bearer eyJhbGciOiJSU0EtT0FFUCIsImN0eSI6IkpXVCIsImVuYyI6IkExMjhHQ00iLCJ0eXAiOiJKV1QifQ.KMBZ9Anzt1LTfO0KkWZd_pxIDhr88xsUtWm72IWhyPnhXOyWHPt2jL6tn1CfRA45iRJ0_Xum8W2nwkuxfaW6zm_frglo9z4iAIY_SwIa47ZJAnHK9GlJEPjlekLlOsm9QvBKkF2R9zHsp6l-RPVvxaKS7YqcDS2fDsK4ozA8hOE.IgBxPTDK8F60rwyy.BPFDq3TcvWGNysx05AkPY9Ornjr7oY1AZ7yxYnRKr1ohaRJtzKFsl8L2E-ucdaU7eX-lisIk0ico5JgGiNMHE93IViFFHYbEU1Dm40S7jwc1KG_T2Pg3UORtm2QfAap5e8mAeIo8BPtAEmS2TLO29t9_PMPaaCJNRmT2cOzVLLPuSvXp5IA0JQvaTJkwtoSscvL_6K2GSeHTbjQLe6PjhCP2KDpCyl4dSXrQZsFpcAxdZPWxhcTdmDVdCTYe5gRzeRVwEFmFPQ2szL6lEXPx1ph8zLQEgPeUf_CveqmUjkU3VdPLxgSh3oQnv3DHXu_gF_fQY1oIfhoaO5HcZapPpB2mK5M57HN919eduS75wLL3KOqsn1mcE1deNfTlFgKAe8hFZ3CX-Icv6XPYfOkJy2ZbNWT48-B7Tfs2cvHMGZUzpTSzdiOajJCHIgwSbYuYrii2TZKfaIEKy8YEYvtvuwU704_R7dYchQd0CzyoZv3a_kC7GhG24RpDC_Vc3j5VfSmwytnhSr-W1RPXA87amLW7F-B885bXfGidMXbU4WOE686VdSNgjivyFSfOXzegkb1bCY4W6MTiUEcdYjdIXmAe73y6OnQFkFupnDJzU8w1e60jKMJdVw6oL0Y0cOCa89OnKSFaR6d3d6xVi3FbsivQvHDR9pPFbq38t6wp-5XwFgYS2XEXjK-DbK_HQwmfJLH3haxURy8kNyw4_q4vpl475ERmJfmOeiRSigIxmkeREXe_8AYzg07MVvlKToLxNRIE2YR3P7hN5xFCpeXHfIRwFzLuFPDsfnzBAuUvog.zXm0RlLX8eNE4GeDSeyYaQ"
class LoginAPI {

    constructor() {
        this.loginUrl = Cypress.env("loginUrl");
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