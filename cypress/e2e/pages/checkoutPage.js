class CheckoutPage {
    elements = {
        productRow: () => cy.get('#product-3'),
        productPrice: () => cy.get('#product-3 .cart_price p'),
        productQuantity: () => cy.get('#product-3 .cart_quantity button.disabled'),
        productTotal: () => cy.get('#product-3 .cart_total_price'),
        placeOrderButton: () => cy.get('.btn.btn-default.check_out'),
    };

    validateProductAndTotal() {
        this.elements.productPrice().invoke('text').then((priceText) => {
            const price = parseFloat(priceText.replace('Rs. ', ''));
            this.elements.productQuantity().invoke('text').then((quantityText) => {
                const quantity = parseInt(quantityText, 10);
                this.elements.productTotal().invoke('text').then((totalText) => {
                    const total = parseFloat(totalText.replace('Rs. ', ''));
                    expect(total).to.equal(price * quantity);
                });
            });
        });
    }

    placeOrder() {
        this.elements.placeOrderButton().click();
    }
}

export const checkoutPage = new CheckoutPage();
