// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// You don't need to require fs or path, as Cypress provides methods for these.

Cypress.Commands.add('generateRandomGmail', () => {
    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let email = '';
    for (let i = 0; i < 10; i++) {
        email += chars[Math.floor(Math.random() * chars.length)];
    }
    return email + '@gmail.com';
});

Cypress.Commands.add('generateRandomUSAPhoneNumber', () => {
    const areaCode = Math.floor(Math.random() * 900) + 100;
    const prefix = Math.floor(Math.random() * 900) + 100;
    const lineNumber = Math.floor(Math.random() * 9000) + 1000;

    const phoneNumber = `+1 (${areaCode}) ${prefix}-${lineNumber}`;
    return phoneNumber;
});

Cypress.Commands.add('generateRandomString', () => {
    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let randomString = '';
    for (let i = 0; i < 10; i++) {
        randomString += chars[Math.floor(Math.random() * chars.length)];
    }
    return randomString
});

Cypress.Commands.add('clickCenter', { prevSubject: 'element' }, (subject) => {
    const el = subject[0];
    cy.wrap(el).click(el.clientWidth / 2, el.clientHeight / 2);
});
