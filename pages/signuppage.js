import {Builder,By} from 'selenium-webdriver';
import {base} from './base.js'

class signup extends base
{

 constructor(driver)
{
        super(driver);
        //signup locators
        this.regisrerLink = By.xpath("//a[@href='/register']");
        this.genderMale = By.id("gender-male");
        this.firstName = By.id("FirstName");
        this.LastName = By.id("LastName");
        this.Email = By.name("Email");
        this.Password = By.id("Password");
        this.ConfirmPassword = By.id("ConfirmPassword");
        this.registerButton = By.id("register-button");
        this.loginLink = By.xpath("//a[@href='/login']");
        //logout locators
        this.logoutLink = By.xpath("//a[@href='/logout']");

        

}

   

async clickRegisterLink()
        {
            await this.driver.findElement(this.regisrerLink).click();
        }
async clickGenderRadio()
        {
            await this.driver.findElement(this.genderMale).click();
        }
 async enterFirstName(firstname)
        {
            await this.driver.findElement(this.firstName).sendKeys(firstname);
        }
 async enterLastName(lastname)
        {
            await this.driver.findElement(this.LastName).sendKeys(lastname);
        }
 async enterEmail(email) {
    await this.driver.findElement(this.Email).sendKeys(email);
 }              
 async enterPassword(password)
        {
            await this.driver.findElement(this.Password).sendKeys(password);
        }   
async enterConfirmPassword(confirmPassword)
        {
            await this.driver.findElement(this.ConfirmPassword).sendKeys(confirmPassword);
        }
 async clickRegisterButton()
    {
       await this.driver.findElement(this.registerButton).click();
      }

 async clickLogoutLink()
        {
            await this.driver.findElement(this.logoutLink).click();
        }

 

async closeBrowser()
        {
            await this.driver.quit();
        }


}


export {signup};

      

       // console.log("Registration test completed!");

            
           // await result.enterEmail("adnan@example.com");
           // await result.enterPassword("Password123");
            // Add logic to click login button if needed
      
          
        
