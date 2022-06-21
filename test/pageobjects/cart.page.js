class CartPage{
    //Getters
    // get inputUsername() { return $('#user-name')}
    get inventoryItemList() { return $$('.inventory_item_name')};
    get removeBtnList() {return $$('.cart_button')};
    get continueShopBtn() {return $('#continue-shopping')};
    get checkOutBtn() {return $('#checkout')};
 
    //Setters
    // async setUsername(username){
    //     await this.inputUsername.setValue(username);
    // }
   
    //Methods
    // async login(username, password) {
    //     await this.setUsername(username);
    //     await this.setPassword(password);
    //     await this.btnLogin.click();
    // }
}

module.exports =new CartPage;