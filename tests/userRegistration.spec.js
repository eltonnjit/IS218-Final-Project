import { test, expect } from '@playwright/test';

test('User registration process', async ({ page }) => {
  await page.goto('http://localhost:3000/register');
  await page.fill('#username', 'newuser');
  await page.fill('#email', 'newuser@example.com');
  await page.fill('#password', 'password123');
  await page.click('text=Register');
  await expect(page.locator('text=Registration Successful')).toBeVisible();
});