import { test, expect } from '@playwright/test'

// Apply auth state to all tests below
test.use({
  storageState: 'auth.json'
});

test('mytest', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

  await page.waitForTimeout(6000);
await expect(
  page.locator("//h6[normalize-space()='Dashboard']")
).toBeVisible();

  const response = await page.waitForResponse(
    resp => resp.url().includes('/dashboard') && resp.status() === 200
  )

  await expect(response.status()).toBe(200)


})


test('ontest', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

  await page.locator("//span[normalize-space()='Leave']").click()
  await page.waitForTimeout(3000)
})

import fs from 'fs';

console.log(
  'Auth file exists:',
  fs.existsSync('auth.json')
);

