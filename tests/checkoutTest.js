import { Builder } from 'selenium-webdriver';
import { addToCartPage } from '../pages/addToCartPage.js';
import { checkoutPage } from '../pages/checkoutPage.js';
import { loginPage } from '../pages/loginpage.js';

const driver = await new Builder()
    .forBrowser('chrome')
    .build();

const login = new loginPage(driver);
const cart = new addToCartPage(driver);
const checkout = new checkoutPage(driver);

try {
    // login
    await login.openBrowser('https://demowebshop.tricentis.com');
    await login.clickLoginLink();
    await login.enterLoginEmail('adnan224856@example.com');
    await login.enterLoginPassword('Password123');
    await login.clickRememberMe();
    await login.clickLoginButton();

    // add to cart + cart page
    await cart.clickBooksInMenu();
    await cart.selectSortByOption(2);
    await cart.clickProductLink();
    await cart.clickAddToCartButton();
    await cart.clickCheckoutLink();

    await cart.selectCountry('Bangladesh');
    await cart.typeZipCode('1206');
    await cart.clickEstimateShippingButton();
    await cart.clickTermsOfServiceCheckbox();
    await cart.clickCheckoutButton();

    // checkout
    // await checkout.typeBillingAddressCompany('My Company');
    await checkout.typeBillingAddressCity('Dhaka');
    await checkout.selectBillingAddressCountry('Bangladesh');
    await checkout.typeBillingAddressOne('123 Main St');
    await checkout.typeBillingAddressTwo('Apt 4B');
    await checkout.typeBillingAddressZip('1206');
    await checkout.typeBillingAddressNumber('123-456-7890');
    await checkout.typeBillingAddressFax('987-654-3210');
    await checkout.clickBillingContinueButton();

    await checkout.clickShippingContinueButton();
    await checkout.clickShippingOption();
    await checkout.clickShippingMethodContinueButton();

    await checkout.clickPaymentMethodOption();
    await checkout.clickPaymentMethodContinueButton();
    await checkout.clickPaymentInfoContinueButton();
    await checkout.clickConfirmOrderButton();

} catch (error) {
    console.error('Automation failed:', error);
} finally {
    // await login.closeBrowser();
}
