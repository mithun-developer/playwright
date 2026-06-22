const {test,expect}=require('@playwright/test')

test('check',async ({page})=>{

    await page.goto('https://selectorshub.com/xpath-practice-page/')

    const chk = await page.locator("//input[@id='ohrmList_chkSelectRecord_16']")
    await chk.click()

   await expect(chk).toBeChecked()

  
})