// Import required packages
const { Given, When, Then } = require('cucumber');
const assert = require('assert');

// Define the WebdriverIO options
const options = {
    baseUrl: 'http://167.114.201.175:5000',
    logLevel: 'error',
    capabilities: {
        browserName: 'chrome'
    }
};

// Define the WebdriverIO client
const client = require('webdriverio').remote(options);

// Define the steps for the scenario
Given('the site URL is {string}', async(url) => {
    await client.url(url);
});

Given('I am on the coupon endpoint', async() => {
    const endpoint = await client.$('#coupons');
    await endpoint.click();
});

When('I click on the {string} button', async(buttonText) => {
    const button = await client.$(`//button[contains(text(), '${buttonText}')]`);
    await button.click();
});

Then('I should be on the popup window Date Sum Name Balance 1000', async() => {
    const popupWindow = await client.$('.popup-window');
    const title = await popupWindow.$('.title');
    const titleText = await title.getText();
    assert.equal(titleText, 'Date Sum Name Balance 1000');
});

Then('I should see the resource details', async() => {
    const resourceDetails = await client.$('.resource-details');
    assert.equal(await resourceDetails.isDisplayed(), true);
});

// Close the WebdriverIO client after all tests are done
after(async() => {
    await client.deleteSession();
});