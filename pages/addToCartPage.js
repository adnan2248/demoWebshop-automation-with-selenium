
import { By, until } from 'selenium-webdriver';
import { Select } from 'selenium-webdriver/lib/select.js';
import { base } from './base.js';

class addToCartPage extends base {

    constructor(driver) {
        super(driver);
//locators
        this.booksInMenu = By.xpath("//a[@href='/books']");
        this.sortByDropdown = By.id("products-orderby");
        //this.displayPerPageDropdown = By.id("products-pagesize");
        this.clickProduct = By.xpath("//a[@href='/computing-and-internet']");
        this.addToCartButton = By.id("add-to-cart-button-13");
        this.checkoutLink = By.xpath("//a[@href='/cart']");
        this.removeCheckbox = By.xpath("//input[@name='removefromcart' and @value='7167294']");
        this.countryDropdown = By.id("CountryId");
        this.zipCodeInput = By.id("ZipPostalCode");
        this.estimateShippingButton = By.xpath("//input[@name='estimateshipping']");
        this.termsOfServiceCheckbox = By.id("termsofservice");
        this.checkoutButton = By.id("checkout");
        //billing information locators
        this.billingAddressCompany = By.id("BillingNewAddress_Company"); //<input class="text-box single-line" id="" name="BillingNewAddress.Company" type="text" value="">
        this.billingAddressCity = By.id("BillingNewAddress_City");//<input class="text-box single-line" data-val="true" data-val-required="City is required" id="BillingNewAddress_City" name="BillingNewAddress.City" type="text" value="">
        this.billingAddressCountry = By.id("BillingNewAddress_CountryId");
        this.billingAddressOne = By.id("BillingNewAddress_Address1");//<input class="text-box single-line" data-val="true" data-val-required="Street address is required" id="BillingNewAddress_Address1" name="BillingNewAddress.Address1" type="text" value="">
        this.billingAddressTwo = By.id("BillingNewAddress_Address2");//<input class="text-box single-line" data-val="true" data-val-required="Street address is required" id="BillingNewAddress_Address2" name="BillingNewAddress.Address2" type="text" value="">
        this.billingAddressZip = By.id("BillingNewAddress_ZipPostalCode");//<input class="text-box single-line" data-val="true" data-val-required="Zip / postal code is required" id="BillingNewAddress_ZipPostalCode" name="BillingNewAddress.ZipPostalCode" type="text" value="">
        this.billingAddressNumber = By.id("BillingNewAddress_PhoneNumber");//<input class="text-box single-line" data-val="true" data-val-required="Phone is required" id="BillingNewAddress_PhoneNumber" name="BillingNewAddress.PhoneNumber" type="text" value="">
        this.billingAddressFax = By.id("BillingNewAddress_FaxNumber");//<input class="text-box single-line" data-val="true" data-val-required="Fax is required" id="BillingNewAddress_FaxNumber" name="BillingNewAddress.FaxNumber" type="text" value="">
        this.billingContinueButton = By.xpath("//input[@type='button' and @value='Continue' and @onclick='Billing.save()']" );
        this.pickUpInStoreCheckbox = By.id("PickUpInStore");
        this.shippingContinueButton = By.xpath("//input[@type='button' and @value='Continue' and @onclick='Shipping.save()']");
        this.billingContinueButton = By.xpath("//input[@type='button' and @onclick='Billing.save()']");
        this.shippingOption=By.id("shippingoption_1");//<input id="shippingoption_1" type="radio" name="shippingoption" value="Next Day Air___Shipping.FixedRate">
        this.shippingMethodContinueButton = By.xpath("//input[@type='button' and @onclick='ShippingMethod.save()' and @value='Continue']");
        this.paymentMethodOption = By.id("paymentmethod_0");//<input id="paymentmethod_1" type="radio" name="paymentmethod" value="Payments.Manual">
        this.paymentMethodContinueButton = By.css("input.payment-method-next-step-button[onclick='PaymentMethod.save()']");
        this.paymentInfoContinueButton = By.css("input.payment-info-next-step-button[onclick='PaymentInfo.save()']");
        this.confirmOrderButton = By.css("input.confirm-order-next-step-button[onclick='ConfirmOrder.save()']");
    } 


    async clickBooksInMenu() {
        await this.driver.findElement(this.booksInMenu).click();
    }



async selectSortByOption(index) {
    await this.driver.wait(async () => {
        try {
            const dropdown = await this.driver.findElement(this.sortByDropdown);
            return await dropdown.isDisplayed() && await dropdown.isEnabled();
        } catch (error) {
            return false;
        }
    }, 30000);

    for (let attempt = 0; attempt < 3; attempt++) {
        try {
            const dropdownElement = await this.driver.findElement(this.sortByDropdown);
            const select = new Select(dropdownElement);

            await select.selectByIndex(index);
            return;
        } catch (error) {
            if (error.name !== 'StaleElementReferenceError' || attempt === 2) {
                throw error;
            }
        }
    }
}



async clickProductLink() {
    const productLink = By.xpath(
        "//div[contains(@class,'item-box')]//a[@href='/computing-and-internet']"
    );

    await this.driver.wait(
        until.elementLocated(productLink),
        10000
    );

    await this.driver.wait(until.elementIsVisible(await this.driver.findElement(productLink)),10000);

    await this.driver.wait(until.elementIsEnabled( await this.driver.findElement(productLink)),10000);

    await this.driver.findElement(productLink).click();
}


async clickAddToCartButton() {
        await this.driver.wait(until.elementLocated(this.addToCartButton), 10000);
        await this.driver.findElement(this.addToCartButton).click();
    }
async clickCheckoutLink() {
        await this.driver.wait(until.elementLocated(this.checkoutLink), 10000);
        await this.driver.findElement(this.checkoutLink).click();
    }



async selectCountry(countryName) {
    const dropdownElement = await this.driver.findElement(this.countryDropdown);
    const select = new Select(dropdownElement);
    await select.selectByVisibleText(countryName);
}    

async selectBillingAddressCountry(countryName) {
    const countryDropdown = await this.driver.wait(
        until.elementLocated(this.billingAddressCountry),
        10000
    );

    await this.driver.wait(
        until.elementIsVisible(countryDropdown),
        10000
    );

    const select = new Select(countryDropdown);
    await select.selectByVisibleText(countryName);
}





async typeZipCode(zipCode) {
    const zipCodeInputElement = await this.driver.findElement(this.zipCodeInput);
    await zipCodeInputElement.clear();
    await zipCodeInputElement.sendKeys(zipCode);

}

async clickEstimateShippingButton() {
    const estimateShippingButtonElement = await this.driver.findElement(this.estimateShippingButton);
    await estimateShippingButtonElement.click();
}

async clickTermsOfServiceCheckbox() {
    const termsOfServiceCheckboxElement = await this.driver.findElement(this.termsOfServiceCheckbox);
    await termsOfServiceCheckboxElement.click();
}

    async clickCheckoutButton() {
        await this.driver.wait(until.elementLocated(this.checkoutButton), 10000);
        await this.driver.findElement(this.checkoutButton).click();
    }
async typeBillingAddressCompany(companyName) {
    const locator = this.billingAddressCompany;

    await this.driver.wait(async () => {
        const elements = await this.driver.findElements(locator);

        for (const element of elements) {
            if (
                await element.isDisplayed() &&
                await element.isEnabled()
            ) {
                return true;
            }
        }

        return false;
    }, 10000, "Billing company field is not visible or enabled");

    const elements = await this.driver.findElements(locator);

    for (const element of elements) {
        if (
            await element.isDisplayed() &&
            await element.isEnabled()
        ) {
            await element.clear();
            await element.sendKeys(companyName);
            return;
        }
    }

    throw new Error("No interactable billing company field found");
}

async typeBillingAddressCity(cityName) {
    const billingAddressCityElement = await this.driver.findElement(this.billingAddressCity);
    await billingAddressCityElement.clear();
    await billingAddressCityElement.sendKeys(cityName);
}
 async typeBillingAddressOne(addressLine1) {
    const billingAddressOneElement = await this.driver.findElement(this.billingAddressOne);
    await billingAddressOneElement.clear();
    await billingAddressOneElement.sendKeys(addressLine1);
}
async typeBillingAddressTwo(addressLine2) {
    const billingAddressTwoElement = await this.driver.findElement(this.billingAddressTwo);
    await billingAddressTwoElement.clear();
    await billingAddressTwoElement.sendKeys(addressLine2);
}
async typeBillingAddressZip(BillingAddressZip) {
    const billingAddressZipElement = await this.driver.findElement(this.billingAddressZip);
    await billingAddressZipElement.clear();
    await billingAddressZipElement.sendKeys(BillingAddressZip);
}

async typeBillingAddressNumber(number) {
    const billingAddressNumberElement = await this.driver.findElement(this.billingAddressNumber);
    await billingAddressNumberElement.clear();
    await billingAddressNumberElement.sendKeys(number);
}

async typeBillingAddressFax(faxNumber) {
    const billingAddressFaxElement = await this.driver.findElement(this.billingAddressFax);
    await billingAddressFaxElement.clear();
    await billingAddressFaxElement.sendKeys(faxNumber);
}


async clickBillingContinueButton() {
    const continueButton = await this.driver.wait(
        until.elementLocated(this.billingContinueButton),
        10000
    );

    await this.driver.wait(
        until.elementIsVisible(continueButton),
        10000
    );

    await this.driver.wait(
        until.elementIsEnabled(continueButton),
        10000
    );

    await continueButton.click();
}

async clickShippingContinueButton() {
    const button = await this.driver.wait(until.elementLocated(this.shippingContinueButton),10000);

    await this.driver.wait(until.elementIsVisible(button),10000);

    await this.driver.wait(until.elementIsEnabled(button),10000);

    await button.click();
}

async clickBillingContinueButton() {
    const button = await this.driver.wait(until.elementLocated(this.billingContinueButton),10000 );

    await this.driver.wait(until.elementIsVisible(button),10000);

    await this.driver.wait(until.elementIsEnabled(button),10000);

    await button.click();
}

async clickShippingOption() {
    const shippingOption = await this.driver.wait(
        until.elementLocated(this.shippingOption),
        15000
    );

    await this.driver.wait(
        until.elementIsVisible(shippingOption), 
        10000
    );

    await this.driver.wait(
        until.elementIsEnabled(shippingOption),
        10000
    );

    await shippingOption.click();
}

async clickShippingMethodContinueButton() {
    const button = await this.driver.wait(
        until.elementLocated(this.shippingMethodContinueButton),
        10000
    );

    await this.driver.wait(until.elementIsVisible(button), 10000);
    await this.driver.wait(until.elementIsEnabled(button), 10000);

    await button.click();
}

async clickPaymentMethodOption() {
    const paymentMethodOption = await this.driver.wait(
        until.elementLocated(this.paymentMethodOption),
        10000
    );
}

async clickPaymentMethodContinueButton() {
    const button = await this.driver.wait(
        until.elementLocated(this.paymentMethodContinueButton),
        10000
    );

    await this.driver.wait(
        until.elementIsVisible(button),
        10000
    );

    await this.driver.wait(
        until.elementIsEnabled(button),
        10000
    );

    await button.click();
}



async clickPaymentInfoContinueButton() {
    const button = await this.driver.wait(
        until.elementLocated(this.paymentInfoContinueButton),10000);

    await this.driver.wait(
        until.elementIsVisible(button),10000);

    await this.driver.wait(until.elementIsEnabled(button),10000);

    await button.click();
}

async clickConfirmOrderButton() {
    const button = await this.driver.wait(
        until.elementLocated(this.confirmOrderButton),10000);

    await this.driver.wait(
        until.elementIsVisible(button),10000);

    await this.driver.wait(
        until.elementIsEnabled(button),
        10000
    );

    await button.click();
}


}

export{ addToCartPage };
