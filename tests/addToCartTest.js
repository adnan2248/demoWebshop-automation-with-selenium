import { Driver } from 'selenium-webdriver/chrome.js';
import{addToCartPage} from '../pages/addToCartPage.js';
      
       const result = new addToCartPage();
        await result.openBrowser("https://demowebshop.tricentis.com");
        await result.clickBooksInMenu();
        await result.selectSortByOption(2);
        await result.clickProductLink();
        await result.clickAddToCartButton();
        await result.clickCheckoutLink();
       // await result.selectRemoveCheckbox();
        await result.selectCountry("Bangladesh");
        await result.typeZipCode("1206");
        await result.clickEstimateShippingButton();
        await result.clickTermsOfServiceCheckbox();
        await result.clickCheckoutButton();    