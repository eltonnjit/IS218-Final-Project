import { test, expect } from '@playwright/test';

test('Responsive design on mobile devices', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.setViewportSize({ width: 375, height: 667 }); // iPhone 6/7/8 size
  const menuButton = page.locator('button#menu');
  await expect(menuButton).toBeVisible();
});