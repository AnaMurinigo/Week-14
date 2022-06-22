const CheckoutPage = require('../pageobjects/checkout.page');
const InventoryPage = require('../pageobjects/inventory.page');
const LoginPage = require('../pageobjects/login.page');
const CartPage = require('../pageobjects/cart.page');
const Checkout2 =  require('../pageobjects/checkout2.page');

describe('Login page test', () => {
    beforeAll('open browser', () => {
        browser.url('https://www.saucedemo.com/')
    })
    it('Robot should be displayed', async () => {
        await expect(LoginPage.botImg).toExist();
    })
    it('Logo should be displayed', async () => {
        await expect(LoginPage.logoImg).toExist();
    })
    it('Login succes', async () => {
        await LoginPage.login('standard_user','secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });
    it('Products images displayed on inventory', async () => {
        for (let i = 0; i < 6; i++) {
            await expect(InventoryPage.imgList[i]).toBeDisplayed;
        }
    })
    it('Products name is displayed', async () => {
        for (let i = 0; i < 6; i++) {
            await expect(InventoryPage.nameList[i]).toBeDisplayed;
        }
    })
     it('Adding to cart succesfull', async () => {
        await expect(InventoryPage.addBtn1).toHaveText('ADD TO CART');
        for (let i = 1; i < 7; i++) {
            await InventoryPage.addToCart(i);
            await expect(InventoryPage.cartItems).toHaveText(`${i}`);
        }
    })
     it('Removing succesfull', async () => {
        await expect(InventoryPage.removeBtn1).toHaveText('REMOVE');
        await InventoryPage.removeFromCart(1);
        await expect(InventoryPage.cartItems).toHaveText('5');
     })
    it('Check out test', async () => {
        await InventoryPage.cartBtn.click();
        await CartPage.checkOutBtn.click();
        await expect(LoginPage.title).toHaveText('CHECKOUT: YOUR INFORMATION');
     })
    it('valid data should redirect', async () => {
        await CheckoutPage.entryData('Pepe','Lui', '1234');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
    })
    it('Complete buy', async () => {
        await Checkout2.finishBtn.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html');
        await Checkout2.backHomeBtn.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    })
})
