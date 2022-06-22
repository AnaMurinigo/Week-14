const InventoryPage = require('../pageobjects/inventory.page')
const LoginPage = require('../pageobjects/login.page')

describe('Adding to cart page testing', () => {

    beforeAll('open browser', () => {
        browser.url('https://www.saucedemo.com/')
        LoginPage.login('standard_user','secret_sauce');
    })

    it('Adding succesfull', async () => {
        await expect(InventoryPage.addBtn1).toHaveText('ADD TO CART');
        for (let i = 1; i < 7; i++) {
            await InventoryPage.addToCart(i);
            await expect(InventoryPage.cartItems).toHaveText(`${i}`);
        }
    })
    it('Removing all succesfull', async () => {
        for (let i = 1; i < 6; i++) {
            await InventoryPage.removeFromCart(i);
            const n=6-i;
            await expect(InventoryPage.cartItems).toHaveText(`${n}`);
        }
        await expect(InventoryPage.removeBtn6).toHaveText('REMOVE');
        await InventoryPage.removeFromCart(6);
        await expect(InventoryPage.cartItems).not.toBeExisting();
        await expect(InventoryPage.addBtn6).toHaveText('ADD TO CART');
    })
})
