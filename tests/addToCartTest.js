import { Builder } from 'selenium-webdriver';
import { addToCartPage } from '../pages/addToCartPage.js';
import { loginPage } from '../pages/loginpage.js';

const driver = await new Builder()
    .forBrowser('chrome')
    .build();

const result = new addToCartPage(driver);
const login = new loginPage(driver);

try {
    await login.openBrowser('https://demowebshop.tricentis.com');
        await login.openBrowser("https://demowebshop.tricentis.com");
        await login.clickLoginLink();
        await login.enterLoginEmail("adnan2248@example.com");
        await login.enterLoginPassword("Password123");
        await login.clickRememberMe();
        await login.clickLoginButton();

    await result.clickBooksInMenu();
    await result.selectSortByOption(2);
    await result.clickProductLink();
    await result.clickAddToCartButton();
    await result.clickCheckoutLink();

    await result.selectCountry('Bangladesh');
    await result.typeZipCode('1206');
    await result.clickEstimateShippingButton();
    await result.clickTermsOfServiceCheckbox();
    await result.clickCheckoutButton();
    //await result.typeBillingAddressCompany('My Company');
    await result.typeBillingAddressCity('Dhaka');
    await result.selectBillingAddressCountry('Bangladesh');
    await result.typeBillingAddressOne('123 Main St');
    await result.typeBillingAddressTwo('Apt 4B');
    await result.typeBillingAddressZip('1206');
    await result.typeBillingAddressNumber('123-456-7890');
    await result.typeBillingAddressFax('987-654-3210');
    await result.clickBillingContinueButton();

    await result.clickShippingContinueButton();

   await result.clickShippingOption();

  await result.clickShippingMethodContinueButton();

  await result.clickPaymentMethodOption();
  await result.clickPaymentMethodContinueButton();
  await result.clickPaymentInfoContinueButton();
  await result.clickConfirmOrderButton();

} catch (error) {
    console.error('Automation failed:', error);
} finally {
   // await result.closeBrowser();
}