import {by, element, ExpectedConditions} from "protractor";
import { expect } from 'chai';

export const selectors = {
    itemCode: element.all(by.css('[ng-click="ctrl.addToCart()"]')).get(1),
    cartCount: element(by.css('.shopping_cart_desktop')),
};

export const selectProduct = async () => {
    await ExpectedConditions.elementToBeClickable(selectors.itemCode);
    await selectors.itemCode.click();
};

export const verifyCartCount = async () => {
    await ExpectedConditions.visibilityOf(selectors.cartCount);
    const getCartCount = await selectors.cartCount.getText();
    expect(getCartCount).to.equal('1');
};