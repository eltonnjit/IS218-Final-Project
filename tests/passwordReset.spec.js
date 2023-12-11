import { test, expect } from '@playwright/test';

test('Password reset process', async ({ page }) => {
  await page.goto('http://localhost:3000/reset-password');
  await page.fill('#email', 'user@example.com');
  await page.click('text=Reset Password');
  await expect(page.locator('text=Check your email for reset instructions')).toBeVisible();
});