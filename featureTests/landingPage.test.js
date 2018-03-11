import { expect } from "chai";
import { browser, by, element } from 'protractor';
import * as landingPage from "../helperFunctions/landingPage";

before(async () => {
    await browser.get('http://bws.com.au/');
});


describe('Add an item to the cart', async () => {
    it('Should Click on the item successfully', async () => {
        await browser.sleep(3000);
        await landingPage.selectProduct();
    });

    it('Verify item successfully added to cart', async () => {
        await browser.sleep(3000);
        const cartCount = await element(by.css('.shopping_cart_desktop')).getText();
        await expect(cartCount).equal('1');
    });
});