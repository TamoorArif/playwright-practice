const { test, expect } = require('@playwright/test');

test.only('Login Test - IKHub', async ({ page }) => {

  await page.goto("https://stage.ikhub.biz/auth/login");

  // Fill login details
  await page.locator('input[placeholder="Email or User Name"]').fill("owner");
  await page.locator('input[name="password"]').fill("Password@123");
  await page.locator("#kt_login_signin_submit").click();
});
