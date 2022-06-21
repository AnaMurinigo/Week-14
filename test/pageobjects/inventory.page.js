class InventoryPage{
    //Getters
    // get inputUsername() { return $('#user-name')}
    get addBtnList(){return $$('.btn_inventory')}
    get addBtn() {return $('#add-to-cart-sauce-labs-backpack')};
    get removeBtn() {return $('#remove-sauce-labs-backpack')};
    get cartItems() {return $('.shopping_cart_badge')};

    //Methods
    async addToCart() {
        await this.addBtn.click();
    }
    async removeFromCart() {
        await this.removeBtn.click();
    }
}

module.exports =new InventoryPage;