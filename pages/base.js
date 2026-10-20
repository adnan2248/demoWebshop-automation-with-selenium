import {Builder,By} from 'selenium-webdriver';
class base 
{

constructor()
{
    this.driver=new Builder().forBrowser('chrome').build();
       
}
async openBrowser(url)
        {
            await this.driver.get(url);
            await this.driver.manage().window().maximize();
        }

}

export {base};