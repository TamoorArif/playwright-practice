const {test, expect}= require('@playwright/test');


test.only('First playwright Test case' , async ({browser})=> {
//    chorom - Plugins / cookies
  const context= await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await page.locator('#userEmail').fill('duxaqeq@mailinator.com')
  await page.locator("#userPassword").fill('Test@12345')
  await page.locator('#login').click()
  console.log('Cardbdy1:::',await page.locator('.card-body b').first().textContent())
  console.log('allcardnam:', await page.locator('.card-body b').allTextContents())

})