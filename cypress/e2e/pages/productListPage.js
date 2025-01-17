class ProductListPage {
    elements = {
        productList: () => cy.get('.features_items .col-sm-4')
    };

    enterThirdProduct() {
        this.elements.productList()
            .eq(2)
            .find('a')
            .contains('View Product')
            .click();
    }
}

export const productListPage = new ProductListPage();
