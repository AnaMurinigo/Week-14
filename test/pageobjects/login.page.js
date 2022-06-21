class LoginPage{
    //Getters
    get inputUsername() { return $('#user-name')}
    get inputPassword() {return $('#password')}
    get btnLogin() {return $('#login-button')}
    get errorContainer() { return $('.error-message-container.error')}
    get title() {return $('.title')}

    //Setters
    async setUsername(username){
        await this.inputUsername.setValue(username);
    }
    async setPassword(password){
        await this.inputPassword.setValue(password);
    }
    //Methods
    async login(username, password) {
        await this.setUsername(username);
        await this.setPassword(password);
        await this.btnLogin.click();
    }
}

module.exports =new LoginPage;