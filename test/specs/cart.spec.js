const InventoryPage = require('../pageobjects/inventory.page')
const LoginPage = require('../pageobjects/login.page')
const CartPage = require('../pageobjects/cart.page')

describe('cart test', () => {
    beforeAll('open browser', () => {
        browser.url('https://www.saucedemo.com/')
        LoginPage.login('standard_user','secret_sauce');
        for (let i = 1; i < 7; i++) {
            InventoryPage.addToCart(i);
        }
        InventoryPage.cartBtn.click();
    })

    it('Removing succesfull', async () => {
        await expect(InventoryPage.removeBtn1).toHaveText('REMOVE');
        await InventoryPage.removeFromCart(1);
        await expect(InventoryPage.cartItems).toHaveText('5');
     })
     it('Continue shopping test', async () => {
        await CartPage.continueShopBtn.click();
        await expect(LoginPage.title).toHaveText('PRODUCTS');
     })
     it('Check out test', async () => {
        await InventoryPage.cartBtn.click();
        await CartPage.checkOutBtn.click();
        await expect(LoginPage.title).toHaveText('CHECKOUT: YOUR INFORMATION');
     })
})