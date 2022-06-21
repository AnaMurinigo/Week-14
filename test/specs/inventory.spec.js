const InventoryPage = require('../pageobjects/inventory.page')
const LoginPage = require('../pageobjects/login.page')

describe('Adding to cart page testing', () => {

    beforeAll('open browser', () => {
        browser.url('https://www.saucedemo.com/')
        LoginPage.login('standard_user','secret_sauce');
    })

    it('Adding succesfull', async () => {
        await expect(InventoryPage.addBtn1).toHaveText('ADD TO CART');
        await InventoryPage.addToCart(1);
        await InventoryPage.addToCart(2);
        await expect(InventoryPage.cartItems).toHaveText('2');
        await InventoryPage.removeFromCart(2);
        await expect(InventoryPage.cartItems).toHaveText('1');
    })
    it('Removing all succesfull', async () => {
        await expect(InventoryPage.removeBtn1).toHaveText('REMOVE');
        await InventoryPage.removeFromCart(1);
        await expect(InventoryPage.cartItems).not.toBeExisting();
        await expect(InventoryPage.addBtn1).toHaveText('ADD TO CART');
    })
})
