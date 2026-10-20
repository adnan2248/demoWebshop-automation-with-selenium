
import { By, until } from 'selenium-webdriver';
import { Select } from 'selenium-webdriver/lib/select.js';
import { base } from './base.js';

class addToCartPage extends base {

    constructor() {
        super();
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
        await this.driver.findElement(this.clickProduct).click();
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

}

export{ addToCartPage };
