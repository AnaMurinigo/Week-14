const LoginPage = require('../pageobjects/login.page')

afterEach ('Reload page', ()=> {
    browser.url('https://www.saucedemo.com/');
});

describe('Login page testing standard user', () => {
    beforeAll('open browser', () => {
        browser.url('https://www.saucedemo.com/')
    })
    it('Login succes', async () => {
        await browser.url('https://www.saucedemo.com/');
        await LoginPage.login('standard_user','secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });
       it('empty username should display error', async () => {
        await LoginPage.login('', 'secret_sauce');
        await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username is required');
    })
      it('empty password should display error', async () => {
        await LoginPage.login('standard_user', '');
        await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Password is required');
    })
       it('empty password should display error', async () => {
        await LoginPage.login('standard_user', '1234qwer');
        await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username and password do not match any user in this service');
    })
      it('Invalid username should display error', async () => {
        await LoginPage.login('standa', '1234qwer');
        await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username and password do not match any user in this service');
    })
})

describe('Elements of login page test', () => {
    it('Robot should be displayed', async () => {
        await expect(LoginPage.botImg).toExist();
    })
    it('Logo should be displayed', async () => {
        await expect(LoginPage.logoImg).toExist();
    })
})

describe('Lock out user login test', () => {
    it('empty password should display error', async () => {
        await LoginPage.login('locked_out_user', 'secret_sauce');
        await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    })
})

describe('Glitch user login test', () => {
    it('Login timeout should fail', async () => {
        await LoginPage.login('performance_glitch_user','secret_sauce');
        await elem.waitForDisplayed({ timeout: 3000 });
        await expect(LoginPage.title).toHaveText('PRODUCTS');
    })
})

describe('Problem user login test', () => {
    it('Login success wirh inventory issues', async () => {
        await LoginPage.login('problem_user','secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    })
})