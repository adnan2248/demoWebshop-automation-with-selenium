
import { Builder } from 'selenium-webdriver';
import { signup } from '../pages/signuppage.js';

const driver = await new Builder()
    .forBrowser('chrome')
    .build();

const result = new signup(driver);

try {
    await result.openBrowser('https://demowebshop.tricentis.com');

    await result.clickRegisterLink();
    await result.clickGenderRadio();
    await result.enterFirstName('adnan');
    await result.enterLastName('hossain');
    await result.enterEmail('adnan224856@example.com');
    await result.enterPassword('Password123');
    await result.enterConfirmPassword('Password123');
    await result.clickRegisterButton();

    console.log('Registration test completed!');
} catch (error) {
    console.error('Registration test failed:', error);
} finally {
    //await result.closeBrowser();
}
