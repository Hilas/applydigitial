class UserLoginRegisterPage {
    elements = {
        signupHeader: () => cy.get('h2').contains('New User Signup!'),
        signupNameField: () => cy.get('[data-qa="signup-name"]'),
        signupEmailField: () => cy.get('[data-qa="signup-email"]'),
        signupButton: () => cy.get('[data-qa="signup-button"]'),
    };

    validatePageIsPresent() {
        this.elements.signupHeader().should('be.visible');
    }

    fillSignupForm() {
        this.validatePageIsPresent();
        const faker = require('@faker-js/faker');
        const fakeName = faker.faker.name.fullName();
        const fakeEmail = faker.faker.internet.email();

        this.elements.signupNameField().type(fakeName);
        this.elements.signupEmailField().type(fakeEmail);
        this.elements.signupButton().click();
    }
}

export const userLoginRegisterPage = new UserLoginRegisterPage();