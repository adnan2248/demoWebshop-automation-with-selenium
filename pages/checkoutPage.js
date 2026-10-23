import { By, until } from 'selenium-webdriver';
import { Select } from 'selenium-webdriver/lib/select.js';
import { base } from './base.js';


class checkoutPage extends base {

    constructor(driver) {
        super(driver);

        // billing address
        this.billingAddressCompany = By.id("BillingNewAddress_Company");
        this.billingAddressCity = By.id("BillingNewAddress_City");
        this.billingAddressCountry = By.id("BillingNewAddress_CountryId");
        this.billingAddressOne = By.id("BillingNewAddress_Address1");
        this.billingAddressTwo = By.id("BillingNewAddress_Address2");
        this.billingAddressZip = By.id("BillingNewAddress_ZipPostalCode");
        this.billingAddressNumber = By.id("BillingNewAddress_PhoneNumber");
        this.billingAddressFax = By.id("BillingNewAddress_FaxNumber");
        this.billingContinueButton = By.xpath("//input[@type='button' and @onclick='Billing.save()']");

        // shipping address
        this.pickUpInStoreCheckbox = By.id("PickUpInStore");
        this.shippingContinueButton = By.xpath("//input[@type='button' and @value='Continue' and @onclick='Shipping.save()']");

        // shipping method
        this.shippingOption = By.id("shippingoption_1");
        this.shippingMethodContinueButton = By.xpath(
            "//input[@type='button' and @onclick='ShippingMethod.save()' and @value='Continue']"
        );

        // payment
        this.paymentMethodOption = By.id("paymentmethod_0");
        this.paymentMethodContinueButton = By.css(
            "input.payment-method-next-step-button[onclick='PaymentMethod.save()']"
        );
        this.paymentInfoContinueButton = By.css(
            "input.payment-info-next-step-button[onclick='PaymentInfo.save()']"
        );

        // confirm
        this.confirmOrderButton = By.css(
            "input.confirm-order-next-step-button[onclick='ConfirmOrder.save()']"
        );
    }

    // waits for element to be clickable and then clicks it
    async waitForClickable(locator, timeout = 10000) {
        const element = await this.driver.wait(until.elementLocated(locator), timeout);
        await this.driver.wait(until.elementIsVisible(element), timeout);
        await this.driver.wait(until.elementIsEnabled(element), timeout);
        return element;
    }

    async clickWhenReady(locator, timeout = 10000) {
        const element = await this.waitForClickable(locator, timeout);
        await element.click();
    }

    async typeInto(locator, text, timeout = 10000) {
        const element = await this.waitForClickable(locator, timeout);
        await element.clear();
        await element.sendKeys(text);
    }

    // billing address section
    async typeBillingAddressCompany(companyName) {
        await this.typeInto(this.billingAddressCompany, companyName);
    }

    async typeBillingAddressCity(cityName) {
        await this.typeInto(this.billingAddressCity, cityName);
    }

    async selectBillingAddressCountry(countryName) {
        const dropdown = await this.driver.wait(
            until.elementLocated(this.billingAddressCountry),
            10000
        );
        await this.driver.wait(until.elementIsVisible(dropdown), 10000);
        await new Select(dropdown).selectByVisibleText(countryName);
    }

    async typeBillingAddressOne(addressLine1) {
        await this.typeInto(this.billingAddressOne, addressLine1);
    }

    async typeBillingAddressTwo(addressLine2) {
        await this.typeInto(this.billingAddressTwo, addressLine2);
    }

    async typeBillingAddressZip(zip) {
        await this.typeInto(this.billingAddressZip, zip);
    }

    async typeBillingAddressNumber(number) {
        await this.typeInto(this.billingAddressNumber, number);
    }

    async typeBillingAddressFax(faxNumber) {
        await this.typeInto(this.billingAddressFax, faxNumber);
    }

    async clickBillingContinueButton() {
        await this.clickWhenReady(this.billingContinueButton);
    }

    // shipping address section
    async clickPickUpInStoreCheckbox() {
        await this.clickWhenReady(this.pickUpInStoreCheckbox);
    }

    async clickShippingContinueButton() {
        await this.clickWhenReady(this.shippingContinueButton);
    }

    // shipping method section
    async clickShippingOption() {
        await this.clickWhenReady(this.shippingOption, 15000);
    }

    async clickShippingMethodContinueButton() {
        await this.clickWhenReady(this.shippingMethodContinueButton);
    }

    // payment section
    async clickPaymentMethodOption() {
        await this.clickWhenReady(this.paymentMethodOption);
    }

    async clickPaymentMethodContinueButton() {
        await this.clickWhenReady(this.paymentMethodContinueButton);
    }

    async clickPaymentInfoContinueButton() {
        await this.clickWhenReady(this.paymentInfoContinueButton);
    }

    // confirm order section
    async clickConfirmOrderButton() {
        await this.clickWhenReady(this.confirmOrderButton);
    }
}

export { checkoutPage };
