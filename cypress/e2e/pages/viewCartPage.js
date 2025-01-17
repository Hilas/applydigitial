import { productDetailPage } from './productDetailPage';

class ViewCartPage {
    elements = {
        cartProductRow: () => cy.get('#cart_info_table tbody tr'),
        cartProductName: () => cy.get('.cart_description h4 a'),
        cartQuantity: () => cy.get('.cart_quantity button'),
        cartPrice: () => cy.get('.cart_price p'),
        cartTotal: () => cy.get('.cart_total .cart_total_price'),
        proceedToCheckoutButton: () => cy.get('.btn.btn-default.check_out'),
        registerLoginLink: () => cy.get('#checkoutModal').find('a[href="/login"]'),
    };

    validateCart(productName, productPrice) { // validate the cart contents and prices, i use logs for print in the console for optional way
        const selectedQuantity = Cypress.env('selectedQuantity'); // Retrieve the selected quantity from environment variables
        this.elements.cartProductRow().should('exist'); // Verify the product row exists
        this.elements.cartProductName()
            .should('have.text', productName) // Validate the product name
            .then(() => {
                cy.log(`✅ Product Name Validated: ${productName}`);
            });
        this.elements.cartQuantity()
            .should('have.text', `${selectedQuantity}`) // Validate the quantity matches
            .then(() => {
                cy.log(`✅ Quantity Validated: ${selectedQuantity}`);
            });
        const expectedTotal = selectedQuantity * productPrice; // Calculate the expected total price
        this.elements.cartTotal()
            .should('have.text', `Rs. ${expectedTotal}`) // Validate the total price matches
            .then(() => {
                cy.log(`✅ Total Validated: Rs. ${expectedTotal}`);
            });
    }

    clickProceedToCheckout() { // Clicks the "Proceed to Checkout" button to navigate to the checkout page.
        this.elements.proceedToCheckoutButton().click();
    }

    validateCheckoutModal() { // Validates that the checkout modal is displayed correctly.
        productDetailPage.elements.modalProductAdded()
            .should('be.visible')
            .within(() => {
                cy.get('.modal-title').should('have.text', 'Checkout');
                cy.get('.modal-body').should('contain.text', 'Register / Login account to proceed on checkout.');
            });
    }

    clickRegisterLoginLink() { // Clicks the "Register / Login" link in the checkout modal to navigate to the login page
        this.elements.registerLoginLink()
            .should('exist')
            .should('be.visible')
            .click();
        cy.url().should('include', '/login');
        cy.get('h2').should('contain.text', 'Login to your account');
    }
}

export const viewCartPage = new ViewCartPage();
