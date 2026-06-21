import { test, expect } from '@playwright/test';

test('Create Auth State', async ({ page }) => {

  // Open login page
  await page.goto(
    'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  );

  // Enter username
  await page.locator(
    "//input[@placeholder='Username']"
  ).fill('Admin');

  // Enter password
  await page.locator(
    "//input[@placeholder='Password']"
  ).fill('admin123');

  // Click Login
  await page.locator(
    "//button[normalize-space()='Login']"
  ).click();

  await page.waitForTimeout(6000);

  // IMPORTANT: Wait until login actually succeeds
  await expect(
    page.locator("//h6[normalize-space()='Dashboard']")
  ).toBeVisible();

  // Save authenticated state
  await page.context().storageState({
    path: 'auth.json'
  });

});