import { By, until } from 'selenium-webdriver';
import { Select } from 'selenium-webdriver/lib/select.js';
import { base } from './base.js';


class addToCartPage extends base {

    constructor(driver) {
        super(driver);

        // product browsing locators
        this.booksInMenu = By.xpath("//a[@href='/books']");
        this.sortByDropdown = By.id("products-orderby");
        this.productLink = By.xpath("//div[contains(@class,'item-box')]//a[@href='/computing-and-internet']");
        this.addToCartButton = By.id("add-to-cart-button-13");

        // cart page locators
        this.checkoutLink = By.xpath("//a[@href='/cart']");
        this.countryDropdown = By.id("CountryId");
        this.zipCodeInput = By.id("ZipPostalCode");
        this.estimateShippingButton = By.xpath("//input[@name='estimateshipping']");
        this.termsOfServiceCheckbox = By.id("termsofservice");
        this.checkoutButton = By.id("checkout");
    }

    //adding helper methods for waiting and clicking elements
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

    // ---------- product browsing ----------
    async clickBooksInMenu() {
        await this.clickWhenReady(this.booksInMenu);
    }

    async selectSortByOption(index) {
        await this.driver.wait(async () => {
            try {
                const dropdown = await this.driver.findElement(this.sortByDropdown);
                return (await dropdown.isDisplayed()) && (await dropdown.isEnabled());
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
        await this.clickWhenReady(this.productLink);
    }

    async clickAddToCartButton() {
        await this.clickWhenReady(this.addToCartButton);
    }

    async clickCheckoutLink() {
        await this.clickWhenReady(this.checkoutLink);
    }

    // cart section
    async selectCountry(countryName) {
        const dropdownElement = await this.driver.wait(
            until.elementLocated(this.countryDropdown),
            10000
        );
        const select = new Select(dropdownElement);
        await select.selectByVisibleText(countryName);
    }

    async typeZipCode(zipCode) {
        const zipCodeInputElement = await this.driver.findElement(this.zipCodeInput);
        await zipCodeInputElement.clear();
        await zipCodeInputElement.sendKeys(zipCode);
    }

    async clickEstimateShippingButton() {
        await this.clickWhenReady(this.estimateShippingButton);
    }

    async clickTermsOfServiceCheckbox() {
        await this.clickWhenReady(this.termsOfServiceCheckbox);
    }

    async clickCheckoutButton() {
        await this.clickWhenReady(this.checkoutButton);
    }
}

export { addToCartPage };
