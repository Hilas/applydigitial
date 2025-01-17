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

    validateCart(productName, productPrice) {
        const selectedQuantity = Cypress.env('selectedQuantity');
        this.elements.cartProductRow().should('exist');
        this.elements.cartProductName().should('have.text', productName).then(() => {
            cy.log(`✅ Product Name Validated: ${productName}`);
        });
        this.elements.cartQuantity().should('have.text', `${selectedQuantity}`).then(() => {
            cy.log(`✅ Quantity Validated: ${selectedQuantity}`);
        });
        const expectedTotal = selectedQuantity * productPrice;
        this.elements.cartTotal().should('have.text', `Rs. ${expectedTotal}`).then(() => {
            cy.log(`✅ Total Validated: Rs. ${expectedTotal}`);
        });
    }

    clickProceedToCheckout() {
        this.elements.proceedToCheckoutButton().click();
    }

    validateCheckoutModal() {
        productDetailPage.elements.modalProductAdded()
            .should('be.visible')
            .within(() => {
                cy.get('.modal-title').should('have.text', 'Checkout');
                cy.get('.modal-body').should('contain.text', 'Register / Login account to proceed on checkout.');
            });
    }

    clickRegisterLoginLink() {
        this.elements.registerLoginLink()
            .should('exist')
            .should('be.visible')
            .click();
        cy.url().should('include', '/login');
        cy.get('h2').should('contain.text', 'Login to your account');
    }
}

export const viewCartPage = new ViewCartPage();
