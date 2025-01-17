class HomePage {
    elements = {
        productMenu: () => cy.get('.shop-menu > .nav').contains('Products'),
        cartMenu: () => cy.get('.shop-menu .fa-shopping-cart').parent(),
        logoutButton: () => cy.get('.shop-menu').contains('Logout'),
    };

    enterProductPage() {
        this.elements.productMenu().click();
    }

    goToCart() {
        this.elements.cartMenu().click();
    }

    logout() {
        this.elements.logoutButton().click();
    }
}

export const homePage = new HomePage();
