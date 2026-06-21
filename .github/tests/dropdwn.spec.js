import {test,expect} from '@playwright/test'

test('dd',async({page})=>{
 test.setTimeout(60000)
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('#country').selectOption('United Kingdom')

    await page.locator('#country').selectOption({label:'India'})
    await page.locator('#country').selectOption({value:'uk'})

    await page.locator('#country').selectOption({index:4})

    await page.selectOption('#country',"India")


    //Assertions
    // check number of options in dropdown - Approach -1

    const options = await page.locator('#country option')
   const cnt = await options.count()
  await expect(options).toHaveCount(cnt)
  await page.waitForTimeout(6000)

  // check number of options in dropdown - Approach -2
    const alloptions = await page.$$('#country option')

    const all =  alloptions.length
    //console.log(all)
   await expect(all).toEqual(10)
    
   // await expect(all).toBe(tot)

    

  // check particular option(s) in dropdown - Approach -1

  const vals = await page.locator('#country').textContent()
    await expect(vals.includes('India')).toBeTruthy()
   
// check particular option(s) in dropdown - Approach -2

 const valis = await page.$$('#country option')
let status = false
    for(const valts of valis){

        let a = await valts.textContent()
        if(a.includes('India')){
             status = true
             break
        }

    }

    expect (status).toBeTruthy






    
})