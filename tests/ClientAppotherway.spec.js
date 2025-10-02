const { test, expect } = require('@playwright/test');


test('First playwright Test case', async ({ browser }) => {
  //    chorom - Plugins / cookies
  const context = await browser.newContext();
  const page = await context.newPage();

  // variable declaration
  const email = 'zexola@mailinator.com'
  const productName = 'ADIDAS ORIGINAL';
  const products = page.locator('.card-body')
  const useremail = page.getByPlaceholder('email@example.com');
  const userpassword = page.getByPlaceholder("enter your passsword");
  const loginBtn = page.getByRole('button',{name:"Login"});
  await page.goto("https://rahulshettyacademy.com/client/#/auth/");
  await useremail.fill('zexola@mailinator.com');
  await userpassword.fill('Test@123');
  await loginBtn.click();
  await page.waitForLoadState('networkidle');
  await page.locator('.card-body b').first().waitFor();
  await page.locator('.card-body').filter({hasText:productName}).getByRole("button",{name:'Add to Cart'}).click();

  await page.getByRole("listitem").getByRole("button",{name:'Cart'}).click();
  // await page.locator("div li").first().waitFor();
  await page.locator("div li").first().waitFor({ state: "visible" });

  await expect(page.getByText(productName)).toBeVisible();
  await page.getByRole('button',{name:"Checkout"}).click();
  await page.getByPlaceholder('Select Country').pressSequentially("ind");
  await page.getByRole('button',{name:"India"}).nth(1).click();
  // await expect(page.getByLabel("zexola@mailinator.com")).toHaveText(email);
 await page.getByText("PLACE ORDER").click();


  await expect(page.getByText(' Thankyou for the order. ')).toBeVisible();

})


