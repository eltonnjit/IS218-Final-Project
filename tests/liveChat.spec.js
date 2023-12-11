import { test, expect } from '@playwright/test';

test('Live chat interaction', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.click('#live-chat-button');
  await page.fill('#chat-message', 'Hello, is anyone there?');
  await page.click('text=Send');
  // Verify the message appears in the chat
  await expect(page.locator('.chat-messages')).toContainText('Hello, is anyone there?');
});