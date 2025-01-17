class ProductDetailPage {
    elements = {
        productName: () => cy.get('.product-information h2'),
        productPrice: () => cy.get('.product-information span span'),
        quantityInput: () => cy.get('#quantity'),
        addToCartButton: () => cy.get('.product-information .cart'),
        modalProductAdded: () => cy.get('.modal-content'),
        goToCartLink: () => cy.get('.modal-content a[href="/view_cart"]'),
    };

    getProductDetails() {
        let productDetails = {};
        return this.elements.productName().invoke('text').then(name => {
            productDetails.name = name.trim();
            return this.elements.productPrice().invoke('text').then(price => {
                productDetails.price = parseFloat(price.replace('Rs. ', '').trim());
                return productDetails;
            });
        });
    }

    setRandomQuantity() {
        cy.getRandomNumber(1, 20).then(randomNumber => {
            Cypress.env('selectedQuantity', randomNumber);
            this.elements.quantityInput()
                .should('be.visible')
                .clear()
                .type(randomNumber);
        });
    }

    addToCart() {
        this.elements.addToCartButton()
            .should('be.visible')
            .click();
    }

    modalVerification() {
        this.elements.modalProductAdded()
            .should('be.visible')
            .within(() => {
                cy.get('.modal-title').should('have.text', 'Added!');
                cy.get('.modal-body').should('contain.text', 'Your product has been added to cart.');
                cy.get('a[href="/view_cart"]').should('be.visible');
            });
    }

    goToCart() {
        this.elements.goToCartLink()
            .should('be.visible')
            .click();
    }
}

export const productDetailPage = new ProductDetailPage();
