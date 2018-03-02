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

describe('Protractor Demo App', async () => {
    it('should add one and two', async () => {
        await browser.get('http://juliemr.github.io/protractor-demo/');
        await element(by.model('first')).sendKeys(1);
        await element(by.model('second')).sendKeys(2);

        await element(by.id('gobutton')).click();

        const getSum = await element(by.binding('latest')).getText();
        expect(getSum).equal('3');
    });
});