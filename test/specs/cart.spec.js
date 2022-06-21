const InventoryPage = require('../pageobjects/inventory.page')
const LoginPage = require('../pageobjects/login.page')
const CartPage = require('../pageobjects/cart.page')

describe('cart test', () => {
    beforeAll('open browser', () => {
        browser.url('https://www.saucedemo.com/')
        LoginPage.login('standard_user','secret_sauce');
        InventoryPage.addToCart(1);
        InventoryPage.addToCart(2);
        InventoryPage.cartBtn.click();
    })

    it('Adding succesfull', async () => {
        // await InventoryPage.removeBtnList[0].click();
        await expect(InventoryPage.cartItems).toHaveText('2');
        // await expect(InventoryPage.removeBtn).toHaveText('REMOVE');
     })
})
// describe('cart test', () => {

//     beforeAll('open browser', () => {
//         browser.url('https://www.saucedemo.com/')
//         LoginPage.login('standard_user','secret_sauce');
//         InventoryPage.addBtnList[0].click();
//         InventoryPage.addBtnList[2].click();
//         InventoryPage.cartBtn.click();
//     })

//     it('Adding succesfull', async () => {
//         await CartPage.removeBtnList[0].click();
//         await expect(InventoryPage.cartItems).toHaveText('1');
//     //     await expect(InventoryPage.removeBtn).toHaveText('REMOVE');
//      })
    // it('Removing succesfull', async () => {
    //     await expect(InventoryPage.removeBtn).toHaveText('REMOVE');
    //     await InventoryPage.removeFromCart();
    //     await expect(InventoryPage.cartItems).not.toBeExisting();
    //     await expect(InventoryPage.addBtn).toHaveText('ADD TO CART');
    // })
// })
