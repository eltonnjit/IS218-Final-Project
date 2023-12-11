import { test, expect } from '@playwright/test';

test('Responsive navigation menu should work on mobile view', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.setViewportSize({ width: 375, height: 667 }); // iPhone 6/7/8 size
  await page.click('button#menu'); // assuming the button has an ID of 'menu'
  await expect(page.locator('text=About')).toBeVisible();
});