const { test, expect } = require('@playwright/test');


test('First playwright Test case', async ({ browser }) => {
  //    chorom - Plugins / cookies
  const context = await browser.newContext();
  const page = await context.newPage();

  // variable declaration
  const email = 'zexola@mailinator.com'
  const productName = 'ZARA COAT 3';
  const products = page.locator('.card-body')
  const useremail = page.locator('#userEmail');
  const userpassword = page.locator("#userPassword");
  const loginBtn = page.locator('#login');
  const cardTitles = page.locator('.card-body b');

  await page.goto("https://rahulshettyacademy.com/client/#/auth/");
  await useremail.fill('zexola@mailinator.com');
  await userpassword.fill('Test@123');
  await loginBtn.click();
  await page.waitForLoadState('networkidle');
  const titles = await page.locator('.card-body b').allTextContents();
  console.log('Titles:::', titles);
  const count = await products.count();
  for (let i = 0; i < count; ++i) {

    if ((await products.nth(i).locator("b").textContent()) === productName)

    //add cart
    {
      await products.nth(i).locator('text= Add To Cart').click();
      break;
    }
  }
  await page.locator("[routerlink*='cart']").click()
  await page.locator("div li").first().waitFor();

  const bool = await page.locator('h3:has-text("ZARA COAT 3")').isVisible();
  expect(bool).toBeTruthy();

  // Paymentmethod 
  await page.locator('button:has-text("Checkout")').click();
  await page.locator('input[value="4542 9931 9292 2293"]').fill("4542 9931 9292 2295");
  await page.getByRole('combobox').first().selectOption('03');
  await page.getByRole('combobox').nth(1).selectOption('18');
  await page.locator('input[type="text"]').nth(1).fill('123');
  await page.locator('input[type="text"]').nth(2).fill('tamoor');
  // await page.locator("text:has-text('Apply Coupon ')").fill("123r");
  //   await page.getByRole('button', { name: 'Checkout' }).click();
  // await page.getByPlaceholder('Card Number').fill("4542 9931 9292 2295");
  // await page.getByLabel('Expiry Month').selectOption('03');
  // await page.getByLabel('Expiry Year').selectOption('18');
  // await page.getByLabel('CVV Code').fill("123");
  // await page.getByLabel('Name on Card').fill("Tamoor");
  // await page.getByLabel('Apply Coupon').fill("123r");
  await page.locator("[placeholder*='Country']").pressSequentially("ind");
  const dropdown1 = page.locator(".ta-results");
  await dropdown1.waitFor()
  const optionCount = await dropdown1.locator("button").count();
  
  for (let i = 0; i < optionCount; i++) {
    const text = await dropdown1.locator("button").nth(i).textContent();
    if (text === " India") {
      await dropdown1.locator('button').nth(i).click();
      break;
    }
  }
  await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
    await page.locator('.btnn.action__submit').click();
    await expect(page.locator('.hero-primary')).toHaveText(' Thankyou for the order. ');

    const orderID= await page.locator('.em-spacer-1 .ng-star-inserted').textContent();
    console.log(orderID);





  // if we want to wait for specific element use .waitfor() eg;
  // await cardsTitels.first().waitFor();

  // console.log('Cardbdy1:::',await cardTitles.first().textContent());
  // console.log('allcardnam:', await cardTitles.allTextContents());

})


