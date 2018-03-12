import {by, element, ExpectedConditions, browser} from "protractor";
import { expect } from 'chai';

export const selectors = {
    searchButton: element(by.css('ng-click="searchButtonClicked($event)"')),
    searchBox: element(by.id('bws-search-bar')),
};

export const searchProduct = async () => {
    await browser.setGeolocation;
    await selectors.searchBox.sendKeys('Corona');
    await selectors.searchButton.click();
    await  expect(browser.getCurrentUrl()).to.equal('/search?searchTerm=corona');
};

/*
export const verifyCartCount = async () => {
    await ExpectedConditions.visibilityOf(selectors.cartCount);
    const getCartCount = await selectors.cartCount.getText();
    expect(getCartCount).to.equal('1');
};*/
