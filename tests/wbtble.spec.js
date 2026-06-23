import {test,expect} from '@playwright/test'


//Check number of rows and columns

test('rowscnt',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

   const table =  await page.locator("#productTable")

    const col = await table.locator("thead tr th")
    console.log(await col.count())

    const rows = await table.locator("tbody tr")
    console.log(await rows.count())
    await page.waitForTimeout(3000)

        const matchedrows = rows.filter({
        has: page.locator("td"),
        hasText: "Smartwatch"
     })

     await matchedrows.locator("input").check()
     await page.waitForTimeout(3000)


     //selecting multiple products using reusable function

await selectProd(rows,page,"Smartphone")
await selectProd(rows,page,"Tablet")
await selectProd(rows,page,"Wireless Earbuds")

async function selectProd(rows,page,name){
     const matchedrows = rows.filter({
        has: page.locator("td"),
        hasText: name
     })

     await matchedrows.locator("input").check()

}   

// print all product details using loop

    // for(let i=0;i<await rows.count();i++){
    //      const row =await rows.nth(i)
    //      const tds = row.locator("td")
    //      for(let j=0;j<await tds.count()-1;j++){
    //       console.log(await tds.nth(j).textContent())
          
    //     }
    // }
       
// print all product details which are in all pages - Pagination

const pages = await page.locator(".pagination li a")
console.log(await pages.count())

        
  for(let p=0; p<await pages.count();p++){
    if(p>0){
        await pages.nth(p).click()
    }

    for(let i=0;i<await rows.count();i++){
         const row =await rows.nth(i)
         const tds = row.locator("td")
         for(let j=0;j<await tds.count()-1;j++){
          console.log(await tds.nth(j).textContent())
          
        }
    }
await page.waitForTimeout(3000)
  }

await page.waitForTimeout(3000)
})

test.skip('web',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
     await page.locator('a').filter({ hasText: '3' }).first().click()
    await page.waitForTimeout(5000)
     await page.locator(`//tr[td[contains(., '11')]]//input[@type='checkbox']`).check()
await page.locator(`//tr[td[normalize-space()='12']]//input[@type='checkbox']`).check()
await page.locator(`//tr[td[normalize-space()='13']]//input[@type='checkbox']`).check()
await page.locator(`//tr[td[normalize-space()='15']]//input[@type='checkbox']`).check()
 await page.waitForTimeout(2000)
})


