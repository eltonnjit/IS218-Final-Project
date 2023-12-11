import { test, expect } from '@playwright/test';

test('User should be able to log in', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.fill('#username', 'testuser');
  await page.fill('#password', 'password123');
  await page.click('text=Log In');
  await expect(page.locator('text=You are logged in as testuser')).toBeVisible();
});