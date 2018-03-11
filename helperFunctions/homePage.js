import { browser, by, element } from 'protractor';

export const homePage = async () => {

    this.itemCode = element.all(by.css('[ng-click="ctrl.addToCart()"]')).get(2);


   this.selectProductCode = async () => {
        await browser.wait(3000);
        await this.itemCode.click();
    }
};

