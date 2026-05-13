import { When, Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/homePage";
import YourCartPage from "../../pages/yourCartPage";
import YourInformationPage from "../../pages/yourInformationPage";
import checkoutOverviewPage from "../../pages/checkoutOverviewPage";

const homePage = new HomePage();
const yourCartPage = new YourCartPage();
const yourInformationPage = new YourInformationPage();
const checkoutOverviewPageInstance = new checkoutOverviewPage();

When("agrego el producto {string} al carrito de compras", (productName) => {
    homePage.getInventoryItemName().should('contain', productName);
    homePage.clickAddToCart();
    
});

Then("el producto {string} deberia ser agregado al carrito de compras exitosamente", (productName) => {
    yourCartPage.clickButtonCart();
    yourCartPage.getInventoryItemName().should('contain', productName);
    
});

When("ingreso el nombre {string}, apellido {string} y codigo postal {string} para realizar el checkout", (name, lastName, postalCode) => {
    yourCartPage.clickButtonCheckout();
    yourInformationPage.setFirstName(name);
    yourInformationPage.setLastName(lastName);
    yourInformationPage.setPostalCode(postalCode);
    yourInformationPage.clickContinueButton();
});

Then("la compra del producto {string} deberia ser realizada exitosamente", (productName) => {
    checkoutOverviewPageInstance.getTitleInformation().should('contain', 'Checkout: Overview');
    checkoutOverviewPageInstance.getInventoryItemName().should('contain', productName);
    checkoutOverviewPageInstance.clickButtonFinish();
    checkoutOverviewPageInstance.getMessageOrderSuccess().should('contain', 'Thank you for your order!');
});

Then("elimino el producto {string} del carrito de compras", (productName) => {
    yourCartPage.clickButtonRemove();

});

Then("el producto {string} deberia ser eliminado del carrito de compras exitosamente", (productName) => {
    yourCartPage.getInventoryItemName().should('not.exist');
});

When("agrego los productos {string}, {string} y {string} al carrito de compras", (productName1, productName2, productName3) => {

    homePage.getInventoryItemName().should('contain', productName1);
    homePage.clickAddToCart();
    cy.wait(1000);
    homePage.getInventoryItemName().should('contain', productName2);
    homePage.clickAddToCart();
    cy.wait(1000);
    homePage.getInventoryItemName().should('contain', productName3);
    cy.wait(1000);
    homePage.clickAddToCart();
    
});