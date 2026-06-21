import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');

 // await page.locator('.css-8mmkcg').first().click();

const abc = await page.$$('.css-8mmkcg')
await page.waitForTimeout(5000)
console.log(abc.length)

  //await page.getByRole('option', { name: 'Haryana' }).click();
});