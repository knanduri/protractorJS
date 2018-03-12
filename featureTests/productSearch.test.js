import { browser } from 'protractor';
import * as productSearch from "../helperFunctions/productSearchPage";

before(async () => {
    await browser.get('http://bws.com.au/');
    await browser.waitForAngular();
});

describe('Search for a product', async () => {
    it('Should render the product search results', async () => {
        await productSearch.searchProduct();
    });

/*    it('Verify item successfully added to cart', async () => {
        await landingPage.verifyCartCount();
    });*/
});