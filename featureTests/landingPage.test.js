import { browser } from 'protractor';
import * as landingPage from "../helperFunctions/landingPage";

before(async () => {
    await browser.get('');
    await browser.waitForAngular();
});

describe('Add an item to the cart', async () => {
    it('Should Click on the item successfully', async () => {
        await landingPage.selectProduct();
    });

    it('Verify item successfully added to cart', async () => {
        await landingPage.verifyCartCount();
    });

    it('click on cart Icon to verify the cart', async () => {
        await landingPage.clickCartButton();
    });

    it('verify if user is able to remove the item from the cart', async () => {
        await landingPage.emptyCart();
    });
});