class UserLoginRegisterPage {
    elements = {
        signupHeader: () => cy.get('h2').contains('New User Signup!'),
        signupNameField: () => cy.get('[data-qa="signup-name"]'),
        signupEmailField: () => cy.get('[data-qa="signup-email"]'),
        signupButton: () => cy.get('[data-qa="signup-button"]'),
    };

    validatePageIsPresent() { // Validates that the "New User Signup!" header is visible on the page.
        this.elements.signupHeader().should('be.visible');
    }

    fillSignupForm() { // Fills the signup form with fake data and submits it with faker library
        this.validatePageIsPresent(); // Validate the page is present before interacting with elements

        const faker = require('@faker-js/faker'); // this is another way to import Faker for generating test data in the method
        const fakeName = faker.faker.name.fullName(); // Generate a random full name
        const fakeEmail = faker.faker.internet.email(); // Generate a random email address

        this.elements.signupNameField().type(fakeName); // Enter the fake name
        this.elements.signupEmailField().type(fakeEmail); // Enter the fake email
        this.elements.signupButton().click();
    }
}

export const userLoginRegisterPage = new UserLoginRegisterPage();