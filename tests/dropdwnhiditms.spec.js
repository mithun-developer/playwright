import{test,expect} from '@playwright/test'

test('hid',async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("//input[@placeholder='Username']").fill('Admin')
    await page.locator("//input[@placeholder='Password']").fill('admin123')
    await page.locator("//button[normalize-space()='Login']").click()
    await page.locator("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='PIM']").click()
    await page.locator("//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]").click()

    await page.waitForTimeout(6000)
   const val= await page.$$("//div[@role='listbox']//span") 
    
  for(let allval of val){
  const opt=  await allval.textContent()
  if(opt.includes("QA Engineer")){
    await allval.click()
    break
  }
  
  }

await page.waitForTimeout(2000)

})