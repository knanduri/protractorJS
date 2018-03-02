import { expect } from "chai";
import { browser, by, element } from 'protractor';

// spec.js
describe('Protractor Demo App', async () => {
    it('should have a title', async () => {
        await browser.get('http://juliemr.github.io/protractor-demo/');
        const title = await browser.getTitle();
        await expect(title).equal('Super Calculator');
    });
});