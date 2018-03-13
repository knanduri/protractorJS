import { browser } from 'protractor';
import * as productSearch from "../helperFunctions/productSearchPage";
import * as landingPage from "../helperFunctions/landingPage";

before(async () => {
    await browser.get('http://bws.com.au/');
    await browser.waitForAngular();
});

describe('Search for a product', async () => {
    it('Should render the product search results', async () => {
        await productSearch.searchProduct();
    });

    it('Verify item successfully added to cart from product search page', async () => {
        await landingPage.selectProduct();
        await landingPage.verifyCartCount();
    });
});

after(async () => {
    await browser.quit();
});