import {test,expect} from '@playwright/test'


test('auto',async({page})=>{

    

    await page.goto('https://www.redbus.in/')

    //await page.locator('body > div:nth-child(4) > main:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > search:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)').fill('Delhi')
    // await page.getByLabel('ISBT Kashmiri Gate, Delhi')


     
   await page.locator('#srcinput').fill('Delhi')
     await page.waitForTimeout(6000)
     await page.locator("(//div[@role='option'])[3]").click()
  


  const abc = await page.$$("//*[@class='searchSuggestionWrapper___71fd01']")
for(let val of abc){
const allval = await val.textContent()
if(allval.includes('Anand Vihar')){
   await val.click()
    break;
}
   
}
await page.waitForTimeout(6000)
})