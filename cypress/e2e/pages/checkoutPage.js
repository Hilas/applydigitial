class CheckoutPage {
    elements = {
        productRow: () => cy.get('#product-3'),
        productPrice: () => cy.get('#product-3 .cart_price p'),
        productQuantity: () => cy.get('#product-3 .cart_quantity button.disabled'),
        productTotal: () => cy.get('#product-3 .cart_total_price'),
        placeOrderButton: () => cy.get('.btn.btn-default.check_out'),
    };

    validateProductAndTotal() { //Validates that the product total is correct by ensuring the total price matches the product price multiplied by the quantity.
        this.elements.productPrice().invoke('text').then((priceText) => {
            const price = parseFloat(priceText.replace('Rs. ', '')); // Extract price as a float
            this.elements.productQuantity().invoke('text').then((quantityText) => {
                const quantity = parseInt(quantityText, 10); // Extract quantity as an integer
                this.elements.productTotal().invoke('text').then((totalText) => {
                    const total = parseFloat(totalText.replace('Rs. ', '')); // Extract total as a float
                    expect(total).to.equal(price * quantity);// Assert that total equals price multiplied by quantity
                });
            });
        });
    }

    placeOrder() { // this will trigger the "Place Order" button click
        this.elements.placeOrderButton().click();
    }
}

export const checkoutPage = new CheckoutPage();
