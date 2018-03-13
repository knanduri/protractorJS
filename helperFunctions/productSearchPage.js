import {by, element, ExpectedConditions, browser} from "protractor";
import { expect } from 'chai';

export const selectors = {
    searchButton: element(by.css('button.olyAutocomplete-clear:nth-child(4)')),
    searchBox: element(by.id('bws-search-bar')),
};

export const searchProduct = async () => {
    await ExpectedConditions.presenceOf(selectors.searchBox);
    await selectors.searchBox.sendKeys('Corona');
    await selectors.searchButton.click();
    await expect(await browser.getCurrentUrl()).contains('/search?searchTerm=corona');
};