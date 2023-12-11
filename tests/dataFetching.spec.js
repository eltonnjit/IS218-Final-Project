import { test, expect } from '@playwright/test';

test('Data should be fetched and rendered correctly', async ({ page }) => {
  await page.goto('http://localhost:3000/data-page');
  const firstItem = page.locator('.data-item:first-child');
  await expect(firstItem).toContainText('Item 1');
});