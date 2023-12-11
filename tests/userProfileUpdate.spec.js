import { test, expect } from '@playwright/test';

test('Updating user profile information', async ({ page }) => {
  await page.goto('http://localhost:3000/profile');
  await page.fill('#bio', 'This is a new bio');
  await page.click('text=Save Changes');
  await expect(page.locator('text=Profile updated successfully')).toBeVisible();
});