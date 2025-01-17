import { faker } from '@faker-js/faker'; // this is for the faker library import 

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

    fillPaymentDetails() { // This will fill the fake card details in the form
        const cardName = faker.person.fullName(); // Generate a random full name
        const cardNumber = faker.finance.creditCardNumber(); // Generate a random card number
        const cvc = faker.finance.creditCardCVV(); // Generate a random CVC code
        const expiryMonth = faker.number.int({ min: 1, max: 12 }).toString().padStart(2, '0'); // Generate a random month (01-12)
        const expiryYear = new Date().getFullYear() + 2; // Use a year two years in the future

        this.elements.nameOnCard().type(cardName); // Enter the cardholder's name
        this.elements.cardNumber().type(cardNumber); // Enter the card number
        this.elements.cvc().type(cvc); // Enter the CVC code
        this.elements.expiryMonth().type(expiryMonth); // Enter the expiration month
        this.elements.expiryYear().type(expiryYear.toString()); // Enter the expiration year
    }

    submitPayment() { // Trigger the submit payment button
        this.elements.payButton().click();
    }

    verifySuccessMessage() { // This is for verify the success message after trikker submitPayment()
        this.elements.successMessage().should('be.visible').and('contain', 'Your order has been placed successfully!');
    }

    verifyOrderPlaced() { // This is for verify the next page after submit the payment with the text Order Placed
        this.elements.orderPlacedMessage().should('be.visible').and('contain', 'Order Placed!');
    }

    clickContinue() { // Trigger a continue button
        this.elements.continueButton().click();
    }
}

export const paymentPage = new PaymentPage();


