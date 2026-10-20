import{loginPage} from '../pages/loginpage.js';

const result = new loginPage();
        await result.openBrowser("https://demowebshop.tricentis.com");
        await result.clickLoginLink();
        await result.enterLoginEmail("adnanhossain12345@example.com");
        await result.enterLoginPassword("Password123");
        await result.clickRememberMe();
        await result.clickLoginButton();