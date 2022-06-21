const InventoryPage = require('../pageobjects/inventory.page')
const LoginPage = require('../pageobjects/login.page')

describe('Adding to cart page testing', () => {

    beforeAll('open browser', () => {
        browser.url('https://www.saucedemo.com/')
        LoginPage.login('standard_user','secret_sauce');
    })

    it('Adding succesfull', async () => {
        await expect(InventoryPage.addBtn).toHaveText('ADD TO CART');
        await InventoryPage.addBtnList[0].click();
        await InventoryPage.addBtnList[2].click();
        await expect(InventoryPage.cartItems).toHaveText('2');
        await InventoryPage.addBtnList[2].click();
        await expect(InventoryPage.cartItems).toHaveText('1');
        await expect(InventoryPage.removeBtn).toHaveText('REMOVE');
    })
    it('Removing succesfull', async () => {
        await expect(InventoryPage.removeBtn).toHaveText('REMOVE');
        await InventoryPage.removeFromCart();
        await expect(InventoryPage.cartItems).not.toBeExisting();
        await expect(InventoryPage.addBtn).toHaveText('ADD TO CART');
    })
})
