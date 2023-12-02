const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {

    it('should call for the taxi driver', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

        const callATaxiButton = await $(page.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await expect(await $(callATaxiButton)).toBeExisting();
    }),  

        // selecting the Supportive Plan
    it('should click on the Supportive Plan', async () => {    
        const selectSupportivePlan = await $(page.selectSupportivePlan);
        await selectSupportivePlan.waitForDisplayed();
        await selectSupportivePlan.click();
        await expect(await $(selectSupportivePlan)).toBeExisting();
    }),    

        // inputting phone number
    it('should add a phone number', async () => {    
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    }),

        // Adding a payment card
    it('should add payment method', async () => {    
        await page.addPaymentMethodCard();

        const cardPaymentMethodIcon = await $(page.cardPaymentMethodIcon);
        await cardPaymentMethodIcon.waitForDisplayed();
        await expect(await $(cardPaymentMethodIcon)).toBeExisting();
    }),

        // Adding a message to the driver
    it('should add a message to the driver', async () => {    
        const messageField = await $(page.messageField);
        await messageField.waitForDisplayed();
        await messageField.setValue('Get some whiskey')
        await expect(await $(messageField)).toBeExisting();
    }),

        // sliding the button to order a blanet and handkerchiefs
    it('should slide the radio button', async () => {    
        const slideSwitch = await $(page.slideSwitch);
        await slideSwitch.click();
        await expect(await $(slideSwitch)).toBeExisting();
    }),

        // Ordering 2 orders of ice cream
    it('should click on the + button', async () => {
        const iceCreamPlusButton = await $(page.iceCreamPlusButton);
        await iceCreamPlusButton.click();
        await iceCreamPlusButton.click();
        await expect(await $(iceCreamPlusButton)).toBeExisting();
    }),

        // Clicking on the enter button
    it('should click on the enter button', async () => {
        const enterButton = await $(page.enterButton);
        await enterButton.waitForDisplayed();
        await enterButton.click();
    })
})