import {test,expect} from '@playwright/test'
import { count } from 'node:console'


test ('multi',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    page.locator('#colors',['Red'])
    

    //Assertions
    //check number of options in dropdown and print on console

    const cnt = await page.locator('#colors option')
    const abc = await cnt.count()
    console.log(abc)

    //check number of options in dropdown and print on console - Approach -1

   const ttl= await page.locator('#colors option')
   await expect (ttl).toHaveCount(7)


    //check number of options in dropdown using js array - Approach -2

    const num = await page.$$('#colors option')
    console.log("count is :"+num.length)

    await expect(num.length).toBe(7)

    // check particular option(s) in dropdown - Approach -1

const txt = await page.locator('#colors').textContent()
await expect(txt.includes('Red')).toBeTruthy()

// check particular option(s) in dropdown - Approach -2




const contnt = await page.$$('#colors option')
let status = false


for(const cont of  contnt){
 let a=  await cont.textContent()
 if(a.includes('Red')){
    let status = true
 }
}


})


