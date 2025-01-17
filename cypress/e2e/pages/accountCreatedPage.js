class AccountCreatedPage {
    elements = {
        accountCreatedMessage: () => cy.get('[data-qa="account-created"]'),
        continueButton: () => cy.get('[data-qa="continue-button"]'),
    };

    validateAccountCreation() {
        this.elements.accountCreatedMessage()
            .should('be.visible')
            .and('contain.text', 'Account Created!');
    }

    clickContinue() {
        this.elements.continueButton().click();
    }
}

export const accountCreatedPage = new AccountCreatedPage();