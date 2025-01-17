import { faker } from '@faker-js/faker';

class PaymentPage {
    elements = {
        nameOnCard: () => cy.get('[data-qa="name-on-card"]'),
        cardNumber: () => cy.get('[data-qa="card-number"]'),
        cvc: () => cy.get('[data-qa="cvc"]'),
        expiryMonth: () => cy.get('[data-qa="expiry-month"]'),
        expiryYear: () => cy.get('[data-qa="expiry-year"]'),
        payButton: () => cy.get('[data-qa="pay-button"]'),
        successMessage: () => cy.get('#success_message'),
        orderPlacedMessage: () => cy.get('[data-qa="order-placed"]'),
        continueButton: () => cy.get('[data-qa="continue-button"]'),
    };

    fillPaymentDetails() {
        const cardName = faker.person.fullName();
        const cardNumber = faker.finance.creditCardNumber();
        const cvc = faker.finance.creditCardCVV();
        const expiryMonth = faker.number.int({ min: 1, max: 12 }).toString().padStart(2, '0');
        const expiryYear = new Date().getFullYear() + 2;

        this.elements.nameOnCard().type(cardName);
        this.elements.cardNumber().type(cardNumber);
        this.elements.cvc().type(cvc);
        this.elements.expiryMonth().type(expiryMonth);
        this.elements.expiryYear().type(expiryYear.toString());
    }

    submitPayment() {
        this.elements.payButton().click();
    }

    verifySuccessMessage() {
        this.elements.successMessage().should('be.visible').and('contain', 'Your order has been placed successfully!');
    }

    verifyOrderPlaced() {
        this.elements.orderPlacedMessage().should('be.visible').and('contain', 'Order Placed!');
    }

    clickContinue() {
        this.elements.continueButton().click();
    }
}

export const paymentPage = new PaymentPage();


