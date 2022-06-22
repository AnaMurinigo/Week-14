const InventoryPage = require('../pageobjects/inventory.page')
const LoginPage = require('../pageobjects/login.page')

describe('Visual objects displayed test', () => {

    beforeAll('open browser', () => {
        browser.url('https://www.saucedemo.com/');
        LoginPage.login('standard_user','secret_sauce');
    })

    it('Products images displayed', async () => {
        for (let i = 0; i < 6; i++) {
            await expect(InventoryPage.imgList[i]).toBeDisplayed;
        }
    })
    it('Products name is displayed', async () => {
        for (let i = 0; i < 6; i++) {
            await expect(InventoryPage.nameList[i]).toBeDisplayed;
        }
    })
    it('Products price is displayed', async () => {
        for (let i = 0; i < 6; i++) {
            await expect(InventoryPage.priceList[i]).toBeDisplayed;
        }
    })
})
describe('Adding to cart standard user page testing', () => {

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
describe('Adding to cart problem user page testing', () => {
    beforeAll('open browser', () => {
        browser.url('https://www.saucedemo.com/');
        LoginPage.login('problem_user','secret_sauce');
    })
    it('Adding product 3 should fail', async () => {
        await expect(InventoryPage.addBtn3).toHaveText('ADD TO CART');
        await InventoryPage.addToCart(3);
        await expect(InventoryPage.cartItems).toHaveText('1');
    })
})


