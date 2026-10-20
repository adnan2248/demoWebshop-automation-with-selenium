import { Builder, By } from 'selenium-webdriver';

class base {
    constructor(driver) {
        this.driver = driver;
    }

    async openBrowser(url) {
        await this.driver.get(url);
        await this.driver.manage().window().maximize();
    }

    async closeBrowser() {
        await this.driver.quit();
    }
}

export { base };