import {test,expect} from '@playwright/test'

/* test('Login Test', async ({ page, context }) => {

    await context.tracing.start({
        screenshots: true,
        snapshots: true,
        sources: true
    });
await context.tracing.stop({
        path: 'trace.zip'
    });
}); */


test('framey',async({page,context})=>{
await page.goto("https://demo.automationtesting.in/Frames.html")


//approach -1 using  page.frame()

const fr = await page.frame({url:"https://demo.automationtesting.in/SingleFrame.html"}) 
await fr.fill("//*[@type='text'][1]","abc")

await page.waitForTimeout(6000)

await context.tracing.start({
        screenshots: true,
        snapshots: true,
        sources: true
    });
await context.tracing.stop({
        path: 'trace.zip'
    });

})

//approach -2 using  page.frameLocator()

test('framesy',async({page,context})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html")

    const fra = await page.frameLocator("#singleframe").locator("//*[@type='text'][1]")
    await fra.fill("abc")

    await page.waitForTimeout(6000)

     await context.tracing.start({
        screenshots: true,
        snapshots: true,
        sources: true
    });
await context.tracing.stop({
        path: 'trace.zip'
    });

})



test('frome',async({page})=>{
await page.goto("https://demoapps.qspiders.com/ui/frames?sublist=0")

const un = page.frameLocator('iframe').locator('div.login-container')
await  un.locator("//input[@id='username']").fill("abc")

const pw = await page.frameLocator('iframe').locator('div.login-container')
await pw.locator("//input[@id='password']").fill("xyz")

await page.waitForTimeout(6000)

 


})