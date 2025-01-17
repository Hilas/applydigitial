class ProductDetailPage {
    elements = {
        productName: () => cy.get('.product-information h2'),
        productPrice: () => cy.get('.product-information span span'),
        quantityInput: () => cy.get('#quantity'),
        addToCartButton: () => cy.get('.product-information .cart'),
        modalProductAdded: () => cy.get('.modal-content'),
        goToCartLink: () => cy.get('.modal-content a[href="/view_cart"]'),
    };

    getProductDetails() { // This method is for retrieves the product's name and price for validations 
        let productDetails = {}; // Initialize an object to store product details
        return this.elements.productName().invoke('text').then(name => {
            productDetails.name = name.trim(); // Clean up the product name by trimming whitespace
            return this.elements.productPrice().invoke('text').then(price => {
                // Remove the "Rs. " prefix and convert the price to a float
                productDetails.price = parseFloat(price.replace('Rs. ', '').trim());
                return productDetails; // Return the completed product details object
            });
        });
    }

    setRandomQuantity() { // Sets a random quantity (between 1 and 20) for the product. /  Uses a custom Cypress command(`cy.getRandomNumber`) defined in `support/commands.js` to generate a random number.
        cy.getRandomNumber(1, 20).then(randomNumber => {
            Cypress.env('selectedQuantity', randomNumber); // Store the selected quantity in the Cypress environment
            this.elements.quantityInput()
                .should('be.visible') // Verify the quantity input field is visible
                .clear() // Clear any existing value in the input field
                .type(randomNumber); // Enter the random quantity into the input field
        });
    }

    addToCart() { // Clicks the "Add to Cart" button to add the product to the shopping cart.
        this.elements.addToCartButton()
            .should('be.visible')
            .click();
    }

    modalVerification() { // Verifies that the modal confirming the product has been added to the cart is displayed correctly.
        this.elements.modalProductAdded()
            .should('be.visible')
            .within(() => {
                cy.get('.modal-title').should('have.text', 'Added!');
                cy.get('.modal-body').should('contain.text', 'Your product has been added to cart.');
                cy.get('a[href="/view_cart"]').should('be.visible');
            });
    }

    goToCart() { // Clicks the "Go to Cart" link in the modal to navigate to the cart page.
        this.elements.goToCartLink()
            .should('be.visible')
            .click();
    }
}

export const productDetailPage = new ProductDetailPage();
