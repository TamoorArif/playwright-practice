const { test, expect } = require('@playwright/test');

test('Open site in headed mode', async ({ page }) => {
  await page.goto('https://www.dutyfreesmoke.com/');
  await page.pause();

  await expect(page).toHaveTitle(/Duty Free Smoke/);
});
