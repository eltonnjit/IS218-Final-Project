import { test, expect } from '@playwright/test';

test('Search functionality', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.fill('input[type="search"]', 'test query');
  await page.press('input[type="search"]', 'Enter');
  await expect(page.locator('text=Search Results for "test query"')).toBeVisible();
});