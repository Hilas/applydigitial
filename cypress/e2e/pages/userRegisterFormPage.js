class UserRegisterFormPage {
    constructor() {
        this.generatedCredentials = {
            email: null,
            password: null,
        };
    }

    elements = {
        titleMrRadio: () => cy.get('#id_gender1'),
        titleMrsRadio: () => cy.get('#id_gender2'),
        passwordField: () => cy.get('[data-qa="password"]'),
        dayDropdown: () => cy.get('[data-qa="days"]'),
        monthDropdown: () => cy.get('[data-qa="months"]'),
        yearDropdown: () => cy.get('[data-qa="years"]'),
        newsletterCheckbox: () => cy.get('#newsletter'),
        offersCheckbox: () => cy.get('#optin'),
        firstNameField: () => cy.get('[data-qa="first_name"]'),
        lastNameField: () => cy.get('[data-qa="last_name"]'),
        companyField: () => cy.get('[data-qa="company"]'),
        addressField: () => cy.get('[data-qa="address"]'),
        address2Field: () => cy.get('[data-qa="address2"]'),
        countryDropdown: () => cy.get('[data-qa="country"]'),
        stateField: () => cy.get('[data-qa="state"]'),
        cityField: () => cy.get('[data-qa="city"]'),
        zipcodeField: () => cy.get('[data-qa="zipcode"]'),
        mobileNumberField: () => cy.get('[data-qa="mobile_number"]'),
        createAccountButton: () => cy.get('[data-qa="create-account"]'),
    };

    fillAccountForm() { // Fills the account creation form with random data and submits it using faker library
        const { faker } = require('@faker-js/faker');
        
        // Generate random credentials
        const randomEmail = faker.internet.email();
        const randomPassword = faker.internet.password();

        // Store credentials for future use
        this.generatedCredentials.email = randomEmail;
        this.generatedCredentials.password = randomPassword;

        // Select a random title
        if (Math.random() > 0.5) {
            this.elements.titleMrRadio().check({ force: true });
        } else {
            this.elements.titleMrsRadio().check({ force: true });
        }

        // Fill the form fields
        this.elements.passwordField().type(randomPassword);

        const randomDay = String(faker.number.int({ min: 1, max: 31 }));
        this.elements.dayDropdown().select(randomDay);

        const randomMonth = faker.date.month();
        this.elements.monthDropdown().select(randomMonth);

        const randomYear = String(faker.number.int({ min: 1950, max: 2005 }));
        this.elements.yearDropdown().select(randomYear);

        this.elements.newsletterCheckbox().check({ force: true });
        this.elements.offersCheckbox().check({ force: true });
        this.elements.firstNameField().type(faker.person.firstName());
        this.elements.lastNameField().type(faker.person.lastName());
        this.elements.companyField().type(faker.company.name());
        this.elements.addressField().type(faker.location.streetAddress());
        this.elements.address2Field().type(faker.location.secondaryAddress());
        this.elements.countryDropdown().select('United States');
        this.elements.stateField().type(faker.location.state());
        this.elements.cityField().type(faker.location.city());
        this.elements.zipcodeField().type(faker.location.zipCode());
        this.elements.mobileNumberField().type(faker.phone.number('##########'));
        this.elements.createAccountButton().click();
    }

    getCredentials() { // Retrieves the generated email and password after form submission.
        return this.generatedCredentials;
    }
}

export const userRegisterFormPage = new UserRegisterFormPage();
