import {by, element} from "protractor/built/index";

class LoginPage {

       itemCode = element.all(by.css('[ng-click="ctrl.addToCart()"]')).get(1);

       selectProduct = async () => {
            await this.itemCode.click();
        };
}

export default LoginPage;
