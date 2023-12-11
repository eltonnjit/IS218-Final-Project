import { test, expect } from '@playwright/test';

test('E-commerce checkout process', async ({ page }) => {
  await page.goto('http://localhost:3000/cart');
  await page.click('text=Checkout');
  await page.fill('#address', '123 Test Street');
  await page.fill('#payment', 'Visa 1234');
  await page.click('text=Place Order');
  await expect(page.locator('text=Order Confirmed')).toBeVisible();
});