const { test, expect } = require('@playwright/test');

test('Baller Beasts!', async ({ page }) => {
  await page.goto('http://localhost:3000'); 
  const title = await page.title();
  console.log("sadfsadfsadfsdf",title);
  expect(title).toBe('Baller Beasts!'); 
});
