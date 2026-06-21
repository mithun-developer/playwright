import {test,expect } from '@playwright/test'

test('allfields',async({page})=>{

    await page.goto('https://demoqa.com/automation-practice-form')
    await page.locator('#firstName').fill('mm')

    await expect(page).toBeDefined()

     await page.locator("//input[@id='gender-radio-1']").check()

     
    
   
    await expect (await page.locator("//input[@id='gender-radio-1']")).toBeChecked()
    await expect (await page.locator("//input[@id='gender-radio-1']").isChecked()).toBeTruthy()

    
    //single checkbox selection
    // const chk = await page.locator("//input[@id='hobbies-checkbox-1']").check()
   //  await expect(await page.locator("//input[@id='hobbies-checkbox-1']")).toBeChecked()

    

    await page.waitForTimeout(5000)


    //check boxes selection

    const arr =[ "//input[@id='hobbies-checkbox-1']",
         "//input[@id='hobbies-checkbox-2']",
          "//input[@id='hobbies-checkbox-3']"
     ]

     for(const chkbox of arr){
       await  page.locator(chkbox).check()
     }


     await page.waitForTimeout(5000)


      //check boxes unselection


      for(const checkbxs of arr){
        await page.locator(checkbxs).uncheck()
      }
   
  //dropdown values count



  


     
})