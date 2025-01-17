import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { homePage } from '../pages/homePage';
import { productListPage } from "../pages/productListPage";
import { productDetailPage } from "../pages/productDetailPage";
import { viewCartPage } from "../pages/viewCartPage";
import { userLoginRegisterPage } from '../pages/userLoginRegisterPage';
import { userRegisterFormPage } from '../pages/userRegisterFormPage';
import { accountCreatedPage } from '../pages/accountCreatedPage';
import { checkoutPage } from '../pages/checkoutPage';
import { paymentPage } from '../pages/paymentPage';

// this is the imports for the Pages to import the methods that will use here

let productName;
let productPrice;

Given("I enter to the website {string}", (resolution) => {
    if (resolution == 'Desktop') {
        cy.viewport(1280, 720); // this will trigger the desktop viewport
    } else{
        cy.viewport(375, 667); // this will trigger the mobile viewport
    }
    cy.visit("https://automationexercise.com/");
});

When("I enter the third product shown in the product list", () => {
    homePage.enterProductPage();
});

When("I add the product to the cart", () => {
    productListPage.enterThirdProduct();
    productDetailPage.getProductDetails().then(details => {
        productName = details.name;
        productPrice = details.price;
    });
    productDetailPage.setRandomQuantity();
    productDetailPage.addToCart();
    productDetailPage.modalVerification();
    productDetailPage.goToCart();
});

When("I validate the product is correctly added to the checkout page", () => {
    viewCartPage.validateCart(productName, productPrice);
});

Then("Validate the register modal if i click the checkout button for finish the order", () => {
    viewCartPage.clickProceedToCheckout();
    viewCartPage.validateCheckoutModal();
    viewCartPage.clickRegisterLoginLink();
});

When("register a new user", () => {
    userLoginRegisterPage.fillSignupForm();
    userRegisterFormPage.fillAccountForm();
    accountCreatedPage.validateAccountCreation();
    accountCreatedPage.clickContinue();
});

When("i go to the cart and finish the order", () => {
    homePage.goToCart();
    viewCartPage.clickProceedToCheckout();
    checkoutPage.validateProductAndTotal();
    checkoutPage.placeOrder();
    paymentPage.fillPaymentDetails();
    paymentPage.submitPayment();
    paymentPage.verifyOrderPlaced();
    paymentPage.clickContinue();
});

Then("i logout", () => {
    homePage.logout();
    userLoginRegisterPage.validatePageIsPresent();
});