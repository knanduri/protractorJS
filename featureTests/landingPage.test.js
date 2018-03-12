import { browser } from 'protractor';
import * as landingPage from "../helperFunctions/landingPage";

before(async () => {
    await browser.get('http://bws.com.au/');
    await browser.waitForAngular();
});

describe('Add an item to the cart', async () => {
    it('Should Click on the item successfully', async () => {
        await landingPage.selectProduct();
    });

    it('Verify item successfully added to cart', async () => {
        await landingPage.verifyCartCount();
    });
});