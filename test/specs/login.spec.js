const LoginPage = require('../pageobjects/login.page')
afterEach ('Reload page', ()=> {
    browser.url('https://www.saucedemo.com/');
});
describe('Login page testing', () => {

// beforeAll('open browser', () => {
//     browser.url('https://www.saucedemo.com/')
// })
    it('Login succes', async () => {
        await browser.url('https://www.saucedemo.com/');
        await LoginPage.login('standard_user','secret_sauce');
        await expect(LoginPage.title).toHaveText('PRODUCTS');
        //How can i Check if i'm being redirected to the correct url
    });
})
describe('Username input test', () => {
    // beforeAll('open browser', () => {
    //     browser.url('https://www.saucedemo.com/')
    // })
    it('empty username should display error', async () => {
        await LoginPage.login('', 'secret_sauce');
        await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username is required');
    })
})
describe('Password input test', () => {
    // beforeAll('open browser', () => {
    //     browser.url('https://www.saucedemo.com/')
    // })
    it('empty password should display error', async () => {
        await LoginPage.login('standard_user', '');
        await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Password is required');
    })
})
describe('Incorrect password input test', () => {
    // beforeAll('open browser', () => {
    //     browser.url('https://www.saucedemo.com/')
    // })
    it('empty password should display error', async () => {
        await LoginPage.login('standard_user', '1234qwer');
        await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username and password do not match any user in this service');
    })
})
describe('Invalid username input test', () => {
    // beforeAll('open browser', () => {
    //     browser.url('https://www.saucedemo.com/')
    // })
    it('empty password should display error', async () => {
        await LoginPage.login('standa', '1234qwer');
        await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username and password do not match any user in this service');
    })
})
describe('Lock out user input test', () => {
    // beforeAll('open browser', () => {
    //     browser.url('https://www.saucedemo.com/')
    // })
    it('empty password should display error', async () => {
        await LoginPage.login('locked_out_user', 'secret_sauce');
        await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    })
    it('Login success', async () => {
        await LoginPage.login('performance_glitch_user','secret_sauce');
        const elem = await $('#item_4_img_link > img')
        await elem.waitForDisplayed({ timeout: 5000 });
    })
})