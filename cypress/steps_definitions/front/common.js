import { When, Given, Then } from "@badeball/cypress-cucumber-preprocessor";    
import LoginPage from "../../pages/loginPage";
import HomePage from "../../pages/homePage";
const loginPage = new LoginPage();
const homePage = new HomePage();

Given("que estoy en la pagina de login de Swag Labs", () => {
    cy.visit("/");
    loginPage.getLoginLogo().should("be.visible");

});
When("ingreso el username {string} y password {string}", (username, password) => {
    loginPage.setUsername(username);
    loginPage.setPassword(password);
    loginPage.clickLoginButton();
});

Then("deberia iniciar sesion exitosamente y ser redirigido a la pagina de inicio de Swag Labs", () => {
    homePage.getlogoSwagLabs().should("be.visible");
});

Then("verifico que se muestre el mensaje de error {string}", (errorMessage) => {
    loginPage.getBlockedUserErrorMessage().should("contain.text", errorMessage);
});
