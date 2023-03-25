const puppeteer = require('puppeteer');
const { toMatchSnapshot } = require('jest-snapshot');

describe('View a Coupons', () => {
    let browser;
    let page;

    beforeAll(async() => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('http://167.114.201.175:5000/coupons');
    });

    afterAll(async() => {
        await browser.close();
    });

    it('should open the popup window with correct details and balance value', async() => {
        // Wait for the "просмотр" button to appear and click it
        const button = await page.waitForSelector('button');
        await button.click();

        // Wait for the popup window to appear
        const popup = await page.waitForSelector('.popup');

        // Verify the details of the popup window
        const snapshot = await popup.screenshot();
        expect(snapshot).toMatchSnapshot();

        // Verify the balance value
        const balance = await popup.$('.balance');
        const balanceValue = await popup.evaluate(element => element.textContent, balance);
        expect(balanceValue).toEqual('1000');

        // Verify the resource details
        const date = await popup.$('.date');
        const dateValue = await popup.evaluate(element => element.textContent, date);
        expect(dateValue).toBeTruthy();

        const sum = await popup.$('.sum');
        const sumValue = await popup.evaluate(element => element.textContent, sum);
        expect(sumValue).toBeTruthy();

        const name = await popup.$('.name');
        const nameValue = await popup.evaluate(element => element.textContent, name);
        expect(nameValue).toBeTruthy();
    });
});