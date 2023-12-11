import { test, expect } from '@playwright/test';

test('Language switch functionality', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  
  // Assuming you have a button or link to switch languages
  await page.click('text=Español'); // Switch to Spanish
  await expect(page.locator('h1')).toHaveText('Bienvenido'); // Check if the heading is in Spanish

  await page.click('text=English'); // Switch back to English
  await expect(page.locator('h1')).toHaveText('Welcome'); // Check if the heading is back in English
});