import {test,expect }from '@playwright/test'



test.skip('nf',async({page})=>{
    await page.goto('https://demoqa.com/nestedframes')
    await page.frameLocator('#frame1').frameLocator('iframe').getByText('Child Iframe', { exact: true })
    await page.keyboard.press("Control+a")

    await page.waitForTimeout(3000)
})


test('test1',async ({browser,page})=>{
   const context= await browser.newContext()
   context.grantPermissions(
    ['notifications']
     
   )

     await page.goto("https://www.dezlearn.com/nested-iframes-example")
   
    const thisone=await page.frameLocator('#parent_iframe').frameLocator('#iframe1').getByRole('button')
    await page.waitForTimeout(2000)
    await thisone.click()

const val = await page.frameLocator('#parent_iframe').frameLocator('#iframe1').locator(':text-is("Hooray..! You clicked the button from iframe 2")')
await expect(val).toHaveText("Hooray..!")
   
})

