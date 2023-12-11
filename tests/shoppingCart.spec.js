import { test, expect } from '@playwright/test';

test('Adding items to the shopping cart', async ({ page }) => {
  await page.goto('http://localhost:3000/products');
  await page.click('text=Add to Cart', { hasText: 'Product 1' });
  await page.click('text=Cart');
  await expect(page.locator('text=Product 1')).toBeVisible();
});