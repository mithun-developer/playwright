import {test,expect} from '@playwright/test'

test('alerts',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    //
    page.on('dialog',async dialog=>{
      //  await dialog.accept()
        await dialog.dismiss()


    })


   await page.locator("//button[@id='alertBtn']").click()

   await page.locator("//button[@id='confirmBtn']").click()
   await expect (page.locator("//p[@id='demo']")).toContainText("Cancel")

   await page.waitForTimeout(5000)


   

})