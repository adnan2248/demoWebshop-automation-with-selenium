       import {signup} from '../pages/signuppage.js';
        const result = new signup();
        
        await result.openBrowser("https://demowebshop.tricentis.com");
        await result.clickRegisterLink();
        await result.clickGenderRadio();
        await result.enterFirstName("adnan");
        await result.enterLastName("hossain");
        await result.enterEmail("adnanhossain12345@example.com");
        await result.enterPassword("Password123");
        await result.enterConfirmPassword("Password123");
        await result.clickRegisterButton();
        await result.clickLogoutLink();
