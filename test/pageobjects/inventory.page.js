class InventoryPage{
    //Getters
    get addBtn1() {return $('#add-to-cart-sauce-labs-backpack')};
    get addBtn2() { return $('#add-to-cart-sauce-labs-bike-light')};
    get addBtn3() { return $('#add-to-cart-sauce-labs-bolt-t-shirt')};
    get addBtn4() { return $('#add-to-cart-sauce-labs-fleece-jacket')};
    get addBtn5() { return $('#add-to-cart-sauce-labs-onesie')};
    get addBtn6() { return $('//*[@id="add-to-cart-test.allthethings()-t-shirt-(red)"]')};
    get removeBtn1() {return $('#remove-sauce-labs-backpack')};
    get removeBtn2() { return $('#remove-sauce-labs-bike-light')};
    get removeBtn3() { return $('#remove-sauce-labs-bolt-t-shirt')};
    get removeBtn4() { return $('#remove-sauce-labs-fleece-jacket')};
    get removeBtn5() { return $('#remove-sauce-labs-onesie')};
    get removeBtn6() { return $('//*[@id="remove-test.allthethings()-t-shirt-(red)"]')};
    get cartItems() {return $('.shopping_cart_badge')};
    get cartBtn() {return $('.shopping_cart_link')};
    get imgList() {return $$('.inventory_item_img')};
    get nameList() {return $$('.inventory_item_name')};
    get priceList() {return $$('.inventory_item_price')};

    //Methods
    async addToCart(n) {
        switch(n){
            case 1:
                await this.addBtn1.click();
                break;
            case 2:
                await this.addBtn2.click();
                break;
            case 3:
                await this.addBtn3.click();
                break;
            case 4:
                await this.addBtn4.click();
                break;
            case 5:
                await this.addBtn5.click();
                break;
            case 6:
                await this.addBtn6.click();
                break;
            default:
                break;
        }
    }

    async removeFromCart(n) {
        switch(n){
            case 1:
                await this.removeBtn1.click();
                break;
            case 2:
                await this.removeBtn2.click();
                break;
            case 3:
                await this.removeBtn3.click();
                break;
            case 4:
                await this.removeBtn4.click();
                break;
            case 5:
                await this.removeBtn5.click();
                break;
            case 6:
                await this.removeBtn6.click();
                break;
            default:
                break;
        }
    }
}
module.exports =new InventoryPage;