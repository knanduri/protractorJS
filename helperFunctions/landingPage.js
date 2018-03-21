import {by, element, ExpectedConditions} from "protractor";
import { expect } from 'chai';
import {browser} from "protractor/built/index";
import {clickElement} from "../utils/wrapperFunctions";

export const selectors = {
    itemCode: element.all(by.css('[ng-click="ctrl.addToCart()"]')).get(1),
    cartButton: element(by.css('.shopping_cart_desktop')),
    cartCheckoutButton: element(by.css('a.btn-primary')),
    removeCartItem: element(by.css('button[aria-label="Remove"]'))
};

export const selectProduct = async () => {
    await clickElement(selectors.itemCode);
};

export const verifyCartCount = async () => {
    await ExpectedConditions.visibilityOf(selectors.cartButton);
    const getcartButton = await selectors.cartButton.getText();
    expect(getcartButton).to.equal('1');
};

export const clickCartButton = async () => {
    await selectors.cartButton.click();
    await ExpectedConditions.visibilityOf(selectors.cartCheckoutButton);
    await expect(await selectors.cartCheckoutButton.isDisplayed());
};

export const emptyCart = async () => {
    await selectors.removeCartItem.click();
    await ExpectedConditions.visibilityOf(selectors.cartButton);
    const getcartButton = await selectors.cartButton.getText();
    expect(getcartButton).to.equal('');
    await selectors.cartButton.click();
};