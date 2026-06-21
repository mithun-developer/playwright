//const {test,expect} = require('@playwright/test')

import {test,expect} from '@playwright/test'

test('locators',async({page})=>{
   await page.goto("https://www.demoblaze.com/")

   expect (page).toHaveURL
   expect (page).toHaveTitle


   //using Xpath
   await page.locator('id=login2').click()

   page.locator().getby

    //using CSS selector in 3  ways
    //----------------------------------------------------
   await page.locator('#loginusername').fill('pavanol')
   //await page.locator('#loginusername').type('pavanol')
   //await page.fill('#loginusername','pavanol')


    //using CSS selector with tag and attribute in 3  ways
    //----------------------------------------------------
   await page.locator("input[id='loginpassword']").fill('test@123')
   //await page.locator("input[id='loginpassword']").type('test@123')
    //await page.fill("input[id='loginpassword']",'test@123')


    await page.click("//button[normalize-space()='Log in']")
   const logout= page.locator("//a[@id='logout2']")
   await expect(logout).toBeVisible

})





