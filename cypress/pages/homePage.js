class HomePage {
    elements = {
        logoSwagLabs: () => cy.get('.app_logo'),
        buttonAddToCartSauceLabsBackpack: () => cy.get('#add-to-cart-sauce-labs-backpack'),
        buttonAddToCartSauceLabsBoltTShirt: () => cy.get('#add-to-cart-sauce-labs-bolt-t-shirt'),
        buttonAddToCartSauceLabsOnesie: () => cy.get('#add-to-cart-sauce-labs-onesie'),
        inventoryItemName: () => cy.get('.inventory_item_name')
    }

    clickAddToCart(){
        this.elements.buttonAddToCartSauceLabsBackpack().click();

    }
    clickAddToCartMultipleProducts(){
        this.elements.buttonAddToCartSauceLabsBackpack().click();
        this.elements.buttonAddToCartSauceLabsBoltTShirt().click();
        this.elements.buttonAddToCartSauceLabsOnesie().click();
    }
    getlogoSwagLabs(){
        return this.elements.logoSwagLabs();
    }
    getInventoryItemName(){
        return this.elements.inventoryItemName();
    }
}
export default HomePage;