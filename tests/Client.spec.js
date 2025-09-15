const {test, expect}= require('@playwright/test');


test('First playwright Test case' , async ({browser})=> {
//    chorom - Plugins / cookies
  const context= await browser.newContext();
  const page = await context.newPage();

// variable declaration
  const productName = 'ZARA COAT 3';
  const products = page.locator('.card-body')
  const useremail=page.locator('#userEmail');
  const userpassword=page.locator("#userPassword");
  const loginBtn=page.locator('#login');
  const cardTitles=page.locator('.card-body b');


  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await useremail.fill('duxaqeq@mailinator.com');
  await userpassword.fill('Test@12345');
  await loginBtn.click();
  await page.waitForLoadState('networkidle');
  const titles= await page.locator('.card-body b').allTextContents();
  console.log(titles);
  const count = await products.count();
 for (let i = 0; i < count; ++i) {

    if (await products.nth(i).locator("b").textContent() === productName)
 
  //add cart
{  await products.nth(i).locator('text= Add To Cart').click();
  break;
 }
}
 await page.locator("[routerlink*='cart']").click()
 await page.locator("div li").first().waitFor();

 const bool = await page.locator('h3:has-text("ZARA COAT 3")').isVisible();
expect(bool).toBeTruthy();

  // if we want to wait for specific element use .waitfor() eg;
  // await cardsTitels.first().waitFor();

  // console.log('Cardbdy1:::',await cardTitles.first().textContent());
  // console.log('allcardnam:', await cardTitles.allTextContents());

})


