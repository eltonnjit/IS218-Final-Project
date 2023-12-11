import { test, expect } from '@playwright/test';

test('User logout process', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  // Assumes the user is already logged in
  await page.click('text=Logout');
  await expect(page.locator('text=You have been logged out')).toBeVisible();
});