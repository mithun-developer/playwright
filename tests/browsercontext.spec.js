const { test,expect } = require('@playwright/test');

test('Geolocation Test', async ({ browser }) => {

    const context = await browser.newContext()
    await context.grantPermissions(
         ['geolocation',
            'notifications'
            
            
        
],
    );


await context.addCookies([
    {
        name: 'sessionId',
        value: '12345',
        domain: 'https://testautomationpractice.blogspot.com',
        path: '/',
        secure: true
    }
]);


    const page = await context.newPage();

    await page.goto('https://testautomationpractice.blogspot.com');
});

