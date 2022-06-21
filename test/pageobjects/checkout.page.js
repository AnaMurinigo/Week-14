class CheckoutPage{
    //Getters
    get firstName() {return $('#first-name')};
    get lastName() {return $('#last-name')};
    get zip() {return $('#postal-code')};
    get errorMessage() {return $('.error-message-container > h3')};
    get cancelBtn() {return $('#cancel')};
    get continueBtn() {return $('#continue')};
    get resetFormBtn() {return $('.error-button')};
    get finishBtn() {return $('#finish')};
    //Setters
    async setFirstName(firstName){
        await this.firstName.setValue(firstName);
    }
    async setLastName(lastName){
        await this.lastName.setValue(lastName);
    }
    async setZip(zip){
        await this.zip.setValue(zip);
    }
    //Methods
    async entryData(firstName,lastName,zip){
        await this.setFirstName(firstName);
        await this.setLastName(lastName);
        await this.setZip(zip);
        await this.continueBtn.click();
    }
}
module.exports =new CheckoutPage;