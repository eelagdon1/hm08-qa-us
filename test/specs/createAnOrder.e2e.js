const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
/*    it('should open phone number modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
    }) */

    it('should call for the taxi driver', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

        const callATaxiButton = await $(page.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await expect(await $(callATaxiButton)).toBeExisting();

        // Select Supportive Plan
        const selectSupportivePlan = await $(page.selectSupportivePlan);
        await selectSupportivePlan.waitForDisplayed();
        await selectSupportivePlan.click();
        await expect(await $(selectSupportivePlan)).toBeExisting();

        // Input phone number
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();

        // Adding a payment card
        await page.addPaymentMethodCard();

        const cardPaymentMethodIcon = await $(page.cardPaymentMethodIcon);
        await cardPaymentMethodIcon.waitForDisplayed();
        await expect(await $(cardPaymentMethodIcon)).toBeExisting();

        // Message to the driver...
        const messageField = await $(page.messageField);
        await messageField.waitForDisplayed();
        await messageField.setValue('Get some whiskey')
        await expect(await $(messageField)).toBeExisting();

        // Slide Blanet and handkerchiefs
        const slideSwitch = await $(page.slideSwitch);
        await slideSwitch.click();
        await expect(await $(slideSwitch)).toBeExisting();

        // 2 orders of ice cream
        const iceCreamPlusButton = await $(page.iceCreamPlusButton);
        await iceCreamPlusButton.click();
        await iceCreamPlusButton.click();
        await expect(await $(iceCreamPlusButton)).toBeExisting();

        // Click on the enter button
        const enterButton = await $(page.enterButton);
        await enterButton.waitForDisplayed();
        await enterButton.click();
    })
})

