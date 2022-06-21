const CheckoutPage = require('../pageobjects/checkout.page');
const InventoryPage = require('../pageobjects/inventory.page');
const LoginPage = require('../pageobjects/login.page');
const CartPage = require('../pageobjects/cart.page');
const Checkout2 =  require('../pageobjects/checkout2.page');

afterEach ('Reload page', ()=> {
        browser.url('https://www.saucedemo.com/checkout-step-one.html');
    });
describe('cart test', () => {
    beforeAll('open browser', () => {
        browser.url('https://www.saucedemo.com/')
        LoginPage.login('standard_user','secret_sauce');
        for (let i = 1; i < 7; i++) {
            InventoryPage.addToCart(i);
        }
        InventoryPage.cartBtn.click();
        CartPage.checkOutBtn.click();
    })
    it('empty firstName should display error', async () => {
        await CheckoutPage.entryData('','locked', '1234');
        await expect(CheckoutPage.errorMessage).toHaveText('Error: First Name is required');
        await CheckoutPage.resetFormBtn.click();
    })
    it('empty lastName should display error', async () => {
        await CheckoutPage.entryData('Pepe','', '1234');
        await expect(CheckoutPage.errorMessage).toHaveText('Error: Last Name is required');
    })
    it('empty zip should display error', async () => {
        await CheckoutPage.entryData('Pepe','Lui', '');
        await expect(CheckoutPage.errorMessage).toHaveText('Error: Postal Code is required');
    })
    it('valid data should redirect', async () => {
        await CheckoutPage.entryData('Pepe','Lui', '1234');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
    })
    it('Complete buy', async () => {
        await CheckoutPage.entryData('Pepe','Lui', '1234');
        await Checkout2.finishBtn.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html');
        await Checkout2.backHomeBtn.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    })
    it('Press finish btn in checkout step two', async () => {
        await CheckoutPage.entryData('Pepe','Lui', '1234');
        await CheckoutPage.cancelBtn.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    })
});