class HomePage {
    elements = {
        productMenu: () => cy.get('.shop-menu > .nav').contains('Products'),
        cartMenu: () => cy.get('.shop-menu .fa-shopping-cart').parent(),
        logoutButton: () => cy.get('.shop-menu').contains('Logout'),
    };

    enterProductPage() { // got to product menu option
        this.elements.productMenu().click();
    }

    goToCart() { // go to cart menu option
        this.elements.cartMenu().click();
    }

    logout() { // logout menu option
        this.elements.logoutButton().click();
    }
}

export const homePage = new HomePage();
