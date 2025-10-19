const { test, expect } = require('@playwright/test');

test.only('Login Test - IKHub', async ({ page }) => {

  await page.goto("https://stage.ikhub.biz/auth/login");

  // Fill login details
  await page.locator('input[name="username"]').fill("owner");
  await page.locator('input[name="password"]').fill("Password@123");
  await page.locator("button[id='kt_login_signin_submit']").click();
});
