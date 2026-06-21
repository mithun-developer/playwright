const{test,expect}=require('@playwright/test')

test('multi_loc',async({page})=>{

    await page.goto("https://www.demoblaze.com/")

    const linksOnPage = await page.$$('a')
    await page.locator("'//div[@id='tbodyid']//div//h4/a'");
    for(const lnk of linksOnPage){
       const alllinks =await lnk.textContent()
       console.log(alllinks)
    }

  




   await  page.waitForSelector("//div[@id='tbodyid']//div//h4/a");
      const links=  await page.$$("//div[@id='tbodyid']//div//h4/a")

    for(const link of links){
      // textContent() method will extract text similar to getText() in selenium
      const linknames = await link.textContent()
      console.log(linknames)

    }



})