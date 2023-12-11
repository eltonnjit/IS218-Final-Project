import { test, expect } from '@playwright/test';

test('404 page shows up for non-existent routes', async ({ page }) => {
  await page.goto('http://localhost:3000/non-existent-page');
  await expect(page.locator('h1')).toHaveText('404 - Page Not Found');
});