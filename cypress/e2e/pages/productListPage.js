class ProductListPage {
    elements = {
        productList: () => cy.get('.features_items .col-sm-4')
    };

    enterThirdProduct() { // this will click the third product on the list and enter in the detail product
        this.elements.productList()
            .eq(2)
            .find('a')
            .contains('View Product')
            .click();
    }
}

export const productListPage = new ProductListPage();
