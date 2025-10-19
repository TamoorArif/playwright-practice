const { test, expect } = require('@playwright/test');

test.only('Verify meta title and description for Duty Free Smoke Shop page', async ({ page }) => {
  await page.goto('https://www.dutyfreesmoke.com/shop', { waitUntil: 'domcontentloaded' });

  // ✅ Check Page Title
  const title = await page.title();
  expect(title).toBe('Duty Free Smoke Shop – Premium Vapes & Nicotine Pouches Online Store');

  // ✅ Check Meta Description
  const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');
  expect(metaDescription).toBe(
    'Shop premium vapes & nicotine pouches at Duty Free Smoke. Explore top brands, great flavors & prices, all with excellent service. Visit Duty Free Smoke today!'
  );

  // Optional pause for debugging
  // await page.pause();
});
