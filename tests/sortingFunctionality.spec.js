import { test, expect } from '@playwright/test';

test('Sorting items in a list', async ({ page }) => {
  await page.goto('http://localhost:3000/items-list');
  await page.click('text=Sort by Price');
  // Verify the items are sorted - adjust the locator based on your application
  const firstItemPrice = await page.locator('.item:first-child .price').textContent();
  const secondItemPrice = await page.locator('.item:nth-child(2) .price').textContent();
  expect(Number(firstItemPrice)).toBeLessThanOrEqual(Number(secondItemPrice));
});