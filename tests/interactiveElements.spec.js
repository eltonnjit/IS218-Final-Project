import { test, expect } from '@playwright/test';

test('Slider interaction', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const slider = page.locator('.slider');
  await slider.click(); // Adjust this action based on how your slider works
  await expect(slider).toHaveClass(/active/); // Adjust the expectation based on your slider's behavior
});