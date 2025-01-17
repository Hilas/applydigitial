class AccountCreatedPage {
    elements = {
        accountCreatedMessage: () => cy.get('[data-qa="account-created"]'),
        continueButton: () => cy.get('[data-qa="continue-button"]'),
    };

    validateAccountCreation() { // this will validate the acount created is displayed and contians the expected text
        this.elements.accountCreatedMessage()
            .should('be.visible')
            .and('contain.text', 'Account Created!');
    }

    clickContinue() { // click the continue button to navigate to the next page
        this.elements.continueButton().click();
    }
}

export const accountCreatedPage = new AccountCreatedPage();