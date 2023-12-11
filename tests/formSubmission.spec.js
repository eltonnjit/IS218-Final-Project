import { test, expect } from '@playwright/test';

test('Contact form submission', async ({ page }) => {
  await page.goto('http://localhost:3000/connet');
  await page.fill('input[name="name"]', 'John Doe');
  await page.fill('input[name="email"]', 'john@example.com');
  await page.fill('textarea[name="message"]', 'Hello, this is a test message.');
  await page.click('text=Submit');
  await expect(page.locator('text=Thank you for your message')).toBeVisible();
});