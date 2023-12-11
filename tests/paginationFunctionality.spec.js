import { test, expect } from '@playwright/test';

test('Pagination on a list', async ({ page }) => {
  await page.goto('http://localhost:3000/list');
  await page.click('text=Next Page');
  await expect(page.locator('.list-item')).toHaveCount(10); // Assuming each page has 10 items
});