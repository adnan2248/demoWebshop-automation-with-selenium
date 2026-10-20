import {Builder,By} from 'selenium-webdriver';
import {base} from './base.js'
class loginPage extends base
{

constructor(driver)
{
       super(driver);
       
        //login locators
        this.loginLink = By.xpath("//a[@href='/login']");
        this.loginEmail = By.id("Email");
        this.loginPassword = By.id("Password");
        this.rememberMe = By.id("RememberMe");
        this.loginButton = By.xpath("//input[@value='Log in']");
}



 async clickLoginLink()
        {
            await this.driver.findElement(this.loginLink).click();
        }     
 async enterLoginEmail(email)
        {
            await this.driver.findElement(this.loginEmail).sendKeys(email);
        }
 async enterLoginPassword(password)
        {
            await this.driver.findElement(this.loginPassword).sendKeys(password);
        }    
async clickRememberMe()
        {
            await this.driver.findElement(this.rememberMe).click();
        }                  
async clickLoginButton()
        {
            await this.driver.findElement(this.loginButton).click();
        }
        

async closeBrowser()
        {
            await this.driver.quit();
        }


}


export {loginPage};
       // console.log("Registration test completed!");

            
           // await result.enterEmail("adnan@example.com");
           // await result.enterPassword("Password123");
            // Add logic to click login button if needed
      
          
        
